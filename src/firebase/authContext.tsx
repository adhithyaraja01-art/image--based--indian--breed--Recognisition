import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  updateProfile
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType } from './config';
import { UserProfile } from '../types/breed';

interface AuthContextType {
  currentUser: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  authError: string | null;
  clearAuthError: () => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  loginWithGoogle: () => Promise<void>;
  loginWithEmail: (email: string, password: string) => Promise<void>;
  registerWithEmail: (
    email: string,
    password: string,
    displayName: string,
    collegeName?: string,
    role?: 'student' | 'researcher'
  ) => Promise<void>;
  loginAsGuest: () => Promise<void>;
  logout: () => Promise<void>;
  updateCollegeName: (collegeName: string) => Promise<void>;
  updateUserProfileData: (updates: {
    displayName?: string;
    collegeName?: string;
    role?: 'student' | 'researcher';
  }) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  userProfile: null,
  loading: true,
  authError: null,
  clearAuthError: () => {},
  isAuthModalOpen: false,
  openAuthModal: () => {},
  closeAuthModal: () => {},
  loginWithGoogle: async () => {},
  loginWithEmail: async () => {},
  registerWithEmail: async () => {},
  loginAsGuest: async () => {},
  logout: async () => {},
  updateCollegeName: async () => {},
  updateUserProfileData: async () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const clearAuthError = () => setAuthError(null);
  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthError(null);
  };

  const getCleanErrorMessage = (err: any): string => {
    if (!err) return 'An unknown authentication error occurred.';
    const msg = err.code || err.message || String(err);
    if (msg.includes('popup-closed-by-user')) {
      return 'Sign-in cancelled. The Google authentication popup was closed before completing.';
    }
    if (msg.includes('cancelled-popup-request')) {
      return 'Multiple popup requests detected. Please try signing in again.';
    }
    if (msg.includes('user-not-found') || msg.includes('wrong-password') || msg.includes('invalid-credential')) {
      return 'Invalid email or password. Please verify your credentials or create a new account.';
    }
    if (msg.includes('email-already-in-use')) {
      return 'An account with this email address already exists. Please sign in with your password or use Google.';
    }
    if (msg.includes('weak-password')) {
      return 'Password should be at least 6 characters long.';
    }
    if (msg.includes('invalid-email')) {
      return 'Please enter a valid institutional or personal email address.';
    }
    if (msg.includes('admin-restricted-operation')) {
      return 'Anonymous guest access is not enabled in Firebase Auth. Please use Google Sign-In or your institutional email.';
    }
    if (msg.includes('network-request-failed')) {
      return 'Network connection issue. Please check your internet connection.';
    }
    return msg.replace('Firebase: ', '');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDocPath = `users/${user.uid}`;
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserProfile(userDoc.data() as UserProfile);
          } else {
            const newProfile: UserProfile = {
              uid: user.uid,
              email: user.email || (user.isAnonymous ? 'guest.specialist@icar.gov.in' : ''),
              displayName: user.displayName || (user.isAnonymous ? 'Guest Livestock Specialist' : 'Livestock Specialist'),
              photoURL: user.photoURL || '',
              collegeName: 'ICAR National Agricultural & Veterinary Research Station',
              role: 'student',
              createdAt: new Date().toISOString()
            };
            await setDoc(doc(db, 'users', user.uid), newProfile);
            setUserProfile(newProfile);
          }
        } catch (err) {
          console.warn('Could not read user profile from Firestore:', err);
          // Fallback in-memory profile if offline
          setUserProfile({
            uid: user.uid,
            email: user.email || '',
            displayName: user.displayName || 'Livestock Specialist',
            photoURL: user.photoURL || '',
            collegeName: 'Agricultural Research Station',
            role: 'student',
            createdAt: new Date().toISOString()
          });
        }
      } else {
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
      setIsAuthModalOpen(false);
    } catch (error: any) {
      const friendly = getCleanErrorMessage(error);
      setAuthError(friendly);
      console.error('Google Sign-in failed:', error);
      throw error;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    setAuthError(null);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pass);
      setIsAuthModalOpen(false);
    } catch (error: any) {
      const friendly = getCleanErrorMessage(error);
      setAuthError(friendly);
      console.error('Email sign-in failed:', error);
      throw error;
    }
  };

  const registerWithEmail = async (
    email: string,
    pass: string,
    displayName: string,
    collegeName: string = 'ICAR Agricultural & Animal Husbandry Station',
    role: 'student' | 'researcher' = 'student'
  ) => {
    setAuthError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email.trim(), pass);
      if (displayName) {
        await updateProfile(res.user, { displayName: displayName.trim() });
      }
      const newProfile: UserProfile = {
        uid: res.user.uid,
        email: email.trim(),
        displayName: displayName.trim() || 'Livestock Specialist',
        photoURL: '',
        collegeName: collegeName.trim() || 'ICAR Agricultural Research Station',
        role,
        createdAt: new Date().toISOString()
      };
      await setDoc(doc(db, 'users', res.user.uid), newProfile);
      setUserProfile(newProfile);
      setIsAuthModalOpen(false);
    } catch (error: any) {
      const friendly = getCleanErrorMessage(error);
      setAuthError(friendly);
      console.error('Email registration failed:', error);
      throw error;
    }
  };

  const loginAsGuest = async () => {
    setAuthError(null);
    try {
      const res = await signInAnonymously(auth);
      const guestProfile: UserProfile = {
        uid: res.user.uid,
        email: 'guest.specialist@icar.gov.in',
        displayName: 'Guest Field Specialist',
        photoURL: '',
        collegeName: 'Field Livestock Extension Center',
        role: 'student',
        createdAt: new Date().toISOString()
      };
      try {
        await setDoc(doc(db, 'users', res.user.uid), guestProfile);
      } catch (err) {
        console.warn('Guest Firestore doc creation notice:', err);
      }
      setUserProfile(guestProfile);
      setIsAuthModalOpen(false);
    } catch (error: any) {
      if (error?.code?.includes('admin-restricted-operation') || String(error).includes('admin-restricted-operation')) {
        // Firebase project has anonymous auth provider disabled; provision active local evaluation session
        const guestUid = `guest-${Math.random().toString(36).substring(2, 9)}`;
        const fallbackGuestProfile: UserProfile = {
          uid: guestUid,
          email: 'guest.evaluator@icar.gov.in',
          displayName: 'Guest Field Specialist',
          photoURL: '',
          collegeName: 'ICAR Field Livestock Extension Unit',
          role: 'student',
          createdAt: new Date().toISOString()
        };
        setUserProfile(fallbackGuestProfile);
        setCurrentUser({
          uid: guestUid,
          isAnonymous: true,
          displayName: 'Guest Field Specialist',
          email: 'guest.evaluator@icar.gov.in',
          emailVerified: false,
          providerData: []
        } as any);
        setIsAuthModalOpen(false);
        return;
      }
      const friendly = getCleanErrorMessage(error);
      setAuthError(friendly);
      console.error('Guest login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    setAuthError(null);
    try {
      if (auth.currentUser) {
        await signOut(auth);
      }
    } catch (error: any) {
      console.warn('Sign out notice:', error);
    } finally {
      setUserProfile(null);
      setCurrentUser(null);
    }
  };

  const updateCollegeName = async (collegeName: string) => {
    if (!currentUser || !userProfile) return;
    const path = `users/${currentUser.uid}`;
    try {
      const updated: UserProfile = { ...userProfile, collegeName };
      await setDoc(doc(db, 'users', currentUser.uid), updated);
      setUserProfile(updated);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, path);
    }
  };

  const updateUserProfileData = async (updates: {
    displayName?: string;
    collegeName?: string;
    role?: 'student' | 'researcher';
  }) => {
    if (!currentUser || !userProfile) return;
    const path = `users/${currentUser.uid}`;
    try {
      if (updates.displayName && currentUser) {
        await updateProfile(currentUser, { displayName: updates.displayName });
      }
      const updated: UserProfile = {
        uid: userProfile.uid,
        email: userProfile.email,
        displayName: updates.displayName !== undefined ? updates.displayName : userProfile.displayName,
        photoURL: userProfile.photoURL || '',
        collegeName: updates.collegeName !== undefined ? updates.collegeName : (userProfile.collegeName || ''),
        role: updates.role !== undefined ? updates.role : userProfile.role,
        createdAt: userProfile.createdAt || new Date().toISOString()
      };
      await setDoc(doc(db, 'users', currentUser.uid), updated);
      setUserProfile(updated);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, path);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        authError,
        clearAuthError,
        isAuthModalOpen,
        openAuthModal,
        closeAuthModal,
        loginWithGoogle,
        loginWithEmail,
        registerWithEmail,
        loginAsGuest,
        logout,
        updateCollegeName,
        updateUserProfileData
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

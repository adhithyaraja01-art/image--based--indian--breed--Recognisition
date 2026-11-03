import React, { useState, useEffect } from 'react';
import {
  User as UserIcon,
  ShieldCheck,
  GraduationCap,
  LogIn,
  LogOut,
  History,
  Award,
  CheckCircle2,
  Sparkles,
  Settings,
  Cloud,
  Star,
  Trash2,
  ExternalLink,
  Mail,
  Lock,
  Building,
  Copy,
  Check,
  RefreshCw,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  UserPlus
} from 'lucide-react';
import { useAuth } from '../firebase/authContext';
import {
  fetchUserScans,
  fetchUserObservations,
  fetchUserFavorites,
  toggleFavoriteBreedInFirestore,
  SavedScanDoc,
  FavoriteBreedDoc
} from '../firebase/firestoreService';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';
import { ActiveTab } from './Navbar';

interface ProfileViewProps {
  historyCount: number;
  onNavigate: (tab: ActiveTab) => void;
  onSelectBreed?: (breedName: string) => void;
  onOpenJournal?: () => void;
  onOpenHistory?: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  historyCount,
  onNavigate,
  onSelectBreed,
  onOpenJournal,
  onOpenHistory
}) => {
  const {
    currentUser,
    userProfile,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    loginAsGuest,
    logout,
    updateUserProfileData,
    loading,
    authError,
    clearAuthError,
    openAuthModal
  } = useAuth();

  // Cloud state
  const [cloudScansCount, setCloudScansCount] = useState<number>(0);
  const [cloudObsCount, setCloudObsCount] = useState<number>(0);
  const [cloudFavoritesCount, setCloudFavoritesCount] = useState<number>(0);
  const [recentCloudScans, setRecentCloudScans] = useState<SavedScanDoc[]>([]);
  const [userFavorites, setUserFavorites] = useState<FavoriteBreedDoc[]>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  // Edit profile state
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editDisplayName, setEditDisplayName] = useState<string>('');
  const [editCollegeName, setEditCollegeName] = useState<string>('');
  const [editRole, setEditRole] = useState<'student' | 'researcher'>('student');
  const [saveSuccessNotice, setSaveSuccessNotice] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Inline sign-in form state (for non-authenticated view)
  const [inlineAuthMode, setInlineAuthMode] = useState<'signin' | 'register'>('signin');
  const [inlineEmail, setInlineEmail] = useState<string>('');
  const [inlinePassword, setInlinePassword] = useState<string>('');
  const [inlineName, setInlineName] = useState<string>('');
  const [inlineCollege, setInlineCollege] = useState<string>('ICAR National Dairy & Veterinary Research Institute');
  const [inlineRole, setInlineRole] = useState<'student' | 'researcher'>('student');
  const [inlineSubmitting, setInlineSubmitting] = useState<boolean>(false);
  const [copiedUid, setCopiedUid] = useState<boolean>(false);

  // Synchronize form when userProfile changes
  useEffect(() => {
    if (userProfile) {
      setEditDisplayName(userProfile.displayName || '');
      setEditCollegeName(userProfile.collegeName || '');
      setEditRole(userProfile.role || 'student');
    }
  }, [userProfile]);

  const loadUserData = async () => {
    if (!currentUser) {
      setCloudScansCount(0);
      setCloudObsCount(0);
      setCloudFavoritesCount(0);
      setRecentCloudScans([]);
      setUserFavorites([]);
      return;
    }

    try {
      setIsRefreshing(true);
      const [scans, obs, favs] = await Promise.all([
        fetchUserScans(),
        fetchUserObservations(),
        fetchUserFavorites()
      ]);
      setCloudScansCount(scans.length);
      setCloudObsCount(obs.length);
      setCloudFavoritesCount(favs.length);
      setRecentCloudScans(scans.slice(0, 6));
      setUserFavorites(favs);
    } catch (err) {
      console.warn('Could not fetch user cloud data:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, [currentUser]);

  const handleRemoveFavorite = async (breedId: string, breedName: string, category: any) => {
    try {
      await toggleFavoriteBreedInFirestore(breedId, breedName, category);
      setUserFavorites((prev) => prev.filter((f) => f.breedId !== breedId));
      setCloudFavoritesCount((prev) => Math.max(0, prev - 1));
    } catch (e) {
      console.error('Failed to remove favorite:', e);
    }
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    setIsSaving(true);
    try {
      await updateUserProfileData({
        displayName: editDisplayName.trim(),
        collegeName: editCollegeName.trim(),
        role: editRole
      });
      setIsEditing(false);
      setSaveSuccessNotice(true);
      setTimeout(() => setSaveSuccessNotice(false), 4000);
    } catch (err) {
      console.error('Failed to update profile:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleInlineEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineEmail || !inlinePassword) return;
    setInlineSubmitting(true);
    clearAuthError();
    try {
      if (inlineAuthMode === 'signin') {
        await loginWithEmail(inlineEmail, inlinePassword);
      } else {
        await registerWithEmail(
          inlineEmail,
          inlinePassword,
          inlineName || 'Livestock Specialist',
          inlineCollege,
          inlineRole
        );
      }
    } catch {
      // AuthContext sets authError
    } finally {
      setInlineSubmitting(false);
    }
  };

  const handleCopyUid = () => {
    if (currentUser?.uid) {
      navigator.clipboard.writeText(currentUser.uid);
      setCopiedUid(true);
      setTimeout(() => setCopiedUid(false), 2500);
    }
  };

  const getProviderLabel = () => {
    if (!currentUser) return 'Guest Local Profile';
    if (currentUser.isAnonymous) return 'Firebase Anonymous Guest';
    const providerId = currentUser.providerData[0]?.providerId;
    if (providerId === 'google.com') return 'Google Authentication';
    if (providerId === 'password') return 'Email / Password Credentials';
    return 'Firebase Authentication';
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* =========================================================================
          STATE 1: NOT AUTHENTICATED OR GUEST PROPOSAL - DEDICATED SIGN-IN OPTIONS
         ========================================================================= */}
      {!currentUser && (
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden">
          {/* Header Banner */}
          <div className="bg-linear-to-r from-emerald-950 via-emerald-900 to-teal-950 text-white p-6 sm:p-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/80 text-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              Firebase Authentication &amp; Cloud Synchronization
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold">
              Connect Your Livestock Specialist Account
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1.5 max-w-2xl leading-relaxed">
              Sign in to automatically sync diagnostic scans of all 132 registered Indian breeds, ICAR student research notes, and bookmarked indigenous cattle, buffalo, goat, and dog breeds across devices.
            </p>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Error Banner */}
            {authError && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="font-bold">Authentication Note: </span>
                  {authError}
                </div>
              </div>
            )}

            {/* Three Sign-In Option Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Option 1: Google Sign-In */}
              <div className="p-5 rounded-2xl border-2 border-emerald-600/30 bg-emerald-50/40 hover:bg-emerald-50/70 transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-800 text-white uppercase tracking-wider">
                      Recommended
                    </span>
                    <Sparkles className="w-4 h-4 text-emerald-700" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    Google Sign-In
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    1-Click secure verification. Instant OAuth 2.0 connection without remembering passwords.
                  </p>
                </div>

                <button
                  onClick={loginWithGoogle}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-xs shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <span>Sign in with Google</span>
                </button>
              </div>

              {/* Option 2: Institutional Email & Password */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-emerald-500/50 transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-stone-100 text-stone-700 uppercase tracking-wider">
                      Academic / ICAR
                    </span>
                    <Mail className="w-4 h-4 text-emerald-700" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    Email &amp; Password
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Use your university, ICAR institute, or veterinary department email address.
                  </p>
                </div>

                <button
                  onClick={openAuthModal}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-xs transition-all cursor-pointer"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Sign-In / Register</span>
                </button>
              </div>

              {/* Option 3: Anonymous Field Guest */}
              <div className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                      Instant Access
                    </span>
                    <HelpCircle className="w-4 h-4 text-amber-700" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    Field Guest Session
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Test cloud persistence without credentials. Upgradable to Google at any time.
                  </p>
                </div>

                <button
                  onClick={loginAsGuest}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-all cursor-pointer"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Start Guest Session</span>
                </button>
              </div>
            </div>

            {/* Inline Email Form Accordion / Card */}
            <div className="bg-[#fbf9f4] p-5 sm:p-6 rounded-2xl border border-stone-200/90 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-800" />
                  <span className="font-serif font-bold text-sm text-stone-900">
                    Direct Email Sign-In / Account Creation
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-stone-200/70 p-0.5 rounded-xl text-xs">
                  <button
                    type="button"
                    onClick={() => {
                      setInlineAuthMode('signin');
                      clearAuthError();
                    }}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      inlineAuthMode === 'signin'
                        ? 'bg-white text-stone-900 shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setInlineAuthMode('register');
                      clearAuthError();
                    }}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                      inlineAuthMode === 'register'
                        ? 'bg-white text-stone-900 shadow-2xs'
                        : 'text-stone-600 hover:text-stone-900'
                    }`}
                  >
                    Register
                  </button>
                </div>
              </div>

              <form onSubmit={handleInlineEmailAuth} className="space-y-3">
                {inlineAuthMode === 'register' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Full Name / Scholar Name
                      </label>
                      <input
                        type="text"
                        value={inlineName}
                        onChange={(e) => setInlineName(e.target.value)}
                        placeholder="Dr. Anand Patel"
                        required
                        className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-emerald-800"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                        Institution / University / Farm
                      </label>
                      <input
                        type="text"
                        value={inlineCollege}
                        onChange={(e) => setInlineCollege(e.target.value)}
                        placeholder="Veterinary College / Research Station"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-emerald-800"
                      />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={inlineEmail}
                      onChange={(e) => setInlineEmail(e.target.value)}
                      placeholder="specialist@icar.gov.in"
                      required
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-emerald-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Password (min 6 chars)
                    </label>
                    <input
                      type="password"
                      value={inlinePassword}
                      onChange={(e) => setInlinePassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      minLength={6}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-emerald-800"
                    />
                  </div>
                </div>

                {inlineAuthMode === 'register' && (
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-700 mb-1">
                      Select Professional Role
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setInlineRole('student')}
                        className={`p-2 rounded-xl border text-xs font-medium cursor-pointer text-left transition-all ${
                          inlineRole === 'student'
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                            : 'bg-white border-stone-200 text-stone-600'
                        }`}
                      >
                        Student / Farm Specialist
                      </button>
                      <button
                        type="button"
                        onClick={() => setInlineRole('researcher')}
                        className={`p-2 rounded-xl border text-xs font-medium cursor-pointer text-left transition-all ${
                          inlineRole === 'researcher'
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                            : 'bg-white border-stone-200 text-stone-600'
                        }`}
                      >
                        Veterinary Researcher
                      </button>
                    </div>
                  </div>
                )}

                <div className="pt-1 flex items-center justify-end gap-2">
                  <button
                    type="submit"
                    disabled={inlineSubmitting}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-xs transition-all cursor-pointer disabled:opacity-50"
                  >
                    {inlineSubmitting ? (
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                    ) : inlineAuthMode === 'signin' ? (
                      <LogIn className="w-3.5 h-3.5" />
                    ) : (
                      <UserPlus className="w-3.5 h-3.5" />
                    )}
                    <span>
                      {inlineAuthMode === 'signin'
                        ? 'Sign In with Email'
                        : 'Register Specialist Account'}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          STATE 2: AUTHENTICATED USER HEADER & IDENTITY CARD
         ========================================================================= */}
      {currentUser && (
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              {currentUser.photoURL ? (
                <img
                  src={currentUser.photoURL}
                  alt={currentUser.displayName || 'Profile'}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-emerald-600/30 shadow-md shrink-0"
                />
              ) : (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-800 text-white flex items-center justify-center font-bold text-2xl shadow-md shrink-0">
                  {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : <UserIcon className="w-8 h-8" />}
                </div>
              )}
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                    {userProfile?.role === 'researcher' ? 'Veterinary Researcher' : 'Farm Specialist'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 text-[10px] font-semibold">
                    {getProviderLabel()}
                  </span>
                </div>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  {currentUser.displayName || userProfile?.displayName || 'Livestock Specialist'}
                </h1>
                <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-stone-400" />
                  <span>{currentUser.email || 'Anonymous Guest Session'}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                <Settings className="w-4 h-4 text-emerald-800" />
                <span>{isEditing ? 'Cancel Edit' : 'Edit Profile'}</span>
              </button>

              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>

          {/* Anonymous Guest Upgrade Notice */}
          {currentUser.isAnonymous && (
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-900">
              <div className="flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">You are in a Guest Session. </span>
                  Connect with Google to permanently preserve your scans and journal notes.
                </div>
              </div>
              <button
                onClick={loginWithGoogle}
                className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white font-semibold rounded-xl text-xs whitespace-nowrap cursor-pointer"
              >
                Upgrade to Google Account
              </button>
            </div>
          )}

          {/* Success Banner */}
          {saveSuccessNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2 text-xs text-emerald-900">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Profile details saved and updated in Google Cloud Firestore!</span>
            </div>
          )}

          {/* Edit Profile Form Drawer */}
          {isEditing && (
            <form onSubmit={handleSaveProfile} className="bg-[#fbf9f4] p-5 sm:p-6 rounded-2xl border border-stone-200 space-y-4">
              <h3 className="font-serif font-bold text-sm text-stone-900 flex items-center gap-2">
                <Settings className="w-4 h-4 text-emerald-800" />
                <span>Update Affiliation &amp; Account Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Display Name
                  </label>
                  <input
                    type="text"
                    value={editDisplayName}
                    onChange={(e) => setEditDisplayName(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Institution / University / Farm
                  </label>
                  <input
                    type="text"
                    value={editCollegeName}
                    onChange={(e) => setEditCollegeName(e.target.value)}
                    placeholder="ICAR Agricultural University"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-300 bg-white focus:outline-emerald-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Professional Field Role
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setEditRole('student')}
                    className={`p-2.5 rounded-xl border text-xs font-medium cursor-pointer text-left transition-all ${
                      editRole === 'student'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                        : 'bg-white border-stone-200 text-stone-600'
                    }`}
                  >
                    Student / Farm Specialist
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditRole('researcher')}
                    className={`p-2.5 rounded-xl border text-xs font-medium cursor-pointer text-left transition-all ${
                      editRole === 'researcher'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                        : 'bg-white border-stone-200 text-stone-600'
                    }`}
                  >
                    Veterinary Researcher
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-xs cursor-pointer"
                >
                  {isSaving ? 'Saving...' : 'Save Profile Changes'}
                </button>
              </div>
            </form>
          )}

          {/* User Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-stone-100">
            <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
              <span className="text-stone-500 text-xs block">Firestore Cloud Scans</span>
              <span className="text-2xl font-serif font-bold text-emerald-900 mt-1 block tabular-nums">
                {cloudScansCount}
              </span>
              <span className="text-[11px] text-emerald-700 font-medium">Synced to Cloud</span>
            </div>

            <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
              <span className="text-stone-500 text-xs block">Journal Field Notes</span>
              <span className="text-2xl font-serif font-bold text-emerald-800 mt-1 block tabular-nums">
                {cloudObsCount}
              </span>
              <span className="text-[11px] text-stone-400">Firestore Observations</span>
            </div>

            <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
              <span className="text-stone-500 text-xs block">Catalog Breeds</span>
              <span className="text-2xl font-serif font-bold text-emerald-900 mt-1 block tabular-nums">
                {INDIAN_BREEDS_CATALOG.length}
              </span>
              <span className="text-[11px] text-stone-400">Across 4 Animal Species</span>
            </div>

            <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
              <div className="flex items-center justify-between">
                <span className="text-stone-500 text-xs block">Cloud Sync Status</span>
                <button
                  onClick={loadUserData}
                  disabled={isRefreshing}
                  className="text-stone-400 hover:text-emerald-800 cursor-pointer"
                  title="Refresh Cloud Sync"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-700' : ''}`} />
                </button>
              </div>
              <span className="text-base font-bold text-emerald-700 mt-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                Active &amp; Synced
              </span>
              <span className="text-[11px] text-stone-400">Firestore Partition</span>
            </div>
          </div>

          {/* UID & Technical Info Bar */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-stone-500 border-t border-stone-100">
            <div className="flex items-center gap-1.5 font-mono">
              <span>Firebase UID:</span>
              <span className="text-stone-700 truncate max-w-[200px]">{currentUser.uid}</span>
              <button
                onClick={handleCopyUid}
                className="p-1 hover:text-emerald-800 cursor-pointer"
                title="Copy UID"
              >
                {copiedUid ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <div>
              <span>Member Since: </span>
              <span className="font-semibold text-stone-700">
                {userProfile?.createdAt ? new Date(userProfile.createdAt).toLocaleDateString() : 'Active'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Affiliation & Institution Dossier */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm space-y-4">
          <h2 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            <span>Academic &amp; Field Affiliation</span>
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-stone-700">
            <div className="flex items-start justify-between pb-2 border-b border-stone-100">
              <span className="text-stone-500">Institution / Farm:</span>
              <span className="font-semibold text-right text-stone-900">
                {userProfile?.collegeName || 'ICAR National Agricultural & Veterinary Research Station'}
              </span>
            </div>
            <div className="flex items-start justify-between pb-2 border-b border-stone-100">
              <span className="text-stone-500">Specialization:</span>
              <span className="font-semibold text-right text-stone-900">
                {userProfile?.role === 'researcher'
                  ? 'Veterinary Genetics & Conservation'
                  : 'Indigenous Livestock Science & Husbandry'}
              </span>
            </div>
            <div className="flex items-start justify-between pb-2 border-b border-stone-100">
              <span className="text-stone-500">Field Operational Role:</span>
              <span className="font-semibold text-right text-stone-900 capitalize">
                {userProfile?.role || 'Field Evaluator'}
              </span>
            </div>
            <div className="flex items-start justify-between">
              <span className="text-stone-500">Primary Region:</span>
              <span className="font-semibold text-right text-stone-900">India (National Registry)</span>
            </div>
          </div>
        </div>

        {/* Quick Operations Hub */}
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm space-y-4">
          <h2 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-700" />
            <span>Field Management Actions</span>
          </h2>

          <div className="space-y-2.5">
            <button
              onClick={() => onNavigate('classify')}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 text-stone-800 hover:text-emerald-950 transition-all text-xs font-semibold cursor-pointer border border-stone-200"
            >
              <span>Launch AI Breed Classifier</span>
              <Sparkles className="w-4 h-4 text-emerald-700" />
            </button>

            {onOpenJournal && (
              <button
                onClick={onOpenJournal}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 text-stone-800 hover:text-emerald-950 transition-all text-xs font-semibold cursor-pointer border border-stone-200"
              >
                <span>Open Student / Field Research Journal</span>
                <GraduationCap className="w-4 h-4 text-emerald-700" />
              </button>
            )}

            <button
              onClick={() => onNavigate('history')}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 text-stone-800 hover:text-emerald-950 transition-all text-xs font-semibold cursor-pointer border border-stone-200"
            >
              <span>View Past Diagnostic Scans ({currentUser ? cloudScansCount : historyCount})</span>
              <History className="w-4 h-4 text-emerald-700" />
            </button>

            <button
              onClick={() => onNavigate('settings')}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-stone-50 hover:bg-emerald-50 text-stone-800 hover:text-emerald-950 transition-all text-xs font-semibold cursor-pointer border border-stone-200"
            >
              <span>System Settings &amp; Language</span>
              <Settings className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Bookmarked Indigenous Breeds Section */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-stone-900">
                Bookmarked Indigenous Breeds ({userFavorites.length})
              </h2>
              <p className="text-xs text-stone-500">
                {currentUser ? 'Stored securely in your Google Cloud Firestore partition' : 'Sign in to save and sync bookmarked breeds'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('breeds')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
          >
            <span>Browse {INDIAN_BREEDS_CATALOG.length} Breeds Directory</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {userFavorites.length === 0 ? (
          <div className="p-8 text-center bg-[#fbf9f4] rounded-2xl border border-stone-200/80 space-y-2">
            <p className="text-sm font-semibold text-stone-700">No Bookmarked Breeds Yet</p>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Click the star icon on any certified cattle, buffalo, goat, or dog breed in the directory to bookmark it here for quick reference.
            </p>
            <button
              onClick={() => onNavigate('breeds')}
              className="mt-2 px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-semibold hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              Explore Breeds Directory
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {userFavorites.map((fav) => (
              <div
                key={fav.id}
                className="p-3.5 rounded-2xl bg-stone-50 hover:bg-emerald-50/50 border border-stone-200 hover:border-emerald-500/50 transition-all flex items-center justify-between gap-2 group"
              >
                <div
                  className="cursor-pointer min-w-0"
                  onClick={() => (onSelectBreed ? onSelectBreed(fav.breedName) : onNavigate('breeds'))}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-stone-900 group-hover:text-emerald-800 truncate">
                      {fav.breedName}
                    </span>
                    <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-stone-200 text-stone-700">
                      {fav.category}
                    </span>
                  </div>
                  {fav.stateOfOrigin && (
                    <p className="text-[11px] text-stone-500 truncate mt-0.5">
                      📍 {fav.stateOfOrigin}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => (onSelectBreed ? onSelectBreed(fav.breedName) : onNavigate('breeds'))}
                    className="p-1.5 text-stone-400 hover:text-emerald-800 cursor-pointer"
                    title="View Profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleRemoveFavorite(fav.breedId, fav.breedName, fav.category)}
                    className="p-1.5 text-stone-400 hover:text-rose-600 cursor-pointer"
                    title="Remove from Bookmarks"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Cloud Scans synchronized from Firestore */}
      {currentUser && recentCloudScans.length > 0 && (
        <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Cloud className="w-4 h-4 text-emerald-800" />
              </div>
              <div>
                <h2 className="font-serif font-bold text-lg text-stone-900">
                  Recent Cloud Synchronized Diagnostic Scans
                </h2>
                <p className="text-xs text-stone-500">
                  Backed by Google Cloud Firestore database
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('history')}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
            >
              <span>View All Scans</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2.5">
            {recentCloudScans.map((scan) => (
              <div
                key={scan.id}
                className="p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 flex items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                  <div>
                    <span className="font-bold text-stone-900">{scan.breedName}</span>
                    <span className="text-stone-500 ml-1.5">
                      ({scan.category} · {scan.stateOfOrigin})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-stone-500 font-mono">
                  <span className="text-emerald-800 font-semibold">
                    {Math.round(scan.confidence > 1 ? scan.confidence : scan.confidence * 100)}% Match
                  </span>
                  <span className="text-[11px] text-stone-400">
                    {new Date(scan.timestamp).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import {
  X,
  LogIn,
  UserPlus,
  Mail,
  Lock,
  User as UserIcon,
  Building,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { useAuth } from '../firebase/authContext';

export const LoginModal: React.FC = () => {
  const {
    isAuthModalOpen,
    closeAuthModal,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    loginAsGuest,
    authError,
    clearAuthError
  } = useAuth();

  const [activeTab, setActiveTab] = useState<'google' | 'email-login' | 'email-register' | 'guest'>('google');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [collegeName, setCollegeName] = useState('ICAR National Dairy & Veterinary Research Institute');
  const [role, setRole] = useState<'student' | 'researcher'>('student');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleGoogleSignIn = async () => {
    setIsSubmitting(true);
    try {
      await loginWithGoogle();
    } catch {
      // Error handled by AuthContext
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGuestSignIn = async () => {
    setIsSubmitting(true);
    try {
      await loginAsGuest();
    } catch {
      // Error handled by AuthContext
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setIsSubmitting(true);

    try {
      if (activeTab === 'email-login') {
        await loginWithEmail(email, password);
      } else if (activeTab === 'email-register') {
        await registerWithEmail(email, password, displayName, collegeName, role);
      }
    } catch {
      // Error handled by AuthContext
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white p-6 relative">
          <button
            onClick={closeAuthModal}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-700/60 text-emerald-200 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-300" />
              Firebase Authentication
            </span>
          </div>

          <h2 className="font-serif text-2xl font-bold">Livestock Specialist Access</h2>
          <p className="text-emerald-100 text-xs mt-1">
            Sign in to synchronize 132 indigenous breed scans, clinical observations, and ICAR field notes across devices.
          </p>

          {/* Mode Tabs */}
          <div className="grid grid-cols-4 gap-1.5 mt-5 bg-black/20 p-1 rounded-2xl">
            <button
              onClick={() => {
                setActiveTab('google');
                clearAuthError();
              }}
              className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'google'
                  ? 'bg-white text-emerald-950 shadow-xs'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Google
            </button>
            <button
              onClick={() => {
                setActiveTab('email-login');
                clearAuthError();
              }}
              className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'email-login'
                  ? 'bg-white text-emerald-950 shadow-xs'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setActiveTab('email-register');
                clearAuthError();
              }}
              className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'email-register'
                  ? 'bg-white text-emerald-950 shadow-xs'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Register
            </button>
            <button
              onClick={() => {
                setActiveTab('guest');
                clearAuthError();
              }}
              className={`py-2 px-1 text-center rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'guest'
                  ? 'bg-white text-emerald-950 shadow-xs'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Guest
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Error Banner */}
          {authError && (
            <div className="mb-4 p-3.5 bg-rose-50 border border-rose-200 rounded-2xl flex items-start gap-2.5 text-xs text-rose-800">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <span className="font-bold">Authentication Note: </span>
                {authError}
              </div>
            </div>
          )}

          {/* TAB 1: GOOGLE SIGN-IN */}
          {activeTab === 'google' && (
            <div className="space-y-4">
              <div className="p-4 bg-[#fbf9f4] rounded-2xl border border-stone-200/80 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                  <span>Instant 1-Click Verification</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Log in securely with your Google Account. Your profile, bookmarked indigenous breeds, and past diagnostic scans will be stored in your private Google Cloud Firestore partition.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] text-stone-600">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Real-time cloud sync</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>No passwords to remember</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>Cross-device access</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>ICAR Journal exports</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-2xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 font-semibold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-emerald-800 border-t-transparent animate-spin rounded-full" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
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
                )}
                <span>Continue with Google</span>
              </button>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab('email-login')}
                  className="text-xs text-stone-500 hover:text-emerald-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Prefer institutional email / password?</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2 & 3: EMAIL SIGN-IN & REGISTER */}
          {(activeTab === 'email-login' || activeTab === 'email-register') && (
            <form onSubmit={handleEmailSubmit} className="space-y-3.5">
              {activeTab === 'email-register' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name / Scholar Name
                    </label>
                    <div className="relative">
                      <UserIcon className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="Dr. Rajesh Sharma"
                        required
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-emerald-800 focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Institution / University / Farm Affiliation
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        placeholder="ICAR Agricultural University"
                        className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-emerald-800 focus:ring-1 focus:ring-emerald-800"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Field Role
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <label
                        className={`p-2.5 rounded-xl border text-xs font-medium cursor-pointer flex items-center gap-2 ${
                          role === 'student'
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                            : 'border-stone-200 text-stone-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          checked={role === 'student'}
                          onChange={() => setRole('student')}
                          className="sr-only"
                        />
                        <span>Student / Farm Specialist</span>
                      </label>
                      <label
                        className={`p-2.5 rounded-xl border text-xs font-medium cursor-pointer flex items-center gap-2 ${
                          role === 'researcher'
                            ? 'bg-emerald-50 border-emerald-600 text-emerald-950 font-bold'
                            : 'border-stone-200 text-stone-600'
                        }`}
                      >
                        <input
                          type="radio"
                          name="role"
                          checked={role === 'researcher'}
                          onChange={() => setRole('researcher')}
                          className="sr-only"
                        />
                        <span>Veterinary Researcher</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="researcher@icar.gov.in"
                    required
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-emerald-800 focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-semibold text-stone-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[11px] text-stone-500 hover:text-emerald-800 cursor-pointer"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-stone-300 focus:outline-emerald-800 focus:ring-1 focus:ring-emerald-800"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
                ) : activeTab === 'email-login' ? (
                  <LogIn className="w-4 h-4" />
                ) : (
                  <UserPlus className="w-4 h-4" />
                )}
                <span>
                  {activeTab === 'email-login'
                    ? 'Sign In with Email'
                    : 'Create New Livestock Specialist Account'}
                </span>
              </button>

              <div className="flex items-center justify-between pt-2 text-xs text-stone-500">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab(activeTab === 'email-login' ? 'email-register' : 'email-login');
                    clearAuthError();
                  }}
                  className="hover:text-emerald-800 font-semibold cursor-pointer underline"
                >
                  {activeTab === 'email-login'
                    ? "Don't have an account? Register"
                    : 'Already have an account? Sign In'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('google')}
                  className="hover:text-emerald-800 cursor-pointer"
                >
                  Switch to Google
                </button>
              </div>
            </form>
          )}

          {/* TAB 4: GUEST SESSION */}
          {activeTab === 'guest' && (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl text-xs space-y-2 text-amber-950">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <HelpCircle className="w-4 h-4 text-amber-700" />
                  <span>Anonymous Evaluation Session</span>
                </div>
                <p className="leading-relaxed">
                  Continue immediately as an anonymous guest. A real Firebase Auth session will be provisioned, allowing you to test cloud Firestore synchronization without entering an email or password.
                </p>
                <p className="text-[11px] text-amber-800">
                  Note: You can upgrade to a permanent Google account later at any time from your Profile view without losing data.
                </p>
              </div>

              <button
                type="button"
                onClick={handleGuestSignIn}
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-stone-800 hover:bg-stone-900 text-white font-semibold text-xs shadow-md transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
                ) : (
                  <LogIn className="w-4 h-4" />
                )}
                <span>Start Anonymous Guest Session</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState, useRef, useEffect } from 'react';
import {
  Home,
  Sparkles,
  Compass,
  History,
  Info,
  Menu,
  X,
  LogOut,
  LogIn,
  User as UserIcon,
  ChevronDown,
  ShieldCheck,
  GraduationCap,
  Dna,
  Settings,
  MapPin,
  FlaskConical,
  Award,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth } from '../firebase/authContext';
import { useSettings } from '../context/SettingsContext';

export type ActiveTab =
  | 'home'
  | 'classify'
  | 'breeds'
  | 'map'
  | 'genomics'
  | 'guide'
  | 'history'
  | 'about'
  | 'settings'
  | 'profile'
  | 'compare';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  historyCount: number;
  onOpenHistory?: () => void;
  onOpenJournal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  historyCount,
  onOpenHistory,
  onOpenJournal
}) => {
  const { currentUser, userProfile, loginWithGoogle, logout, loading } = useAuth();
  const { t, isDarkMode, toggleTheme } = useSettings();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    setIsProfileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogin = async () => {
    try {
      setIsLoggingIn(true);
      await loginWithGoogle();
      setIsMobileMenuOpen(false);
      setIsProfileMenuOpen(false);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsProfileMenuOpen(false);
      setIsMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // The 10 primary navigation items specified in requirements:
  // Home, Classify, Breeds, Habitat, Genomics, Bioscience, History, About, Settings, Profile
  const primaryNavItems = [
    { id: 'home' as ActiveTab, label: t('nav.home') || 'Home', icon: Home },
    { id: 'classify' as ActiveTab, label: t('nav.classify') || 'Classify', icon: Sparkles },
    { id: 'breeds' as ActiveTab, label: t('nav.breeds') || 'Breeds', icon: Compass },
    { id: 'map' as ActiveTab, label: 'Habitat', icon: MapPin },
    { id: 'genomics' as ActiveTab, label: 'Genomics', icon: Dna },
    { id: 'guide' as ActiveTab, label: t('nav.bioscience') || 'Bioscience', icon: FlaskConical },
    { id: 'history' as ActiveTab, label: t('nav.history') || 'History', icon: History, badge: historyCount },
    { id: 'about' as ActiveTab, label: t('nav.about') || 'About', icon: Info },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/90 text-stone-900 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Branding */}
          <div
            className="flex items-center space-x-3 cursor-pointer group select-none shrink-0"
            onClick={() => handleTabClick('home')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleTabClick('home');
              }
            }}
            aria-label="Indian Breed Classification Home"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white shadow-sm ring-1 ring-emerald-700/30 group-hover:bg-emerald-900 transition-colors shrink-0">
              <span className="text-xl" role="img" aria-label="Bovine">🐂</span>
            </div>
            <div>
              <h1 className="font-serif tracking-tight text-base sm:text-lg font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors leading-tight">
                Indian Breed Classifier
              </h1>
              <p className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider hidden sm:block">
                Agricultural Bovine Intelligence
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {primaryNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                      : 'text-emerald-950 hover:text-emerald-900 hover:bg-emerald-50/70'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-700'}`} />
                  <span>{item.label}</span>
                  {typeof item.badge === 'number' && item.badge > 0 && (
                    <span
                      className={`ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                        isActive
                          ? 'bg-emerald-950 text-white'
                          : 'bg-emerald-100 text-emerald-900'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Compact Desktop Navigation for Medium Screens (LG) */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1" aria-label="Secondary Navigation">
            {primaryNavItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                      : 'text-emerald-950 hover:text-emerald-900 hover:bg-emerald-50/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-700'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Side Utility Cluster: Theme Toggle, Settings & Profile (Desktop) */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Quick Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-stone-200 bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-950 transition-all cursor-pointer shadow-2xs"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-emerald-800" />}
            </button>

            <div className="h-5 w-px bg-stone-200 mx-1" aria-hidden="true" />

            {/* Settings Button */}
            <button
              onClick={() => handleTabClick('settings')}
              className={`flex items-center gap-1.5 h-9 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer border select-none ${
                activeTab === 'settings'
                  ? 'bg-emerald-800 text-white border-emerald-800 font-semibold shadow-xs'
                  : 'bg-white hover:bg-emerald-50 text-emerald-950 hover:text-emerald-900 border-stone-200'
              }`}
              title={t('nav.settings') || 'Settings'}
              aria-label="Settings"
              aria-current={activeTab === 'settings' ? 'page' : undefined}
            >
              <Settings className={`w-3.5 h-3.5 ${activeTab === 'settings' ? 'text-white' : 'text-emerald-700'}`} />
              <span>Settings</span>
            </button>

            {/* Profile Button & Menu */}
            {loading ? (
              <div className="w-8 h-8 rounded-full border-2 border-emerald-600 border-t-emerald-800 animate-spin" />
            ) : currentUser ? (
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className={`flex items-center gap-2 h-9 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer border select-none ${
                    isProfileMenuOpen || activeTab === 'profile'
                      ? 'bg-emerald-800 text-white border-emerald-800 font-semibold shadow-xs'
                      : 'bg-white hover:bg-emerald-50 text-emerald-950 hover:text-emerald-900 border-stone-200'
                  }`}
                  aria-label="User Profile"
                  aria-expanded={isProfileMenuOpen}
                >
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || 'Profile'}
                      className="w-5 h-5 rounded-full object-cover ring-1 ring-emerald-600 shrink-0"
                    />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-[10px] shrink-0">
                      {currentUser.displayName ? currentUser.displayName.charAt(0).toUpperCase() : 'U'}
                    </div>
                  )}
                  <span className="font-semibold max-w-[90px] truncate text-xs">
                    {currentUser.displayName?.split(' ')[0] || 'Profile'}
                  </span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-stone-200 rounded-2xl shadow-xl py-2 z-50 text-xs animate-fadeIn">
                    <div className="px-4 py-2.5 border-b border-stone-100">
                      <p className="font-bold text-stone-900 truncate">{currentUser.displayName || 'Researcher'}</p>
                      <p className="text-stone-500 text-[11px] truncate">{currentUser.email}</p>
                      <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[9px] font-bold uppercase tracking-wider">
                          {userProfile?.role === 'researcher' ? 'Researcher' : 'Farm Specialist'}
                        </span>
                        {userProfile?.collegeName && (
                          <span className="text-[10px] text-stone-600 truncate">
                            🏛 {userProfile.collegeName}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="py-1">
                      <button
                        onClick={() => handleTabClick('profile')}
                        className="w-full text-left px-4 py-2 text-stone-700 hover:text-emerald-950 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <UserIcon className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Profile &amp; Credentials</span>
                      </button>

                      {onOpenJournal && (
                        <button
                          onClick={() => {
                            setIsProfileMenuOpen(false);
                            onOpenJournal();
                          }}
                          className="w-full text-left px-4 py-2 text-stone-700 hover:text-emerald-950 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer transition-colors"
                        >
                          <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Student Research Journal</span>
                        </button>
                      )}

                      <button
                        onClick={() => handleTabClick('history')}
                        className="w-full text-left px-4 py-2 text-stone-700 hover:text-emerald-950 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <History className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Scan History ({historyCount})</span>
                      </button>

                      <button
                        onClick={() => handleTabClick('settings')}
                        className="w-full text-left px-4 py-2 text-stone-700 hover:text-emerald-950 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer transition-colors"
                      >
                        <Settings className="w-3.5 h-3.5 text-emerald-700" />
                        <span>System Settings</span>
                      </button>
                    </div>

                    <div className="border-t border-stone-100 mt-1 pt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors font-medium cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Profile Button (Guest) */
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className={`flex items-center gap-2 h-9 px-3 rounded-xl text-xs font-medium transition-all cursor-pointer border select-none ${
                    isProfileMenuOpen || activeTab === 'profile'
                      ? 'bg-emerald-800 text-white border-emerald-800 font-semibold shadow-xs'
                      : 'bg-white hover:bg-emerald-50 text-emerald-950 hover:text-emerald-900 border-stone-200'
                  }`}
                  aria-label="Profile and Account"
                  aria-expanded={isProfileMenuOpen}
                >
                  <UserIcon className={`w-3.5 h-3.5 ${isProfileMenuOpen || activeTab === 'profile' ? 'text-white' : 'text-emerald-700'}`} />
                  <span>Profile</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isProfileMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Guest Profile Popover */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white border border-stone-200 rounded-2xl shadow-xl p-4 z-50 text-xs animate-fadeIn">
                    <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-sm">
                        <UserIcon className="w-4 h-4 text-emerald-800" />
                      </div>
                      <div>
                        <p className="font-bold text-stone-900">Guest Farmer / Scholar</p>
                        <p className="text-[11px] text-stone-500">Offline Local Storage Active</p>
                      </div>
                    </div>

                    <p className="text-stone-600 text-[11px] mt-3 leading-relaxed">
                      Sign in with Google to synchronize field scans, notes, and livestock dossiers across devices.
                    </p>

                    <button
                      onClick={handleLogin}
                      disabled={isLoggingIn}
                      className="w-full mt-3 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-800 text-white font-semibold hover:bg-emerald-900 shadow-xs transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isLoggingIn ? (
                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent animate-spin rounded-full" />
                      ) : (
                        <LogIn className="w-3.5 h-3.5" />
                      )}
                      <span>Sign in with Google</span>
                    </button>

                    <div className="mt-3 pt-3 border-t border-stone-100 space-y-1">
                      <button
                        onClick={() => handleTabClick('profile')}
                        className="w-full text-left py-1.5 px-2 text-stone-700 hover:text-emerald-950 hover:bg-emerald-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <UserIcon className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Profile Overview</span>
                      </button>
                      <button
                        onClick={() => handleTabClick('settings')}
                        className="w-full text-left py-1.5 px-2 text-stone-700 hover:text-emerald-950 hover:bg-emerald-50 rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <Settings className="w-3.5 h-3.5 text-emerald-700" />
                        <span>System Settings</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Right Action Bar */}
          <div className="flex lg:hidden items-center space-x-1.5">
            {/* Quick Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-stone-200 bg-white hover:bg-emerald-50 text-stone-700 hover:text-emerald-950 transition-all cursor-pointer"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-emerald-800" />}
            </button>

            {/* Quick Settings Icon */}
            <button
              onClick={() => handleTabClick('settings')}
              className={`h-9 w-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white hover:bg-emerald-50 text-emerald-900 border-stone-200'
              }`}
              title="Settings"
              aria-label="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Quick Profile Icon */}
            <button
              onClick={() => handleTabClick('profile')}
              className={`h-9 w-9 flex items-center justify-center rounded-xl border transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-emerald-800 text-white border-emerald-800'
                  : 'bg-white hover:bg-emerald-50 text-emerald-900 border-stone-200'
              }`}
              title="Profile"
              aria-label="Profile"
            >
              <UserIcon className="w-4 h-4" />
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-stone-200 bg-white text-emerald-950 hover:bg-emerald-50 transition-all cursor-pointer"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 text-emerald-950" /> : <Menu className="w-4 h-4 text-emerald-950" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer with ALL 10 Sections in Neat Order */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="space-y-1 mb-4">
            {/* 1. Home */}
            <button
              onClick={() => handleTabClick('home')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Home className={`w-4 h-4 ${activeTab === 'home' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Home</span>
              </div>
            </button>

            {/* 2. Classify */}
            <button
              onClick={() => handleTabClick('classify')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'classify'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Sparkles className={`w-4 h-4 ${activeTab === 'classify' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Classify</span>
              </div>
            </button>

            {/* 3. Breeds */}
            <button
              onClick={() => handleTabClick('breeds')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'breeds'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Compass className={`w-4 h-4 ${activeTab === 'breeds' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Breeds</span>
              </div>
            </button>

            {/* 4. Habitat */}
            <button
              onClick={() => handleTabClick('map')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'map'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <MapPin className={`w-4 h-4 ${activeTab === 'map' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Habitat</span>
              </div>
            </button>

            {/* 5. Genomics */}
            <button
              onClick={() => handleTabClick('genomics')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'genomics'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Dna className={`w-4 h-4 ${activeTab === 'genomics' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Genomics</span>
              </div>
            </button>

            {/* 6. Bioscience */}
            <button
              onClick={() => handleTabClick('guide')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'guide'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <FlaskConical className={`w-4 h-4 ${activeTab === 'guide' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Bioscience</span>
              </div>
            </button>

            {/* 7. History */}
            <button
              onClick={() => handleTabClick('history')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'history'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <History className={`w-4 h-4 ${activeTab === 'history' ? 'text-white' : 'text-emerald-700'}`} />
                <span>History</span>
              </div>
              {historyCount > 0 && (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900">
                  {historyCount}
                </span>
              )}
            </button>

            {/* 8. About */}
            <button
              onClick={() => handleTabClick('about')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'about'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Info className={`w-4 h-4 ${activeTab === 'about' ? 'text-white' : 'text-emerald-700'}`} />
                <span>About</span>
              </div>
            </button>

            {/* 9. Settings */}
            <button
              onClick={() => handleTabClick('settings')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'settings'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Settings className={`w-4 h-4 ${activeTab === 'settings' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Settings</span>
              </div>
            </button>

            {/* 10. Profile */}
            <button
              onClick={() => handleTabClick('profile')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'profile'
                  ? 'bg-emerald-800 text-white font-semibold shadow-xs'
                  : 'text-emerald-950 hover:bg-emerald-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <UserIcon className={`w-4 h-4 ${activeTab === 'profile' ? 'text-white' : 'text-emerald-700'}`} />
                <span>Profile</span>
              </div>
              {currentUser && (
                <span className="text-[11px] text-emerald-700 font-medium truncate max-w-[120px]">
                  {currentUser.displayName || 'Signed In'}
                </span>
              )}
            </button>
          </div>

          {/* Quick Sign-in / Profile Card in Mobile Drawer */}
          <div className="pt-3 border-t border-stone-200">
            {currentUser ? (
              <div className="p-3 bg-emerald-50/70 border border-emerald-200/80 rounded-xl space-y-2">
                <div className="flex items-center gap-3">
                  {currentUser.photoURL ? (
                    <img src={currentUser.photoURL} alt="Avatar" className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
                      {(currentUser.displayName || 'U').charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-xs text-stone-900 truncate">{currentUser.displayName || 'Farmer / Researcher'}</p>
                    <p className="text-[11px] text-stone-500 truncate">{currentUser.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold text-rose-600 bg-white border border-rose-200 hover:bg-rose-50 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                disabled={isLoggingIn}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-800 text-white font-semibold hover:bg-emerald-900 text-xs shadow-xs cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign in with Google</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

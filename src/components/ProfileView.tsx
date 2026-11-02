import React, { useState, useEffect } from 'react';
import {
  User as UserIcon,
  ShieldCheck,
  GraduationCap,
  LogIn,
  LogOut,
  History,
  BookOpen,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  Sparkles,
  Settings,
  Cloud,
  Bookmark,
  Star,
  Trash2,
  ExternalLink,
  Clock
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
  const { currentUser, userProfile, loginWithGoogle, logout, loading } = useAuth();
  const [cloudScansCount, setCloudScansCount] = useState<number>(0);
  const [cloudObsCount, setCloudObsCount] = useState<number>(0);
  const [cloudFavoritesCount, setCloudFavoritesCount] = useState<number>(0);
  const [recentCloudScans, setRecentCloudScans] = useState<SavedScanDoc[]>([]);
  const [userFavorites, setUserFavorites] = useState<FavoriteBreedDoc[]>([]);

  useEffect(() => {
    if (currentUser) {
      Promise.all([
        fetchUserScans(),
        fetchUserObservations(),
        fetchUserFavorites()
      ])
        .then(([scans, obs, favs]) => {
          setCloudScansCount(scans.length);
          setCloudObsCount(obs.length);
          setCloudFavoritesCount(favs.length);
          setRecentCloudScans(scans.slice(0, 5));
          setUserFavorites(favs);
        })
        .catch((err) => console.warn('Could not fetch user cloud data:', err));
    } else {
      setCloudScansCount(0);
      setCloudObsCount(0);
      setCloudFavoritesCount(0);
      setRecentCloudScans([]);
      setUserFavorites([]);
    }
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

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            {currentUser?.photoURL ? (
              <img
                src={currentUser.photoURL}
                alt={currentUser.displayName || 'Profile'}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover ring-2 ring-emerald-600/30 shadow-md"
              />
            ) : (
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-2xl shadow-sm">
                {currentUser?.displayName ? currentUser.displayName.charAt(0).toUpperCase() : <UserIcon className="w-8 h-8" />}
              </div>
            )}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                {currentUser ? (userProfile?.role === 'researcher' ? 'Veterinary Researcher' : 'Farm Specialist') : 'Guest Session'}
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {currentUser?.displayName || 'Guest Livestock Specialist'}
              </h1>
              <p className="text-xs sm:text-sm text-stone-500">
                {currentUser?.email || 'Offline Local Storage Profile'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {currentUser ? (
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={loginWithGoogle}
                disabled={loading}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In with Google</span>
              </button>
            )}
          </div>
        </div>

        {/* User Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-100">
          <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
            <span className="text-stone-500 text-xs block">Firestore Cloud Scans</span>
            <span className="text-2xl font-serif font-bold text-emerald-900 mt-1 block tabular-nums">
              {currentUser ? cloudScansCount : historyCount}
            </span>
            <span className="text-[11px] text-stone-400">
              {currentUser ? 'Synced to Cloud' : 'Local Cache Only'}
            </span>
          </div>

          <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
            <span className="text-stone-500 text-xs block">Journal Field Notes</span>
            <span className="text-2xl font-serif font-bold text-emerald-800 mt-1 block tabular-nums">
              {currentUser ? cloudObsCount : 0}
            </span>
            <span className="text-[11px] text-stone-400">Firestore Observations</span>
          </div>

          <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
            <span className="text-stone-500 text-xs block">Catalog Breeds</span>
            <span className="text-2xl font-serif font-bold text-emerald-900 mt-1 block tabular-nums">
              99
            </span>
            <span className="text-[11px] text-stone-400">Across 4 Animal Species</span>
          </div>

          <div className="bg-[#fbf9f4] rounded-2xl p-4 border border-stone-200/80">
            <span className="text-stone-500 text-xs block">Cloud Sync Status</span>
            <span className="text-base font-bold text-emerald-700 mt-1.5 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              {currentUser ? 'Active & Synced' : 'Offline / Guest'}
            </span>
            <span className="text-[11px] text-stone-400">Google Cloud Firestore</span>
          </div>
        </div>
      </div>

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
                {userProfile?.collegeName || 'ICAR Agricultural Research Station'}
              </span>
            </div>
            <div className="flex items-start justify-between pb-2 border-b border-stone-100">
              <span className="text-stone-500">Specialization:</span>
              <span className="font-semibold text-right text-stone-900">
                {userProfile?.role === 'researcher' ? 'Veterinary Genetics & Conservation' : 'Indigenous Dairy Science & Husbandry'}
              </span>
            </div>
            <div className="flex items-start justify-between pb-2 border-b border-stone-100">
              <span className="text-stone-500">Field Operational Role:</span>
              <span className="font-semibold text-right text-stone-900 capitalize">
                {userProfile?.role || 'Senior Evaluator'}
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
              <span>View Past Diagnostic Scans ({historyCount})</span>
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
                {currentUser ? 'Stored securely in your cloud Firestore account' : 'Sign in to save and sync bookmarked breeds'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('breeds')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
          >
            <span>Browse 99 Breeds Directory</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {userFavorites.length === 0 ? (
          <div className="p-8 text-center bg-[#fbf9f4] rounded-2xl border border-stone-200/80 space-y-2">
            <p className="text-sm font-semibold text-stone-700">No Bookmarked Breeds Yet</p>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Click the star icon on any indigenous cattle, buffalo, goat, or dog breed in the directory to bookmark it here for quick reference.
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
                  onClick={() => onSelectBreed ? onSelectBreed(fav.breedName) : onNavigate('breeds')}
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
                    <p className="text-[11px] text-stone-500 truncate mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-stone-400" />
                      <span>{fav.stateOfOrigin}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onSelectBreed ? onSelectBreed(fav.breedName) : onNavigate('breeds')}
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
                    <span className="text-stone-500 ml-1.5">({scan.category} · {scan.stateOfOrigin})</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-stone-500 font-mono">
                  <span className="text-emerald-800 font-semibold">{Math.round(scan.confidence > 1 ? scan.confidence : scan.confidence * 100)}% Match</span>
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

import React, { useState, useMemo, useEffect } from 'react';
import { BreedCategory, BreedInfo } from '../types/breed';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';
import { filterBreeds } from '../utils/classifierLogic';
import { Search, Filter, MapPin, Eye, ArrowLeftRight, ShieldCheck, Sparkles, Play, Star } from 'lucide-react';
import { EmptyState } from './EmptyState';
import { generateBreedSvgDataUri } from '../utils/breedSvgBadge';
import { useAuth } from '../firebase/authContext';
import { toggleFavoriteBreedInFirestore, fetchUserFavorites } from '../firebase/firestoreService';

interface BreedExplorerProps {
  onSelectBreed: (breed: BreedInfo) => void;
  onCompareBreed: (breedName: string) => void;
  onClassifyBreed?: (breed: BreedInfo) => void;
  initialSearch?: string;
  initialCategory?: BreedCategory | 'All';
}

const CATEGORIES: (BreedCategory | 'All')[] = [
  'All',
  'Cattle',
  'Buffalo',
  'Goat',
  'Dog'
];

export const BreedExplorer: React.FC<BreedExplorerProps> = ({
  onSelectBreed,
  onCompareBreed,
  onClassifyBreed,
  initialSearch = '',
  initialCategory = 'All'
}) => {
  const { currentUser, loginWithGoogle } = useAuth();
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<BreedCategory | 'All'>(initialCategory);
  const [selectedState, setSelectedState] = useState<string>('All');
  const [selectedUtility, setSelectedUtility] = useState<string>('All');
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);
  const [favoriteIds, setFavoriteIds] = useState<Set<string>>(new Set());
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Load user favorites from Firestore
  useEffect(() => {
    if (currentUser) {
      fetchUserFavorites().then((favs) => {
        setFavoriteIds(new Set(favs.map((f) => f.breedId)));
      }).catch((e) => console.warn('Could not load user favorites', e));
    } else {
      setFavoriteIds(new Set());
      setOnlyFavorites(false);
    }
  }, [currentUser]);

  const handleToggleCardFavorite = async (e: React.MouseEvent, breed: BreedInfo) => {
    e.stopPropagation();
    if (!currentUser) {
      setToastMsg('Sign in with Google to bookmark breeds to your cloud profile.');
      setTimeout(() => setToastMsg(null), 3500);
      return;
    }
    const sanitizedId = breed.id.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
    try {
      const res = await toggleFavoriteBreedInFirestore(
        breed.id,
        breed.name,
        breed.category,
        breed.stateOfOrigin
      );
      setFavoriteIds((prev) => {
        const next = new Set(prev);
        if (res.isFavorited) {
          next.add(sanitizedId);
        } else {
          next.delete(sanitizedId);
        }
        return next;
      });
      setToastMsg(res.isFavorited ? `Added ${breed.name} to bookmarks` : `Removed ${breed.name}`);
      setTimeout(() => setToastMsg(null), 3000);
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
    }
  };

  // Sync category if initialCategory changes from parent
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Extract all unique states from catalog
  const availableStates = useMemo(() => {
    const statesSet = new Set<string>();
    INDIAN_BREEDS_CATALOG.forEach((b) => {
      // Split if multiple states (e.g. Punjab & Rajasthan)
      const parts = b.stateOfOrigin.split(/[,&/]/);
      parts.forEach((p) => {
        const trimmed = p.replace(/\(.*?\)/g, '').trim();
        if (trimmed && trimmed.length > 2 && !trimmed.toLowerCase().includes('origin')) {
          statesSet.add(trimmed);
        }
      });
    });
    return ['All', ...Array.from(statesSet).sort()];
  }, []);

  const cattleCount = useMemo(
    () => INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Cattle').length,
    []
  );
  const buffaloCount = useMemo(
    () => INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Buffalo').length,
    []
  );
  const goatCount = useMemo(
    () => INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Goat').length,
    []
  );
  const dogCount = useMemo(
    () => INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Dog').length,
    []
  );

  const filteredBreeds = useMemo(() => {
    let result = filterBreeds(INDIAN_BREEDS_CATALOG, searchQuery, selectedCategory, selectedState);
    if (selectedUtility !== 'All') {
      result = result.filter((b) =>
        b.productivity.primaryUtility.toLowerCase().includes(selectedUtility.toLowerCase())
      );
    }
    if (onlyFavorites) {
      result = result.filter((b) => {
        const sanitizedId = b.id.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
        return favoriteIds.has(sanitizedId);
      });
    }
    return result;
  }, [searchQuery, selectedCategory, selectedState, selectedUtility, onlyFavorites, favoriteIds]);

  return (
    <div className="space-y-6">
      {/* Header and Filter Controls */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-2 border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Complete ICAR-NBAGR &amp; Canine Registry: 99 Certified Breeds
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
              Indian Indigenous Breed Directory ({INDIAN_BREEDS_CATALOG.length} Registered)
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Every officially registered indigenous Indian Zebu cattle (53 breeds), river buffalo (20 breeds), goat (14 breeds), and native canine breed (12 breeds) recognized by ICAR-NBAGR and national archives, complete with certified accession codes, chromosomal karyotypes, and biological traits.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold text-xs sm:text-sm">
              Showing {filteredBreeds.length} of {INDIAN_BREEDS_CATALOG.length} Breeds
            </span>
          </div>
        </div>

        {/* Search Input, State Filter & Utility Filter */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="relative md:col-span-2">
            <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, vernacular, district, or accession (e.g. Sahiwal, Jamunapari, Mudhol, Murrah)..."
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-11 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700 bg-stone-200 px-2 py-0.5 rounded-md cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="relative">
            <Filter className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 appearance-none cursor-pointer"
            >
              <option value="All">All States of Origin ({availableStates.length - 1} States)</option>
              {availableStates.filter((s) => s !== 'All').map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          <div className="relative">
            <select
              value={selectedUtility}
              onChange={(e) => setSelectedUtility(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 appearance-none cursor-pointer"
            >
              <option value="All">All Utilities</option>
              <option value="Milch">Milch (Dairy)</option>
              <option value="Draught">Draught (Work)</option>
              <option value="Dual">Dual-Purpose</option>
              <option value="Meat">Meat / Chevon</option>
              <option value="Pashmina">Pashmina / Fiber</option>
              <option value="Hound">Sighthound / Hunting</option>
              <option value="Guard">Guardian / Pastoral</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const count =
              cat === 'All'
                ? INDIAN_BREEDS_CATALOG.length
                : cat === 'Cattle'
                ? cattleCount
                : cat === 'Buffalo'
                ? buffaloCount
                : cat === 'Goat'
                ? goatCount
                : dogCount;

            const label =
              cat === 'All'
                ? 'All Registered Breeds'
                : cat === 'Cattle'
                ? '🐂 Cattle (Bos indicus)'
                : cat === 'Buffalo'
                ? '🐃 Buffalo (Bubalus bubalis)'
                : cat === 'Goat'
                ? '🐐 Goat (Capra hircus)'
                : '🐕 Dog (Canis lupus familiaris)';

            const isSelected = selectedCategory === cat && !onlyFavorites;

            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOnlyFavorites(false);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-emerald-50/70 hover:text-emerald-950'
                }`}
              >
                <span>{label}</span>
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                  isSelected ? 'bg-emerald-950 text-white' : 'bg-stone-200 text-stone-700'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}

          {/* Bookmarks Quick Pill Filter */}
          <button
            onClick={() => setOnlyFavorites(!onlyFavorites)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer border ${
              onlyFavorites
                ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-xs'
                : 'bg-white text-stone-700 hover:bg-amber-50 border-stone-200'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-current' : 'text-amber-500'}`} />
            <span>My Bookmarks</span>
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
              onlyFavorites ? 'bg-stone-950 text-white' : 'bg-amber-100 text-amber-900'
            }`}>
              {favoriteIds.size}
            </span>
          </button>
        </div>

        {toastMsg && (
          <div className="p-3 bg-stone-900 text-white text-xs rounded-xl flex items-center justify-between border border-emerald-500/30">
            <span>{toastMsg}</span>
            {!currentUser && (
              <button
                onClick={loginWithGoogle}
                className="underline text-amber-400 font-semibold cursor-pointer"
              >
                Sign In with Google
              </button>
            )}
          </div>
        )}
      </div>

      {/* Grid of Breed Cards */}
      {filteredBreeds.length === 0 ? (
        <EmptyState
          icon={Search}
          title="No Matching Registered Breeds Found"
          description="Try adjusting your search terms, selecting 'All' categories, or resetting the state and utility filters."
          primaryActionLabel="Reset All Filters"
          onPrimaryAction={() => {
            setSearchQuery('');
            setSelectedCategory('All');
            setSelectedState('All');
            setSelectedUtility('All');
          }}
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBreeds.map((breed) => {
            const badgeBg =
              breed.category === 'Cattle'
                ? 'bg-emerald-800 text-white'
                : breed.category === 'Buffalo'
                ? 'bg-sky-800 text-white'
                : breed.category === 'Goat'
                ? 'bg-amber-800 text-white'
                : 'bg-indigo-800 text-white';
            const emoji =
              breed.category === 'Cattle' ? '🐂' : breed.category === 'Buffalo' ? '🐃' : breed.category === 'Goat' ? '🐐' : '🐕';

            return (
              <div
                key={breed.id}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-emerald-500 transition-all group flex flex-col justify-between"
              >
                {/* Photo & Specimen Header */}
                <div
                  className="relative aspect-[16/10] bg-stone-100 overflow-hidden cursor-pointer"
                  onClick={() => onSelectBreed(breed)}
                >
                  <img
                    src={breed.imageUrl.replace('/src/assets/images/', '/assets/images/')}
                    alt={`${breed.name} ${breed.category}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = generateBreedSvgDataUri(breed.name, breed.category, breed.nbagrCode, 'light');
                    }}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${badgeBg} shadow-xs`}>
                      {emoji} {breed.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-stone-900/80 text-amber-300 border border-amber-400/20 backdrop-blur-xs flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-amber-400" />
                      {breed.nbagrStatus}
                    </span>
                  </div>

                  {/* Bookmark Star Button */}
                  <button
                    type="button"
                    onClick={(e) => handleToggleCardFavorite(e, breed)}
                    className={`absolute top-3 right-3 p-1.5 rounded-full backdrop-blur-xs transition-colors cursor-pointer z-10 ${
                      favoriteIds.has(breed.id.toLowerCase().replace(/[^a-z0-9_-]/g, '-'))
                        ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-300 shadow-md'
                        : 'bg-stone-900/60 text-white/80 hover:text-white hover:bg-stone-900 shadow-xs'
                    }`}
                    title={favoriteIds.has(breed.id.toLowerCase().replace(/[^a-z0-9_-]/g, '-')) ? 'Remove Bookmark' : 'Bookmark to Profile'}
                    aria-label="Bookmark breed"
                  >
                    <Star className={`w-3.5 h-3.5 ${favoriteIds.has(breed.id.toLowerCase().replace(/[^a-z0-9_-]/g, '-')) ? 'fill-current' : ''}`} />
                  </button>

                  <div className="absolute bottom-2 right-2 bg-stone-900/80 text-stone-200 text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-xs">
                    {breed.genomics.karyotype}
                  </div>
                </div>

                {/* Identification Subheader */}
                <div
                  className="p-4 cursor-pointer border-b border-stone-100 bg-stone-50/60"
                  onClick={() => onSelectBreed(breed)}
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {breed.name}
                    </h3>
                    <span className="text-xs font-serif text-stone-500">
                      ({breed.vernacularName.split('/')[0].trim()})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-medium mt-1">
                    <MapPin className="w-3 h-3 text-emerald-700 shrink-0" />
                    <span className="truncate">{breed.stateOfOrigin}</span>
                  </div>
                </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {breed.description}
                </p>

                {/* NBAGR Accession and Genomic markers */}
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 bg-stone-100 px-2.5 py-1.5 rounded-md">
                  <span className="truncate font-semibold text-stone-700">{breed.nbagrCode}</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    {breed.genomics.karyotype}
                  </span>
                </div>

                {/* Key specs badge */}
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-stone-100">
                  <div className="bg-stone-50 p-2 rounded-lg">
                    <span className="text-stone-400 font-medium block">Utility</span>
                    <span className="text-stone-900 font-semibold truncate block">
                      {breed.productivity.primaryUtility}
                    </span>
                  </div>
                  <div className="bg-stone-50 p-2 rounded-lg">
                    <span className="text-stone-400 font-medium block">Yield / Trait</span>
                    <span className="text-stone-900 font-semibold truncate block">
                      {breed.productivity.averageYield || breed.productivity.hardiness}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectBreed(breed)}
                    className="flex-1 py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Profile</span>
                  </button>

                  {onClassifyBreed && (
                    <button
                      type="button"
                      onClick={() => onClassifyBreed(breed)}
                      className="py-2 px-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-colors flex items-center gap-1 shadow-xs"
                      title="Run classification on this breed"
                    >
                      <Play className="w-3 h-3 fill-current" />
                      <span>Classify</span>
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={() => onCompareBreed(breed.name)}
                    className="py-2 px-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1"
                    title="Compare breed"
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Compare</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      )}
    </div>
  );
};

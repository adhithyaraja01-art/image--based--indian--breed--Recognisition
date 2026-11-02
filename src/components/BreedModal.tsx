import React, { useState, useEffect } from 'react';
import { BreedInfo } from '../types/breed';
import { X, MapPin, ShieldCheck, HeartHandshake, Activity, Layers, ArrowLeftRight, Dna, ExternalLink, Star, FileText } from 'lucide-react';
import { generateBreedSvgDataUri } from '../utils/breedSvgBadge';
import { useAuth } from '../firebase/authContext';
import { toggleFavoriteBreedInFirestore, fetchUserFavorites } from '../firebase/firestoreService';
import { DetailedBreedReportSection } from './DetailedBreedReportSection';

interface BreedModalProps {
  breed: BreedInfo | null;
  onClose: () => void;
  onCompareWith: (breedName: string) => void;
}

export const BreedModal: React.FC<BreedModalProps> = ({ breed, onClose, onCompareWith }) => {
  const { currentUser, loginWithGoogle } = useAuth();
  const [viewMode, setViewMode] = useState<'overview' | 'dossier'>('overview');
  const [isFavorited, setIsFavorited] = useState<boolean>(false);
  const [isTogglingFav, setIsTogglingFav] = useState<boolean>(false);
  const [authNotice, setAuthNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!breed) return;
    setAuthNotice(null);
    if (currentUser) {
      fetchUserFavorites().then((favs) => {
        const sanitizedId = breed.id.toLowerCase().replace(/[^a-z0-9_-]/g, '-');
        setIsFavorited(favs.some((f) => f.breedId === sanitizedId));
      }).catch((e) => console.warn('Could not check breed favorite status', e));
    } else {
      setIsFavorited(false);
    }
  }, [breed, currentUser]);

  const handleToggleFavorite = async () => {
    if (!breed) return;
    if (!currentUser) {
      setAuthNotice('Please sign in with Google to bookmark breeds to your cloud profile.');
      return;
    }
    try {
      setIsTogglingFav(true);
      const res = await toggleFavoriteBreedInFirestore(
        breed.id,
        breed.name,
        breed.category,
        breed.stateOfOrigin
      );
      setIsFavorited(res.isFavorited);
      setAuthNotice(res.isFavorited ? 'Bookmarked to your Firestore profile!' : 'Removed from bookmarks.');
      setTimeout(() => setAuthNotice(null), 3500);
    } catch (err) {
      console.error('Failed to toggle favorite:', err);
    } finally {
      setIsTogglingFav(false);
    }
  };

  if (!breed) return null;

  const badgeBg =
    breed.category === 'Cattle' ? 'bg-emerald-600 text-white' :
    breed.category === 'Buffalo' ? 'bg-sky-600 text-white' :
    breed.category === 'Goat' ? 'bg-amber-600 text-white' :
    'bg-indigo-600 text-white';

  const categoryLabel =
    breed.category === 'Cattle' ? '🐂 Zebu Cattle' :
    breed.category === 'Buffalo' ? '🐃 Riverine Buffalo' :
    breed.category === 'Goat' ? '🐐 Indigenous Goat' :
    '🐕 Indigenous Dog';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 my-8">
        {/* Modal Header Dossier with Photo */}
        <div className="relative p-6 sm:p-8 bg-gradient-to-br from-stone-900 via-stone-850 to-emerald-950 text-white border-b border-emerald-900/40">
          {/* Header Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <button
              onClick={handleToggleFavorite}
              disabled={isTogglingFav}
              className={`p-2 rounded-full transition-colors cursor-pointer flex items-center justify-center ${
                isFavorited
                  ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-300'
                  : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white'
              }`}
              title={isFavorited ? 'Remove from Firestore Favorites' : 'Bookmark to Firestore Profile'}
              aria-label={isFavorited ? 'Remove from Favorites' : 'Bookmark Breed'}
            >
              <Star className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {authNotice && (
            <div className="absolute top-16 right-4 max-w-xs bg-stone-900/95 text-stone-100 text-xs px-3.5 py-2.5 rounded-xl border border-amber-400/40 shadow-xl z-20 flex items-start justify-between gap-2">
              <span>{authNotice}</span>
              {!currentUser && (
                <button
                  onClick={loginWithGoogle}
                  className="underline text-amber-400 font-semibold cursor-pointer shrink-0 ml-1"
                >
                  Sign In
                </button>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 pr-2">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide ${badgeBg}`}>
                  {categoryLabel}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-800/90 text-amber-300 border border-amber-400/30 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  {breed.nbagrStatus}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-800/90 text-stone-200 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {breed.stateOfOrigin}
                </span>
                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  {breed.nbagrCode}
                </span>
              </div>

              <div className="flex flex-wrap items-baseline gap-3">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  {breed.name}
                </h2>
                <span className="text-xl font-serif text-emerald-300">
                  ({breed.vernacularName})
                </span>
              </div>
              <p className="text-xs text-stone-300 font-mono mt-1 italic">
                {breed.scientificName} · {breed.genomics.karyotype}
              </p>
            </div>

            <div className="md:col-span-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 aspect-[4/3] bg-stone-800 shadow-md">
                <img
                  src={breed.imageUrl.replace('/src/assets/images/', '/assets/images/')}
                  alt={`${breed.name} ${breed.category}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = generateBreedSvgDataUri(breed.name, breed.category, breed.nbagrCode, 'light');
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal View Mode Switcher */}
        <div className="bg-stone-100 border-b border-stone-200 px-6 py-2.5 flex items-center gap-2">
          <button
            onClick={() => setViewMode('overview')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              viewMode === 'overview'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-200'
            }`}
          >
            Overview Profile
          </button>
          <button
            onClick={() => setViewMode('dossier')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'dossier'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-700 hover:bg-stone-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>11-Table Full Scientific Dossier &amp; PDF</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {viewMode === 'dossier' ? (
            <DetailedBreedReportSection
              breedName={breed.name}
              onCompareWith={onCompareWith}
              showPrintButton={true}
            />
          ) : (
            <>
              {/* Description */}
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                {breed.description}
              </p>

          {/* Biotechnology & Genomics Section */}
          <div className="bg-emerald-50/60 rounded-2xl border border-emerald-200 p-4 space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <Dna className="w-4 h-4 text-emerald-600" />
              Bioscience &amp; Genomic Profile (Academic Standard)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-800">
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">
                  {breed.category === 'Dog' ? 'Functional Genetic Locus' : 'CSN2 Beta-Casein Allele'}
                </span>
                <span className="font-bold text-emerald-900">{breed.genomics.csn2Allele}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">Karyotype (Chromosomes)</span>
                <span className="font-bold text-stone-900 font-mono">{breed.genomics.karyotype}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">
                  {breed.category === 'Dog' ? 'Stamina & Performance Marker' : 'Productivity Regulator Gene'}
                </span>
                <span className="font-medium text-stone-800">{breed.genomics.fatRegulatorGene}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-emerald-200/60">
                <span className="text-stone-500 block text-[10px] font-semibold uppercase">Thermal Adaptation</span>
                <span className="font-medium text-stone-800">{breed.genomics.thermalGene}</span>
              </div>
            </div>
            {breed.genomics.ncbiLocusLink && (
              <div className="pt-1 flex items-center justify-between text-[11px] text-emerald-800 font-mono">
                <span>UniProt: {breed.genomics.uniprotAccession || 'P02666'}</span>
                <a
                  href={breed.genomics.ncbiLocusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-semibold underline underline-offset-2"
                >
                  <span>NCBI Reference Locus</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>

          {/* Physical Traits Grid */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b pb-2">
              <Layers className="w-4 h-4 text-amber-600" />
              Morphological Characteristics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Horns</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.horns}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Ears</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.ears}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Coat & Skin</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.coatColor}</span>
              </div>
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200">
                <span className="font-semibold text-stone-500 block mb-0.5">Face Profile</span>
                <span className="text-stone-900 font-medium">{breed.physicalTraits.faceProfile}</span>
              </div>
            </div>
          </div>

          {/* Productivity */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b pb-2">
              <Activity className="w-4 h-4 text-amber-600" />
              Agricultural Utility & Yield
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                <span className="font-semibold text-amber-800 block mb-0.5">Utility</span>
                <span className="text-stone-900 font-bold">{breed.productivity.primaryUtility}</span>
              </div>
              {breed.productivity.averageYield && (
                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                  <span className="font-semibold text-amber-800 block mb-0.5">Yield</span>
                  <span className="text-stone-900 font-bold">{breed.productivity.averageYield}</span>
                </div>
              )}
              {breed.productivity.fatPercentage && (
                <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                  <span className="font-semibold text-amber-800 block mb-0.5">Fat %</span>
                  <span className="text-stone-900 font-bold">{breed.productivity.fatPercentage}</span>
                </div>
              )}
              <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-200">
                <span className="font-semibold text-amber-800 block mb-0.5">Hardiness</span>
                <span className="text-emerald-700 font-bold">{breed.productivity.hardiness}</span>
              </div>
            </div>

            <p className="text-xs text-stone-600 italic">
              Heat and climate adaptation: {breed.productivity.heatTolerance}
            </p>
          </div>

          {/* Heritage */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-stone-900 flex items-center gap-2 border-b pb-2">
              <HeartHandshake className="w-4 h-4 text-amber-600" />
              Cultural Lineage & Pastoral Custodians
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              {breed.historicalSignificance}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-stone-500">Communities:</span>
              {breed.pastoralCommunities.map((c, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-stone-100 text-stone-800 text-xs">
                  {c}
                </span>
              ))}
            </div>
          </div>
          </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 px-6 py-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onCompareWith(breed.name);
              }}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span>Compare {breed.name}</span>
            </button>

            <button
              onClick={handleToggleFavorite}
              disabled={isTogglingFav}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
                isFavorited
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${isFavorited ? 'fill-amber-500 text-amber-500' : 'text-stone-400'}`} />
              <span>{isFavorited ? 'Bookmarked in Profile' : 'Save to Favorites'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-stone-200 text-stone-800 font-medium text-xs rounded-xl border border-stone-300 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

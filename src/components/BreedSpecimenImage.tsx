import React, { useState } from 'react';
import { BreedInfo } from '../types/breed';
import { generateBreedSvgDataUri } from '../utils/breedSvgBadge';
import { Sparkles, Camera, ShieldCheck } from 'lucide-react';

interface BreedSpecimenImageProps {
  breed: BreedInfo;
  className?: string;
  imgClassName?: string;
  aspectRatioClass?: string;
  priority?: boolean;
  onClick?: () => void;
  showBadges?: boolean;
  allowToggleMode?: boolean;
}

export const BreedSpecimenImage: React.FC<BreedSpecimenImageProps> = ({
  breed,
  className = '',
  imgClassName = '',
  aspectRatioClass = 'aspect-[16/10]',
  priority = false,
  onClick,
  showBadges = true,
  allowToggleMode = true
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [useSpecimenArt, setUseSpecimenArt] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Generate authentic, breed-specific vector specimen plate
  const specimenArtUri = React.useMemo(() => {
    return generateBreedSvgDataUri(
      breed.name,
      breed.category,
      breed.nbagrCode,
      'light',
      breed.stateOfOrigin,
      breed.vernacularName,
      breed.physicalTraits
    );
  }, [breed.name, breed.category, breed.nbagrCode, breed.stateOfOrigin, breed.vernacularName, breed.physicalTraits]);

  // Normalize image URL
  const rawUrl = breed.imageUrl || '';
  const normalizedPhotoUrl = rawUrl.replace('/src/assets/images/', '/assets/images/');

  const badgeBg =
    breed.category === 'Cattle'
      ? 'bg-emerald-800 text-white'
      : breed.category === 'Buffalo'
      ? 'bg-sky-800 text-white'
      : breed.category === 'Goat'
      ? 'bg-amber-800 text-white'
      : 'bg-indigo-800 text-white';

  const categoryEmoji =
    breed.category === 'Cattle' ? '🐂' : breed.category === 'Buffalo' ? '🐃' : breed.category === 'Goat' ? '🐐' : '🐕';

  const toggleViewMode = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUseSpecimenArt(!useSpecimenArt);
  };

  const currentSrc = useSpecimenArt || imageError ? specimenArtUri : normalizedPhotoUrl;

  return (
    <div
      className={`relative ${aspectRatioClass} bg-stone-100 overflow-hidden group select-none ${className}`}
      onClick={onClick}
    >
      {/* Background Skeleton while loading */}
      {!imageLoaded && !useSpecimenArt && !imageError && (
        <div className="absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center">
          <span className="text-3xl opacity-30">{categoryEmoji}</span>
        </div>
      )}

      {/* Main Specimen Image */}
      <img
        src={currentSrc}
        alt={`${breed.name} ${breed.category} Specimen`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setImageLoaded(true)}
        onError={() => {
          setImageError(true);
          setImageLoaded(true);
        }}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          imageLoaded || useSpecimenArt || imageError ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />

      {/* Top Left Badges */}
      {showBadges && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap z-10 pointer-events-none">
          <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${badgeBg} shadow-xs`}>
            {categoryEmoji} {breed.category}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-stone-900/80 text-amber-300 border border-amber-400/20 backdrop-blur-xs flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-amber-400" />
            {breed.nbagrStatus || 'Registered'}
          </span>
        </div>
      )}

      {/* Bottom Subtle Phenotypic Trait Strip */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-stone-950/85 via-stone-950/40 to-transparent pt-6 pb-2 px-3 flex items-center justify-between text-white z-10 pointer-events-none">
        <span className="text-[11px] font-medium truncate max-w-[70%] drop-shadow-xs text-stone-200">
          {breed.stateOfOrigin.split(/[,&/]/)[0].trim()} · {breed.productivity?.primaryUtility || 'Indigenous'}
        </span>

        {/* View Mode Indicator / Toggle */}
        {allowToggleMode && (
          <button
            type="button"
            onClick={toggleViewMode}
            className="pointer-events-auto text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-900/70 hover:bg-stone-900 text-stone-300 hover:text-white border border-white/20 backdrop-blur-xs flex items-center gap-1 transition-colors cursor-pointer"
            title={useSpecimenArt ? 'Switch to Field Photo' : 'Switch to Anatomical Specimen Plate'}
          >
            {useSpecimenArt ? (
              <>
                <Camera className="w-2.5 h-2.5 text-amber-400" />
                <span>Photo</span>
              </>
            ) : (
              <>
                <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                <span>Plate</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

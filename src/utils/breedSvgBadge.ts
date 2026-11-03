import { BreedCategory } from '../types/breed';
import { generateBreedSpecimenSvg, BreedTraitSummary } from './breedArtService';

/**
 * Generates an authentic, high-definition SVG vector specimen graphic (data URI)
 * representing certified Indian Cattle, Buffalo, Goat, and Dog breeds.
 * Features specialized anatomical silhouettes, horn/ear geometries, coat patterns,
 * and state-specific landscape backdrops.
 */
export function generateBreedSvgDataUri(
  breedName: string,
  category: BreedCategory,
  accessionCode: string = 'ICAR-NBAGR',
  _theme: 'light' | 'dark' = 'light',
  stateOfOrigin?: string,
  vernacularName?: string,
  physicalTraits?: BreedTraitSummary['physicalTraits']
): string {
  const summary: BreedTraitSummary = {
    name: breedName,
    category,
    nbagrCode: accessionCode,
    stateOfOrigin: stateOfOrigin || 'India',
    vernacularName: vernacularName || '',
    physicalTraits
  };

  const svg = generateBreedSpecimenSvg(summary);
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

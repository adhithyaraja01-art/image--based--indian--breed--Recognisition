import { BreedCategory } from '../types/breed';

/**
 * Generates an authentic, clean SVG vector specimen graphic (data URI)
 * representing certified Indian Cattle, Buffalo, Goat, and Dog breeds.
 * Zero external AI models, zero synthetic artifacts, 100% crisp vector graphic.
 */
export function generateBreedSvgDataUri(
  breedName: string,
  category: BreedCategory,
  accessionCode: string = 'ICAR-NBAGR',
  theme: 'light' | 'dark' = 'light'
): string {
  const getCategoryMeta = () => {
    switch (category) {
      case 'Buffalo':
        return {
          bgColor: '#f5f7f6',
          borderCol: '#93c5fd',
          badgeCol: '#bfdbfe',
          badgeTextCol: '#1d4ed8',
          animalIcon: '🐃',
          scientificName: 'Bubalus bubalis (Riverine)',
          karyo: '2n = 50 KARYO',
          biomarker: 'HIGH FAT BUFFALO',
          registryName: 'ICAR-NBAGR BUFFALO REGISTRY'
        };
      case 'Goat':
        return {
          bgColor: '#fefcf8',
          borderCol: '#fcd34d',
          badgeCol: '#fef3c7',
          badgeTextCol: '#b45309',
          animalIcon: '🐐',
          scientificName: 'Capra hircus (Desi Caprine)',
          karyo: '2n = 60 KARYO',
          biomarker: 'CSN1S1 CAPRINE',
          registryName: 'ICAR-NBAGR GOAT REGISTRY'
        };
      case 'Dog':
        return {
          bgColor: '#f9f8f6',
          borderCol: '#fdba74',
          badgeCol: '#ffedd5',
          badgeTextCol: '#c2410c',
          animalIcon: '🐕',
          scientificName: 'Canis lupus familiaris (Native Canine)',
          karyo: '2n = 78 KARYO',
          biomarker: 'INDIGENOUS CANINE',
          registryName: 'INDIAN NATIVE CANINE REGISTRY'
        };
      case 'Cattle':
      default:
        return {
          bgColor: '#fbf9f4',
          borderCol: '#86efac',
          badgeCol: '#eff6ff',
          badgeTextCol: '#1d4ed8',
          animalIcon: '🐂',
          scientificName: 'Bos indicus (Desi Zebu)',
          karyo: '2n = 60 KARYO',
          biomarker: '100% A2/A2 CSN2',
          registryName: 'ICAR-NBAGR CATTLE REGISTRY'
        };
    }
  };

  const meta = getCategoryMeta();

  if (theme === 'light') {
    const primaryGreen = '#14532d'; // Forest green
    const softGreen = '#dcfce7';
    const textMain = '#1c1917';
    const textMuted = '#78716c';

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <defs>
    <linearGradient id="bgLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${meta.bgColor}"/>
      <stop offset="100%" stop-color="#f0ece1"/>
    </linearGradient>
    <radialGradient id="glowLight" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#bbf7d0" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#bbf7d0" stop-opacity="0"/>
    </radialGradient>
    <pattern id="gridLight" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#e7e5e4" stroke-width="0.8"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="600" height="400" fill="url(#bgLight)"/>
  <rect width="600" height="400" fill="url(#glowLight)"/>
  <rect width="600" height="400" fill="url(#gridLight)"/>

  <!-- Outer Frame -->
  <rect x="18" y="18" width="564" height="364" rx="20" fill="none" stroke="${meta.borderCol}" stroke-width="1.5"/>
  <rect x="26" y="26" width="548" height="348" rx="14" fill="none" stroke="#d6d3d1" stroke-width="0.8" stroke-dasharray="4,4"/>

  <!-- Official Seal Header -->
  <rect x="36" y="38" width="528" height="32" rx="8" fill="#ffffff" stroke="#e7e5e4" stroke-width="1"/>
  <text x="52" y="58" font-family="monospace, sans-serif" font-size="11" font-weight="700" fill="${primaryGreen}" letter-spacing="1.5">${meta.registryName}</text>
  <text x="548" y="58" font-family="monospace, sans-serif" font-size="11" font-weight="700" fill="${textMuted}" text-anchor="end">${accessionCode}</text>

  <!-- Center Animal Icon Container -->
  <circle cx="300" cy="180" r="68" fill="#ffffff" stroke="${primaryGreen}" stroke-width="2.5"/>
  <circle cx="300" cy="180" r="58" fill="${softGreen}" fill-opacity="0.5"/>
  <text x="300" y="196" font-size="60" text-anchor="middle" dominant-baseline="middle">${meta.animalIcon}</text>

  <!-- Specimen Name & Scientific Taxon -->
  <text x="300" y="278" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="26" font-weight="800" fill="${textMain}" text-anchor="middle">${breedName}</text>
  <text x="300" y="304" font-family="sans-serif" font-size="13" font-style="italic" fill="${textMuted}" text-anchor="middle">${meta.scientificName}</text>

  <!-- Bottom Certification Badges -->
  <rect x="165" y="324" width="130" height="28" rx="8" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="1"/>
  <text x="230" y="342" font-family="monospace, sans-serif" font-size="11" font-weight="700" fill="#047857" text-anchor="middle">${meta.biomarker}</text>

  <rect x="305" y="324" width="130" height="28" rx="8" fill="${meta.badgeCol}" stroke="${meta.borderCol}" stroke-width="1"/>
  <text x="370" y="342" font-family="monospace, sans-serif" font-size="11" font-weight="700" fill="${meta.badgeTextCol}" text-anchor="middle">${meta.karyo}</text>
</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  // Dark variant fallback
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="600" height="400">
  <rect width="600" height="400" fill="#1c1917"/>
  <rect x="20" y="20" width="560" height="360" rx="16" fill="none" stroke="${meta.borderCol}" stroke-width="1.5" stroke-opacity="0.4"/>
  <circle cx="300" cy="180" r="72" fill="#292524" stroke="${meta.borderCol}" stroke-width="2" stroke-opacity="0.6"/>
  <text x="300" y="196" font-size="64" text-anchor="middle" dominant-baseline="middle">${meta.animalIcon}</text>
  <text x="300" y="280" font-family="serif" font-size="28" font-weight="bold" fill="#fafaf9" text-anchor="middle">${breedName}</text>
  <text x="300" y="306" font-family="sans-serif" font-size="13" font-style="italic" fill="#d6d3d1" text-anchor="middle">${meta.scientificName}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

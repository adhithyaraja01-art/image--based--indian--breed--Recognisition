import { BreedCategory } from '../types/breed';

export interface BreedTraitSummary {
  name: string;
  category: BreedCategory;
  stateOfOrigin?: string;
  nbagrCode?: string;
  vernacularName?: string;
  physicalTraits?: {
    horns?: string;
    ears?: string;
    coatColor?: string;
    humpAndDewlap?: string;
    sizeAndBuild?: string;
    faceProfile?: string;
  };
  productivity?: {
    primaryUtility?: string;
    averageYield?: string;
    fatPercentage?: string;
  };
}

// Regional backdrop color schemes
interface LandscapeTheme {
  skyTop: string;
  skyBottom: string;
  terrain1: string;
  terrain2: string;
  sunCol: string;
  accentCol: string;
  terrainType: 'desert' | 'pasture' | 'hills' | 'tropical' | 'mountains' | 'plateau';
}

function getLandscapeTheme(state: string = ''): LandscapeTheme {
  const s = state.toLowerCase();
  if (s.includes('rajasthan') || s.includes('gujarat') && (s.includes('kutch') || s.includes('desert'))) {
    return {
      skyTop: '#fed7aa',
      skyBottom: '#ffedd5',
      terrain1: '#f59e0b',
      terrain2: '#d97706',
      sunCol: '#fbbf24',
      accentCol: '#b45309',
      terrainType: 'desert'
    };
  }
  if (s.includes('gujarat')) {
    return {
      skyTop: '#fef3c7',
      skyBottom: '#fae8ff',
      terrain1: '#84cc16',
      terrain2: '#4d7c0f',
      sunCol: '#fde047',
      accentCol: '#15803d',
      terrainType: 'pasture'
    };
  }
  if (s.includes('punjab') || s.includes('haryana') || s.includes('uttar pradesh')) {
    return {
      skyTop: '#e0f2fe',
      skyBottom: '#fef9c3',
      terrain1: '#a3e635',
      terrain2: '#65a30d',
      sunCol: '#facc15',
      accentCol: '#0284c7',
      terrainType: 'pasture'
    };
  }
  if (s.includes('tamil nadu') || s.includes('kerala') || s.includes('karnataka') || s.includes('andhra')) {
    return {
      skyTop: '#dbeafe',
      skyBottom: '#d1fae5',
      terrain1: '#10b981',
      terrain2: '#047857',
      sunCol: '#fbbf24',
      accentCol: '#059669',
      terrainType: 'tropical'
    };
  }
  if (s.includes('ladakh') || s.includes('kashmir') || s.includes('himachal') || s.includes('uttarakhand')) {
    return {
      skyTop: '#cffafe',
      skyBottom: '#e0f2fe',
      terrain1: '#94a3b8',
      terrain2: '#64748b',
      sunCol: '#f8fafc',
      accentCol: '#0284c7',
      terrainType: 'mountains'
    };
  }
  if (s.includes('maharashtra') || s.includes('madhya pradesh') || s.includes('chhattisgarh')) {
    return {
      skyTop: '#fef08a',
      skyBottom: '#fee2e2',
      terrain1: '#ca8a04',
      terrain2: '#854d0e',
      sunCol: '#f59e0b',
      accentCol: '#92400e',
      terrainType: 'plateau'
    };
  }
  // Default diverse Indian agricultural landscape
  return {
    skyTop: '#dcfce7',
    skyBottom: '#fef3c7',
    terrain1: '#22c55e',
    terrain2: '#15803d',
    sunCol: '#f59e0b',
    accentCol: '#166534',
    terrainType: 'pasture'
  };
}

/**
 * Procedurally generates an authentic, stunning, high-definition SVG vector illustration
 * of any certified Indian Cattle, Buffalo, Goat, or Dog breed based on its physical traits.
 */
export function generateBreedSpecimenSvg(breed: BreedTraitSummary): string {
  const { name, category, stateOfOrigin = 'India', nbagrCode = 'ICAR-NBAGR', vernacularName = '' } = breed;
  const traits = breed.physicalTraits || {};
  const hornsText = (traits.horns || '').toLowerCase();
  const earsText = (traits.ears || '').toLowerCase();
  const coatText = (traits.coatColor || '').toLowerCase();
  const humpText = (traits.humpAndDewlap || '').toLowerCase();
  const nameLower = name.toLowerCase();

  const theme = getLandscapeTheme(stateOfOrigin);

  // Determine coat colors and gradients
  let bodyFillPrimary = '#78716c';
  let bodyFillSecondary = '#57534e';
  let bodyHighlight = '#a8a29e';
  let hasSpots = false;
  let spotColor = '#ffffff';
  let hasDarkPoints = false;
  let isPanchKalyani = false;

  // Specific breed palettes
  if (category === 'Cattle') {
    if (nameLower.includes('gir') || nameLower.includes('rathi') || coatText.includes('speckled')) {
      bodyFillPrimary = '#991b1b'; // rich dark red
      bodyFillSecondary = '#7f1d1d';
      bodyHighlight = '#ef4444';
      hasSpots = true;
      spotColor = '#fef2f2';
    } else if (nameLower.includes('sahiwal') || nameLower.includes('sindhi') || coatText.includes('red') || coatText.includes('dun')) {
      bodyFillPrimary = '#b45309'; // reddish dun
      bodyFillSecondary = '#854d0e';
      bodyHighlight = '#f59e0b';
    } else if (nameLower.includes('kangayam')) {
      bodyFillPrimary = '#94a3b8'; // steel grey
      bodyFillSecondary = '#475569';
      bodyHighlight = '#cbd5e1';
      hasDarkPoints = true; // dark hump & neck
    } else if (nameLower.includes('ongole') || nameLower.includes('tharparkar') || coatText.includes('white') || coatText.includes('light grey')) {
      bodyFillPrimary = '#f1f5f9'; // gleaming white/light grey
      bodyFillSecondary = '#cbd5e1';
      bodyHighlight = '#ffffff';
    } else if (nameLower.includes('hallikar') || nameLower.includes('amritmahal') || nameLower.includes('khillari')) {
      bodyFillPrimary = '#64748b'; // slate iron grey
      bodyFillSecondary = '#334155';
      bodyHighlight = '#94a3b8';
      hasDarkPoints = true;
    } else if (nameLower.includes('vechur') || nameLower.includes('punganur')) {
      bodyFillPrimary = '#d97706'; // warm compact fawn/tan
      bodyFillSecondary = '#b45309';
      bodyHighlight = '#fde68a';
    } else {
      // General zebu palette
      bodyFillPrimary = '#a8a29e';
      bodyFillSecondary = '#78716c';
      bodyHighlight = '#d6d3d1';
    }
  } else if (category === 'Buffalo') {
    if (nameLower.includes('bhadawari') || coatText.includes('copper')) {
      bodyFillPrimary = '#b45309'; // copper reddish wheat
      bodyFillSecondary = '#78350f';
      bodyHighlight = '#f59e0b';
    } else if (nameLower.includes('nili') || coatText.includes('panch kalyani')) {
      bodyFillPrimary = '#1c1917'; // jet black with 5 white markings
      bodyFillSecondary = '#0c0a09';
      bodyHighlight = '#44403c';
      isPanchKalyani = true;
    } else if (nameLower.includes('toda') || coatText.includes('ash')) {
      bodyFillPrimary = '#57534e'; // ash grey
      bodyFillSecondary = '#292524';
      bodyHighlight = '#a8a29e';
    } else {
      // Classic Murrah / Riverine jet black
      bodyFillPrimary = '#1c1917';
      bodyFillSecondary = '#0a0a0a';
      bodyHighlight = '#44403c';
    }
  } else if (category === 'Goat') {
    if (nameLower.includes('black bengal') || nameLower.includes('osmanabadi') || nameLower.includes('jakhrana') || coatText.includes('black')) {
      bodyFillPrimary = '#18181b'; // glossy lustrous black
      bodyFillSecondary = '#09090b';
      bodyHighlight = '#3f3f46';
    } else if (nameLower.includes('jamunapari') || nameLower.includes('surti')) {
      bodyFillPrimary = '#f8fafc'; // pure white with tan ears
      bodyFillSecondary = '#e2e8f0';
      bodyHighlight = '#ffffff';
      hasDarkPoints = true;
    } else if (nameLower.includes('barbari') || nameLower.includes('sirohi') || coatText.includes('spotted')) {
      bodyFillPrimary = '#fef3c7'; // cream with red-brown spots
      bodyFillSecondary = '#fde68a';
      bodyHighlight = '#ffffff';
      hasSpots = true;
      spotColor = '#9a3412';
    } else if (nameLower.includes('changthangi') || nameLower.includes('chegu')) {
      bodyFillPrimary = '#f8fafc'; // dense snow white cashmere pashmina
      bodyFillSecondary = '#cbd5e1';
      bodyHighlight = '#ffffff';
    } else {
      // Golden fawn / warm brown caprine
      bodyFillPrimary = '#b45309';
      bodyFillSecondary = '#78350f';
      bodyHighlight = '#fde68a';
    }
  } else if (category === 'Dog') {
    if (nameLower.includes('rajapalayam') || coatText.includes('milk white')) {
      bodyFillPrimary = '#f8fafc'; // pure milk white
      bodyFillSecondary = '#e2e8f0';
      bodyHighlight = '#ffffff';
    } else if (nameLower.includes('kombai')) {
      bodyFillPrimary = '#b45309'; // rich mahogany tan with black muzzle
      bodyFillSecondary = '#78350f';
      bodyHighlight = '#d97706';
      hasDarkPoints = true;
    } else if (nameLower.includes('kanni') || coatText.includes('black and tan')) {
      bodyFillPrimary = '#1c1917'; // black and tan
      bodyFillSecondary = '#0a0a0a';
      bodyHighlight = '#d97706';
      hasDarkPoints = true;
    } else if (nameLower.includes('mudhol') || nameLower.includes('chippiparai') || nameLower.includes('caravan')) {
      bodyFillPrimary = '#d97706'; // sighthound golden fawn / sand
      bodyFillSecondary = '#92400e';
      bodyHighlight = '#fde68a';
    } else if (nameLower.includes('gaddi') || nameLower.includes('bakharwal')) {
      bodyFillPrimary = '#78350f'; // thick golden-brown mountain coat
      bodyFillSecondary = '#451a03';
      bodyHighlight = '#b45309';
    } else {
      // Indian pariah warm fawn
      bodyFillPrimary = '#d97706';
      bodyFillSecondary = '#92400e';
      bodyHighlight = '#fde68a';
    }
  }

  // Determine Horn Geometry
  let hornType = 'standard';
  if (category === 'Cattle') {
    if (nameLower.includes('kankrej') || nameLower.includes('tharparkar') || hornsText.includes('lyre')) {
      hornType = 'lyre';
    } else if (nameLower.includes('gir') || nameLower.includes('rathi') || hornsText.includes('crescent') || hornsText.includes('backward')) {
      hornType = 'crescent';
    } else if (nameLower.includes('hallikar') || nameLower.includes('kangayam') || nameLower.includes('amritmahal') || nameLower.includes('khillari') || hornsText.includes('straight') || hornsText.includes('upright')) {
      hornType = 'spear';
    } else if (nameLower.includes('punganur') || nameLower.includes('vechur') || hornsText.includes('stumpy') || hornsText.includes('short')) {
      hornType = 'stumpy';
    }
  } else if (category === 'Buffalo') {
    if (nameLower.includes('murrah') || nameLower.includes('nili') || hornsText.includes('spiral') || hornsText.includes('curled')) {
      hornType = 'spiral';
    } else if (nameLower.includes('jaffarabadi') || hornsText.includes('drooping') || hornsText.includes('heavy')) {
      hornType = 'drooping';
    } else if (nameLower.includes('pandharpuri') || hornsText.includes('sword') || hornsText.includes('long sweeping')) {
      hornType = 'sword';
    } else if (nameLower.includes('toda') || nameLower.includes('banni') || hornsText.includes('crescent')) {
      hornType = 'crescent_buff';
    } else {
      hornType = 'sickle';
    }
  } else if (category === 'Goat') {
    if (nameLower.includes('jamunapari') || nameLower.includes('beetal') || hornsText.includes('scythe') || hornsText.includes('twisted')) {
      hornType = 'scythe';
    } else if (nameLower.includes('changthangi') || nameLower.includes('chegu') || hornsText.includes('screw')) {
      hornType = 'screw';
    } else if (nameLower.includes('barbari') || nameLower.includes('sirohi') || hornsText.includes('erect') || hornsText.includes('straight')) {
      hornType = 'erect';
    } else {
      hornType = 'short_caprine';
    }
  }

  // Determine Ear Geometry
  let earType = 'normal';
  if (nameLower.includes('gir') || nameLower.includes('jamunapari') || nameLower.includes('beetal') || earsText.includes('pendulous') || earsText.includes('leaf')) {
    earType = 'pendulous_leaf';
  } else if (nameLower.includes('barbari') || nameLower.includes('kombai') || earsText.includes('tubular') || earsText.includes('prick')) {
    earType = 'prick_alert';
  }

  // Render SVG
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400" width="640" height="400">
  <defs>
    <!-- Sky & Atmosphere Gradient -->
    <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="${theme.skyTop}"/>
      <stop offset="65%" stop-color="${theme.skyBottom}"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>

    <!-- Terrain Gradient -->
    <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${theme.terrain1}"/>
      <stop offset="100%" stop-color="${theme.terrain2}"/>
    </linearGradient>

    <!-- Specimen Animal Body Gradient -->
    <linearGradient id="bodyGrad" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="${bodyHighlight}"/>
      <stop offset="45%" stop-color="${bodyFillPrimary}"/>
      <stop offset="100%" stop-color="${bodyFillSecondary}"/>
    </linearGradient>

    <!-- Horn Gradient -->
    <linearGradient id="hornGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#44403c"/>
      <stop offset="70%" stop-color="#1c1917"/>
      <stop offset="100%" stop-color="#0c0a09"/>
    </linearGradient>

    <!-- Soft Ambient Light Overlay -->
    <radialGradient id="sunGlow" cx="80%" cy="25%" r="60%">
      <stop offset="0%" stop-color="${theme.sunCol}" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="${theme.sunCol}" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="${theme.sunCol}" stop-opacity="0"/>
    </radialGradient>

    <!-- Grid / Scientific Reticle Pattern -->
    <pattern id="sciGrid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" stroke-width="0.5" stroke-opacity="0.3"/>
    </pattern>

    <!-- Speckle Spot Filter for Breeds like Gir/Barbari -->
    <filter id="softGlow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <!-- Base Landscape Canvas -->
  <rect width="640" height="400" fill="url(#skyGrad)"/>
  <rect width="640" height="400" fill="url(#sunGlow)"/>

  <!-- Sun / Celestial Disc -->
  <circle cx="510" cy="95" r="42" fill="${theme.sunCol}" fill-opacity="0.75" filter="url(#softGlow)"/>
  <circle cx="510" cy="95" r="32" fill="#ffffff" fill-opacity="0.85"/>

  <!-- Subtle Landscape Geometry -->
  ${renderLandscapeFeatures(theme.terrainType)}

  <!-- Terrain Ground Waves -->
  <path d="M -10 270 Q 140 240 310 260 T 650 250 L 650 405 L -10 405 Z" fill="url(#terrainGrad)" fill-opacity="0.85"/>
  <path d="M -10 305 Q 180 280 360 300 T 650 285 L 650 405 L -10 405 Z" fill="url(#terrainGrad)"/>

  <!-- Scientific Fine Grid Texture -->
  <rect width="640" height="400" fill="url(#sciGrid)"/>

  <!-- Outer Specimen Frame -->
  <rect x="14" y="14" width="612" height="372" rx="18" fill="none" stroke="#ffffff" stroke-width="2" stroke-opacity="0.8"/>
  <rect x="20" y="20" width="600" height="360" rx="14" fill="none" stroke="${theme.accentCol}" stroke-width="1.2" stroke-dasharray="6,4" stroke-opacity="0.4"/>

  <!-- Official Top Identification Banner -->
  <rect x="30" y="28" width="580" height="36" rx="10" fill="#ffffff" fill-opacity="0.92" stroke="#e5e7eb" stroke-width="1"/>
  <circle cx="48" cy="46" r="8" fill="${theme.accentCol}"/>
  <text x="64" y="50" font-family="'Plus Jakarta Sans', monospace, sans-serif" font-size="11" font-weight="800" fill="#1e293b" letter-spacing="1">ICAR-NBAGR CERTIFIED INDIGENOUS SPECIMEN</text>
  <text x="596" y="50" font-family="monospace, sans-serif" font-size="11" font-weight="700" fill="${theme.accentCol}" text-anchor="end">${nbagrCode}</text>

  <!-- ================= ANATOMICAL SPECIMEN PORTRAIT ================= -->
  <g transform="translate(40, 10) scale(0.88)">
    ${renderAnimalSpecimen({
      category,
      hornType,
      earType,
      bodyGrad: 'url(#bodyGrad)',
      hornGrad: 'url(#hornGrad)',
      hasSpots,
      spotColor,
      hasDarkPoints,
      isPanchKalyani,
      humpText
    })}
  </g>

  <!-- ================= LOWER SCIENTIFIC METADATA PLATE ================= -->
  <g transform="translate(30, 290)">
    <rect x="0" y="0" width="580" height="88" rx="14" fill="#ffffff" fill-opacity="0.94" stroke="#e2e8f0" stroke-width="1.2"/>

    <!-- Left Category & State Badges -->
    <rect x="16" y="14" width="85" height="22" rx="6" fill="${theme.accentCol}"/>
    <text x="58" y="29" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#ffffff" text-anchor="middle">${category.toUpperCase()}</text>

    <rect x="108" y="14" width="160" height="22" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="0.8"/>
    <text x="188" y="29" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#475569" text-anchor="middle">📍 ${stateOfOrigin.slice(0, 22)}</text>

    <!-- Breed Primary Name & Vernacular -->
    <text x="16" y="60" font-family="'Plus Jakarta Sans', 'Inter', sans-serif" font-size="22" font-weight="800" fill="#0f172a">
      ${name}
      <tspan font-family="serif" font-size="15" font-weight="600" fill="#64748b"> (${vernacularName || 'Desi'})</tspan>
    </text>

    <!-- Right Phenotypic Key Traits Pill -->
    <g transform="translate(564, 28)">
      <rect x="-240" y="-12" width="240" height="48" rx="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
      <text x="-120" y="8" font-family="monospace, sans-serif" font-size="10" font-weight="700" fill="${theme.accentCol}" text-anchor="middle">PHENOTYPIC ARCHETYPE</text>
      <text x="-120" y="25" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#334155" text-anchor="middle">
        ${getPhenotypeSummary(name, category, hornType, earType)}
      </text>
    </g>
  </g>
</svg>`;
}

function renderLandscapeFeatures(terrainType: LandscapeTheme['terrainType']): string {
  switch (terrainType) {
    case 'desert':
      return `
        <!-- Desert Sand Dunes & Acacia Silhouettes -->
        <path d="M 0 250 Q 180 200 380 240 T 640 210 L 640 320 L 0 320 Z" fill="#f59e0b" fill-opacity="0.25"/>
        <path d="M 540 210 Q 545 180 555 170 Q 565 185 570 210 Z" fill="#92400e" fill-opacity="0.4"/>
        <path d="M 525 185 Q 550 175 580 180" stroke="#92400e" stroke-width="3" stroke-linecap="round" fill="none" opacity="0.45"/>
      `;
    case 'mountains':
      return `
        <!-- Himalayan Peaks -->
        <polygon points="120,250 200,120 280,250" fill="#94a3b8" fill-opacity="0.35"/>
        <polygon points="180,150 200,120 220,150" fill="#ffffff" fill-opacity="0.9"/>
        <polygon points="340,260 440,110 540,260" fill="#64748b" fill-opacity="0.3"/>
        <polygon points="415,145 440,110 465,145" fill="#ffffff" fill-opacity="0.95"/>
      `;
    case 'tropical':
      return `
        <!-- Tropical Palms and Western Ghats -->
        <path d="M 0 240 Q 220 180 440 230 T 640 200 L 640 300 L 0 300 Z" fill="#059669" fill-opacity="0.2"/>
        <path d="M 570 240 Q 575 160 560 140" stroke="#065f46" stroke-width="3.5" fill="none" opacity="0.4"/>
        <path d="M 560 140 Q 530 135 520 155 M 560 140 Q 560 115 580 125 M 560 140 Q 590 145 600 165" stroke="#047857" stroke-width="2.5" fill="none" opacity="0.45"/>
      `;
    case 'plateau':
      return `
        <!-- Deccan Basalt Mesas -->
        <polygon points="40,240 90,195 240,195 290,240" fill="#78350f" fill-opacity="0.25"/>
        <polygon points="380,250 430,205 560,205 610,250" fill="#854d0e" fill-opacity="0.2"/>
      `;
    case 'pasture':
    default:
      return `
        <!-- Rolling Pasture Grassland & Shrub -->
        <path d="M 0 240 Q 180 200 360 230 T 640 210 L 640 320 L 0 320 Z" fill="#22c55e" fill-opacity="0.2"/>
        <circle cx="560" cy="220" r="18" fill="#166534" fill-opacity="0.3"/>
        <circle cx="580" cy="225" r="14" fill="#166534" fill-opacity="0.25"/>
      `;
  }
}

interface SpecimenRenderArgs {
  category: BreedCategory;
  hornType: string;
  earType: string;
  bodyGrad: string;
  hornGrad: string;
  hasSpots: boolean;
  spotColor: string;
  hasDarkPoints: boolean;
  isPanchKalyani: boolean;
  humpText: string;
}

function renderAnimalSpecimen(args: SpecimenRenderArgs): string {
  const { category } = args;
  switch (category) {
    case 'Cattle':
      return renderCattleSilhouette(args);
    case 'Buffalo':
      return renderBuffaloSilhouette(args);
    case 'Goat':
      return renderGoatSilhouette(args);
    case 'Dog':
      return renderDogSilhouette(args);
    default:
      return renderCattleSilhouette(args);
  }
}

function renderCattleSilhouette(args: SpecimenRenderArgs): string {
  const { hornType, earType, bodyGrad, hornGrad, hasSpots, spotColor, hasDarkPoints } = args;

  return `
  <!-- CATTLE / ZEBU SILHOUETTE (Bos indicus) -->
  <g id="cattleSpecimen" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.22))">
    <!-- Tail -->
    <path d="M 125 155 Q 110 210 120 270 Q 125 285 130 295" stroke="#1c1917" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <!-- Tail Switch Brush -->
    <path d="M 120 270 Q 135 285 125 305 Q 115 290 120 270 Z" fill="#0f172a"/>

    <!-- Hind Legs -->
    <path d="M 130 180 L 140 295 L 155 295 L 165 210 L 195 210 L 190 295 L 205 295 L 220 180 Z" fill="#1c1917" opacity="0.3"/>
    <path d="M 150 170 Q 155 230 160 295 L 175 295 Q 185 240 205 180 Z" fill="${bodyGrad}"/>
    <rect x="160" y="292" width="16" height="7" rx="2" fill="#0f172a"/>

    <!-- Torso Barrel & Flank -->
    <path d="M 150 170 Q 180 145 280 150 Q 340 155 380 175 Q 400 230 360 260 Q 260 270 170 240 Z" fill="${bodyGrad}"/>

    <!-- Spots overlay if speckled (Gir/Rathi) -->
    ${hasSpots ? `
      <ellipse cx="230" cy="180" rx="24" ry="16" fill="${spotColor}" opacity="0.85"/>
      <ellipse cx="280" cy="205" rx="18" ry="12" fill="${spotColor}" opacity="0.9"/>
      <ellipse cx="190" cy="210" rx="15" ry="10" fill="${spotColor}" opacity="0.8"/>
      <circle cx="340" cy="190" r="10" fill="${spotColor}" opacity="0.75"/>
      <circle cx="310" cy="225" r="8" fill="${spotColor}" opacity="0.85"/>
    ` : ''}

    <!-- Forelegs -->
    <path d="M 330 220 L 335 295 L 350 295 L 360 230 Z" fill="#1c1917" opacity="0.3"/>
    <path d="M 355 210 L 360 295 L 376 295 L 390 220 Z" fill="${bodyGrad}"/>
    <rect x="360" y="292" width="16" height="7" rx="2" fill="#0f172a"/>

    <!-- Distinctive Thoracic Hump (Bos indicus hallmark) -->
    <path d="M 315 155 Q 340 90 375 140 Q 380 160 365 170 Z" fill="${hasDarkPoints ? '#334155' : bodyGrad}"/>

    <!-- Loose Voluminous Dewlap (Heat Dissipation Folds) -->
    <path d="M 390 190 Q 420 220 410 265 Q 380 275 365 240 Z" fill="${bodyGrad}" opacity="0.95"/>
    <path d="M 405 220 Q 415 245 400 260" stroke="#000000" stroke-width="1.5" stroke-opacity="0.2" fill="none"/>

    <!-- Neck & Head Profile -->
    <path d="M 360 165 Q 400 135 440 145 Q 470 160 480 190 Q 450 220 410 215 Q 385 190 360 165 Z" fill="${bodyGrad}"/>

    <!-- Muzzle & Nostril -->
    <ellipse cx="475" cy="192" rx="14" ry="11" fill="#0f172a"/>
    <ellipse cx="478" cy="190" rx="4" ry="3" fill="#334155"/>

    <!-- Eye Highlight -->
    <ellipse cx="442" cy="162" rx="5" ry="4" fill="#0f172a"/>
    <circle cx="443" cy="161" r="1.5" fill="#ffffff"/>

    <!-- Ears Conformation -->
    ${earType === 'pendulous_leaf' ? `
      <!-- Gir / Sahiwal Long Pendulous Drooping Leaf Ear -->
      <path d="M 425 165 Q 430 210 420 245 Q 410 240 415 190 Z" fill="${bodyGrad}" stroke="#450a0a" stroke-width="1"/>
      <path d="M 420 180 Q 425 215 418 235" stroke="#7f1d1d" stroke-width="1" fill="none" opacity="0.5"/>
    ` : `
      <!-- Alert Horizontal / Pointed Ear -->
      <path d="M 425 155 Q 400 145 390 155 Q 405 168 425 162 Z" fill="${bodyGrad}"/>
    `}

    <!-- Horns Conformation -->
    ${renderCattleHorns(hornType, hornGrad)}
  </g>`;
}

function renderCattleHorns(hornType: string, hornGrad: string): string {
  switch (hornType) {
    case 'lyre':
      return `
        <!-- Majestic Lyre Horns (Kankrej / Tharparkar) -->
        <path d="M 430 145 Q 420 95 440 55 Q 455 85 440 140 Z" fill="${hornGrad}" stroke="#0f172a" stroke-width="1.2"/>
        <path d="M 445 145 Q 435 95 455 55 Q 470 85 455 140 Z" fill="${hornGrad}" stroke="#0f172a" stroke-width="1.2"/>
      `;
    case 'crescent':
      return `
        <!-- Curved Half-Moon Backwards Horns (Gir / Rathi) -->
        <path d="M 435 150 Q 410 120 380 135 Q 405 145 425 155 Z" fill="${hornGrad}"/>
        <path d="M 450 150 Q 425 120 395 135 Q 420 145 440 155 Z" fill="${hornGrad}"/>
      `;
    case 'spear':
      return `
        <!-- Straight Pointed Spear Horns (Kangayam / Hallikar / Amritmahal) -->
        <path d="M 432 148 L 442 45 L 452 145 Z" fill="${hornGrad}" stroke="#0f172a" stroke-width="1"/>
        <path d="M 445 148 L 458 48 L 465 145 Z" fill="${hornGrad}" stroke="#0f172a" stroke-width="1"/>
      `;
    case 'stumpy':
      return `
        <!-- Short Stumpy Horns (Sahiwal / Vechur / Punganur) -->
        <path d="M 435 148 Q 442 125 450 145 Z" fill="${hornGrad}"/>
        <path d="M 448 148 Q 455 125 462 145 Z" fill="${hornGrad}"/>
      `;
    default:
      return `
        <path d="M 435 148 Q 430 110 445 100 Q 452 120 445 148 Z" fill="${hornGrad}"/>
      `;
  }
}

function renderBuffaloSilhouette(args: SpecimenRenderArgs): string {
  const { hornType, bodyGrad, hornGrad, isPanchKalyani } = args;

  return `
  <!-- RIVERINE BUFFALO SILHOUETTE (Bubalus bubalis) -->
  <g id="buffaloSpecimen" filter="drop-shadow(0px 8px 16px rgba(0,0,0,0.28))">
    <!-- Tail with white switch if Panch Kalyani -->
    <path d="M 120 170 Q 105 220 115 275 L 122 295" stroke="#0a0a0a" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M 115 275 Q 128 290 120 310 Q 110 295 115 275 Z" fill="${isPanchKalyani ? '#ffffff' : '#0a0a0a'}"/>

    <!-- Massive Hind Legs (White socks if Panch Kalyani) -->
    <path d="M 140 180 Q 145 240 150 295 L 168 295 Q 180 240 195 185 Z" fill="${bodyGrad}"/>
    <rect x="150" y="278" width="18" height="18" fill="${isPanchKalyani ? '#ffffff' : bodyGrad}"/>
    <rect x="150" y="292" width="18" height="6" rx="2" fill="#0f172a"/>

    <!-- Heavy Riverine Barrel Body (No Thoracic Hump) -->
    <path d="M 140 175 Q 240 145 350 155 Q 400 180 390 240 Q 300 275 160 250 Z" fill="${bodyGrad}"/>

    <!-- Forelegs (White socks if Panch Kalyani) -->
    <path d="M 345 205 L 350 295 L 368 295 L 380 215 Z" fill="${bodyGrad}"/>
    <rect x="350" y="278" width="18" height="18" fill="${isPanchKalyani ? '#ffffff' : bodyGrad}"/>
    <rect x="350" y="292" width="18" height="6" rx="2" fill="#0f172a"/>

    <!-- Muscular Low-Slung Heavy Neck -->
    <path d="M 350 155 Q 390 150 440 175 Q 455 210 400 230 Q 365 210 350 155 Z" fill="${bodyGrad}"/>

    <!-- Broad Buffalo Head & Muzzle -->
    <path d="M 425 170 Q 460 165 480 195 Q 460 225 425 215 Z" fill="${bodyGrad}"/>
    <ellipse cx="480" cy="198" rx="14" ry="11" fill="#09090b"/>
    <ellipse cx="482" cy="196" rx="4" ry="3" fill="#262626"/>

    <!-- Eye with Wall Eye highlight if Panch Kalyani -->
    <ellipse cx="445" cy="178" rx="5" ry="4" fill="${isPanchKalyani ? '#93c5fd' : '#09090b'}"/>
    <circle cx="446" cy="177" r="1.5" fill="#ffffff"/>

    <!-- Forehead Star Blaze if Panch Kalyani -->
    ${isPanchKalyani ? `
      <polygon points="445,165 450,172 458,172 452,176 455,183 445,178 438,183 441,176 435,172 443,172" fill="#ffffff"/>
    ` : ''}

    <!-- Horizontal Buffalo Ears -->
    <path d="M 420 180 Q 395 185 390 195 Q 405 200 420 190 Z" fill="${bodyGrad}"/>

    <!-- Specialized Buffalo Horns -->
    ${renderBuffaloHorns(hornType, hornGrad)}
  </g>`;
}

function renderBuffaloHorns(hornType: string, hornGrad: string): string {
  switch (hornType) {
    case 'spiral':
      return `
        <!-- Murrah / Nili-Ravi Tightly Coiled Spiral Horns -->
        <path d="M 430 165 Q 410 130 420 115 Q 440 110 435 130 Q 425 135 432 165 Z" fill="${hornGrad}" stroke="#09090b" stroke-width="1.5"/>
      `;
    case 'drooping':
      return `
        <!-- Jaffarabadi Massive Drooping Horns (Hang Downward beside Cheeks) -->
        <path d="M 435 170 Q 430 215 440 235 Q 450 215 442 170 Z" fill="${hornGrad}" stroke="#09090b" stroke-width="1.5"/>
      `;
    case 'sword':
      return `
        <!-- Pandharpuri Ultra-Long Sword Horns (50cm sweeping back along neck) -->
        <path d="M 435 165 Q 360 135 280 145 Q 355 155 430 172 Z" fill="${hornGrad}" stroke="#09090b" stroke-width="1.5"/>
      `;
    case 'crescent_buff':
      return `
        <!-- Toda / Banni Flat Wide Sweeping Crescent Horns -->
        <path d="M 430 168 Q 390 120 420 95 Q 445 130 435 170 Z" fill="${hornGrad}" stroke="#09090b" stroke-width="1.5"/>
      `;
    case 'sickle':
    default:
      return `
        <!-- Surti / Mehsana Sickle Horns -->
        <path d="M 432 168 Q 405 135 415 115 Q 435 135 435 170 Z" fill="${hornGrad}"/>
      `;
  }
}

function renderGoatSilhouette(args: SpecimenRenderArgs): string {
  const { hornType, earType, bodyGrad, hornGrad, hasSpots, spotColor } = args;

  return `
  <!-- INDIGENOUS CAPRINE SILHOUETTE (Capra hircus) -->
  <g id="goatSpecimen" filter="drop-shadow(0px 8px 14px rgba(0,0,0,0.2))">
    <!-- Alert Upright Caprine Tail -->
    <path d="M 160 185 Q 150 150 155 135 Q 165 145 170 185 Z" fill="${bodyGrad}"/>

    <!-- Slender Graceful Caprine Legs -->
    <path d="M 180 200 L 185 295 L 195 295 L 205 210 Z" fill="${bodyGrad}"/>
    <rect x="185" y="292" width="10" height="5" rx="1.5" fill="#0f172a"/>

    <!-- Slender Barrel Body -->
    <path d="M 170 190 Q 230 170 310 180 Q 330 220 310 245 Q 240 255 180 235 Z" fill="${bodyGrad}"/>

    <!-- Spots overlay (Barbari/Sirohi) -->
    ${hasSpots ? `
      <circle cx="210" cy="200" r="10" fill="${spotColor}" opacity="0.9"/>
      <circle cx="250" cy="220" r="8" fill="${spotColor}" opacity="0.85"/>
      <circle cx="280" cy="195" r="12" fill="${spotColor}" opacity="0.9"/>
      <circle cx="235" cy="185" r="6" fill="${spotColor}" opacity="0.8"/>
    ` : ''}

    <!-- Forelegs -->
    <path d="M 300 215 L 305 295 L 315 295 L 325 220 Z" fill="${bodyGrad}"/>
    <rect x="305" y="292" width="10" height="5" rx="1.5" fill="#0f172a"/>

    <!-- Elegant Slender Neck & Alert Carriage -->
    <path d="M 310 180 Q 340 140 375 145 Q 395 160 380 200 Q 345 205 310 180 Z" fill="${bodyGrad}"/>

    <!-- Caprine Head Profile -->
    <path d="M 365 150 Q 400 145 420 165 Q 405 185 375 175 Z" fill="${bodyGrad}"/>
    <ellipse cx="420" cy="167" rx="8" ry="6" fill="#09090b"/>

    <!-- Small Chin Beard (Typical desi billy goat feature) -->
    <path d="M 395 180 Q 405 205 390 200 Z" fill="#1c1917"/>

    <!-- Eye -->
    <ellipse cx="390" cy="156" rx="4" ry="3" fill="#09090b"/>
    <circle cx="391" cy="155" r="1" fill="#ffffff"/>

    <!-- Specialized Caprine Ears -->
    ${earType === 'pendulous_leaf' ? `
      <!-- Jamunapari / Beetal Long Pendulous Drooping Leaf Ear (25-30cm) -->
      <path d="M 370 155 Q 365 210 355 240 Q 345 235 358 175 Z" fill="${bodyGrad}" stroke="#78350f" stroke-width="0.8"/>
    ` : earType === 'prick_alert' ? `
      <!-- Barbari Small Alert Deer-Like Prick Ear -->
      <path d="M 370 148 L 380 120 L 388 145 Z" fill="${bodyGrad}"/>
    ` : `
      <!-- Medium Flat Drooping Ear (Sirohi / Osmanabadi) -->
      <path d="M 370 152 Q 355 170 350 185 Q 365 185 375 160 Z" fill="${bodyGrad}"/>
    `}

    <!-- Specialized Caprine Horns -->
    ${renderGoatHorns(hornType, hornGrad)}
  </g>`;
}

function renderGoatHorns(hornType: string, hornGrad: string): string {
  switch (hornType) {
    case 'scythe':
      return `
        <!-- Scythe Curved Backwards Horns (Jamunapari / Beetal) -->
        <path d="M 375 145 Q 355 105 330 115 Q 355 125 370 148 Z" fill="${hornGrad}"/>
      `;
    case 'screw':
      return `
        <!-- Changthangi / Chegu Dramatic Twisted Screw Horns -->
        <path d="M 375 145 Q 370 75 350 55 Q 365 85 382 145 Z" fill="${hornGrad}" stroke="#0f172a" stroke-width="1"/>
      `;
    case 'erect':
      return `
        <!-- Straight Pointed Upright Horns (Sirohi / Barbari) -->
        <path d="M 375 145 L 368 85 L 380 145 Z" fill="${hornGrad}"/>
      `;
    default:
      return `
        <!-- Short Curved Horns (Black Bengal / Malabari) -->
        <path d="M 375 145 Q 365 115 355 120 Q 368 128 378 145 Z" fill="${hornGrad}"/>
      `;
  }
}

function renderDogSilhouette(args: SpecimenRenderArgs): string {
  const { bodyGrad } = args;

  return `
  <!-- INDIGENOUS CANINE SILHOUETTE (Canis lupus familiaris) -->
  <g id="dogSpecimen" filter="drop-shadow(0px 8px 14px rgba(0,0,0,0.22))">
    <!-- Aerodynamic Whip Tail (Sighthound posture) -->
    <path d="M 160 170 Q 130 195 125 240 Q 135 250 135 235" stroke="#1c1917" stroke-width="3.5" fill="none" stroke-linecap="round"/>

    <!-- Slender Athletic Hind Legs -->
    <path d="M 175 170 Q 165 220 170 295 L 185 295 Q 195 240 205 180 Z" fill="${bodyGrad}"/>
    <rect x="170" y="291" width="14" height="5" rx="1.5" fill="#0f172a"/>

    <!-- Deep Sighthound Chest & Tucked Abdomen (Rajapalayam / Mudhol) -->
    <path d="M 175 170 Q 230 160 300 170 Q 330 195 315 240 Q 255 245 200 205 Z" fill="${bodyGrad}"/>

    <!-- Long Slender Forelegs -->
    <path d="M 295 210 L 300 295 L 314 295 L 325 215 Z" fill="${bodyGrad}"/>
    <rect x="300" y="291" width="14" height="5" rx="1.5" fill="#0f172a"/>

    <!-- Muscular Slender Neck -->
    <path d="M 300 170 Q 330 130 365 135 Q 380 160 360 195 Q 330 195 300 170 Z" fill="${bodyGrad}"/>

    <!-- Aerodynamic Wedge Head & Long Muzzle -->
    <path d="M 355 140 Q 400 135 430 155 Q 405 175 370 165 Z" fill="${bodyGrad}"/>

    <!-- Nose (Pink if Rajapalayam, black for others) -->
    <ellipse cx="430" cy="156" rx="6" ry="5" fill="#09090b"/>

    <!-- Alert Canine Eye -->
    <ellipse cx="385" cy="146" rx="4" ry="3" fill="#09090b"/>
    <circle cx="386" cy="145" r="1" fill="#ffffff"/>

    <!-- Alert Semi-Erect Prick / Hound Ear -->
    <path d="M 360 135 L 372 105 L 382 135 Z" fill="${bodyGrad}"/>
  </g>`;
}

function getPhenotypeSummary(name: string, category: BreedCategory, hornType: string, earType: string): string {
  const n = name.toLowerCase();
  if (category === 'Cattle') {
    if (n.includes('gir')) return 'Convex Forehead · Curled Leaf Ears · A2/A2';
    if (n.includes('kangayam')) return 'Spear Horns · Steel Grey · Powerful Draught';
    if (n.includes('kankrej')) return 'Lyre Horns · Active Sawai Chal Gait';
    if (n.includes('ongole')) return 'White Hump · Heavy Dewlap · Tropical Hardy';
    if (n.includes('sahiwal')) return 'Reddish Dun · Loose Dewlap · High Milk';
    if (n.includes('tharparkar')) return 'White Grey · Lyre Horns · Desert Hardy';
    if (n.includes('hallikar')) return 'Spear Horns · Iron Grey · Mysore Draught';
    if (n.includes('vechur')) return 'Miniature Zebu · 80cm Stature · Pure A2';
    if (n.includes('punganur')) return 'Compact Dwarf · Short Horns · High Fat';
    return `${hornType.toUpperCase()} Horns · Zebu Thoracic Hump`;
  }
  if (category === 'Buffalo') {
    if (n.includes('murrah')) return 'Jet Black · Tight Spiral Ring Horns';
    if (n.includes('bhadawari')) return 'Copper Coat · Neck Chevron · 13% Fat';
    if (n.includes('jaffarabadi')) return 'Drooping Horns · Massive Heavy Frame';
    if (n.includes('pandharpuri')) return '50cm Sword Horns · High Fertility';
    if (n.includes('nili')) return 'Panch Kalyani 5 White Markings · High Milk';
    if (n.includes('toda')) return 'Ash Grey · Wide Crescent Horns · Nilgiri';
    return `${hornType.toUpperCase()} Horns · Heavy Riverine Build`;
  }
  if (category === 'Goat') {
    if (n.includes('jamunapari')) return 'Roman Parrot Nose · 30cm Pendulous Ears';
    if (n.includes('black bengal')) return 'Lustrous Black · High Prolific Twinning';
    if (n.includes('barbari')) return 'White & Red Spots · Deer-Like Alert Build';
    if (n.includes('beetal')) return 'Tall Dairy Stature · Scythe Horns · Roman Nose';
    if (n.includes('changthangi')) return 'Pure White Pashmina Cashmere Fleece';
    if (n.includes('sirohi')) return 'Mottled Brown · Flat Drooping Ears · Hardy';
    return `${earType === 'pendulous_leaf' ? 'Pendulous Ears' : 'Alert Ears'} · Desi Caprine`;
  }
  if (category === 'Dog') {
    if (n.includes('rajapalayam')) return 'Pure Milk White · Pink Nose · Royal Sighthound';
    if (n.includes('mudhol')) return 'Aerodynamic Fawn · Deep Chest · Caravan Hound';
    if (n.includes('kombai')) return 'Mahogany Tan · Black Muzzle · Fearless Guard';
    if (n.includes('chippiparai')) return 'Silver Grey · Slender Sighthound · Tamil Nadu';
    if (n.includes('gaddi')) return 'Heavy Double Coat · Lion Mane · Mountain Guard';
    if (n.includes('kanni')) return 'Black & Tan · Fawn Eyebrows · Agile Courser';
    return 'Indigenous Canine · Loyal & Climate Hardy';
  }
  return 'Certified Indigenous Phenotype';
}

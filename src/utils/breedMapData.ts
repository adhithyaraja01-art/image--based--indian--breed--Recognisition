import { INDIAN_BREEDS_CATALOG, INDIAN_BOVINE_BREEDS } from '../data/indigenousBreeds';
import { BreedInfo, BreedCategory } from '../types/breed';

export interface StateBreedSummary {
  stateName: string;
  totalBreeds: number;
  cattleCount: number;
  buffaloCount: number;
  goatCount: number;
  dogCount: number;
  breeds: BreedInfo[];
  primaryUtilities: string[];
  dominantTract: string;
  climateZone: string;
}

// Map aliases to standardized state names matching GeoJSON features
const STATE_NAME_ALIASES: Record<string, string> = {
  'Orissa': 'Odisha',
  'Uttaranchal': 'Uttarakhand',
  'UT of Ladakh': 'Jammu and Kashmir',
  'Ladakh': 'Jammu and Kashmir',
  'Pondicherry': 'Puducherry',
  'Daman and Diu': 'Gujarat', // Grouped with neighboring agro-climatic tract
  'Dadra and Nagar Haveli': 'Gujarat'
};

export function normalizeStateName(raw: string): string {
  const trimmed = raw.trim();
  return STATE_NAME_ALIASES[trimmed] || trimmed;
}

// Agro-climatic zone mapping for Indian states per ICAR agro-ecological classification
export const STATE_CLIMATE_ZONES: Record<string, { zone: string; tractDesc: string }> = {
  'Gujarat': {
    zone: 'Western Arid & Coastal Saurashtra',
    tractDesc: 'Rann of Kutch, Banni grasslands, Gir dry deciduous forests and semi-arid plains.'
  },
  'Rajasthan': {
    zone: 'Thar Desert & Semi-Arid North-West',
    tractDesc: 'Thar sand dunes, Aravalli hills, and extreme diurnal heat variation tracts.'
  },
  'Maharashtra': {
    zone: 'Western Ghats & Deccan Lava Plateau',
    tractDesc: 'Black cotton soil plains, Marathwada rainshadow belt, and Sahyadri foothill tracts.'
  },
  'Tamil Nadu': {
    zone: 'Southern Peninsular & Coromandel Coast',
    tractDesc: 'Kongu plateau, Kaveri delta basin, Palani/Nilgiri hill tracts and semi-arid red soil.'
  },
  'Karnataka': {
    zone: 'Southern Deccan & Malnad Western Ghats',
    tractDesc: 'Malnad dense humid forests, Krishna river basin, and Mysore plateau pastures.'
  },
  'Punjab': {
    zone: 'Indo-Gangetic Alluvial Plains',
    tractDesc: 'Irrigated alluvial canal colonies, Sutlej/Beas floodplains with high crop residue.'
  },
  'Haryana': {
    zone: 'Semi-Arid Indo-Gangetic Transition',
    tractDesc: 'Dry alluvial plains, Yamuna basin, and historic center of Murrah and Hariana breeds.'
  },
  'Uttar Pradesh': {
    zone: 'Central & Eastern Gangetic Plains',
    tractDesc: 'Yamuna-Chambal ravines, Bundelkhand rocky terrain, and Terai sub-Himalayan belt.'
  },
  'Madhya Pradesh': {
    zone: 'Central Indian Plateau & Narmada Basin',
    tractDesc: 'Narmada river valley, Malwa plateau, and Vindhyan deciduous forest pastures.'
  },
  'Odisha': {
    zone: 'Eastern Coastal Plains & Chota Nagpur',
    tractDesc: 'Chilika brackish coastal lagoon, Mahanadi basin, and Koraput tribal highland plateaus.'
  },
  'Andhra Pradesh': {
    zone: 'Eastern Ghats & Coastal Delta Tracts',
    tractDesc: 'Guntur/Prakasam Ongole breeding tract, Krishna/Godavari deltas, and Punganur hills.'
  },
  'Telangana': {
    zone: 'Semi-Arid Deccan Plateau',
    tractDesc: 'Godavari basin, red sandy loam grasslands, and historic Godavari buffalo breeding tract.'
  },
  'Kerala': {
    zone: 'Humid Tropical Malabar Coast',
    tractDesc: 'High rainfall coastal plain, midland laterite valleys, and Western Ghats foothill pockets.'
  },
  'Bihar': {
    zone: 'Middle Gangetic Plains',
    tractDesc: 'Ganga river floodplains, Gandak/Kosi basins, and fertile alluvial grazing lands.'
  },
  'West Bengal': {
    zone: 'Lower Gangetic Plain & Terai Foothills',
    tractDesc: 'Darjeeling sub-Himalayan hill slopes and Gangetic alluvium.'
  },
  'Assam': {
    zone: 'Eastern Himalayan & Brahmaputra Valley',
    tractDesc: 'High-humidity Brahmaputra alluvial wetlands, riparian marshlands, and forest peripheries.'
  },
  'Himachal Pradesh': {
    zone: 'Western Himalayan Alpine & Temperate',
    tractDesc: 'High-altitude sub-alpine pastures, Kangra valleys, and steep rocky grazing slopes.'
  },
  'Uttarakhand': {
    zone: 'Central Himalayan Foothills & Terai',
    tractDesc: 'Garhwal and Kumaon hill terraces, sub-alpine bugyals, and Shivalik foothill forests.'
  },
  'Jammu and Kashmir': {
    zone: 'North-Western Alpine & Cold Desert',
    tractDesc: 'Pir Panjal mountain pastures, Kashmir valley terraces, and high-altitude cold alpine tracts.'
  },
  'Goa': {
    zone: 'Konkan Coastal Belt',
    tractDesc: 'Humid Konkan coastal laterite tracts and Western Ghats forest fringes.'
  },
  'Chhattisgarh': {
    zone: 'Mahanadi Basin & Dandakaranya Forest',
    tractDesc: 'Bastar tribal forest plateaus, Mahanadi fertile plains, and dense Sal forests.'
  },
  'Meghalaya': {
    zone: 'North-Eastern Meghalaya Plateau',
    tractDesc: 'Garo/Khasi undulating hill tracts with subtropical high rainfall.'
  },
  'Nagaland': {
    zone: 'North-Eastern Naga Hills',
    tractDesc: 'Highland mountainous rainforest tracts with community forest grazing.'
  },
  'Sikkim': {
    zone: 'Eastern Himalayan Montane',
    tractDesc: 'Steep temperate mountain slopes and high-altitude alpine rhododendron scrub.'
  }
};

/**
 * Parses all 73 ICAR-NBAGR breeds and associates them with Indian states.
 * Breeds with multi-state home tracts are indexed under each relevant state.
 */
export function buildStateBreedIndex(
  speciesFilterOrBreeds: 'All' | 'Cattle' | 'Buffalo' | 'Goat' | 'Dog' | BreedCategory | BreedInfo[] = 'All',
  utilityFilter: 'All' | 'Milch' | 'Draught' | 'Dual Purpose' = 'All'
): Map<string, StateBreedSummary> {
  const stateMap = new Map<string, StateBreedSummary>();

  let sourceBreeds: BreedInfo[] = INDIAN_BREEDS_CATALOG.length > 0 ? INDIAN_BREEDS_CATALOG : INDIAN_BOVINE_BREEDS;

  if (Array.isArray(speciesFilterOrBreeds)) {
    sourceBreeds = speciesFilterOrBreeds;
  } else if (speciesFilterOrBreeds !== 'All') {
    sourceBreeds = sourceBreeds.filter((b) => b.category === speciesFilterOrBreeds);
  }

  sourceBreeds.forEach((breed) => {
    // Apply utility filter if string-based filter mode
    if (!Array.isArray(speciesFilterOrBreeds) && utilityFilter !== 'All') {
      const utility = breed.productivity.primaryUtility;
      if (utilityFilter === 'Milch' && !utility.toLowerCase().includes('milch') && !utility.toLowerCase().includes('dairy')) {
        return;
      }
      if (utilityFilter === 'Draught' && !utility.toLowerCase().includes('draught') && !utility.toLowerCase().includes('draft') && !utility.toLowerCase().includes('work')) {
        return;
      }
      if (utilityFilter === 'Dual Purpose' && !utility.toLowerCase().includes('dual')) {
        return;
      }
    }

    // Parse stateOfOrigin string (can contain '&', ',', 'and')
    const stateParts = breed.stateOfOrigin
      .split(/[,&/]/)
      .map((s) => s.trim().replace(/^UT of\s+/, '').replace(/\([^)]*\)/g, '').trim())
      .filter((s) => s.length > 2 && !s.toLowerCase().includes('organized') && !s.toLowerCase().includes('origin'));

    const normalizedStates = Array.from(new Set(stateParts.map(normalizeStateName)));

    normalizedStates.forEach((stateName) => {
      if (!stateMap.has(stateName)) {
        const climateInfo = STATE_CLIMATE_ZONES[stateName] || {
          zone: 'Agro-Ecological Region',
          tractDesc: 'Indigenous livestock breeding tract.'
        };

        stateMap.set(stateName, {
          stateName,
          totalBreeds: 0,
          cattleCount: 0,
          buffaloCount: 0,
          goatCount: 0,
          dogCount: 0,
          breeds: [],
          primaryUtilities: [],
          dominantTract: climateInfo.tractDesc,
          climateZone: climateInfo.zone
        });
      }

      const summary = stateMap.get(stateName)!;
      if (!summary.breeds.some((b) => b.id === breed.id)) {
        summary.breeds.push(breed);
        summary.totalBreeds += 1;
        if (breed.category === 'Cattle') {
          summary.cattleCount += 1;
        } else if (breed.category === 'Buffalo') {
          summary.buffaloCount += 1;
        } else if (breed.category === 'Goat') {
          summary.goatCount += 1;
        } else if (breed.category === 'Dog') {
          summary.dogCount += 1;
        }

        const utilTag = breed.productivity.primaryUtility;
        if (!summary.primaryUtilities.includes(utilTag)) {
          summary.primaryUtilities.push(utilTag);
        }
      }
    });
  });

  return stateMap;
}

/**
 * Get top states by registered breed count
 */
export function getTopStateHotspots(
  stateMapOrLimit: Map<string, StateBreedSummary> | number = 6,
  optionalLimit = 6
): StateBreedSummary[] {
  if (stateMapOrLimit instanceof Map) {
    return Array.from(stateMapOrLimit.values())
      .sort((a, b) => b.totalBreeds - a.totalBreeds)
      .slice(0, optionalLimit);
  }
  const index = buildStateBreedIndex('All', 'All');
  return Array.from(index.values())
    .sort((a, b) => b.totalBreeds - a.totalBreeds)
    .slice(0, typeof stateMapOrLimit === 'number' ? stateMapOrLimit : 6);
}

export const getTopBreedHotspots = getTopStateHotspots;

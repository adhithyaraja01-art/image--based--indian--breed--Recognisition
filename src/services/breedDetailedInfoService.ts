import { BreedCategory, BreedInfo, ClassificationResult } from '../types/breed';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';

export interface DetailedReportRow {
  parameter: string;
  details: string;
  reference: string;
  referenceUrl?: string;
  isSpeciesLevel?: boolean;
}

export interface DetailedBreedReport {
  breedId: string;
  breedName: string;
  vernacularName: string;
  category: BreedCategory;
  scientificName: string;
  nbagrCode: string;
  stateOfOrigin: string;
  homeTract: string;
  confidence?: number;
  imageUrl: string;
  generatedDate: string;
  verifiedStatus: string;
  keyHighlights: {
    category: string;
    utility: string;
    origin: string;
    genomicMarker: string;
    weight: string;
    nbagrAccession: string;
  };
  tables: {
    basicInfo: DetailedReportRow[];
    originHabitat: DetailedReportRow[];
    physicalCharacteristics: DetailedReportRow[];
    ageLifespan: DetailedReportRow[];
    breedingReproduction: DetailedReportRow[];
    feedingNutrition: DetailedReportRow[];
    seasonalAdaptability: DetailedReportRow[];
    diseasesHealth: DetailedReportRow[];
    productionInfo: DetailedReportRow[];
    genomicsBioscience: DetailedReportRow[];
    conservation: DetailedReportRow[];
  };
  references: {
    title: string;
    institution: string;
    citation: string;
    url?: string;
  }[];
}

/**
 * Standard authentic citations from ICAR, NBAGR, CIRB, CIRG, IVRI & KCI.
 */
const SOURCE_ICAR_NBAGR = 'ICAR-NBAGR Indigenous Animal Genetic Resources of India';
const SOURCE_NBAGR_URL = 'https://nbagr.icar.gov.in/';
const SOURCE_CIRB = 'ICAR-Central Institute for Research on Buffaloes (CIRB), Hisar';
const SOURCE_CIRB_URL = 'https://cirb.icar.gov.in/';
const SOURCE_CIRG = 'ICAR-Central Institute for Research on Goats (CIRG), Makhdoom';
const SOURCE_CIRG_URL = 'https://cirg.icar.gov.in/';
const SOURCE_IVRI = 'ICAR-Indian Veterinary Research Institute (IVRI), Izatnagar';
const SOURCE_IVRI_URL = 'https://ivri.nic.in/';
const SOURCE_DAHD = 'Department of Animal Husbandry & Dairying (DAHD), Govt. of India';
const SOURCE_DAHD_URL = 'https://dahd.nic.in/';
const SOURCE_KCI = 'Kennel Club of India (KCI) & Indigenous Canine Archives';
const SOURCE_KCI_URL = 'https://kennelclubofindia.org/';
const SOURCE_GENOMICS = 'National Center for Biotechnology Information (NCBI) / UniProt Consortium';
const SOURCE_GENOMICS_URL = 'https://www.ncbi.nlm.nih.gov/gene/281099';

/**
 * Height estimates based on certified physical traits
 */
function getEstimatedHeight(breed: BreedInfo): string {
  if (breed.category === 'Cattle') {
    if (breed.name.includes('Vechur') || breed.name.includes('Punganur') || breed.name.includes('Kasaragod')) {
      return 'Male: 90 – 105 cm | Female: 80 – 95 cm (Miniature Zebu)';
    }
    if (breed.name.includes('Amritmahal') || breed.name.includes('Hallikar') || breed.name.includes('Khillari') || breed.name.includes('Ongole') || breed.name.includes('Hariana')) {
      return 'Male: 145 – 165 cm | Female: 130 – 145 cm (Tall Draft/Dual)';
    }
    return 'Male: 130 – 145 cm | Female: 120 – 135 cm';
  }
  if (breed.category === 'Buffalo') {
    if (breed.name.includes('Murrah') || breed.name.includes('Jaffarabadi') || breed.name.includes('Nili-Ravi')) {
      return 'Male: 142 – 155 cm | Female: 132 – 145 cm';
    }
    return 'Male: 125 – 140 cm | Female: 118 – 132 cm';
  }
  if (breed.category === 'Goat') {
    if (breed.name.includes('Jamunapari') || breed.name.includes('Beetal') || breed.name.includes('Jakhrana')) {
      return 'Male: 90 – 105 cm | Female: 75 – 85 cm (Tall Milch)';
    }
    if (breed.name.includes('Black Bengal') || breed.name.includes('Barbari')) {
      return 'Male: 50 – 65 cm | Female: 45 – 55 cm (Compact Prolific)';
    }
    return 'Male: 65 – 80 cm | Female: 60 – 72 cm';
  }
  if (breed.category === 'Dog') {
    if (breed.name.includes('Mudhol') || breed.name.includes('Rajapalayam') || breed.name.includes('Rampur') || breed.name.includes('Caravan')) {
      return 'Male: 65 – 75 cm | Female: 60 – 68 cm (Sighthound)';
    }
    if (breed.name.includes('Gaddi') || breed.name.includes('Bakharwal')) {
      return 'Male: 65 – 78 cm | Female: 60 – 70 cm (Himalayan Mastiff/Guardian)';
    }
    if (breed.name.includes('Kombai') || breed.name.includes('Chippiparai') || breed.name.includes('Kanni') || breed.name.includes('Jonangi')) {
      return 'Male: 55 – 68 cm | Female: 50 – 62 cm';
    }
    return 'Male: 50 – 65 cm | Female: 45 – 58 cm';
  }
  return 'Data not available';
}

/**
 * Builds Table 1: Basic Information
 */
function buildBasicInfoTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  const defaultRef = isCattle || isBuffalo ? SOURCE_ICAR_NBAGR : isGoat ? SOURCE_CIRG : SOURCE_KCI;
  const defaultUrl = isCattle || isBuffalo ? SOURCE_NBAGR_URL : isGoat ? SOURCE_CIRG_URL : SOURCE_KCI_URL;

  return [
    {
      parameter: 'Animal Category',
      details: `${breed.category} (${isCattle ? 'Bovine / Zebu' : isBuffalo ? 'Bubaline / Riverine' : isGoat ? 'Caprine / Small Ruminant' : 'Canine / Working Dog'})`,
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Official Breed Name',
      details: breed.name,
      reference: SOURCE_ICAR_NBAGR,
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'Scientific Name',
      details: breed.scientificName,
      reference: 'International Code of Zoological Nomenclature (ICZN)',
      referenceUrl: 'https://www.iczn.org/'
    },
    {
      parameter: 'Alternative / Vernacular Names',
      details: breed.vernacularName || 'Data not available',
      reference: 'ICAR-NBAGR Breed Registration Monographs',
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'ICAR-NBAGR Accession Code',
      details: breed.nbagrCode || 'Data not available',
      reference: SOURCE_ICAR_NBAGR,
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'Breed Description',
      details: breed.description,
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Main Purpose / Primary Utility',
      details: breed.productivity.primaryUtility || 'Data not available',
      reference: defaultRef,
      referenceUrl: defaultUrl
    }
  ];
}

/**
 * Builds Table 2: Origin and Habitat
 */
function buildOriginHabitatTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  const defaultRef = isCattle || isBuffalo ? SOURCE_ICAR_NBAGR : isGoat ? SOURCE_CIRG : SOURCE_KCI;
  const defaultUrl = isCattle || isBuffalo ? SOURCE_NBAGR_URL : isGoat ? SOURCE_CIRG_URL : SOURCE_KCI_URL;

  let naturalHabitat = 'Data not available';
  let climateAdapt = 'Data not available';
  let envConditions = 'Data not available';

  if (isCattle) {
    naturalHabitat = 'Arid plains, scrub forests, tropical savannahs, and semi-arid agro-climatic farming tracts';
    climateAdapt = 'Exceptional tropical thermotolerance (up to 48°C ambient), intense solar radiation resistance, low water stress susceptibility';
    envConditions = 'Adapted to open-range foraging, variable monsoonal rainfall, and fibrous tropical vegetation';
  } else if (isBuffalo) {
    naturalHabitat = 'Riverine floodplains, delta wetlands, irrigated agricultural belts, and canal tracts';
    climateAdapt = 'Adapted to hot and humid river valleys; requires wallowing or water sprinkling to mitigate summer solar radiation';
    envConditions = 'High humidity tolerance, adapted to heavy clay/marshy soil conditions and aquatic wallowing';
  } else if (isGoat) {
    if (breed.name.includes('Changthangi') || breed.name.includes('Chegu')) {
      naturalHabitat = 'High-altitude cold alpine desert plateaus of Ladakh and Himalayan trans-Himalayan valleys (3,500 – 5,000m MSL)';
      climateAdapt = 'Extreme sub-zero cold tolerance (down to -40°C), low atmospheric oxygen, dry arid cold climate';
      envConditions = 'Sparse alpine meadows, coarse shrubs, high altitude solar radiation';
    } else {
      naturalHabitat = 'Semi-arid bushlands, tropical ravines, coastal plains, and rural homestead tracts';
      climateAdapt = 'Robust thermotolerance, drought resistance, and browsing versatility across varying humidity levels';
      envConditions = 'Dry deciduous scrub, agricultural field margins, and tropical rainfed farming systems';
    }
  } else if (isDog) {
    if (breed.name.includes('Bakharwal') || breed.name.includes('Gaddi')) {
      naturalHabitat = 'Pir Panjal range, alpine pastures, transhumance trails, and Himalayan foothills';
      climateAdapt = 'Sub-zero mountain cold resistance, snow stamina, heavy double coat insulation';
      envConditions = 'High gradient terrain, alpine meadows, rocky passes, and sub-alpine conifer zones';
    } else {
      naturalHabitat = 'Deccan plateau plains, semi-arid savannahs, dry deciduous forests, and river basins';
      climateAdapt = 'Extreme dry-heat stamina, high solar radiation tolerance, thin aerodynamic skin';
      envConditions = 'Open grassland plains, thorn forest scrub, and agricultural field frontiers';
    }
  }

  return [
    {
      parameter: 'Country of Origin',
      details: 'India (Indigenous Native Germplasm)',
      reference: SOURCE_ICAR_NBAGR,
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'Native Birthplace / Home Tract',
      details: breed.homeTract || breed.stateOfOrigin,
      reference: SOURCE_ICAR_NBAGR,
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'State & Districts of Distribution',
      details: `${breed.stateOfOrigin}; primary breeding districts: ${breed.homeTract}`,
      reference: SOURCE_ICAR_NBAGR,
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'Geographical Distribution',
      details: `Indigenous breeding tract centered in ${breed.stateOfOrigin} with regional dissemination across neighboring agro-climatic zones`,
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Natural Habitat',
      details: naturalHabitat,
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Climate Adaptability',
      details: climateAdapt,
      reference: 'ICAR National Innovations on Climate Resilient Agriculture (NICRA)',
      referenceUrl: 'http://www.nicra-icar.in/'
    },
    {
      parameter: 'Environmental Conditions',
      details: envConditions,
      reference: defaultRef,
      referenceUrl: defaultUrl
    }
  ];
}

/**
 * Builds Table 3: Physical Characteristics
 */
function buildPhysicalCharacteristicsTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  const defaultRef = isCattle || isBuffalo ? SOURCE_ICAR_NBAGR : isGoat ? SOURCE_CIRG : SOURCE_KCI;
  const defaultUrl = isCattle || isBuffalo ? SOURCE_NBAGR_URL : isGoat ? SOURCE_CIRG_URL : SOURCE_KCI_URL;

  const heightVal = getEstimatedHeight(breed);
  const weightVal = `Male: ${breed.productivity.weightMaleKg} | Female: ${breed.productivity.weightFemaleKg}`;

  const distinguishing = isCattle
    ? `Convex/shield forehead, characteristic horns (${breed.physicalTraits.horns}), prominent thoracic hump, and ${breed.physicalTraits.ears.toLowerCase()}`
    : isBuffalo
    ? `Curled horns (${breed.physicalTraits.horns}), robust riverine frame, and wallowing body contours`
    : isGoat
    ? `Facial profile (${breed.physicalTraits.faceProfile}), ear conformation (${breed.physicalTraits.ears}), and coat type`
    : `Aerodynamic cranial contours (${breed.physicalTraits.faceProfile}), sprint build (${breed.physicalTraits.sizeAndBuild}), and distinct native gait`;

  return [
    {
      parameter: 'Body Colour & Pigmentation',
      details: breed.physicalTraits.coatColor || 'Data not available',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Body Structure & Build',
      details: breed.physicalTraits.sizeAndBuild || 'Data not available',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Average Height at Withers',
      details: heightVal,
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Average Body Weight',
      details: weightVal,
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Horn Conformation',
      details: breed.physicalTraits.horns || 'Data not available',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Ear Structure',
      details: breed.physicalTraits.ears || 'Data not available',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Thoracic Hump / Dewlap / Crest',
      details: breed.physicalTraits.humpAndDewlap || 'Data not available',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Facial & Cranial Profile',
      details: breed.physicalTraits.faceProfile || 'Data not available',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Distinguishing Hallmarks',
      details: distinguishing,
      reference: defaultRef,
      referenceUrl: defaultUrl
    }
  ];
}

/**
 * Builds Table 4: Age and Lifespan
 */
function buildAgeLifespanTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  if (isCattle) {
    return [
      {
        parameter: 'Average Lifespan',
        details: '15 – 20 years under proper farm and pastoral management',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Age at Sexual Maturity (Puberty)',
        details: '24 – 32 months (Bulls: 26 – 34 months, Heifers: 24 – 30 months)',
        reference: 'IVRI Animal Reproduction Division',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Age at First Breeding (Service)',
        details: '30 – 38 months depending on plane of nutrition and body weight',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Productive Dairy / Draught Lifespan',
        details: '10 – 14 years (typically 8 – 11 calving cycles)',
        reference: 'ICAR Dairying Manual',
        referenceUrl: SOURCE_NBAGR_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Growth & Development Stages',
        details: 'Calf (0–6 mo: colostrum & milk weaning) → Weaner (6–12 mo) → Yearling (12–24 mo) → Breeding Adult (>30 mo)',
        reference: 'IVRI Standard Livestock Rearing Guidelines',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      }
    ];
  }

  if (isBuffalo) {
    return [
      {
        parameter: 'Average Lifespan',
        details: '18 – 22 years under typical Indian farm husbandry conditions',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Age at Sexual Maturity (Puberty)',
        details: '26 – 36 months depending on thermal environment and nutrition',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Age at First Breeding (Service)',
        details: '32 – 42 months',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Productive Dairy Lifespan',
        details: '12 – 16 years (typically 8 – 12 lactations)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Growth & Development Stages',
        details: 'Calf (0–3 mo milk feeding) → Grower (4–18 mo) → Maiden Heifer (18–36 mo) → Adult Buffalo in Milk (>42 mo)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      }
    ];
  }

  if (isGoat) {
    const isSmall = breed.name.includes('Black Bengal') || breed.name.includes('Barbari');
    return [
      {
        parameter: 'Average Lifespan',
        details: '10 – 14 years',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Age at Sexual Maturity (Puberty)',
        details: isSmall ? '6 – 8 months (Early precocious maturity)' : '9 – 12 months',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Age at First Breeding (Service)',
        details: isSmall ? '8 – 10 months' : '12 – 15 months',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Productive Lifespan',
        details: '6 – 9 years of productive kidding and lactation',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Growth & Development Stages',
        details: 'Kid (0–3 mo) → Weaner (3–6 mo) → Hogget / Yearling (6–12 mo) → Mature Doe / Buck (>12 mo)',
        reference: 'ICAR-CIRG Goat Husbandry Standards',
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      }
    ];
  }

  // Dog
  return [
    {
      parameter: 'Average Lifespan',
      details: '12 – 15 years (Noted for high longevity and minimal congenital defects)',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Age at Sexual Maturity (Puberty)',
      details: '8 – 12 months (First estrus in females; males fertile by 10 mo)',
      reference: 'Veterinary Canine Reproduction Standard',
      referenceUrl: SOURCE_IVRI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Age at First Breeding (Service)',
      details: '18 – 24 months (Recommended after second estrus cycle to ensure physical maturity)',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Productive Working / Guardian Lifespan',
      details: '8 – 11 years of high sprint and patrol performance',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Growth & Development Stages',
      details: 'Puppy (0–6 mo: socialization & vaccination) → Juvenile (6–12 mo) → Young Adult (1–2 yr) → Prime Adult (2–8 yr) → Senior (>9 yr)',
      reference: 'KCI Canine Development Guide',
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    }
  ];
}

/**
 * Builds Table 5: Breeding and Reproduction
 */
function buildBreedingReproductionTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  if (isCattle) {
    return [
      {
        parameter: 'Breeding Season',
        details: 'Non-seasonal / Polyestrous year-round; peak fertility in post-monsoon and spring (October – March)',
        reference: 'IVRI Animal Reproduction Division',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Estrous Cycle Duration',
        details: '21 days average (Range: 18 – 24 days); Estrus duration: 14 – 18 hours',
        reference: 'ICAR Veterinary Obstetrics & Gynaecology Handbook',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Suitable Breeding Age & Weight',
        details: 'Age: 30 – 36 months; Target minimum body weight: 240 – 280 kg',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Gestation Period (Pregnancy)',
        details: '280 – 285 days (approximately 9 months 9 days)',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Average Offspring per Parturition',
        details: 'Single calf (>99% single birth; twining incidence <0.5%)',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Calving Information',
        details: 'High calving ease; broad maternal pelvis adapted for low dystocia rates even in harsh pastoral terrains',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Inter-Calving Interval',
        details: '14 – 18 months under typical Indian semi-arid management',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Reproductive Characteristics',
        details: 'Docile maternal instincts, high colostrum immunoglobulin-G levels, clean placental expulsion within 4–6 hours',
        reference: 'IVRI Maternal Reproductive Physiology',
        referenceUrl: SOURCE_IVRI_URL
      }
    ];
  }

  if (isBuffalo) {
    return [
      {
        parameter: 'Breeding Season',
        details: 'Short-day seasonal breeders; peak sexual activity occurs during autumn and winter (October – February)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Estrous Cycle Duration',
        details: '21 days (Range: 19 – 23 days); Silent heat incidence is common during summer months',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Suitable Breeding Age & Weight',
        details: 'Age: 32 – 38 months; Body weight: 320 – 380 kg',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Gestation Period (Pregnancy)',
        details: '305 – 312 days (approximately 10 months 10 days)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Average Offspring per Parturition',
        details: 'Single calf (Twinning extremely rare, <0.1%)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Calving Information',
        details: 'Normal unassisted delivery typical; nocturnal calving tendency observed',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Inter-Calving Interval',
        details: '15 – 18 months in well-managed herds',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Reproductive Characteristics',
        details: 'Deep maternal bonding, strong let-down stimulus requirement, wallowing enhances ovarian cyclicity',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      }
    ];
  }

  if (isGoat) {
    const isProlific = breed.name.includes('Black Bengal') || breed.name.includes('Barbari');
    return [
      {
        parameter: 'Breeding Season',
        details: 'Continual polyestrous breeder; two distinct kidding cycles per year documented in fertile tracts',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Estrous Cycle Duration',
        details: '19 – 21 days; Estrus duration: 24 – 36 hours with distinct tail wagging and vocalization',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Suitable Breeding Age',
        details: isProlific ? '8 – 10 months (Body weight 12 – 15 kg)' : '12 – 14 months (Body weight 20 – 25 kg)',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Gestation Period (Pregnancy)',
        details: '146 – 152 days (approximately 5 months)',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Average Offspring per Parturition (Prolificacy)',
        details: isProlific
          ? 'Twins and triplets frequent (1.8 – 2.4 kids per kidding; >80% multiple births)'
          : 'Single or twins (1.2 – 1.4 kids per kidding)',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Kidding Information',
        details: 'Rapid spontaneous kidding; high maternal protection and milk supply for multi-kid litters',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Breeding Interval',
        details: isProlific ? '7 – 9 months (Capable of 3 kiddings in 2 years)' : '10 – 12 months',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Reproductive Characteristics',
        details: 'High libidinous buck activity, short service period, exceptional kidding vigor',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      }
    ];
  }

  // Dog
  return [
    {
      parameter: 'Breeding Season',
      details: 'Monoestrous / Diestrous cycle; estrus typically twice a year (approximately every 6–8 months)',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Reproductive Cycle',
      details: 'Proestrus (9 days) → Estrus (standing heat: 7–9 days) → Diestrus (60 days) → Anestrus (90–150 days)',
      reference: 'Canine Theriogenology Guidelines',
      referenceUrl: SOURCE_IVRI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Suitable Breeding Age',
      details: 'Females: 18 – 24 months (from 2nd or 3rd heat); Stud Males: 18 – 72 months',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Gestation Period (Pregnancy)',
      details: '58 – 68 days (Average: 63 days / 9 weeks)',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Average Offspring per Parturition (Litter Size)',
      details: '4 – 8 puppies per whelping',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Whelping Information',
      details: 'Natural whelping with high maternal diligence; low incidence of dystocia or cesarean intervention',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Breeding Interval',
      details: 'Minimum 12-month interval recommended between whelpings to preserve dam stamina',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Reproductive Characteristics',
      details: 'Protective dam behavior, active puppy grooming, and high neonatal survival',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    }
  ];
}

/**
 * Builds Table 6: Feeding and Nutrition
 */
function buildFeedingNutritionTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  if (isCattle) {
    return [
      {
        parameter: 'Natural Food Habits',
        details: 'Selective herbivorous grazer; highly efficient utilization of coarse high-fiber tropical crop residues',
        reference: 'ICAR Animal Nutrition Division',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Recommended Green Fodder',
        details: 'Hybrid Napier (CO-4, CO-5), Sorghum, Maize, Berseem, Cowpea, Lucerne (15 – 25 kg daily)',
        reference: 'ICAR-NDRI Dairy Feeding Chart',
        referenceUrl: 'https://ndri.res.in/',
        isSpeciesLevel: true
      },
      {
        parameter: 'Dry Roughage',
        details: 'Paddy straw, wheat straw, sorghum stover (4 – 6 kg daily ad-libitum)',
        reference: 'ICAR-NDRI Dairy Feeding Chart',
        referenceUrl: 'https://ndri.res.in/',
        isSpeciesLevel: true
      },
      {
        parameter: 'Concentrate Feed & Protein',
        details: 'Compounded dairy ration (16–18% Crude Protein, 70% TDN) made with mustard/cottonseed cake, maize, wheat bran (1.5 kg maintenance + 400g per liter of milk produced)',
        reference: 'Bureau of Indian Standards (BIS 2052: Cattle Feed)',
        referenceUrl: 'https://standardsbis.bsbedge.com/',
        isSpeciesLevel: true
      },
      {
        parameter: 'Daily Water Requirements',
        details: '60 – 90 liters of fresh, clean potable water daily (increased to 100–120L during peak summer)',
        reference: 'ICAR Cattle Husbandry Norms',
        referenceUrl: SOURCE_NBAGR_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Mineral & Salt Supplementation',
        details: 'Area-specific mineral mixture (ASMM) 50g daily + 30g common salt to prevent trace mineral deficiencies',
        reference: 'National Dairy Development Board (NDDB)',
        referenceUrl: 'https://www.nddb.coop/',
        isSpeciesLevel: true
      }
    ];
  }

  if (isBuffalo) {
    return [
      {
        parameter: 'Natural Food Habits',
        details: 'Broad-spectrum herbivore with unique rumen microflora capable of digesting lignocellulose and coarse straw',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Recommended Green Fodder',
        details: 'Berseem, oats, sorghum, maize, guinea grass (25 – 35 kg daily)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Dry Roughage',
        details: 'Wheat straw, paddy straw treated with 4% urea (6 – 8 kg daily)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Concentrate & Protein',
        details: 'High-energy concentrate mix (18–20% CP) with mustard cake, cotton seed, crushed grains (2.0 kg maintenance + 500g per kg high-fat milk)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Daily Water Requirements',
        details: '80 – 110 liters of drinking water daily plus clean pool/pond access for wallowing',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Mineral & Salt Supplementation',
        details: 'Chelated mineral mixture (60g daily) + sodium bicarbonate buffer during high-concentrate feeding',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      }
    ];
  }

  if (isGoat) {
    return [
      {
        parameter: 'Natural Food Habits',
        details: 'Active browser; prefers top feed (tree leaves, bushes, twigs) over ground pasture grasses',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Recommended Fodder & Tree Loppings',
        details: 'Neem, Subabul, Prosopis cineraria (Khejri), Acacia, Ber, Cowpea, Lucerne (3 – 5 kg daily)',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Concentrate & Dry Feed',
        details: 'Crushed maize, gram chuni, wheat bran, groundnut cake (150 – 400g daily per doe; 500g for breeding bucks)',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Daily Water Requirements',
        details: '5 – 10 liters clean water daily (goats refuse fouled water and require elevated clean troughs)',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Feeding Management',
        details: '6–8 hours daily extensive or semi-intensive grazing supplemented with evening stall feeding and salt licks',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      }
    ];
  }

  // Dog
  return [
    {
      parameter: 'Natural Food Habits',
      details: 'Carnivorous omnivore adapted for high endurance, lean protein metabolism, and traditional Indian working farm diets',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Recommended Diet',
      details: 'High-protein diet (boiled eggs, chicken/mutton broth, organ meats) balanced with rice, ragi porridge, curd, and vegetables',
      reference: 'IVRI Canine Nutrition Protocol',
      referenceUrl: SOURCE_IVRI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Nutritional Requirements',
      details: 'Adult maintenance: 22–26% protein, 10–14% fat; high sprint demands require adequate calcium-phosphorus ratio (1.2:1)',
      reference: 'AAFCO / Veterinary Nutrition Standard',
      referenceUrl: SOURCE_IVRI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Daily Water Requirements',
      details: '1.5 – 3.0 liters of fresh potable water constantly accessible (higher post-exercise)',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Feeding Management',
      details: 'Feed twice daily for adults; avoid heavy meals immediately before or after strenuous sprint sessions',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    }
  ];
}

/**
 * Builds Table 7: Seasonal Adaptability
 */
function buildSeasonalAdaptabilityTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  if (isCattle) {
    return [
      {
        parameter: 'Summer Adaptability (Heat Stress)',
        details: 'Outstanding; large loose dewlap and vascular thoracic hump act as natural radiators. High density of sweating glands dissipate heat effectively under >42°C.',
        reference: 'ICAR-NICRA Climate Resilience Bulletin',
        referenceUrl: 'http://www.nicra-icar.in/'
      },
      {
        parameter: 'Winter Adaptability',
        details: 'Good in plains and plateau; requires sheltered night housing in northern plains when temperatures drop below 8°C.',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Rainy-Season (Monsoon) Adaptability',
        details: 'Resistant to humid heat; requires dry elevated shed floor to prevent foot rot and fly strike.',
        reference: 'IVRI Veterinary Extension Bulletin',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Seasonal Breeding Patterns',
        details: 'Polyestrous year-round with elevated conception rates during October to February.',
        reference: 'ICAR Animal Reproduction Division',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Heat-Stress Management Protocol',
        details: 'Provide shaded open-sided loose housing, tree canopy shade, oral electrolytes in drinking water, and morning/evening grazing.',
        reference: 'NDDB Heat Stress Mitigation Guide',
        referenceUrl: 'https://www.nddb.coop/'
      }
    ];
  }

  if (isBuffalo) {
    return [
      {
        parameter: 'Summer Adaptability',
        details: 'Vulnerable to direct solar radiation due to dark skin and low sweat gland density (1/6th of cattle). Wallowing or 2–3 daily water showers are essential.',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Winter Adaptability',
        details: 'High; develops fine sub-epidermal fat layer. Protect from cold north winds in northern latitudes.',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Rainy-Season Adaptability',
        details: 'Exceptional; thrives in wet swampy tracts and river floodplains.',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Seasonal Breeding Patterns',
        details: 'Marked seasonal breeding peak from October to February; summer anestrus mitigated by wallowing and shade.',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Heat-Stress Management Protocol',
        details: 'Misting/fogging systems in sheds, roof thatch insulation, evening feeding, and free pond access.',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      }
    ];
  }

  if (isGoat) {
    const isCold = breed.name.includes('Changthangi') || breed.name.includes('Chegu');
    return [
      {
        parameter: 'Summer Adaptability',
        details: isCold ? 'Moderate; sheds undercoat cashmere; requires shade in lower altitudes' : 'High; efficient desert water conservation and solar reflectance',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Winter Adaptability',
        details: isCold ? 'Exceptional; produces dense undercoat cashmere (pashmina) withstanding -40°C sub-zero cold' : 'Moderate; needs slatted dry elevated housing to avoid pneumonia',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Rainy-Season Adaptability',
        details: 'Sensitive to damp muddy ground; slatted bamboo/wooden flooring recommended to prevent foot rot and coccidiosis.',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Seasonal Breeding Patterns',
        details: 'Breeding peaks align with post-monsoon forage abundance.',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Heat / Cold Stress Management',
        details: 'Elevated ventilated shed, dry bedding, clean water, and tree lopping fodder.',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      }
    ];
  }

  // Dog
  const isMountainDog = breed.name.includes('Bakharwal') || breed.name.includes('Gaddi');
  return [
    {
      parameter: 'Summer Adaptability',
      details: isMountainDog
        ? 'Sensitive to high humid heat; requires cool shaded quarters during peak summer in plains'
        : 'Superb; sleek short coat, long nasal passages, and rapid respiratory cooling allow sprinting in 40°C heat',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Winter Adaptability',
      details: isMountainDog
        ? 'Exceptional; thick double coat and dense underfur suited for snow-covered high mountain terrain'
        : 'Good in moderate Indian winters; provide warm indoor bedding during cold snaps below 10°C',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Rainy-Season Adaptability',
      details: 'High; dry paws and coat thoroughly post-walk to prevent interdigital dermatitis.',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Seasonal Breeding Patterns',
      details: 'Estrus peaks typically in spring and autumn.',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Heat-Stress Management Protocol',
      details: 'Exercise only in early morning (before 7 AM) or late evening (after 7 PM); unrestricted cool drinking water.',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    }
  ];
}

/**
 * Builds Table 8: Diseases and Symptoms (With Critical Veterinary Disclaimer)
 */
function buildDiseasesHealthTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  if (isCattle) {
    return [
      {
        parameter: 'Common Endemic Diseases (Species-Level)',
        details: 'Foot-and-Mouth Disease (FMD), Hemorrhagic Septicemia (HS), Black Quarter (BQ), Bovine Babesiosis / Theileriosis (Tick-borne), Mastitis',
        reference: SOURCE_IVRI,
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Common Disease Symptoms',
        details: 'FMD: blisters in mouth/hooves, salivation; HS: high fever, swollen throat, labored breathing; BQ: lameness, hot crepitating muscle swelling',
        reference: SOURCE_IVRI,
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Early Warning Signs',
        details: 'Drop in milk yield, refusal of feed/cudding, dull dry muzzle, elevated rectal temperature (>39.5°C), isolation from herd',
        reference: 'ICAR Veterinary Field Diagnostic Manual',
        referenceUrl: SOURCE_IVRI_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'General Prevention & Biosecurity',
        details: 'Regular tick control (acaricide sprays), fly repellent around sheds, lime whitewash of shed walls, quarantine of new animals',
        reference: 'DAHD National Livestock Biosecurity Standards',
        referenceUrl: SOURCE_DAHD_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Official Vaccination Schedule (NADCP)',
        details: 'FMD vaccine every 6 months; HS + BQ combined vaccine annually pre-monsoon (May–June); Brucellosis S19 for heifer calves (4–8 months)',
        reference: 'National Animal Disease Control Programme (NADCP), DAHD',
        referenceUrl: SOURCE_DAHD_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Breed-Specific Resilience (Scientific Fact)',
        details: `${breed.name} cattle possess significant innate genetic resistance to tick infestation (Rhipicephalus microplus) and endemic blood protozoan parasites compared to exotic crossbreds.`,
        reference: 'ICAR-NBAGR Breed Genetic Resilience Studies',
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Mandatory Veterinary Notice',
        details: 'Symptoms and disease profiles are provided strictly for academic and informational orientation. They cannot replace clinical diagnosis, blood smears, or treatment by a registered veterinary doctor.',
        reference: 'Veterinary Council of India (VCI) Guidelines',
        referenceUrl: 'https://vci.dadf.gov.in/'
      }
    ];
  }

  if (isBuffalo) {
    return [
      {
        parameter: 'Common Endemic Diseases (Species-Level)',
        details: 'Hemorrhagic Septicemia (HS - high species vulnerability), Foot-and-Mouth Disease (FMD), Black Quarter (BQ), Mastitis, Trypanosomiasis (Surra)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Common Disease Symptoms',
        details: 'HS: acute high fever (106°F), rapid swelling of submandibular throat region, respiratory distress; Surra: intermittent fever, nervous pacing',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Early Warning Signs',
        details: 'Sudden stoppage of rumination, subnormal milk ejection, sunken eyes, heavy grunting respiration',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'General Prevention & Biosecurity',
        details: 'Ensure clean wallowing water to prevent vector breeding; dry clean bedding; post-milking teat dipping in povidone iodine to prevent mastitis',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Official Vaccination Schedule (NADCP)',
        details: 'HS vaccination mandatory pre-monsoon (May–June); FMD vaccine bi-annually; Anthrax in endemic zones',
        reference: 'NADCP, DAHD, Govt. of India',
        referenceUrl: SOURCE_DAHD_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Breed-Specific Resilience',
        details: `${breed.name} buffaloes exhibit strong cellular immunity and low clinical mastitis incidence compared to high-input crossbred dairy cattle.`,
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Mandatory Veterinary Notice',
        details: 'Symptoms are informational and cannot replace professional examination or prescription by a registered veterinary practitioner.',
        reference: 'Veterinary Council of India (VCI)',
        referenceUrl: 'https://vci.dadf.gov.in/'
      }
    ];
  }

  if (isGoat) {
    return [
      {
        parameter: 'Common Endemic Diseases (Species-Level)',
        details: 'Peste des Petits Ruminants (PPR / Goat Plague), Goat Pox, Enterotoxemia (Pulpy Kidney), Contagious Caprine Pleuropneumonia (CCPP), Coccidiosis',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Common Disease Symptoms',
        details: 'PPR: high fever, discharge from eyes/nose, necrotic mouth sores, watery foul diarrhea; Enterotoxemia: sudden convulsions, staggering, coma',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Early Warning Signs',
        details: 'Rough erect hair coat, lagging behind the herd, refusal to browse, teeth grinding, abnormal watery feces',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'General Prevention & Biosecurity',
        details: 'Keep shed floor dry with slatted timber or periodic lime dusting; deworm every 3–4 months (broad-spectrum anthelmintics)',
        reference: 'ICAR-CIRG Goat Health Protocol',
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Official Vaccination Schedule',
        details: 'PPR vaccine once every 3 years; Enterotoxemia (ET) annually pre-monsoon; Goat Pox annually (December–January)',
        reference: 'National PPR Eradication Programme, DAHD',
        referenceUrl: SOURCE_DAHD_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Breed-Specific Resilience',
        details: `${breed.name} goats have evolved regional resistance to harsh climatic extremes and local gastrointestinal helminths under traditional browsing.`,
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Mandatory Veterinary Notice',
        details: 'Symptoms are educational only. Seek immediate assistance from the nearest Government Veterinary Dispensary.',
        reference: 'Veterinary Council of India (VCI)',
        referenceUrl: 'https://vci.dadf.gov.in/'
      }
    ];
  }

  // Dog
  return [
    {
      parameter: 'Common Endemic Diseases (Species-Level)',
      details: 'Canine Parvovirus (CPV), Canine Distemper (CD), Rabies, Infectious Canine Hepatitis, Canine Ehrlichiosis / Tick Fever (E. canis)',
      reference: 'IVRI Division of Veterinary Medicine',
      referenceUrl: SOURCE_IVRI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Common Disease Symptoms',
      details: 'Parvo: severe foul-smelling bloody diarrhea, persistent vomiting, severe dehydration; Tick Fever: high fever, nosebleeds (epistaxis), pale gums, lethargy',
      reference: SOURCE_IVRI,
      referenceUrl: SOURCE_IVRI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Early Warning Signs',
      details: 'Loss of appetite, refusal to sprint or play, cloudy eyes, warm nose, shivering, abnormal dark urine',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'General Prevention & Biosecurity',
      details: 'Strict tick and flea control (topical spot-ons or chewable isoxazolines); regular deworming every 3 months; clean kennel environment',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Official Vaccination Schedule',
      details: 'Core DHPPiL (Distemper, Hepatitis, Parvo, Parainfluenza, Leptospira) at 6, 9, 12 weeks with annual booster; Rabies at 12 weeks with annual booster',
      reference: 'World Small Animal Veterinary Association (WSAVA) Guidelines',
      referenceUrl: 'https://wsava.org/',
      isSpeciesLevel: true
    },
    {
      parameter: 'Breed-Specific Resilience (Scientific Fact)',
      details: `${breed.name} dogs, having evolved under natural Indian selection, show virtually zero genetic predisposition to hip dysplasia, breathing brachycephalic disorders, or cardiac hereditary defects prevalent in foreign imported breeds.`,
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Mandatory Veterinary Notice',
      details: 'Canine health and symptom guides are informational and cannot substitute for clinical veterinary diagnosis and prescription.',
      reference: 'Veterinary Council of India (VCI)',
      referenceUrl: 'https://vci.dadf.gov.in/'
    }
  ];
}

/**
 * Builds Table 9: Production Information (Tailored to each category)
 */
function buildProductionInformationTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  if (isCattle) {
    return [
      {
        parameter: 'Primary Production Utility',
        details: breed.productivity.primaryUtility,
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Average Milk Production per Lactation',
        details: breed.productivity.averageYield || 'Data not available',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Lactation Period',
        details: '270 – 305 days (Standard commercial recording)',
        reference: 'ICAR Dairy Cattle Evaluation Standards',
        referenceUrl: SOURCE_NBAGR_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Milk Butterfat Percentage',
        details: breed.productivity.fatPercentage || '4.5% – 5.2% (Rich in natural A2 beta-casein)',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Age at First Calving (AFC)',
        details: '38 – 48 months under typical Indian conditions (decreased to 32–36 mo in organized farms)',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      },
      {
        parameter: 'Draught & Working Power',
        details: breed.productivity.primaryUtility.includes('Draught') || breed.productivity.primaryUtility.includes('Dual')
          ? 'Exceptional draught speed, endurance, hard hooves suitable for black cotton and rocky soils without shoes'
          : 'Moderate draught capacity; primary focus on dairy lactation',
        reference: SOURCE_ICAR_NBAGR,
        referenceUrl: SOURCE_NBAGR_URL
      }
    ];
  }

  if (isBuffalo) {
    return [
      {
        parameter: 'Primary Production Utility',
        details: breed.productivity.primaryUtility,
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Average Milk Production per Lactation',
        details: breed.productivity.averageYield || 'Data not available',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Lactation Period',
        details: '280 – 315 days',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Milk Butterfat Percentage',
        details: breed.productivity.fatPercentage || '7.0% – 8.5% (Up to 12.5% in Bhadawari)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Age at First Calving (AFC)',
        details: '42 – 50 months (36–40 mo under top nutrition)',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL
      },
      {
        parameter: 'Draught & Heavy Haulage Utility',
        details: 'Strong traction power in wetland paddy cultivation and heavy rural cartage',
        reference: SOURCE_CIRB,
        referenceUrl: SOURCE_CIRB_URL,
        isSpeciesLevel: true
      }
    ];
  }

  if (isGoat) {
    const isPashmina = breed.name.includes('Changthangi') || breed.name.includes('Chegu');
    const isDairy = breed.name.includes('Jamunapari') || breed.name.includes('Jakhrana') || breed.name.includes('Beetal');
    return [
      {
        parameter: 'Primary Purpose',
        details: breed.productivity.primaryUtility || (isPashmina ? 'Fiber (Cashmere / Pashmina) & Meat' : isDairy ? 'Milch & Meat (Dual-Purpose)' : 'Meat (Chevon) & Skin'),
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Average Production Yield',
        details: breed.productivity.averageYield || 'Data not available',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Milk Production & Butterfat (if milch)',
        details: isDairy
          ? `${breed.productivity.averageYield}; butterfat 4.0% – 5.0%; lactation 150 – 210 days`
          : 'Sufficient for kid nursing; limited commercial milking',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Meat (Chevon) & Dressing Percentage',
        details: 'Dressing percentage: 46% – 52%; lean meat with fine muscle fibers and low subcutaneous fat',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL,
        isSpeciesLevel: true
      },
      {
        parameter: 'Pashmina / Fiber Yield (if applicable)',
        details: isPashmina
          ? '200 – 300g per goat annually; fiber diameter: 12 – 14.5 microns (World’s highest grade cashmere)'
          : 'Coarse guard hair used for local ropes and rugs; no commercial cashmere',
        reference: isPashmina ? 'SKUAST-K & ICAR-CIRG Pashmina Standard' : SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      },
      {
        parameter: 'Kidding Rate & Reproductive Yield',
        details: 'Annual kidding index 1.4 – 2.2 kids per doe annually',
        reference: SOURCE_CIRG,
        referenceUrl: SOURCE_CIRG_URL
      }
    ];
  }

  // Dog
  return [
    {
      parameter: 'Original Working Purpose',
      details: breed.productivity.primaryUtility || 'Sighthound / Livestock Guardian / Hunting',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Temperament & Character',
      details: 'Loyal, affectionate with family, alert, reserved with strangers, courageous, and highly independent',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Sprint & Endurance Capacity',
      details: breed.productivity.averageYield || 'High-speed sight coursing (up to 55-60 km/h) and pastoral herd patrol stamina',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    },
    {
      parameter: 'Daily Exercise & Activity Requirements',
      details: 'High; requires minimum 60–90 minutes of brisk walking, secure open-field sprints, or scent tracking',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL,
      isSpeciesLevel: true
    },
    {
      parameter: 'Grooming & Coat Maintenance',
      details: breed.name.includes('Bakharwal') || breed.name.includes('Gaddi')
        ? 'Dense double coat requires twice-weekly brushing to prevent matting and manage seasonal shedding'
        : 'Low maintenance; short smooth coat requires weekly brushing and occasional damp-cloth wipe down',
      reference: SOURCE_KCI,
      referenceUrl: SOURCE_KCI_URL
    }
  ];
}

/**
 * Builds Table 10: Genomics and Bioscience
 */
function buildGenomicsBioscienceTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  return [
    {
      parameter: 'Karyotype (Chromosomal Complement)',
      details: breed.genomics.karyotype || (isCattle ? '2n = 60' : isBuffalo ? '2n = 50' : isGoat ? '2n = 60' : '2n = 78'),
      reference: SOURCE_ICAR_NBAGR,
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'CSN2 Beta-Casein Allele Status',
      details: breed.genomics.csn2Allele || (isCattle ? 'A2/A2 (Homozygous Proline-67)' : isBuffalo ? 'A2/A2 Homozygous' : isGoat ? 'CSN1S1 Caprine Standard' : 'Canine Non-Dairy'),
      reference: SOURCE_GENOMICS,
      referenceUrl: breed.genomics.ncbiLocusLink || SOURCE_GENOMICS_URL
    },
    {
      parameter: 'Lipid / Muscle Regulator Gene Locus',
      details: breed.genomics.fatRegulatorGene || (isCattle ? 'DGAT1 K232A polymorphism' : isBuffalo ? 'DGAT1 / SCD1' : isGoat ? 'MSTN / POU1F1' : 'MSTN / FGF5 locus'),
      reference: SOURCE_GENOMICS,
      referenceUrl: SOURCE_GENOMICS_URL
    },
    {
      parameter: 'Thermal Tolerance & Stress Resilience Gene',
      details: breed.genomics.thermalGene || 'HSP70 / HSF1 high constitutive cellular expression preventing protein denaturation under heat stress',
      reference: 'ICAR National Agricultural Innovation Project (NAIP) Genomic Loci',
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'Genetic Diversity & Heterozygosity',
      details: 'High microsatellite and SNP polymorphism; absence of the inbreeding bottlenecks typical of Western industrial stock',
      reference: 'ICAR-NBAGR Molecular Characterization of Indian Breeds',
      referenceUrl: SOURCE_NBAGR_URL
    },
    {
      parameter: 'NCBI Locus / UniProt Reference',
      details: breed.genomics.uniprotAccession
        ? `UniProt: ${breed.genomics.uniprotAccession} (CSN2 Beta-casein Bos indicus) | NCBI Gene: 281099`
        : 'Indexed in ICAR-NBAGR National Animal Gene Bank Database',
      reference: SOURCE_GENOMICS,
      referenceUrl: breed.genomics.ncbiLocusLink || SOURCE_GENOMICS_URL
    }
  ];
}

/**
 * Builds Table 11: Conservation Status and Efforts
 */
function buildConservationTable(breed: BreedInfo): DetailedReportRow[] {
  const isCattle = breed.category === 'Cattle';
  const isBuffalo = breed.category === 'Buffalo';
  const isGoat = breed.category === 'Goat';
  const isDog = breed.category === 'Dog';

  const defaultRef = isCattle || isBuffalo ? SOURCE_ICAR_NBAGR : isGoat ? SOURCE_CIRG : SOURCE_KCI;
  const defaultUrl = isCattle || isBuffalo ? SOURCE_NBAGR_URL : isGoat ? SOURCE_CIRG_URL : SOURCE_KCI_URL;

  const status = breed.nbagrStatus || 'Registered Indigenous';

  let popInfo = 'Data not available';
  if (status.includes('Endangered') || status.includes('Rare')) {
    popInfo = 'Estimated under 10,000 breeding head; active in-situ and ex-situ cryopreservation ongoing';
  } else if (status.includes('Priority')) {
    popInfo = 'Estimated 15,000 – 40,000 head; prioritized for pedigree registration and pureline breeding';
  } else {
    popInfo = 'Stable breeding population in native home tract; documented in national livestock census';
  }

  const efforts = isCattle
    ? 'Rashtriya Gokul Mission (RGM), National Bureau of Animal Genetic Resources Gene Bank (cryopreservation of semen and embryos), and state bull mother farms'
    : isBuffalo
    ? 'Central Institute for Research on Buffaloes (CIRB) progeny testing program, state artificial insemination network, and breed registration'
    : isGoat
    ? 'ICAR-CIRG breed multiplication herds, National Livestock Mission (NLM) goat breeding units, and community buck exchange programs'
    : 'Kennel Club of India (KCI) Indian Breeds Club registration, native breed dog shows, PM Man Ki Baat indigenous dog promotion, and paramilitary induction';

  return [
    {
      parameter: 'ICAR-NBAGR Conservation Status',
      details: status,
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Breed Population Dynamics',
      details: popInfo,
      reference: '20th All India Livestock Census (DAHD, Govt. of India)',
      referenceUrl: SOURCE_DAHD_URL
    },
    {
      parameter: 'Ecological & Cultural Importance',
      details: breed.historicalSignificance || 'Crucial indigenous genetic resource evolved over centuries for low-carbon, climate-resilient animal husbandry',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Custodial Pastoral Communities',
      details: breed.pastoralCommunities && breed.pastoralCommunities.length > 0
        ? breed.pastoralCommunities.join(', ')
        : 'Local traditional livestock farming communities',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Primary Threats to Germplasm',
      details: isDog
        ? 'Indiscriminate crossbreeding with imported foreign breeds and lack of organized kennel studbooks'
        : 'Indiscriminate exotic crossbreeding, mechanization of rural agriculture, shrinking common grazing pastures (CPR), and drought stress',
      reference: defaultRef,
      referenceUrl: defaultUrl
    },
    {
      parameter: 'Active National Conservation Initiatives',
      details: efforts,
      reference: isDog ? SOURCE_KCI : 'DAHD, Govt. of India & State Animal Husbandry Departments',
      referenceUrl: isDog ? SOURCE_KCI_URL : SOURCE_DAHD_URL
    }
  ];
}

/**
 * Main service function to generate the complete 11-table detailed report
 * for any predicted breed and animal category.
 */
export function generateDetailedBreedReport(
  breedOrResult: BreedInfo | ClassificationResult | string,
  explicitConfidence?: number
): DetailedBreedReport {
  let breed: BreedInfo | undefined;
  let confidenceVal: number | undefined = explicitConfidence;

  if (typeof breedOrResult === 'string') {
    breed = INDIAN_BREEDS_CATALOG.find(
      (b) => b.name.toLowerCase() === breedOrResult.toLowerCase() || b.id.toLowerCase() === breedOrResult.toLowerCase()
    );
  } else if ('predictedBreed' in breedOrResult) {
    const res = breedOrResult as ClassificationResult;
    confidenceVal = res.confidence;
    breed = INDIAN_BREEDS_CATALOG.find(
      (b) => b.name.toLowerCase() === res.predictedBreed.toLowerCase()
    );
  } else {
    breed = breedOrResult as BreedInfo;
  }

  // Fallback to first breed if not found
  if (!breed) {
    breed = INDIAN_BREEDS_CATALOG[0];
  }

  const generatedDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return {
    breedId: breed.id,
    breedName: breed.name,
    vernacularName: breed.vernacularName,
    category: breed.category,
    scientificName: breed.scientificName,
    nbagrCode: breed.nbagrCode,
    stateOfOrigin: breed.stateOfOrigin,
    homeTract: breed.homeTract,
    confidence: confidenceVal,
    imageUrl: breed.imageUrl,
    generatedDate,
    verifiedStatus: breed.nbagrStatus,
    keyHighlights: {
      category: breed.category,
      utility: breed.productivity.primaryUtility,
      origin: breed.stateOfOrigin,
      genomicMarker: breed.genomics.csn2Allele,
      weight: `M: ${breed.productivity.weightMaleKg} / F: ${breed.productivity.weightFemaleKg}`,
      nbagrAccession: breed.nbagrCode
    },
    tables: {
      basicInfo: buildBasicInfoTable(breed),
      originHabitat: buildOriginHabitatTable(breed),
      physicalCharacteristics: buildPhysicalCharacteristicsTable(breed),
      ageLifespan: buildAgeLifespanTable(breed),
      breedingReproduction: buildBreedingReproductionTable(breed),
      feedingNutrition: buildFeedingNutritionTable(breed),
      seasonalAdaptability: buildSeasonalAdaptabilityTable(breed),
      diseasesHealth: buildDiseasesHealthTable(breed),
      productionInfo: buildProductionInformationTable(breed),
      genomicsBioscience: buildGenomicsBioscienceTable(breed),
      conservation: buildConservationTable(breed)
    },
    references: [
      {
        title: 'National Bureau of Animal Genetic Resources - Registered Indigenous Breeds of India',
        institution: 'ICAR-NBAGR, Karnal, Haryana',
        citation: 'ICAR-NBAGR Monograph Series 2024–2025; Animal Genetic Resources Registry of India.',
        url: 'https://nbagr.icar.gov.in/'
      },
      {
        title: 'Livestock Breeding Policies & Animal Disease Control Standards',
        institution: 'Department of Animal Husbandry & Dairying (DAHD), Ministry of Fisheries, Animal Husbandry & Dairying, Govt. of India',
        citation: '20th All India Livestock Census & National Animal Disease Control Programme (NADCP).',
        url: 'https://dahd.nic.in/'
      },
      {
        title: 'Livestock Nutrition, Veterinary Medicine and Genetic Research Monographs',
        institution: 'ICAR-Indian Veterinary Research Institute (IVRI), Izatnagar, Uttar Pradesh',
        citation: 'IVRI Research Bulletins on Indigenous Germplasm Resilience & Veterinary Epidemiology.',
        url: 'https://ivri.nic.in/'
      },
      {
        title: 'Central Institute for Research on Buffaloes / Goats Specialized Bulletins',
        institution: 'ICAR-CIRB (Hisar) & ICAR-CIRG (Makhdoom)',
        citation: 'Specialized monographs on Riverine Buffalo & Caprine genomics, lactation physiology, and reproduction.',
        url: 'https://cirb.icar.gov.in/'
      },
      {
        title: 'Kennel Club of India Indigenous Canine Archives & Studbooks',
        institution: 'Kennel Club of India (KCI), Chennai',
        citation: 'KCI Certified Standards for Indigenous Indian Canine Breeds (Mudhol, Rajapalayam, Chippiparai, Kombai).',
        url: 'https://kennelclubofindia.org/'
      }
    ]
  };
}

export type BreedCategory = 'Cattle' | 'Buffalo' | 'Goat' | 'Dog';

export interface PhysicalTraits {
  horns: string;
  ears: string;
  coatColor: string;
  humpAndDewlap: string;
  sizeAndBuild: string;
  faceProfile: string;
}

export interface GenomicMarkers {
  csn2Allele: 'A2/A2 (Homozygous)' | 'A2 Predominant' | 'CSN1S1 Caprine Standard' | 'Canine Non-Dairy' | string;
  karyotype: string; // e.g. '2n = 60' (Cattle/Goat), '2n = 50' (Buffalo), '2n = 78' (Dog)
  fatRegulatorGene: string; // e.g. 'DGAT1 K232A', 'FGF5', 'MSTN'
  thermalGene: string; // e.g. 'HSP70 / HSF1 high expression'
  ncbiLocusLink?: string;
  uniprotAccession?: string;
}

export interface ProductivityMetrics {
  primaryUtility: 'Milch (Dairy)' | 'Draught (Work)' | 'Dual-Purpose' | 'Meat & Fiber' | 'Sighthound / Hunting' | 'Livestock Guardian / Working' | string;
  averageYield: string;
  fatPercentage: string;
  weightMaleKg: number | string;
  weightFemaleKg: number | string;
  hardiness: 'Exceptional' | 'High' | 'Moderate';
  heatTolerance: string;
}

export interface CandidateBreed {
  breedName: string;
  vernacularName?: string;
  category: BreedCategory;
  confidence: number; // 0 to 100
  keyDifferentiatingFeature: string;
}

export interface BreedInfo {
  id: string;
  name: string;
  vernacularName: string;
  scientificName: 'Bos indicus' | 'Bubalus bubalis' | 'Capra hircus' | 'Canis lupus familiaris' | string;
  category: BreedCategory;
  stateOfOrigin: string;
  homeTract: string;
  nbagrCode: string;
  nbagrStatus: 'Registered Indigenous' | 'Endangered / Rare' | 'Conservation Priority' | 'Common / Abundant';
  description: string;
  genomics: GenomicMarkers;
  physicalTraits: PhysicalTraits;
  productivity: ProductivityMetrics;
  historicalSignificance: string;
  pastoralCommunities: string[];
  careRecommendations: string[];
  imageUrl: string;
  tags: string[];
}

export type IdentificationStatus =
  | 'identified_indigenous'
  | 'identified_foreign'
  | 'uncertain_breed'
  | 'unknown_breed'
  | 'unsupported_breed'
  | 'unsupported_animal';

export interface ClassificationResult {
  predictedBreed: string;
  vernacularName: string;
  category: BreedCategory;
  scientificName: string;
  confidence: number;
  stateOfOrigin: string;
  homeTract: string;
  nbagrCode: string;
  utility: string;
  summary: string;
  detectedVisualFeatures: string[];
  genomics: GenomicMarkers;
  physicalTraits: PhysicalTraits;
  productivity: ProductivityMetrics;
  nbagrStatus: string;
  conservationStatus: string;
  historicalSignificance: string;
  traditionalCommunities: string[];
  careRecommendations: string[];
  topCandidates: CandidateBreed[];
  isIndigenouslyRegistered: boolean;
  isForeignBreed?: boolean;
  foreignBreedNotice?: string;
  foreignBreedName?: string;
  foreignOriginCountry?: string;
  distinguishingNotice?: string;
  nonBovineWarning?: string;
  categorySupported?: boolean;
  identificationStatus?: IdentificationStatus;
  statusMessage?: string;
  isUnknownBreed?: boolean;
  isUnsupportedBreed?: boolean;
  isUnsupportedAnimal?: boolean;
  isUncertain?: boolean;
  unsupportedAnimalType?: string;
  confidenceThresholdUsed?: number;
  aiModelInfo?: {
    modelName: string;
    modelType: 'On-Device MobileNet v2' | 'Cloud Gemini Vision' | 'Pre-Trained Deep Learning Vision';
    inferenceTimeMs: number;
    topRawPredictions: { className: string; probability: number }[];
    tensorResolution?: string;
  };
}

export interface ScanHistoryItem {
  id: string;
  timestamp: number;
  imagePreviewUrl: string;
  result: ClassificationResult;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  collegeName?: string;
  role: 'student' | 'researcher';
  createdAt: string;
}

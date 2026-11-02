import { ClassificationResult, BreedCategory } from '../types/breed';
import { breedToClassificationResult, findCatalogBreed } from '../utils/classifierLogic';
import { INDIAN_BREEDS_CATALOG } from './indigenousBreeds';
import { generateBreedSvgDataUri } from '../utils/breedSvgBadge';

export interface SampleImageItem {
  id: string;
  title: string;
  subtitle: string;
  category: BreedCategory;
  state: string;
  imageUrl: string;
  precomputedResult: ClassificationResult;
}

function getResultFor(breedName: string, fallbackConfidence = 96): ClassificationResult {
  const breed = findCatalogBreed(breedName) || INDIAN_BREEDS_CATALOG[0];
  const res = breedToClassificationResult(breed, fallbackConfidence);
  const getRawClass = () => {
    switch (breed.category) {
      case 'Buffalo':
        return 'water buffalo, Bubalus bubalis';
      case 'Goat':
        return 'domestic goat, Capra hircus';
      case 'Dog':
        return 'hound, sighthound, Canis lupus familiaris';
      case 'Cattle':
      default:
        return 'ox, zebu, Bos indicus';
    }
  };

  return {
    ...res,
    aiModelInfo: {
      modelName: 'Google MobileNet v2 (Pre-Trained ImageNet CNN)',
      modelType: 'On-Device MobileNet v2',
      inferenceTimeMs: 42,
      topRawPredictions: [
        {
          className: getRawClass(),
          probability: parseFloat((fallbackConfidence / 100).toFixed(4))
        },
        {
          className: breed.category === 'Dog' ? 'whippet, greyhound' : breed.category === 'Goat' ? 'ibex, capra' : 'cattle, dairy cow',
          probability: 0.04
        }
      ],
      tensorResolution: '224 x 224 x 3 (RGB Float32)'
    }
  };
}

export const SAMPLE_BREED_IMAGES: SampleImageItem[] = [
  {
    id: 'sample-gir',
    title: 'Gir Cattle',
    subtitle: 'Convex forehead, pendulous leaf ears',
    category: 'Cattle',
    state: 'Gujarat',
    imageUrl: generateBreedSvgDataUri('Gir', 'Cattle', 'INDIA_CATTLE_0400_GIR_03009'),
    precomputedResult: getResultFor('Gir', 97)
  },
  {
    id: 'sample-murrah',
    title: 'Murrah Buffalo',
    subtitle: 'Tightly curled spiral horns, jet-black coat',
    category: 'Buffalo',
    state: 'Haryana & Punjab',
    imageUrl: generateBreedSvgDataUri('Murrah', 'Buffalo', 'INDIA_BUFFALO_1700_MURRAH_01001'),
    precomputedResult: getResultFor('Murrah', 98)
  },
  {
    id: 'sample-jamunapari',
    title: 'Jamunapari Goat',
    subtitle: 'Convex Roman nose, parrot-mouth, 30cm ears',
    category: 'Goat',
    state: 'Uttar Pradesh',
    imageUrl: generateBreedSvgDataUri('Jamunapari', 'Goat', 'INDIA_GOAT_2000_JAMUNAPARI_06001'),
    precomputedResult: getResultFor('Jamunapari', 96)
  },
  {
    id: 'sample-black-bengal',
    title: 'Black Bengal Goat',
    subtitle: 'Prolific dwarf meat goat, export quality skin',
    category: 'Goat',
    state: 'West Bengal',
    imageUrl: generateBreedSvgDataUri('Black Bengal', 'Goat', 'INDIA_GOAT_2400_BLACKBENGAL_06004'),
    precomputedResult: getResultFor('Black Bengal', 95)
  },
  {
    id: 'sample-mudhol',
    title: 'Mudhol Hound Dog',
    subtitle: 'Aerodynamic sighthound, Indian Army inducted',
    category: 'Dog',
    state: 'Karnataka',
    imageUrl: generateBreedSvgDataUri('Mudhol Hound', 'Dog', 'INDIA_DOG_0800_MUDHOL_09001'),
    precomputedResult: getResultFor('Mudhol Hound', 96)
  },
  {
    id: 'sample-rajapalayam',
    title: 'Rajapalayam Dog',
    subtitle: 'Milky-white coat, pink nose, royal boar hound',
    category: 'Dog',
    state: 'Tamil Nadu',
    imageUrl: generateBreedSvgDataUri('Rajapalayam', 'Dog', 'INDIA_DOG_1800_RAJAPALAYAM_09002'),
    precomputedResult: getResultFor('Rajapalayam', 97)
  },
  {
    id: 'sample-sahiwal',
    title: 'Sahiwal Cattle',
    subtitle: 'Reddish-dun coat, loose pendulous dewlap',
    category: 'Cattle',
    state: 'Punjab & Rajasthan',
    imageUrl: generateBreedSvgDataUri('Sahiwal', 'Cattle', 'INDIA_CATTLE_1700_SAHIWAL_03026'),
    precomputedResult: getResultFor('Sahiwal', 96)
  },
  {
    id: 'sample-kankrej',
    title: 'Kankrej Cattle',
    subtitle: 'Lyre-shaped curving horns, Sawai Chaal gait',
    category: 'Cattle',
    state: 'Gujarat & Rajasthan',
    imageUrl: generateBreedSvgDataUri('Kankrej', 'Cattle', 'INDIA_CATTLE_0400_KANKREJ_03014'),
    precomputedResult: getResultFor('Kankrej', 95)
  },
  {
    id: 'sample-ongole',
    title: 'Ongole Cattle',
    subtitle: 'Towering white giant, massive muscular hump',
    category: 'Cattle',
    state: 'Andhra Pradesh',
    imageUrl: generateBreedSvgDataUri('Ongole', 'Cattle', 'INDIA_CATTLE_0100_ONGOLE_03023'),
    precomputedResult: getResultFor('Ongole', 97)
  },
  {
    id: 'sample-kangayam',
    title: 'Kangayam Cattle',
    subtitle: 'Grey Kongu bull, black points, draught power',
    category: 'Cattle',
    state: 'Tamil Nadu',
    imageUrl: generateBreedSvgDataUri('Kangayam', 'Cattle', 'INDIA_CATTLE_1800_KANGAYAM_03013'),
    precomputedResult: getResultFor('Kangayam', 96)
  },
  {
    id: 'sample-vechur',
    title: 'Vechur Cattle',
    subtitle: 'Miniature dwarf cow, high fat medicinal A2 milk',
    category: 'Cattle',
    state: 'Kerala',
    imageUrl: generateBreedSvgDataUri('Vechur', 'Cattle', 'INDIA_CATTLE_1000_VECHUR_03030'),
    precomputedResult: getResultFor('Vechur', 98)
  },
  {
    id: 'sample-hallikar',
    title: 'Hallikar Cattle',
    subtitle: 'Mysore fast trotting bull, long backwards horns',
    category: 'Cattle',
    state: 'Karnataka',
    imageUrl: generateBreedSvgDataUri('Hallikar', 'Cattle', 'INDIA_CATTLE_0800_HALLIKAR_03010'),
    precomputedResult: getResultFor('Hallikar', 95)
  },
  {
    id: 'sample-jaffarabadi',
    title: 'Jaffarabadi Buffalo',
    subtitle: 'Heavyweight drooping horns & wide forehead',
    category: 'Buffalo',
    state: 'Gujarat',
    imageUrl: generateBreedSvgDataUri('Jaffarabadi', 'Buffalo', 'INDIA_BUFFALO_0400_JAFFARABADI_01003'),
    precomputedResult: getResultFor('Jaffarabadi', 96)
  },
  {
    id: 'sample-bhadawari',
    title: 'Bhadawari Buffalo',
    subtitle: 'Copper reddish coat, record 8-13% butterfat',
    category: 'Buffalo',
    state: 'Uttar Pradesh & MP',
    imageUrl: generateBreedSvgDataUri('Bhadawari', 'Buffalo', 'INDIA_BUFFALO_2000_BHADAWARI_01002'),
    precomputedResult: getResultFor('Bhadawari', 97)
  },
  {
    id: 'sample-toda',
    title: 'Toda Buffalo',
    subtitle: 'Wide crescent horns, Nilgiri sacred tribal breed',
    category: 'Buffalo',
    state: 'Tamil Nadu',
    imageUrl: generateBreedSvgDataUri('Toda', 'Buffalo', 'INDIA_BUFFALO_1800_TODA_01007'),
    precomputedResult: getResultFor('Toda', 96)
  },
  {
    id: 'sample-surti',
    title: 'Surti Buffalo',
    subtitle: 'Flat sickle horns, double white neck chevron collars',
    category: 'Buffalo',
    state: 'Gujarat',
    imageUrl: generateBreedSvgDataUri('Surti', 'Buffalo', 'INDIA_BUFFALO_0400_SURTI_01006'),
    precomputedResult: getResultFor('Surti', 95)
  },
  {
    id: 'sample-banni',
    title: 'Banni Buffalo',
    subtitle: 'Nocturnal grazing, drought resilient Kutch breed',
    category: 'Buffalo',
    state: 'Gujarat',
    imageUrl: generateBreedSvgDataUri('Banni', 'Buffalo', 'INDIA_BUFFALO_0400_BANNI_01011'),
    precomputedResult: getResultFor('Banni', 96)
  },
  {
    id: 'sample-pandharpuri',
    title: 'Pandharpuri Buffalo',
    subtitle: 'Long twisted sword horns extending to shoulders',
    category: 'Buffalo',
    state: 'Maharashtra',
    imageUrl: generateBreedSvgDataUri('Pandharpuri', 'Buffalo', 'INDIA_BUFFALO_1100_PANDHARPURI_01005'),
    precomputedResult: getResultFor('Pandharpuri', 96)
  }
];

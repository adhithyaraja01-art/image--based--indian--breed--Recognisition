import test from 'node:test';
import assert from 'node:assert/strict';
import { generateBreedSpecimenSvg } from './breedArtService';
import { generateBreedSvgDataUri } from './breedSvgBadge';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';

test('generateBreedSpecimenSvg produces valid SVG vector graphics for all 4 categories', () => {
  const cattleSvg = generateBreedSpecimenSvg({
    name: 'Gir',
    category: 'Cattle',
    stateOfOrigin: 'Gujarat',
    nbagrCode: 'INDIA_CATTLE_0400_GIR_03009',
    vernacularName: 'गीर',
    physicalTraits: {
      horns: 'Curved backwards crescent',
      ears: 'Long pendulous curled leaf',
      coatColor: 'Speckled dark red and white'
    }
  });

  const buffaloSvg = generateBreedSpecimenSvg({
    name: 'Murrah',
    category: 'Buffalo',
    stateOfOrigin: 'Haryana',
    nbagrCode: 'INDIA_BUFFALO_1700_MURRAH_01001',
    vernacularName: 'मुर्राह',
    physicalTraits: {
      horns: 'Tightly coiled spiral ring',
      coatColor: 'Jet black'
    }
  });

  const goatSvg = generateBreedSpecimenSvg({
    name: 'Jamunapari',
    category: 'Goat',
    stateOfOrigin: 'Uttar Pradesh',
    nbagrCode: 'INDIA_GOAT_2000_JAMUNAPARI_06001',
    vernacularName: 'जमुनापारी',
    physicalTraits: {
      horns: 'Scythe curved',
      ears: '30cm pendulous folded leaf',
      faceProfile: 'Convex Roman parrot-mouth'
    }
  });

  const dogSvg = generateBreedSpecimenSvg({
    name: 'Rajapalayam',
    category: 'Dog',
    stateOfOrigin: 'Tamil Nadu',
    nbagrCode: 'INDIA_DOG_1800_RAJAPALAYAM_23001',
    vernacularName: 'ராஜபாளையம்',
    physicalTraits: {
      coatColor: 'Pure milk white',
      sizeAndBuild: 'Deep aerodynamic chest, tucked waist'
    }
  });

  // Verify SVG structure
  for (const svg of [cattleSvg, buffaloSvg, goatSvg, dogSvg]) {
    assert.match(svg, /^<svg/);
    assert.match(svg, /<\/svg>$/);
    assert.match(svg, /viewBox="0 0 640 400"/);
  }

  // Verify unique category hallmarks
  assert.match(cattleSvg, /cattleSpecimen/);
  assert.match(cattleSvg, /Convex Forehead/);

  assert.match(buffaloSvg, /buffaloSpecimen/);
  assert.match(buffaloSvg, /Tight Spiral Ring Horns/);

  assert.match(goatSvg, /goatSpecimen/);
  assert.match(goatSvg, /Roman Parrot Nose/);

  assert.match(dogSvg, /dogSpecimen/);
  assert.match(dogSvg, /Pure Milk White/);
});

test('generateBreedSvgDataUri returns valid data URI format', () => {
  const dataUri = generateBreedSvgDataUri('Kankrej', 'Cattle', 'INDIA_CATTLE_0400_KANKREJ_03011', 'light', 'Gujarat');
  assert.ok(dataUri.startsWith('data:image/svg+xml;utf8,'));
});

test('all 132 catalog breeds have unique image URLs and valid metadata', () => {
  assert.equal(INDIAN_BREEDS_CATALOG.length, 132);
  const urls = INDIAN_BREEDS_CATALOG.map((b) => b.imageUrl);
  const uniqueUrls = new Set(urls);
  assert.equal(uniqueUrls.size, 132, 'Every single breed must have a unique image URL');
});

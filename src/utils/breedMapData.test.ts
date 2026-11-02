import test from 'node:test';
import assert from 'node:assert';
import { buildStateBreedIndex, getTopBreedHotspots } from './breedMapData';
import { INDIAN_BOVINE_BREEDS } from '../data/indigenousBreeds';
import indiaGeoData from '../data/indiaStatesGeo.json';

test('buildStateBreedIndex maps all breeds without errors', () => {
  const index = buildStateBreedIndex('All', 'All');
  assert.ok(index.size > 0, 'Index should contain states');
  
  // Gujarat should have notable breeds like Gir, Kankrej, Surti, etc.
  const gujarat = index.get('Gujarat');
  assert.ok(gujarat, 'Gujarat should be present in index');
  assert.ok(gujarat!.totalBreeds >= 5, 'Gujarat should have at least 5 breeds');
  assert.ok(gujarat!.cattleCount >= 3, 'Gujarat should have cattle');
  assert.ok(gujarat!.buffaloCount >= 1, 'Gujarat should have buffaloes');
});

test('buildStateBreedIndex filters by species correctly', () => {
  const cattleIndex = buildStateBreedIndex('Cattle', 'All');
  for (const [, summary] of cattleIndex) {
    assert.strictEqual(summary.buffaloCount, 0, 'Buffalo count must be 0 when filtering for Cattle');
    assert.strictEqual(summary.totalBreeds, summary.cattleCount, 'Total breeds must equal cattle count');
  }

  const buffaloIndex = buildStateBreedIndex('Buffalo', 'All');
  for (const [, summary] of buffaloIndex) {
    assert.strictEqual(summary.cattleCount, 0, 'Cattle count must be 0 when filtering for Buffalo');
    assert.strictEqual(summary.totalBreeds, summary.buffaloCount, 'Total breeds must equal buffalo count');
  }
});

test('getTopBreedHotspots returns top diverse livestock states', () => {
  const top = getTopBreedHotspots(5);
  assert.strictEqual(top.length, 5, 'Should return top 5 states');
  assert.ok(top[0].totalBreeds >= top[1].totalBreeds, 'Should be sorted in descending order of breed count');
  
  const stateNames = top.map(h => h.stateName);
  assert.ok(stateNames.includes('Maharashtra') || stateNames.includes('Gujarat') || stateNames.includes('Rajasthan'),
    'Top hotspots should include key pastoral states'
  );
});

test('GeoJSON contains valid state features matching Indian states', () => {
  assert.strictEqual(indiaGeoData.type, 'FeatureCollection');
  assert.ok(indiaGeoData.features.length >= 30, 'Should have at least 30 state/UT features');
  
  const featureNames = indiaGeoData.features.map(f => f.properties.name);
  assert.ok(featureNames.includes('Gujarat'));
  assert.ok(featureNames.includes('Rajasthan'));
  assert.ok(featureNames.includes('Maharashtra'));
  assert.ok(featureNames.includes('Tamil Nadu'));
  assert.ok(featureNames.includes('Punjab'));
  assert.ok(featureNames.includes('Haryana'));
});

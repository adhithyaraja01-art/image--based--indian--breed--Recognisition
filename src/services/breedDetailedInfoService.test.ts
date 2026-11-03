import { describe, it } from 'node:test';
import assert from 'node:assert';
import { generateDetailedBreedReport } from './breedDetailedInfoService';

describe('breedDetailedInfoService', () => {
  it('generates a complete 11-table report for a cattle breed (Gir)', () => {
    const report = generateDetailedBreedReport('Gir');
    assert.strictEqual(report.breedName, 'Gir');
    assert.strictEqual(report.category, 'Cattle');
    assert.strictEqual(report.scientificName, 'Bos indicus');
    assert.ok(report.tables.basicInfo.length >= 6);
    assert.ok(report.tables.originHabitat.length >= 6);
    assert.ok(report.tables.physicalCharacteristics.length >= 7);
    assert.ok(report.tables.ageLifespan.length >= 5);
    assert.ok(report.tables.breedingReproduction.length >= 7);
    assert.ok(report.tables.feedingNutrition.length >= 5);
    assert.ok(report.tables.seasonalAdaptability.length >= 5);
    assert.ok(report.tables.diseasesHealth.length >= 6);
    assert.ok(report.tables.productionInfo.length >= 5);
    assert.ok(report.tables.genomicsBioscience.length >= 5);
    assert.ok(report.tables.conservation.length >= 5);

    // Verify all rows have parameter, details, and reference
    Object.values(report.tables).forEach((table) => {
      table.forEach((row) => {
        assert.ok(row.parameter, 'Row parameter must not be empty');
        assert.ok(row.details, 'Row details must not be empty');
        assert.ok(row.reference, 'Row reference must not be empty');
      });
    });

    // Check mandatory veterinary disclaimer presence
    const vetNotice = report.tables.diseasesHealth.find(
      (r) => r.parameter === 'Mandatory Veterinary Notice'
    );
    assert.ok(vetNotice, 'Mandatory Veterinary Notice must exist in Diseases & Health table');
  });

  it('generates accurate 11-table reports for Buffalo, Goat, and Dog', () => {
    const buffaloReport = generateDetailedBreedReport('Murrah');
    assert.strictEqual(buffaloReport.category, 'Buffalo');
    assert.strictEqual(buffaloReport.scientificName, 'Bubalus bubalis');

    const goatReport = generateDetailedBreedReport('Black Bengal');
    assert.strictEqual(goatReport.category, 'Goat');
    assert.strictEqual(goatReport.scientificName, 'Capra hircus');

    const dogReport = generateDetailedBreedReport('Mudhol Hound');
    assert.strictEqual(dogReport.category, 'Dog');
    assert.strictEqual(dogReport.scientificName, 'Canis lupus familiaris');

    // Dog should have specific canine production details (sprint/working purpose)
    const dogPurpose = dogReport.tables.productionInfo.find(
      (r) => r.parameter === 'Original Working Purpose'
    );
    assert.ok(dogPurpose, 'Dog report must have Original Working Purpose');
  });

  it('works with confidence score from ClassificationResult', () => {
    const report = generateDetailedBreedReport('Sahiwal', 94);
    assert.strictEqual(report.confidence, 94);
    assert.strictEqual(report.breedName, 'Sahiwal');
  });

  it('generates accurate foreign breed report for Rottweiler and misspellings without falling back to Gir', () => {
    const rottweilerReport = generateDetailedBreedReport('Rottweiler', 92);
    assert.strictEqual(rottweilerReport.breedName, 'Rottweiler');
    assert.strictEqual(rottweilerReport.category, 'Dog');
    assert.strictEqual(rottweilerReport.stateOfOrigin, 'Germany');
    assert.strictEqual(rottweilerReport.scientificName, 'Canis lupus familiaris');
    assert.ok(rottweilerReport.verifiedStatus.includes('Exotic') || rottweilerReport.verifiedStatus.includes('Foreign'));
    assert.notStrictEqual(rottweilerReport.breedName, 'Gir');

    // Test common misspelling 'rotweiller'
    const rotweillerReport = generateDetailedBreedReport('rotweiller', 88);
    assert.strictEqual(rotweillerReport.breedName, 'Rottweiler');
    assert.strictEqual(rotweillerReport.category, 'Dog');
    assert.strictEqual(rotweillerReport.stateOfOrigin, 'Germany');
    assert.notStrictEqual(rotweillerReport.breedName, 'Gir');

    // Test Holstein Friesian foreign cattle
    const hfReport = generateDetailedBreedReport('Holstein Friesian', 95);
    assert.strictEqual(hfReport.breedName, 'Holstein Friesian (HF)');
    assert.strictEqual(hfReport.category, 'Cattle');
    assert.strictEqual(hfReport.scientificName, 'Bos taurus');
    assert.ok(hfReport.verifiedStatus.includes('Exotic') || hfReport.verifiedStatus.includes('Foreign'));
    assert.notStrictEqual(hfReport.breedName, 'Gir');
  });
});

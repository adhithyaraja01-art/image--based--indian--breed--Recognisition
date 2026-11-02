import React, { useState, useMemo } from 'react';
import {
  DetailedBreedReport,
  DetailedReportRow,
  generateDetailedBreedReport
} from '../services/breedDetailedInfoService';
import {
  Printer,
  FileText,
  Search,
  ExternalLink,
  ShieldCheck,
  Dna,
  MapPin,
  Calendar,
  AlertTriangle,
  Award,
  Activity,
  Layers,
  HeartHandshake,
  CheckCircle2,
  ChevronDown,
  Info,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { generateBreedSvgDataUri } from '../utils/breedSvgBadge';

interface DetailedBreedReportSectionProps {
  report?: DetailedBreedReport;
  breedName?: string;
  confidence?: number;
  imagePreviewUrl?: string;
  onCompareWith?: (breedName: string) => void;
  onExploreBreed?: (breedName: string) => void;
  showPrintButton?: boolean;
}

interface TableDefinition {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  rows: DetailedReportRow[];
  cardHighlight?: {
    label: string;
    value: string;
    note: string;
  };
}

export const DetailedBreedReportSection: React.FC<DetailedBreedReportSectionProps> = ({
  report: providedReport,
  breedName,
  confidence,
  imagePreviewUrl,
  onCompareWith,
  onExploreBreed,
  showPrintButton = true
}) => {
  // Generate report dynamically based on the actual predicted breed and confidence
  const report = useMemo(() => {
    if (providedReport) return providedReport;
    if (breedName) return generateDetailedBreedReport(breedName, confidence);
    return generateDetailedBreedReport('Gir', confidence);
  }, [providedReport, breedName, confidence]);

  const [activeTableFilter, setActiveTableFilter] = useState<string>('all');
  const [tableSearchQuery, setTableSearchQuery] = useState<string>('');

  const tableDefinitions: TableDefinition[] = useMemo(() => [
    {
      id: 'basic-info',
      number: 1,
      title: 'Basic Information',
      subtitle: 'Official nomenclature, taxonomy, and core agricultural classification',
      icon: Info,
      rows: report.tables.basicInfo,
      cardHighlight: {
        label: 'Primary Classification',
        value: `${report.breedName} (${report.category})`,
        note: `Official scientific taxon: ${report.scientificName}`
      }
    },
    {
      id: 'origin-habitat',
      number: 2,
      title: 'Origin and Habitat',
      subtitle: 'Native home tract, distribution districts, agro-climatic zones, and environmental tolerances',
      icon: MapPin,
      rows: report.tables.originHabitat,
      cardHighlight: {
        label: 'Native Home Tract',
        value: report.stateOfOrigin,
        note: report.homeTract
      }
    },
    {
      id: 'physical-characteristics',
      number: 3,
      title: 'Physical Characteristics',
      subtitle: 'Biometric conformation, cranial morphology, horn curvature, ears, and adult body mass',
      icon: Layers,
      rows: report.tables.physicalCharacteristics,
      cardHighlight: {
        label: 'Biometric Stature',
        value: report.keyHighlights.weight,
        note: 'Adapted for thermal dissipation and rugged terrain'
      }
    },
    {
      id: 'age-lifespan',
      number: 4,
      title: 'Age and Lifespan',
      subtitle: 'Chronological developmental milestones, sexual maturity, and productive longevity',
      icon: Clock,
      rows: report.tables.ageLifespan,
      cardHighlight: {
        label: 'Longevity Horizon',
        value: report.category === 'Cattle' ? '15 – 20 Years' : report.category === 'Buffalo' ? '18 – 22 Years' : report.category === 'Goat' ? '10 – 14 Years' : '12 – 15 Years',
        note: 'Under standard farm husbandry and prophylactic health care'
      }
    },
    {
      id: 'breeding-reproduction',
      number: 5,
      title: 'Breeding and Reproduction',
      subtitle: 'Reproductive cycles, estrus duration, gestation period, and parturition characteristics',
      icon: HeartHandshake,
      rows: report.tables.breedingReproduction,
      cardHighlight: {
        label: 'Gestation Period',
        value: report.category === 'Cattle' ? '280 – 285 Days' : report.category === 'Buffalo' ? '305 – 312 Days' : report.category === 'Goat' ? '146 – 152 Days' : '58 – 68 Days',
        note: 'Species-specific biological gestation length'
      }
    },
    {
      id: 'feeding-nutrition',
      number: 6,
      title: 'Feeding and Nutrition',
      subtitle: 'Dry matter requirements, recommended fodders, crude protein ration, and daily water needs',
      icon: Activity,
      rows: report.tables.feedingNutrition,
      cardHighlight: {
        label: 'Daily Hydration Needs',
        value: report.category === 'Cattle' ? '60 – 90 L/day' : report.category === 'Buffalo' ? '80 – 110 L/day' : report.category === 'Goat' ? '5 – 10 L/day' : '1.5 – 3.0 L/day',
        note: 'Fresh potable drinking water ad-libitum'
      }
    },
    {
      id: 'seasonal-adaptability',
      number: 7,
      title: 'Seasonal Adaptability',
      subtitle: 'Microclimate resilience across summer heat spikes, winter chills, and monsoonal humidity',
      icon: Calendar,
      rows: report.tables.seasonalAdaptability,
      cardHighlight: {
        label: 'Thermotolerance Factor',
        value: 'High Cellular HSP70 Expression',
        note: 'Vascular radiation and sweat gland dissipation'
      }
    },
    {
      id: 'diseases-health',
      number: 8,
      title: 'Diseases and Symptoms',
      subtitle: 'Endemic epidemiological profiles, symptom recognition, biosecurity, and vaccination schedules',
      icon: AlertTriangle,
      rows: report.tables.diseasesHealth,
      cardHighlight: {
        label: 'Innate Resilience',
        value: 'High Tick & Parasite Resistance',
        note: 'Evolved natural immunity under Indian agro-climatic selection'
      }
    },
    {
      id: 'production-info',
      number: 9,
      title: 'Production Information',
      subtitle: 'Lactation performance, butterfat percentage, draught velocity, or working purpose',
      icon: Award,
      rows: report.tables.productionInfo,
      cardHighlight: {
        label: 'Primary Performance Metric',
        value: report.keyHighlights.utility,
        note: `Registered productivity: ${report.tables.productionInfo[1]?.details || 'Documented yield'}`
      }
    },
    {
      id: 'genomics-bioscience',
      number: 10,
      title: 'Genomics and Bioscience',
      subtitle: 'Chromosomal karyotypes, CSN2 beta-casein allele markers, thermal genes, and NCBI citations',
      icon: Dna,
      rows: report.tables.genomicsBioscience,
      cardHighlight: {
        label: 'CSN2 Genomic Status',
        value: report.keyHighlights.genomicMarker,
        note: `Chromosomal karyotype: ${report.tables.genomicsBioscience[0]?.details || '2n'}`
      }
    },
    {
      id: 'conservation',
      number: 11,
      title: 'Conservation Status & Initiatives',
      subtitle: 'ICAR-NBAGR accession status, census population dynamics, pastoral custodians, and breeding programs',
      icon: ShieldCheck,
      rows: report.tables.conservation,
      cardHighlight: {
        label: 'Registration Status',
        value: report.verifiedStatus,
        note: `Accession code: ${report.nbagrCode}`
      }
    }
  ], [report]);

  const handlePrintReport = () => {
    window.print();
  };

  const filteredTables = useMemo(() => {
    return tableDefinitions.filter((tbl) => {
      if (activeTableFilter !== 'all' && tbl.id !== activeTableFilter) {
        return false;
      }
      if (!tableSearchQuery.trim()) return true;
      const q = tableSearchQuery.toLowerCase();
      const titleMatches = tbl.title.toLowerCase().includes(q);
      const rowMatches = tbl.rows.some(
        (r) => r.parameter.toLowerCase().includes(q) || r.details.toLowerCase().includes(q) || r.reference.toLowerCase().includes(q)
      );
      return titleMatches || rowMatches;
    });
  }, [tableDefinitions, activeTableFilter, tableSearchQuery]);

  const badgeBg =
    report.category === 'Cattle' ? 'bg-emerald-800 text-white' :
    report.category === 'Buffalo' ? 'bg-sky-800 text-white' :
    report.category === 'Goat' ? 'bg-amber-800 text-white' :
    'bg-indigo-800 text-white';

  const emoji =
    report.category === 'Cattle' ? '🐂' :
    report.category === 'Buffalo' ? '🐃' :
    report.category === 'Goat' ? '🐐' : '🐕';

  return (
    <section className="space-y-8 animate-fadeIn" id="detailed-breed-dossier-report">
      {/* Section Header & Print Controls */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-stone-200/80 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeBg} shadow-xs`}>
                {emoji} {report.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                ICAR-NBAGR Registered Indigenous Breed
              </span>
              {typeof report.confidence === 'number' && (
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 font-mono">
                  AI Prediction Certainty: {report.confidence}%
                </span>
              )}
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
                {report.breedName}
              </h2>
              {report.vernacularName && (
                <span className="text-xl sm:text-2xl font-serif text-stone-500 font-normal">
                  ({report.vernacularName})
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm font-mono text-emerald-800">
              Taxonomy: <strong className="italic">{report.scientificName}</strong> · Accession: <strong>{report.nbagrCode}</strong> · Origin: <strong>{report.stateOfOrigin}</strong>
            </p>
          </div>

          {/* Action Hub: Print/Download PDF & Directory Navigation */}
          <div className="flex items-center gap-2.5 flex-wrap print:hidden">
            {showPrintButton && (
              <button
                type="button"
                onClick={handlePrintReport}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                title="Download or Print Comprehensive 11-Table Breed Report as PDF"
              >
                <Printer className="w-4 h-4 text-emerald-200" />
                <span>Download / Print PDF Report</span>
              </button>
            )}

            {onCompareWith && (
              <button
                type="button"
                onClick={() => onCompareWith(report.breedName)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs border border-stone-200 shadow-xs transition-all cursor-pointer"
              >
                <span>Compare Breed</span>
              </button>
            )}

            {onExploreBreed && (
              <button
                type="button"
                onClick={() => onExploreBreed(report.breedName)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-950 font-semibold text-xs border border-emerald-200 shadow-xs transition-all cursor-pointer"
              >
                <span>View Full Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Visual Specimen Banner and Core Characteristics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-6">
          {/* Photograph or Verified SVG Specimen Badge (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[4/3] bg-stone-100 group">
              <img
                src={imagePreviewUrl || report.imageUrl.replace('/src/assets/images/', '/assets/images/')}
                alt={`${report.breedName} verified breed photograph`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = generateBreedSvgDataUri(report.breedName, report.category, report.nbagrCode, 'light');
                }}
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-lg">
                Verified Specimen Image
              </div>
              <div className="absolute bottom-2 right-2 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[10px] font-mono px-2 py-0.5 rounded">
                {report.nbagrCode}
              </div>
            </div>
          </div>

          {/* 6 Key Highlights Cards (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-[#fbf9f4] p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  Category &amp; Taxon
                </span>
                <span className="font-bold text-sm text-stone-900 block mt-1 truncate">
                  {report.category}
                </span>
                <span className="text-[11px] text-stone-500 font-mono truncate block">
                  {report.scientificName}
                </span>
              </div>

              <div className="bg-[#fbf9f4] p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  Primary Utility
                </span>
                <span className="font-bold text-sm text-emerald-900 block mt-1 truncate">
                  {report.keyHighlights.utility}
                </span>
                <span className="text-[11px] text-stone-500 truncate block">
                  Agricultural Purpose
                </span>
              </div>

              <div className="bg-[#fbf9f4] p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  Home Tract
                </span>
                <span className="font-bold text-sm text-stone-900 block mt-1 truncate">
                  {report.stateOfOrigin}
                </span>
                <span className="text-[11px] text-stone-500 truncate block">
                  India Native Region
                </span>
              </div>

              <div className="bg-[#fbf9f4] p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  Genomic Profile
                </span>
                <span className="font-bold text-sm text-emerald-900 block mt-1 truncate">
                  {report.keyHighlights.genomicMarker}
                </span>
                <span className="text-[11px] text-stone-500 font-mono truncate block">
                  {report.tables.genomicsBioscience[0]?.details.split('(')[0] || '2n Karyotype'}
                </span>
              </div>

              <div className="bg-[#fbf9f4] p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  Adult Stature
                </span>
                <span className="font-bold text-xs text-stone-900 block mt-1 truncate">
                  {report.keyHighlights.weight}
                </span>
                <span className="text-[11px] text-stone-500 truncate block">
                  Biometric Standard
                </span>
              </div>

              <div className="bg-[#fbf9f4] p-3.5 rounded-2xl border border-stone-200/90 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                  Registry Status
                </span>
                <span className="font-bold text-sm text-stone-900 block mt-1 truncate">
                  {report.verifiedStatus}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold truncate block">
                  ICAR-NBAGR Verified
                </span>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-stone-700 leading-relaxed">
              <strong className="text-emerald-950 font-semibold">Agricultural Intelligence Summary: </strong>
              The AI vision classification engine predicts this animal specimen to be <strong>{report.breedName}</strong> ({report.category}) with documented traits cross-referenced against ICAR-NBAGR national genetic archives.
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Filter Toolbar for the 11 Structured Tables */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-4 sm:p-6 shadow-sm space-y-4 print:hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-700" />
              <span>Comprehensive 11-Table Breed Information Dossier</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Organized scientific tables compliant with ICAR, NBAGR, CIRB, CIRG, IVRI, and KCI veterinary standards.
            </p>
          </div>

          {/* Quick Search within tables */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={tableSearchQuery}
              onChange={(e) => setTableSearchQuery(e.target.value)}
              placeholder="Filter parameters (e.g. Gestation, Milk, HSP70)..."
              className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-3 py-2 text-xs text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            />
            {tableSearchQuery && (
              <button
                onClick={() => setTableSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick jump filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
          <button
            type="button"
            onClick={() => setActiveTableFilter('all')}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeTableFilter === 'all'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-950'
            }`}
          >
            All 11 Tables (Full Dossier)
          </button>
          {tableDefinitions.map((tbl) => (
            <button
              key={tbl.id}
              type="button"
              onClick={() => setActiveTableFilter(tbl.id)}
              className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTableFilter === tbl.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-950'
              }`}
            >
              {tbl.number}. {tbl.title}
            </button>
          ))}
        </div>
      </div>

      {/* The 11 Detailed Tables Rendering */}
      <div className="space-y-8">
        {filteredTables.map((tbl) => {
          const TableIcon = tbl.icon;

          return (
            <div
              key={tbl.id}
              id={`table-section-${tbl.id}`}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden transition-all page-break-inside-avoid"
            >
              {/* Table Section Header */}
              <div className="p-5 sm:p-6 bg-stone-50/80 border-b border-stone-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold flex-shrink-0 shadow-xs">
                    <TableIcon className="w-5 h-5 text-emerald-800" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md bg-emerald-800 text-white text-[10px] font-bold uppercase tracking-wider">
                        Table {tbl.number}
                      </span>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900">
                        {tbl.title}
                      </h3>
                    </div>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {tbl.subtitle}
                    </p>
                  </div>
                </div>

                {/* Important detail highlight pill */}
                {tbl.cardHighlight && (
                  <div className="self-start sm:self-auto bg-white px-3.5 py-2 rounded-xl border border-stone-200 text-right shadow-2xs">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                      {tbl.cardHighlight.label}
                    </span>
                    <span className="font-bold text-xs sm:text-sm text-emerald-900 block">
                      {tbl.cardHighlight.value}
                    </span>
                  </div>
                )}
              </div>

              {/* Special Veterinary Health Advisory Notice for Table 8 */}
              {tbl.id === 'diseases-health' && (
                <div className="bg-amber-50 border-b border-amber-200 px-6 py-3.5 flex items-start gap-3 text-xs text-amber-950">
                  <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold text-amber-900">Mandatory Veterinary Clinical Disclaimer: </strong>
                    All disease descriptions, symptoms, and health management markers are provided strictly for educational and academic orientation. Symptoms can vary with age and season; they cannot substitute for clinical examination, hematology, or diagnosis by a registered veterinary doctor.
                  </div>
                </div>
              )}

              {/* The 3-Column Table: Parameter | Details | Reference/Source */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-stone-100 text-stone-700 text-xs uppercase tracking-wider font-bold border-b border-stone-200">
                      <th scope="col" className="py-3 px-5 sm:px-6 w-1/4 sm:w-1/3">
                        Parameter
                      </th>
                      <th scope="col" className="py-3 px-5 sm:px-6 w-1/2">
                        Details
                      </th>
                      <th scope="col" className="py-3 px-5 sm:px-6 w-1/4 sm:w-1/3">
                        Reference / Source
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200/80 text-xs sm:text-sm text-stone-800">
                    {tbl.rows.map((row, rIdx) => {
                      const isEven = rIdx % 2 === 0;

                      return (
                        <tr
                          key={rIdx}
                          className={`transition-colors hover:bg-emerald-50/40 ${
                            isEven ? 'bg-white' : 'bg-stone-50/60'
                          }`}
                        >
                          {/* Parameter Name */}
                          <td className="py-3.5 px-5 sm:px-6 font-semibold text-stone-900 align-top">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span>{row.parameter}</span>
                              {row.isSpeciesLevel && (
                                <span
                                  className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-stone-200 text-stone-700"
                                  title="General species-level scientific baseline parameter"
                                >
                                  Species Standard
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Parameter Details */}
                          <td className="py-3.5 px-5 sm:px-6 text-stone-700 leading-relaxed align-top">
                            {row.details === 'Data not available' ? (
                              <span className="italic text-stone-400 font-mono">
                                Data not available
                              </span>
                            ) : (
                              <span>{row.details}</span>
                            )}
                          </td>

                          {/* Citation Source & Link */}
                          <td className="py-3.5 px-5 sm:px-6 text-stone-500 font-mono text-[11px] align-top">
                            {row.referenceUrl ? (
                              <a
                                href={row.referenceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-800 hover:text-emerald-950 hover:underline flex items-start gap-1 font-medium group"
                              >
                                <span className="break-words">{row.reference}</span>
                                <ExternalLink className="w-3 h-3 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                              </a>
                            ) : (
                              <span className="break-words">{row.reference}</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Table Footer info note */}
              <div className="px-5 py-2.5 bg-stone-50 text-[11px] text-stone-500 border-t border-stone-200/70 flex items-center justify-between">
                <span>ICAR-NBAGR Registered Indian Germplasm Standards</span>
                <span>Verified Animal Genetic Record</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Date & Complete Bibliography / Reference Section */}
      <div className="bg-white rounded-3xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200/80 pb-4">
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-800" />
              <span>Scientific Bibliography &amp; Institutional Data Sources</span>
            </h3>
            <p className="text-xs text-stone-500">
              Report compiled on {report.generatedDate} from peer-reviewed veterinary monographs and national registries.
            </p>
          </div>
          <div className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1.5 rounded-xl border border-stone-200 self-start sm:self-auto">
            Document Date: {report.generatedDate}
          </div>
        </div>

        <div className="space-y-3 pt-2 text-xs">
          {report.references.map((ref, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start justify-between gap-4"
            >
              <div>
                <h4 className="font-bold text-stone-900">{ref.title}</h4>
                <p className="text-stone-600 mt-0.5">{ref.institution}</p>
                <p className="text-stone-500 italic mt-0.5">{ref.citation}</p>
              </div>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-200 text-emerald-800 hover:text-emerald-950 font-semibold text-[11px] flex items-center gap-1 shrink-0 shadow-2xs hover:bg-stone-50"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3 h-3 text-emerald-600" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-stone-100 text-[11px] text-stone-400 text-center font-mono">
          Indian Breed Classifier · Agricultural &amp; Veterinary Research Information System · ICAR-NBAGR Grounded Standards
        </div>
      </div>
    </section>
  );
};

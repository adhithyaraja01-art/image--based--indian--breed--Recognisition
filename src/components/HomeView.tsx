import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Compass,
  History,
  ShieldCheck,
  Dna,
  ArrowRight,
  Camera,
  MapPin,
  CheckCircle2,
  Zap,
  Activity,
  ChevronRight,
  FlaskConical,
  Award,
  Upload,
  RefreshCw,
  AlertCircle,
  Eye,
  Layers,
  Milk,
  ExternalLink,
  FileText
} from 'lucide-react';
import { ActiveTab } from './Navbar';
import { SAMPLE_BREED_IMAGES, SampleImageItem } from '../data/sampleImages';
import { INDIAN_BREEDS_CATALOG } from '../data/indigenousBreeds';
import { DailyFieldCalculator } from './DailyFieldCalculator';
import { BreedDistributionMap } from './BreedDistributionMap';
import { BreedInfo, BreedCategory, ClassificationResult } from '../types/breed';
import { classifyBreedImage } from '../services/classifierService';
import { generateBreedSvgDataUri } from '../utils/breedSvgBadge';
import { BreedSpecimenImage } from './BreedSpecimenImage';

interface HomeViewProps {
  onNavigate: (tab: ActiveTab, category?: BreedCategory | 'All') => void;
  onSelectSample: (sample: SampleImageItem) => void;
  onOpenBreedModal?: (breed: BreedInfo) => void;
  historyCount: number;
}

// 12 Iconic benchmark Indian indigenous breeds spanning all 4 animal categories
const POPULAR_BREED_IDS = [
  'gir-cattle',
  'sahiwal-cattle',
  'kangayam-cattle',
  'ongole-cattle',
  'murrah-buffalo',
  'jaffarabadi-buffalo',
  'bhadawari-buffalo',
  'jamunapari-goat',
  'barbari-goat',
  'black-bengal-goat',
  'mudhol-hound',
  'rajapalayam-dog'
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectSample,
  onOpenBreedModal,
  historyCount
}) => {
  const cattleCount = INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Cattle').length;
  const buffaloCount = INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Buffalo').length;
  const goatCount = INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Goat').length;
  const dogCount = INDIAN_BREEDS_CATALOG.filter((b) => b.category === 'Dog').length;
  const totalBreedsCount = INDIAN_BREEDS_CATALOG.length;

  const [selectedAnimalCategory, setSelectedAnimalCategory] = useState<BreedCategory | 'All'>('All');
  const [popularCategoryFilter, setPopularCategoryFilter] = useState<BreedCategory | 'All'>('All');

  const popularBreeds = INDIAN_BREEDS_CATALOG.filter((b) => {
    const isPopular = POPULAR_BREED_IDS.includes(b.id);
    if (!isPopular) return false;
    if (popularCategoryFilter === 'All') return true;
    return b.category === popularCategoryFilter;
  });

  // Prominent Classification Card State
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isClassifying, setIsClassifying] = useState<boolean>(false);
  const [classificationResult, setClassificationResult] = useState<ClassificationResult | null>(null);
  const [classificationError, setClassificationError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const classificationCardRef = useRef<HTMLDivElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setSelectedImage(base64);
      setClassificationResult(null);
      setClassificationError(null);
    };
    reader.readAsDataURL(file);
  };

  const handleIdentifyBreed = async () => {
    if (!selectedImage) return;

    setIsClassifying(true);
    setClassificationError(null);

    try {
      // Execute real AI classification engine (MobileNet on-device + Gemini Cloud Vision)
      const result = await classifyBreedImage({
        imageBase64: selectedImage,
        category: selectedAnimalCategory !== 'All' ? selectedAnimalCategory : undefined,
        engine: 'auto'
      });
      setClassificationResult(result);
    } catch (err: any) {
      console.error('Home classifier error:', err);
      setClassificationError(
        err.message || 'Unable to classify specimen. Please ensure the photograph clearly shows the animal profile in daylight.'
      );
    } finally {
      setIsClassifying(false);
    }
  };

  const handleResetInlineClassifier = () => {
    setSelectedImage(null);
    setClassificationResult(null);
    setClassificationError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const scrollToClassifierWithCategory = (cat?: BreedCategory) => {
    if (cat) {
      setSelectedAnimalCategory(cat);
    }
    classificationCardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 sm:space-y-16 animate-fadeIn">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-white border border-stone-200/90 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
          {/* Hero Left Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>ICAR-NBAGR National Registry: {totalBreedsCount} Indigenous Breeds</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 leading-[1.15] tracking-tight">
              Discover India&apos;s Indigenous{' '}
              <span className="text-emerald-800">Cattle, Buffalo, Goat &amp; Dog</span> Breeds
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              AI-assisted breed identification and comprehensive information on India&apos;s {totalBreedsCount} certified native breeds across four animal categories—registered for agricultural biodiversity conservation, A2 genomics, sustainable dairy farming, and canine heritage preservation.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => scrollToClassifierWithCategory()}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <Camera className="w-4 h-4 text-emerald-200" />
                <span>Identify a Breed</span>
              </button>

              <button
                onClick={() => onNavigate('breeds')}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-950 font-semibold text-sm border border-stone-200 hover:border-emerald-300 transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-emerald-700" />
                <span>Explore Breeds ({totalBreedsCount})</span>
              </button>
            </div>

            {/* Quick Stats Metric Bar with all 4 Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-100">
              <div
                onClick={() => onNavigate('breeds', 'Cattle')}
                className="cursor-pointer group hover:bg-emerald-50/50 p-2 rounded-xl transition-colors"
              >
                <span className="text-xs text-stone-500 block group-hover:text-emerald-800">🐂 Cattle</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-emerald-900 tabular-nums">
                  {cattleCount} Breeds
                </span>
                <span className="text-[11px] text-stone-400 block">Bos indicus (Zebu)</span>
              </div>
              <div
                onClick={() => onNavigate('breeds', 'Buffalo')}
                className="cursor-pointer group hover:bg-emerald-50/50 p-2 rounded-xl transition-colors"
              >
                <span className="text-xs text-stone-500 block group-hover:text-emerald-800">🐃 Buffalo</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-emerald-900 tabular-nums">
                  {buffaloCount} Breeds
                </span>
                <span className="text-[11px] text-stone-400 block">Bubalus bubalis</span>
              </div>
              <div
                onClick={() => onNavigate('breeds', 'Goat')}
                className="cursor-pointer group hover:bg-emerald-50/50 p-2 rounded-xl transition-colors"
              >
                <span className="text-xs text-stone-500 block group-hover:text-emerald-800">🐐 Goat</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-amber-800 tabular-nums">
                  {goatCount} Breeds
                </span>
                <span className="text-[11px] text-stone-400 block">Capra hircus</span>
              </div>
              <div
                onClick={() => onNavigate('breeds', 'Dog')}
                className="cursor-pointer group hover:bg-emerald-50/50 p-2 rounded-xl transition-colors"
              >
                <span className="text-xs text-stone-500 block group-hover:text-emerald-800">🐕 Dog</span>
                <span className="text-xl sm:text-2xl font-serif font-bold text-indigo-900 tabular-nums">
                  {dogCount} Breeds
                </span>
                <span className="text-[11px] text-stone-400 block">Canis lupus familiaris</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: High-Quality Pastoral Photograph (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200/90 aspect-[4/3] bg-stone-100 group">
              <img
                src="/assets/images/specimen_gir_cow_1792850390572.jpg"
                alt="Indigenous Indian Gir Cow in natural pastoral farm habitat"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = generateBreedSvgDataUri('Gir Cattle', 'Cattle', 'ICAR 03009', 'light');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-700 text-white">
                    ICAR-NBAGR 03009
                  </span>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-stone-950">
                    A2/A2 Milch
                  </span>
                </div>
                <p className="font-serif font-bold text-base text-white">Gir Cow (Bos indicus)</p>
                <p className="text-xs text-stone-200">Saurashtra peninsula &amp; Gir sanctuary tract, Gujarat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR ANIMAL CATEGORY CARDS */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
              <Layers className="w-3.5 h-3.5 text-emerald-700" />
              <span>Indigenous Animal Categories</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
              Explore India&apos;s Native Livestock &amp; Canine Species
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Select an animal category to browse verified breeds, biological markers, milk and draught performance, or start a targeted AI classification.
            </p>
          </div>
          <button
            onClick={() => onNavigate('breeds')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>View All {totalBreedsCount} Breeds</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Cattle */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                  🐂
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {cattleCount} Breeds
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                Indigenous Cattle
              </h3>
              <p className="text-xs font-mono text-emerald-800 mt-0.5">
                Bos indicus · Zebu Humped
              </p>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                Characterized by muscular thoracic humps, large pendulous dewlap radiators, 100% homozygous <em>CSN2</em> A2/A2 beta-casein genetics, and tick resistance.
              </p>
              <div className="mt-3 text-[11px] text-stone-500">
                <strong className="text-stone-700">Iconic Breeds:</strong> Gir, Sahiwal, Kangayam, Ongole, Rathi, Kankrej.
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-2">
              <button
                onClick={() => onNavigate('breeds', 'Cattle')}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold text-center transition-all cursor-pointer shadow-xs"
              >
                Explore Cattle
              </button>
              <button
                onClick={() => scrollToClassifierWithCategory('Cattle')}
                className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold transition-all cursor-pointer border border-emerald-200"
                title="Classify Cattle Specimen"
              >
                Classify
              </button>
            </div>
          </div>

          {/* Card 2: Buffalo */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-900 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                  🐃
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-800 border border-sky-200">
                  {buffaloCount} Breeds
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                Riverine Buffalo
              </h3>
              <p className="text-xs font-mono text-sky-800 mt-0.5">
                Bubalus bubalis · 2n=50
              </p>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                Renowned for dense milk with 7.0–13.5% butterfat, dark melanin pigmentation, wallowing heat dissipation, and powerful draught resilience.
              </p>
              <div className="mt-3 text-[11px] text-stone-500">
                <strong className="text-stone-700">Iconic Breeds:</strong> Murrah, Jaffarabadi, Bhadawari, Nili-Ravi, Pandharpuri.
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-2">
              <button
                onClick={() => onNavigate('breeds', 'Buffalo')}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold text-center transition-all cursor-pointer shadow-xs"
              >
                Explore Buffalo
              </button>
              <button
                onClick={() => scrollToClassifierWithCategory('Buffalo')}
                className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold transition-all cursor-pointer border border-emerald-200"
                title="Classify Buffalo Specimen"
              >
                Classify
              </button>
            </div>
          </div>

          {/* Card 3: Goat */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                  🐐
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  {goatCount} Breeds
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                Indigenous Goat
              </h3>
              <p className="text-xs font-mono text-amber-800 mt-0.5">
                Capra hircus · 2n=60
              </p>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                Vital for smallholders and arid pastoralism. Renowned for prolific twinning (Black Bengal), rich dairy (Jamunapari), and world-famous pashmina cashmere (Changthangi).
              </p>
              <div className="mt-3 text-[11px] text-stone-500">
                <strong className="text-stone-700">Iconic Breeds:</strong> Jamunapari, Barbari, Black Bengal, Changthangi, Sirohi.
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-2">
              <button
                onClick={() => onNavigate('breeds', 'Goat')}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold text-center transition-all cursor-pointer shadow-xs"
              >
                Explore Goats
              </button>
              <button
                onClick={() => scrollToClassifierWithCategory('Goat')}
                className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold transition-all cursor-pointer border border-emerald-200"
                title="Classify Goat Specimen"
              >
                Classify
              </button>
            </div>
          </div>

          {/* Card 4: Dog */}
          <div className="bg-white rounded-3xl border border-stone-200/90 p-6 shadow-sm hover:shadow-md hover:border-emerald-600 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                  🐕
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                  {dogCount} Breeds
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                Indigenous Dog
              </h3>
              <p className="text-xs font-mono text-indigo-800 mt-0.5">
                Canis lupus familiaris · 2n=78
              </p>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                Ancient sight hounds and pastoral working canines with aerodynamic cranial contours, high sprint stamina, protective guardianship, and deep natural resilience.
              </p>
              <div className="mt-3 text-[11px] text-stone-500">
                <strong className="text-stone-700">Iconic Breeds:</strong> Mudhol Hound, Rajapalayam, Chippiparai, Kombai, Gaddi Kutta.
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-2">
              <button
                onClick={() => onNavigate('breeds', 'Dog')}
                className="flex-1 py-2 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold text-center transition-all cursor-pointer shadow-xs"
              >
                Explore Dogs
              </button>
              <button
                onClick={() => scrollToClassifierWithCategory('Dog')}
                className="py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold transition-all cursor-pointer border border-emerald-200"
                title="Classify Dog Specimen"
              >
                Classify
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROMINENT IMAGE CLASSIFICATION CARD */}
      <section ref={classificationCardRef} className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Deep Learning Diagnostic Station</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
              Instant Image Classification
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Upload a photograph or capture a live animal specimen to evaluate species, cranial, horn, dewlap, and coat conformation against certified Indian breeds.
            </p>
          </div>
          <button
            onClick={() => onNavigate('classify')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>Advanced Classifier View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* The Prominent White Card */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-sm">
          {/* Target Animal Category Focus Bar */}
          <div className="mb-6 p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Animal Category Filter:
              </span>
              <span className="text-xs text-stone-500">
                {selectedAnimalCategory === 'All' ? 'Auto-Detect Across All 99 Breeds' : `${selectedAnimalCategory} Specific`}
              </span>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              {(['All', 'Cattle', 'Buffalo', 'Goat', 'Dog'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedAnimalCategory(cat)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedAnimalCategory === cat
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'bg-white text-stone-700 hover:bg-emerald-50 border border-stone-200'
                  }`}
                >
                  {cat === 'All' ? '⚡ Auto-Detect' : cat === 'Cattle' ? '🐂 Cattle' : cat === 'Buffalo' ? '🐃 Buffalo' : cat === 'Goat' ? '🐐 Goat' : '🐕 Dog'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input & Preview Controls (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="home-upload-file"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
                id="home-camera-file"
              />

              {!selectedImage ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-stone-300 hover:border-emerald-600 bg-stone-50/70 hover:bg-emerald-50/30 rounded-2xl p-8 text-center cursor-pointer transition-all group"
                  role="button"
                  tabIndex={0}
                  aria-label="Upload Image or Take Photo"
                >
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Upload className="w-7 h-7 text-emerald-800" />
                  </div>
                  <h3 className="font-semibold text-base text-stone-900">
                    Upload Animal Photograph
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                    Drag and drop or browse JPG, PNG, WEBP. For optimal accuracy, provide a full lateral profile in natural light.
                  </p>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 aspect-[4/3]">
                  <img
                    src={selectedImage}
                    alt="Animal Specimen Preview"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={handleResetInlineClassifier}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-stone-900/80 hover:bg-stone-900 text-white text-xs font-semibold shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Change Image</span>
                  </button>
                </div>
              )}

              {/* Action Buttons: Upload, Camera, Identify */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs border border-stone-200 shadow-xs cursor-pointer transition-all"
                >
                  <Upload className="w-4 h-4 text-emerald-700" />
                  <span>Upload Image</span>
                </button>

                <button
                  type="button"
                  onClick={() => cameraInputRef.current?.click()}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 font-semibold text-xs border border-stone-200 shadow-xs cursor-pointer transition-all"
                >
                  <Camera className="w-4 h-4 text-emerald-700" />
                  <span>Camera Option</span>
                </button>

                <button
                  type="button"
                  onClick={handleIdentifyBreed}
                  disabled={!selectedImage || isClassifying}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm shadow-md transition-all cursor-pointer ${
                    !selectedImage
                      ? 'bg-stone-200 text-stone-400 cursor-not-allowed shadow-none'
                      : isClassifying
                      ? 'bg-emerald-700 text-white cursor-wait'
                      : 'bg-emerald-800 hover:bg-emerald-900 text-white'
                  }`}
                >
                  {isClassifying ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full" />
                      <span>Extracting Conformation Features...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-emerald-200" />
                      <span>Identify Breed</span>
                    </>
                  )}
                </button>
              </div>

              {/* Sample Quick Selector */}
              <div className="pt-2">
                <p className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2">
                  Or Test With Curated Reference Specimens:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SAMPLE_BREED_IMAGES.slice(0, 4).map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => {
                        setSelectedImage(sample.imageUrl);
                        setClassificationResult(null);
                        setClassificationError(null);
                      }}
                      className="p-2 rounded-xl border border-stone-200 hover:border-emerald-500 bg-stone-50 hover:bg-emerald-50/50 text-left transition-all cursor-pointer group"
                    >
                      <p className="font-bold text-xs text-stone-900 group-hover:text-emerald-800 truncate">
                        {sample.title}
                      </p>
                      <p className="text-[10px] text-stone-500 truncate">{sample.state}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results / Feedback Panel (6 Cols) */}
            <div className="lg:col-span-6 bg-[#fbf9f4] rounded-2xl border border-stone-200/80 p-5 sm:p-6 min-h-[360px] flex flex-col justify-between">
              {isClassifying ? (
                <div className="flex-1 flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center animate-spin">
                    <RefreshCw className="w-7 h-7 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-stone-900">
                      Evaluating Bovine Morphometrics...
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 max-w-xs">
                      On-device neural network and cloud vision inspecting dorsal hump volume, horn curvature, and ear length.
                    </p>
                  </div>
                </div>
              ) : classificationError ? (
                <div className="flex-1 flex flex-col items-center justify-center py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-stone-900">Classification Note</h4>
                  <p className="text-xs text-stone-600 max-w-sm">{classificationError}</p>
                  <button
                    onClick={handleIdentifyBreed}
                    className="px-4 py-2 rounded-xl bg-emerald-800 text-white text-xs font-semibold cursor-pointer"
                  >
                    Retry Analysis
                  </button>
                </div>
              ) : classificationResult ? (
                (() => {
                  const matchedBreed = INDIAN_BREEDS_CATALOG.find(
                    (b: BreedInfo) => b.name.toLowerCase() === classificationResult.predictedBreed.toLowerCase()
                  ) || INDIAN_BREEDS_CATALOG[0];
                  const confPercent = Math.round(
                    classificationResult.confidence > 1
                      ? classificationResult.confidence
                      : classificationResult.confidence * 100
                  );

                  return (
                    <div className="space-y-4">
                      {/* Top Breed Header */}
                      <div>
                        {classificationResult.isForeignBreed && (
                          <div className="mb-3 p-3 rounded-xl bg-amber-500/15 border-2 border-amber-500/50 text-amber-950 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-md bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider">
                                Exotic Specimen
                              </span>
                              <span className="text-xs font-bold text-amber-900">
                                This uploaded image is identified as Foreign Breed
                              </span>
                            </div>
                            <p className="text-[11px] text-amber-800 leading-relaxed">
                              Identified as <strong>{classificationResult.predictedBreed}</strong> (Origin: {classificationResult.stateOfOrigin}). This breed is of foreign origin and is not an indigenous breed registered under ICAR-NBAGR.
                            </p>
                          </div>
                        )}

                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold flex items-center gap-1 ${
                            classificationResult.isForeignBreed
                              ? 'bg-amber-100 text-amber-900 border border-amber-300'
                              : 'bg-emerald-100 text-emerald-900'
                          }`}>
                            {classificationResult.isForeignBreed ? (
                              <>
                                <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                                Foreign Breed
                              </>
                            ) : (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                                Identified Match
                              </>
                            )}
                          </span>
                          <span className="text-xs font-mono text-stone-500">
                            {classificationResult.category} · {classificationResult.stateOfOrigin}
                          </span>
                        </div>

                        <h3 className="font-serif text-2xl font-bold text-stone-900">
                          {classificationResult.predictedBreed}
                          {classificationResult.vernacularName && (
                            <span className="text-sm font-normal text-stone-500 ml-2">
                              ({classificationResult.vernacularName})
                            </span>
                          )}
                        </h3>
                        <p className="text-xs font-mono text-emerald-800 mt-0.5">
                          {classificationResult.scientificName} · {classificationResult.nbagrCode}
                        </p>
                      </div>

                      {/* Confidence Progress Bar */}
                      <div className="space-y-1.5 bg-white p-3.5 rounded-xl border border-stone-200/80">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-stone-700">Classification Confidence</span>
                          <span className="font-mono font-bold text-emerald-800">
                            {confPercent}%
                          </span>
                        </div>
                        <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-emerald-600 h-full rounded-full transition-all duration-700"
                            style={{ width: `${confPercent}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-stone-500 mt-1">
                          {confPercent >= 80
                            ? 'High-confidence phenotypic alignment with verified breed standard.'
                            : 'Moderate confidence. Inspecting lateral profile and horn curvature recommended.'}
                        </p>
                      </div>

                      {/* Key Trait Badges */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-white p-2.5 rounded-xl border border-stone-200/80">
                          <span className="text-stone-400 block text-[10px]">Genomic Marker</span>
                          <span className="font-bold text-emerald-800">{classificationResult.genomics.csn2Allele}</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-stone-200/80">
                          <span className="text-stone-400 block text-[10px]">Productivity Utility</span>
                          <span className="font-bold text-stone-800">{classificationResult.productivity.primaryUtility}</span>
                        </div>
                      </div>

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {classificationResult.summary}
                      </p>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={() => onOpenBreedModal && onOpenBreedModal(matchedBreed)}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold shadow-xs cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>Detailed 11-Table Dossier</span>
                        </button>
                        <button
                          onClick={() => onNavigate('classify')}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 text-xs font-semibold cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Full Lab Card</span>
                        </button>
                      </div>
                    </div>
                  );
                })()
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-stone-900">
                      Awaiting Bovine Specimen
                    </h4>
                    <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                      Select a photograph or benchmark specimen above, then click &quot;Identify Breed&quot; to begin neural analysis.
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] text-stone-500">
                <span>Model: MobileNet v2 + Dual-Engine Cloud Vision</span>
                <span>Inference: ~35-80ms</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FIVE FEATURE CARDS */}
      <section className="space-y-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
            <Layers className="w-3.5 h-3.5 text-emerald-700" />
            <span>Platform Capabilities</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
            Agricultural Intelligence Modules
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Integrated tools for livestock farmers, veterinarians, animal husbandry officers, and university researchers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Card 1: Breed Classification */}
          <div
            onClick={() => onNavigate('classify')}
            className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-800 transition-colors">
                Breed Classification
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Dual-engine vision identifying cranial, horn, and dewlap traits with MobileNet and Cloud AI.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Launch Classifier</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Habitat Information */}
          <div
            onClick={() => onNavigate('map')}
            className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-800 transition-colors">
                Habitat Information
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Interactive D3 GIS mapping native breeding tracts and state density across 35 Indian states.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Explore Map</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Genomics */}
          <div
            onClick={() => onNavigate('genomics')}
            className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                <Dna className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-800 transition-colors">
                Genomics
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Analyze homozygous A2/A2 CSN2 beta-casein genetics, karyotypes, and HSP70 heat-shock loci.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>View Genetics</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Bioscience */}
          <div
            onClick={() => onNavigate('guide')}
            className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-800 transition-colors">
                Bioscience
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Morphological identification keys, anatomical comparison (Bos indicus vs Bos taurus), and AlphaFold 3D structures.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>Scientific Key</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 5: Indian Breed Library */}
          <div
            onClick={() => onNavigate('breeds')}
            className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-stone-900 group-hover:text-emerald-800 transition-colors">
                Indian Breed Library
              </h3>
              <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                Full encyclopedia indexing all 99 registered cattle, buffalo, goat, and dog breeds with native tracts, traits, and accessions.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span>99 Breeds</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. POPULAR BREEDS SECTION */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 pb-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
              <Award className="w-3.5 h-3.5 text-emerald-700" />
              <span>Pivotal Indigenous Germplasm</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
              Popular Indigenous Breeds
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Iconic dairy, draught, prolific goat, and ancient sight hound breeds celebrated for genetic resilience and regional adaptation.
            </p>
          </div>
          <button
            onClick={() => onNavigate('breeds')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <span>View All {totalBreedsCount} Breeds</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Species Filter Pills for Popular Breeds */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {(['All', 'Cattle', 'Buffalo', 'Goat', 'Dog'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setPopularCategoryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                popularCategoryFilter === cat
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              <span>{cat === 'All' ? 'All Iconic Breeds' : cat === 'Cattle' ? '🐂 Cattle' : cat === 'Buffalo' ? '🐃 Buffalo' : cat === 'Goat' ? '🐐 Goat' : '🐕 Dog'}</span>
            </button>
          ))}
        </div>

        {/* Popular Breed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularBreeds.map((breed) => {
            const badgeBg =
              breed.category === 'Cattle'
                ? 'bg-emerald-800 text-white'
                : breed.category === 'Buffalo'
                ? 'bg-sky-800 text-white'
                : breed.category === 'Goat'
                ? 'bg-amber-800 text-white'
                : 'bg-indigo-800 text-white';
            const emoji =
              breed.category === 'Cattle' ? '🐂' : breed.category === 'Buffalo' ? '🐃' : breed.category === 'Goat' ? '🐐' : '🐕';

            return (
              <div
                key={breed.id}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-emerald-500 transition-all flex flex-col justify-between group"
              >
                {/* Photo & Specimen Header */}
                <div className="relative overflow-hidden cursor-pointer" onClick={() => onOpenBreedModal && onOpenBreedModal(breed)}>
                  <BreedSpecimenImage
                    breed={breed}
                    aspectRatioClass="aspect-[16/10]"
                  />
                </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-emerald-800 transition-colors">
                      {breed.name}
                    </h3>
                    <span className="text-xs text-stone-500 font-serif">
                      ({breed.vernacularName.split('/')[0].trim()})
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-emerald-800 font-medium mt-1">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{breed.stateOfOrigin}</span>
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mt-2">
                    {breed.description}
                  </p>
                </div>

                {/* Footer Buttons */}
                <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-stone-500">
                    {breed.genomics.csn2Allele}
                  </span>

                  <button
                    onClick={() => onOpenBreedModal && onOpenBreedModal(breed)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-900 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </section>

      {/* 5. BREED DISTRIBUTION MAP (D3.JS) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Indigenous Breed Distribution Map</span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
              Geographic Information System
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Interactive D3.js visualization mapping indigenous cattle &amp; buffalo concentration across all Indian states and agro-climatic zones.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('map')}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
            >
              <span>Full Screen GIS Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Embedded D3 Map Component */}
        <BreedDistributionMap
          onSelectBreedForClassification={(imgUrl, title) => {
            onNavigate('classify');
            onSelectSample({
              id: `map-${Date.now()}`,
              title,
              subtitle: 'Selected from Breed Distribution Map',
              category: 'Cattle',
              state: 'India',
              imageUrl: imgUrl,
              precomputedResult: SAMPLE_BREED_IMAGES[0].precomputedResult
            });
          }}
          onOpenBreedModal={onOpenBreedModal}
          onNavigateToCatalog={() => onNavigate('breeds')}
        />
      </section>

      {/* 6. DAILY HERD FIELD ASSISTANT & CALCULATOR */}
      <section className="space-y-4">
        <div className="border-b border-stone-200 pb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 uppercase tracking-wide">
            <Activity className="w-3.5 h-3.5 text-emerald-700" />
            <span>Farm Management</span>
          </div>
          <h2 className="font-serif text-2xl font-bold text-stone-900 mt-0.5">
            Daily Herd Field Assistant
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            Lactation curve estimation (Wood&apos;s gamma model), dry matter feed ration calculation, and microclimate THI heat-stress index.
          </p>
        </div>

        <DailyFieldCalculator />
      </section>
    </div>
  );
};
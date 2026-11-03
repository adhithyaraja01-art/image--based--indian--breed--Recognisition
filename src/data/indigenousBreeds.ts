import { BreedInfo } from '../types/breed';

export const INDIAN_BOVINE_BREEDS: BreedInfo[] = [
  // =========================================================================
  // 53 REGISTERED INDIAN INDIGENOUS CATTLE BREEDS (Bos indicus / Zebu)
  // Officially Registered by ICAR-NBAGR (National Bureau of Animal Genetic Resources)
  // =========================================================================
  {
    id: 'gir-cattle',
    name: 'Gir',
    vernacularName: 'गीर / Geer / Desan',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Gir hills and forests of Junagadh, Bhavnagar, Amreli, and Rajkot districts',
    nbagrCode: 'INDIA_CATTLE_0400_GIR_03009',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier Indian dairy zebu breed renowned worldwide for high butterfat A2 milk, prominent domed convex forehead, and long pendulous drooping ears folded like a curled leaf.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60 (58 acrocentric autosomes, 2 sex chromosomes)',
      fatRegulatorGene: 'DGAT1 K232A / SCD1 polymorphism',
      thermalGene: 'HSP70 / HSF1 high constitutive expression',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curved backwards and outwards in a half-moon crescent shape',
      ears: 'Exceptionally long, pendulous, folded like a leaf with a distinct apical notch',
      coatColor: 'Shades from dark red to speckled white with reddish-brown patches',
      humpAndDewlap: 'Prominent fleshy thoracic hump, voluminous loose dewlap aiding heat dissipation',
      sizeAndBuild: 'Medium to large, heavy boned, docile dairy temperament',
      faceProfile: 'Distinctively convex forehead acting as a protective cooling shield for the brain'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,100 – 3,500 kg per lactation',
      fatPercentage: '4.5% – 5.0% (Natural A2 beta-casein)',
      weightMaleKg: '540 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to tropical heat and endemic tick-borne haemoparasites'
    },
    historicalSignificance: 'Bred by traditional Maldhari pastoralists over centuries. Exported to Brazil to establish the global "Gyr" and "Girolando" dairy herds.',
    pastoralCommunities: ['Maldharis', 'Rabaris', 'Charans'],
    careRecommendations: [
      'Thrives on open pasture grazing supplemented with mustard cake and legume silage',
      'Requires shaded loose housing with cross-ventilation during extreme summer spikes',
      'Routine vaccination for Foot & Mouth Disease (FMD) and Hemorrhagic Septicemia (HS)'
    ],
    imageUrl: '/src/assets/images/specimen_gir_cow_1792850390572.jpg',
    tags: ['A2 Milk', 'Zebu', 'Maldhari', 'Gujarat', 'Milch', 'ICAR-NBAGR 03009']
  },
  {
    id: 'sahiwal-cattle',
    name: 'Sahiwal',
    vernacularName: 'साहीवाल / Lambi Bar / Lola',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Punjab & Rajasthan',
    homeTract: 'Montgomery district (origin), border regions of Punjab (Ferozepur, Fazilka) and Rajasthan (Sri Ganganagar)',
    nbagrCode: 'INDIA_CATTLE_1700_SAHIWAL_03026',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heaviest milk-producing indigenous dairy cow of the Indian subcontinent, noted for pale red/dun coat, loose voluminous skin ("Lola"), and docile nature.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 variant / prolactin receptor locus',
      thermalGene: 'HSP70 promoter polymorphism conferring solar radiation resistance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, stumpy, thick at the base',
      ears: 'Medium sized with black hair margins',
      coatColor: 'Reddish dun to pale red with occasional white patches on underline',
      humpAndDewlap: 'Massive thoracic hump in bulls, very voluminous loose dewlap ("Lola")',
      sizeAndBuild: 'Cylindrical symmetrical body, short legs, heavy pendulous sheath',
      faceProfile: 'Broad forehead, slightly sunken between eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,500 – 4,000 kg per lactation',
      fatPercentage: '4.5% – 5.2%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '400 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to solar radiation, tick infestation and heat stress'
    },
    historicalSignificance: 'Developed along the banks of the Ravi River. Foundation breed for heat-tolerant dairy industries across Australia, Kenya, and South America.',
    pastoralCommunities: ['Rathis', 'Jats', 'Pastoral Gujjars'],
    careRecommendations: [
      'High-energy fodder (berseem, sorghum, maize) supports peak lactation yield',
      'Provide clean drinking water ad-libitum (70-90 liters daily for milking cows)',
      'Dry shed flooring to prevent mastitis and hoof rot'
    ],
    imageUrl: '/src/assets/images/specimen_sahiwal_cow_1792850391898.jpg',
    tags: ['Dairy', 'Punjab', 'Rajasthan', 'A2 Milk', 'High Yield', 'ICAR-NBAGR 03026']
  },
  {
    id: 'red-sindhi-cattle',
    name: 'Red Sindhi',
    vernacularName: 'लाल सिंधी / Malir / Red Karachi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Origin Sindh / Organized herds across India (Tamil Nadu, Odisha, Kerala, Assam)',
    homeTract: 'Traditional dry tracts, maintained at state organized livestock research farms across India',
    nbagrCode: 'INDIA_CATTLE_0000_REDSINDHI_03025',
    nbagrStatus: 'Registered Indigenous',
    description: 'Distinguished compact dairy breed with deep dark red coat, heavy hump and dewlap, renowned for high dairy adaptability to tropical disease and heat.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'CSN3 and DGAT1 dairy genotypes',
      thermalGene: 'High density sweat gland gene expression',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick at base, curving upwards and inwards',
      ears: 'Medium sized, drooping slightly',
      coatColor: 'Deep dark red or rich brownish-red, occasionally with small white forehead star',
      humpAndDewlap: 'Well-developed muscular hump and loose dewlap',
      sizeAndBuild: 'Compact, deep frame, short legs and docile disposition',
      faceProfile: 'Intelligent face with moderately protruding forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,800 – 2,800 kg per lactation',
      fatPercentage: '4.8% – 5.2%',
      weightMaleKg: '460 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Exceptional tropical climate tolerance and tick disease resistance'
    },
    historicalSignificance: 'One of the most famous tropical dairy breeds globally, extensively used in crossbreeding in Australia, Brazil, and Southeast Asia.',
    pastoralCommunities: ['Maldharis', 'Sindhi pastoralists'],
    careRecommendations: [
      'Legume hay and balanced mineral mixture for sustained milking',
      'Adequate shaded shelter during midday tropical sun'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
    tags: ['Milch', 'Deep Red', 'A2 Milk', 'Tropical Dairy', 'ICAR-NBAGR 03025']
  },
  {
    id: 'tharparkar-cattle',
    name: 'Tharparkar',
    vernacularName: 'थारपारकर / White Sindhi / Thari',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan & Gujarat',
    homeTract: 'Thar Desert border, Jodhpur, Jaisalmer, Barmer, and Kutch region',
    nbagrCode: 'INDIA_CATTLE_1700_THARPARKAR_03028',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose desert breed with striking white/light grey coat that reflects scorching desert radiation, renowned for producing milk on sparse desert shrubs.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'FASN & DGAT1 arid lipid adaptation',
      thermalGene: 'Reflective coat pigment and enhanced HSP70 expression',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium sized, curving upwards and outwards',
      ears: 'Long, broad, semi-pendulous',
      coatColor: 'Pure white to light grey, darkening over shoulders and hump in bulls during winter',
      humpAndDewlap: 'Medium to large hump, moderately developed dewlap',
      sizeAndBuild: 'Medium size, well-proportioned, robust desert bone structure',
      faceProfile: 'Flat to slightly convex forehead, alert dark eyes'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,800 – 2,600 kg per lactation',
      fatPercentage: '4.5% – 4.9%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Thrives in desert ambient temperatures exceeding 48°C with minimal water'
    },
    historicalSignificance: 'Bred in the hyper-arid Thar Desert. Can subsist on desert xerophytic scrub (Khejri, Sevangrass) where other breeds perish.',
    pastoralCommunities: ['Rebaris', 'Thari Nomads', 'Charans'],
    careRecommendations: [
      'Supplement dry desert roughage with mineral licks',
      'Ensure access to clean water during scorching summer desert spells'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
    tags: ['Desert Breed', 'Rajasthan', 'Dual Purpose', 'White Cattle', 'ICAR-NBAGR 03028']
  },
  {
    id: 'kankrej-cattle',
    name: 'Kankrej',
    vernacularName: 'कांकरेज / Wadhair / Sanchori',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Gujarat & Rajasthan',
    homeTract: 'Rann of Kutch, Banaskantha, Mehsana, Ahmedabad, and Barmer/Jalore districts',
    nbagrCode: 'INDIA_CATTLE_0417_KANKREJ_03014',
    nbagrStatus: 'Registered Indigenous',
    description: 'Majestic dual-purpose breed famous for massive lyre-shaped horns, pendulous ears, and unique high-stepping graceful gait known as "1¼ steps" (Sawai Chaal).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'MSTN draught-power muscle marker / DGAT1',
      thermalGene: 'High-density sebaceous sweat glands',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Spectacular, massive lyre-shaped horns emerging outwards and curving upwards and inwards',
      ears: 'Very large, pendulous, open like a leaf',
      coatColor: 'Silver grey to iron grey, darker over shoulders and quarters in adult bulls',
      humpAndDewlap: 'Well-developed firm thoracic hump and thin pendulous dewlap',
      sizeAndBuild: 'Very large and powerful, heavy draft frame with proud carriage',
      faceProfile: 'Short face, slightly dished forehead with prominent crown'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,500 – 2,800 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '580 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid coastal heat and marshy salt rann climates'
    },
    historicalSignificance: 'Depicted on Mohenjo-daro Indus Valley Civilization seals dating back 4,500 years. Exported to the Americas to create the American Brahman breed ("Guzerá").',
    pastoralCommunities: ['Rabaris', 'Bharwads', 'Ahirs'],
    careRecommendations: [
      'Substantial green fodder and dry straw for maintaining large muscle mass',
      'Exercise paddocks suited for active draft animals'
    ],
    imageUrl: '/src/assets/images/specimen_kankrej_bull_1792850392117.jpg',
    tags: ['Lyre Horns', 'Sawai Chaal', 'Indus Seal', 'Guzera Ancestor', 'Gujarat', 'ICAR-NBAGR 03014']
  },
  {
    id: 'ongole-cattle',
    name: 'Ongole',
    vernacularName: 'ఒంగోలు గిత్త / Ongole Bull / Nellore',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Andhra Pradesh',
    homeTract: 'Prakasam, Guntur, and Bapatla districts along the fertile Gundlakamma and Krishna river delta',
    nbagrCode: 'INDIA_CATTLE_0100_ONGOLE_03021',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned white zebu giant of India, recognized for great muscular strength, majestic stature, massive hump, and supreme resistance to bovine tropical diseases.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'MSTN heavy muscle hypertrophy gene',
      thermalGene: 'High solar reflectance white hair index with dark black pigmented skin',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, stumpy, growing backwards and outwards',
      ears: 'Moderately long and alert',
      coatColor: 'Glossy white in cows; majestic white-grey with dark markings on neck and hump in bulls',
      humpAndDewlap: 'Massive, erect muscular hump and voluminous folded dewlap',
      sizeAndBuild: 'Extra-large frame, deep chest, heavy bones, towering height at withers',
      faceProfile: 'Broad elliptical forehead with dark pigmented rims around the eyes'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,500 – 2,200 kg per lactation',
      fatPercentage: '4.3% – 4.8%',
      weightMaleKg: '650 kg',
      weightFemaleKg: '450 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme heat tolerance; black skin under white coat blocks UV while sweating profusely'
    },
    historicalSignificance: 'Exported to Brazil in late 19th century where it founded the multi-million head "Nelore" cattle industry, driving global tropical beef & milk genetics.',
    pastoralCommunities: ['Reddys', 'Kammas', 'Yadavas'],
    careRecommendations: [
      'Ample mineral supplementation to maintain bone density and draft strength',
      'Open paddocks with sturdy fencing for heavyweight breeding bulls'
    ],
    imageUrl: '/src/assets/images/specimen_ongole_bull_1792850392671.jpg',
    tags: ['Nelore Foundation', 'Andhra Pradesh', 'Giant Zebu', 'Heavy Draught', 'ICAR-NBAGR 03021']
  },
  {
    id: 'hariana-cattle',
    name: 'Hariana',
    vernacularName: 'हरियाणा / Hariana',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana, Uttar Pradesh, Punjab & Rajasthan',
    homeTract: 'Rohtak, Hisar, Jind, Gurugram, and Indo-Gangetic plains',
    nbagrCode: 'INDIA_CATTLE_1700_HARIANA_03011',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier dual-purpose white cattle of North India, known for energetic work bulls and good dairy yield with clean, symmetrical body conformation.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and SCD1',
      thermalGene: 'HSF1 thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, slender, curving upwards and inwards',
      ears: 'Small, alert, horizontal',
      coatColor: 'White to light grey, darker over front quarters in bulls',
      humpAndDewlap: 'Compact upright hump, small thin dewlap',
      sizeAndBuild: 'Medium to large, proportionate, trim athletic draft frame',
      faceProfile: 'Long narrow face, flat forehead between horns'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,400 – 2,200 kg per lactation',
      fatPercentage: '4.4% – 4.8%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Very high tolerance to extreme North Indian summer heatwaves'
    },
    historicalSignificance: 'Backbone of North Indian traditional agriculture and bullock cart transport prior to mechanization.',
    pastoralCommunities: ['Jats', 'Ahirs', 'Gujjars'],
    careRecommendations: [
      'Balanced green sorghum and wheat straw feeding',
      'Dry shed bedding during monsoon months'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
    tags: ['Dual-Purpose', 'Haryana', 'North India', 'A2 Milk', 'ICAR-NBAGR 03011']
  },
  {
    id: 'deoni-cattle',
    name: 'Deoni',
    vernacularName: 'देवणी / Deoni / Dongar Patti',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Karnataka',
    homeTract: 'Latur, Nanded, Osmanabad districts of Maharashtra, and Bidar district of Karnataka',
    nbagrCode: 'INDIA_CATTLE_1100_DEONI_03007',
    nbagrStatus: 'Registered Indigenous',
    description: 'Attractive dual-purpose breed of the Deccan plateau, characterized by distinctive black and white spotted coat, bulging forehead, and docile temperament.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 polymorphism',
      thermalGene: 'Deccan basalt heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards',
      ears: 'Drooping, slightly folded',
      coatColor: 'Spotted black and white (Balankya, Wannera, Shevera strains)',
      humpAndDewlap: 'Massive hump in bulls, loose folded dewlap',
      sizeAndBuild: 'Medium to large, heavy muscular frame, calm demeanor',
      faceProfile: 'Moderately convex forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,800 kg per lactation',
      fatPercentage: '4.3% – 4.7%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to hot semi-arid Deccan plateau climate'
    },
    historicalSignificance: 'Developed through selective breeding combining Gir, Dangi, and local cattle genetics in Marathwada.',
    pastoralCommunities: ['Maratha farmers', 'Lingayats'],
    careRecommendations: [
      'High-dry fodder supplemented with oil cakes',
      'Tick dip management in semi-arid grazing tracts'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
    tags: ['Dual-Purpose', 'Maharashtra', 'Karnataka', 'Spotted Coat', 'ICAR-NBAGR 03007']
  },
  {
    id: 'rathi-cattle',
    name: 'Rathi',
    vernacularName: 'राठी / Rathi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Bikaner, Ganganagar, and Hanumangarh districts in North-Western Rajasthan',
    nbagrCode: 'INDIA_CATTLE_1700_RATHI_03024',
    nbagrStatus: 'Registered Indigenous',
    description: 'Famous milch breed of the arid Thar Desert, renowned for economical milk production and brown coat patched with white spots.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 lipid synthase',
      thermalGene: 'Arid climate thermotolerance genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving outwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Brown and white or black and white patched, sometimes pure brown',
      humpAndDewlap: 'Medium hump, moderately developed dewlap',
      sizeAndBuild: 'Medium size, cylindrical dairy conformation',
      faceProfile: 'Flat forehead, wide muzzle'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,800 – 2,800 kg per lactation',
      fatPercentage: '4.2% – 4.8%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to extreme desert summer heat and winter cold'
    },
    historicalSignificance: 'Bred by the nomadic Raths tribe in the harsh desert heartland.',
    pastoralCommunities: ['Raths', 'Rebaris'],
    careRecommendations: [
      'Feeds well on desert shrubs like Khejri leaves and Sewan grass',
      'Water provision during peak scorching afternoon hours'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
    tags: ['Milch', 'Rajasthan', 'Thar Desert', 'A2 Milk', 'ICAR-NBAGR 03024']
  },
  {
    id: 'krishna-valley-cattle',
    name: 'Krishna Valley',
    vernacularName: 'ಕೃಷ್ಣಾ ವ್ಯಾಲಿ / Krishna Valley',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka & Maharashtra',
    homeTract: 'Belagavi, Bagalkote, Vijayapura in Karnataka, and Sangli, Kolhapur in Maharashtra',
    nbagrCode: 'INDIA_CATTLE_0800_KRISHNAVALLEY_03018',
    nbagrStatus: 'Conservation Priority',
    description: 'Heavy draft breed created along the black cotton soil of the Krishna river valley for plowing deep, waterlogged soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Muscle density markers',
      thermalGene: 'Humid river basin heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, growing curved outwards and inwards',
      ears: 'Small, pointed',
      coatColor: 'Grey-white with darker shades over forequarters in males',
      humpAndDewlap: 'Large erect hump, voluminous dewlap extending to sheath',
      sizeAndBuild: 'Massive frame, short heavy legs, deep wide chest',
      faceProfile: 'Broad poll, slightly bulging forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '900 – 1,200 kg per lactation',
      fatPercentage: '4.2% – 4.6%',
      weightMaleKg: '600 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'High',
      heatTolerance: 'Resistant to damp black cotton soil foot infections'
    },
    historicalSignificance: 'Selectively bred by the rulers of Aundh and Miraj states for heavy agricultural plowing.',
    pastoralCommunities: ['Lingayat farmers', 'Maratha cultivators'],
    careRecommendations: [
      'Maintain strong hoof hygiene in black cotton mud',
      'Concentrate feed supplementation during heavy plowing seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1596733430284-f7437764b14d?auto=format&fit=crop&w=800&q=80',
    tags: ['Heavy Draught', 'Karnataka', 'Maharashtra', 'Krishna River', 'ICAR-NBAGR 03018']
  },
  {
    id: 'kangayam-cattle',
    name: 'Kangayam',
    vernacularName: 'காங்கேயம் காளை / Kangeyam Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Kangeyam, Tiruppur, Erode, Karur, and Coimbatore districts in the Kongu Nadu region',
    nbagrCode: 'INDIA_CATTLE_1800_KANGAYAM_03013',
    nbagrStatus: 'Registered Indigenous',
    description: 'World-renowned South Indian draught breed celebrated for boundless stamina, steel-hard black hooves, fiery spirit, and prized role in traditional Jallikattu and farm transport.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'ACTN3 / MSTN muscular endurance genotype',
      thermalGene: 'Semi-arid tropical heat dissipation mechanisms',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, thick at the base, curving backwards, upwards, and inwards forming a sharp crescent tip',
      ears: 'Small, erect, pointing outwards with sharp tips',
      coatColor: 'Bulls are majestic dark grey with black head, hump, and forequarters; cows are pure white to light silver grey',
      humpAndDewlap: 'Compact, firm, muscular hump; small thin dewlap that does not hinder fast trotting',
      sizeAndBuild: 'Medium, compact, barrel-shaped body with rock-hard black hooves (Kulamph)',
      faceProfile: 'Short face with broad forehead and prominent dark eye rings'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '800 – 1,200 kg per lactation',
      fatPercentage: '4.6% – 5.4%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme tolerance to semi-arid tropical sun and rocky gravel ground'
    },
    historicalSignificance: 'Bred systematically by the Pattagar of Palayakottai since the 17th century. Integral to Kongu agro-pastoral economy and traditional Jallikattu heritage.',
    pastoralCommunities: ['Kongu Vellalar Gounders'],
    careRecommendations: [
      'Grazing on traditional Kolukattai grass (Cenchrus ciliaris) pasture silvopastoral tracts (Korangadu)',
      'Regular physical exercise to maintain muscular tendon tone and black hoof strength'
    ],
    imageUrl: '/src/assets/images/specimen_kangayam_bull_1792850412117.jpg',
    tags: ['Kongu Nadu', 'Jallikattu', 'Draught', 'Korangadu', 'Tamil Nadu', 'ICAR-NBAGR 03013']
  },
  {
    id: 'hallikar-cattle',
    name: 'Hallikar',
    vernacularName: 'ಹಳ್ಳಿಕಾರ್ / Hallikar Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Mysuru, Hassan, Mandya, Tumakuru, and Bengaluru rural districts',
    nbagrCode: 'INDIA_CATTLE_0800_HALLIKAR_03010',
    nbagrStatus: 'Registered Indigenous',
    description: 'Foremost draught breed of Southern India, the ancestral progenitor of the legendary "Amrit Mahal" Mysore cattle family, recognized for long, sweeping backward-curving horns and great trotting speed.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Aerobic muscle fiber endurance loci',
      thermalGene: 'Dry deciduous plateau thermal adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Long, slender, emerging close together, sweeping backwards and upwards in a graceful inward bend with sharp points',
      ears: 'Small, alert, pointed horizontally',
      coatColor: 'Dark grey to iron grey with white bands on face and dewlap',
      humpAndDewlap: 'Moderately developed compact muscular hump and thin dewlap',
      sizeAndBuild: 'Medium, long-legged, agile athletic build with tough black hooves',
      faceProfile: 'Long, lean face with bulging forehead between horn roots'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '600 – 1,000 kg per lactation',
      fatPercentage: '4.8% – 5.5%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '330 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Exceptional endurance over long-distance road trotting in tropical heat'
    },
    historicalSignificance: 'Maintained by the rulers of the Kingdom of Mysore for artillery transport and royal cavalry. Foundational root of Mysore draught breeds.',
    pastoralCommunities: ['Hallikar Vokkaligas', 'Kurubas'],
    careRecommendations: [
      'Regular long-distance road work and ragi straw feeding',
      'Proper stall management with clean stone flooring'
    ],
    imageUrl: '/src/assets/images/specimen_hallikar_bull_1792850437021.jpg',
    tags: ['Mysore Cattle', 'Trotting Bull', 'Karnataka', 'Draught', 'ICAR-NBAGR 03010']
  },
  {
    id: 'amritmahal-cattle',
    name: 'Amritmahal',
    vernacularName: 'ಅಮೃತ ಮಹಲ್ / Amrit Mahal',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Chitradurga, Chikkamagaluru, Tumakuru, and Hassan districts in Karnataka',
    nbagrCode: 'INDIA_CATTLE_0800_AMRITMAHAL_03001',
    nbagrStatus: 'Registered Indigenous',
    description: 'Legendary military draught breed of Mysore, famed for unmatched endurance, speed, and fierce fiery temperament.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High endurance muscle myosin ATPase loci',
      thermalGene: 'Semi-arid scrub heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Long, sweeping backwards, ending in sharp tapering points',
      ears: 'Small, alert, pointed',
      coatColor: 'Grey variations from almost white to dark iron grey',
      humpAndDewlap: 'Compact muscular hump, minimal thin dewlap',
      sizeAndBuild: 'Medium, active, wiry, rock-hard hooves',
      faceProfile: 'Narrow lean face, convex forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.8% – 5.4%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '320 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Can travel up to 100 km a day without tiring in hot sun'
    },
    historicalSignificance: 'Maintained by Hyder Ali and Tipu Sultan for fast artillery movements, helping win campaigns through rapid battlefield transport.',
    pastoralCommunities: ['Golla community', 'Kurubas'],
    careRecommendations: [
      'Extensive rangeland grazing (Kaval lands)',
      'Requires gentle handling to manage high-spirited temperament'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
    tags: ['Military Draught', 'Tipu Sultan', 'Karnataka', 'Mysore', 'ICAR-NBAGR 03001']
  },
  {
    id: 'khillari-cattle',
    name: 'Khillari',
    vernacularName: 'खिल्लारी / Khillari Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Karnataka',
    homeTract: 'Satara, Sangli, Solapur in Maharashtra, and Belagavi, Bagalkote in Karnataka',
    nbagrCode: 'INDIA_CATTLE_1100_KHILLARI_03017',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned fast-trotting draught breed of the dry Deccan plateau, characterized by long swept-back horns with pinkish tips and grey-white coat.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'ACTN3 muscle endurance marker',
      thermalGene: 'Deccan arid drought survival genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Long, sweeping backwards, thick at base with pinkish hue',
      ears: 'Small, pointed, alert',
      coatColor: 'Greyish-white with mottled markings on face',
      humpAndDewlap: 'Prominent compact hump, thin dewlap',
      sizeAndBuild: 'Cylindrical muscular body, clean limbs, agile stride',
      faceProfile: 'Long lean face, convex forehead profile'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme stamina under scorching Deccan drought conditions'
    },
    historicalSignificance: 'Prizewinner in bullock cart trotting races across Maharashtra and Karnataka.',
    pastoralCommunities: ['Thorgat shepherds', 'Maratha farmers'],
    careRecommendations: [
      'High-protein oil cakes for working draft bullocks',
      'Routine hoof trimming for hard road trotting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80',
    tags: ['Fast Trotter', 'Draught', 'Maharashtra', 'Karnataka', 'ICAR-NBAGR 03017']
  },
  {
    id: 'bargur-cattle',
    name: 'Bargur',
    vernacularName: 'பர்கூர் மாடு / Bargur Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Bargur forest hills of Anthiyur taluk, Erode district',
    nbagrCode: 'INDIA_CATTLE_1800_BARGUR_03004',
    nbagrStatus: 'Registered Indigenous',
    description: 'Fiery, semi-wild hill draught cattle of the Western Ghats, distinguished by red and white patchy coat and incredible hill climbing dexterity.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude muscle oxygenation genes',
      thermalGene: 'Forest canopy microclimate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Light brown, curving backwards and inwards with pointed tips',
      ears: 'Short, alert, erect',
      coatColor: 'Brownish-red with speckled white splashes and patches',
      humpAndDewlap: 'Compact firm hump, small dewlap suited for forest foliage',
      sizeAndBuild: 'Small to medium, wiry, exceptionally nimble on steep hills',
      faceProfile: 'Lean, alert face with fiery eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '350 – 550 kg per lactation',
      fatPercentage: '4.8% – 5.5%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '280 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme hardiness in rough mountain terrain and rocky hills'
    },
    historicalSignificance: 'Bred and reared inside forest enclosures ("Pattys") by the Lingayat community.',
    pastoralCommunities: ['Bargur Lingayats', 'Sholaga tribes'],
    careRecommendations: [
      'Maintain forest grazing access in Bargur hill ranges',
      'Protection from wild predators (leopards) via community enclosures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&w=800&q=80',
    tags: ['Hill Draught', 'Bargur Hills', 'Tamil Nadu', 'Western Ghats', 'ICAR-NBAGR 03004']
  },
  {
    id: 'umblachery-cattle',
    name: 'Umblachery',
    vernacularName: 'உம்பளச்சேரி / Umblachery / Jathi Madu',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Nagapattinam, Tiruvarur, and Thanjavur districts in the Cauvery delta',
    nbagrCode: 'INDIA_CATTLE_1800_UMBLACHERY_03029',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned wetland draught breed of the Cauvery Delta, born red and turning grey with white star on forehead and white socks on limbs, perfect for deep paddy puddling.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Paddy puddle foot rot resistance genetics',
      thermalGene: 'High-humidity coastal thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, curved outward and inward (dehorned traditionally)',
      ears: 'Small, alert, horizontally placed',
      coatColor: 'Grey with white socks on lower legs, white star on forehead, and white switch of tail',
      humpAndDewlap: 'Small compact hump, thin dewlap',
      sizeAndBuild: 'Short, sturdy, low-set body suited for swampy mud',
      faceProfile: 'Short face with flat forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.8% – 5.2%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '280 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid coastal heat and muddy waterlogged paddy diseases'
    },
    historicalSignificance: 'Indispensable to Cauvery delta paddy farmers for soil puddling where tractors sink.',
    pastoralCommunities: ['Cauvery delta farming communities'],
    careRecommendations: [
      'Paddy straw feeding enriched with urea-molasses blocks',
      'Hoof care after prolonged waterlogged plowing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe0a?auto=format&fit=crop&w=800&q=80',
    tags: ['Cauvery Delta', 'Paddy Puddling', 'Tamil Nadu', 'Draught', 'ICAR-NBAGR 03029']
  },
  {
    id: 'pulikulam-cattle',
    name: 'Pulikulam',
    vernacularName: 'புலிகுளம் / Palingu Madu / Jallikattu Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Sivaganga, Madurai, Dindigul, and Virudhunagar districts',
    nbagrCode: 'INDIA_CATTLE_1800_PULIKULAM_03035',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier Jallikattu spectacle breed of southern Tamil Nadu, reared in migratory pastoral herds ("Kidaari"), famous for lightning agility and fierce defensive bravery.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Fast-twitch muscle fiber genes',
      thermalGene: 'Dry thorn scrub heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curved backwards, outward, then inward with sharp points',
      ears: 'Short, alert, constantly moving',
      coatColor: 'Dark grey to black in bulls, light grey in cows',
      humpAndDewlap: 'Prominent compact hump, firm dewlap',
      sizeAndBuild: 'Medium, wiry, muscular with hard hooves',
      faceProfile: 'Lean, narrow forehead with intense watchful eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 600 kg per lactation',
      fatPercentage: '4.7% – 5.3%',
      weightMaleKg: '400 kg',
      weightFemaleKg: '290 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme endurance under intense dry summer drought conditions'
    },
    historicalSignificance: 'Core breed utilized for historic Tamil Jallikattu bull-embracing sporting events.',
    pastoralCommunities: ['Konar pastoralists', 'Kallar communities'],
    careRecommendations: [
      'Migratory penning on harvested fields for organic soil manuring',
      'Daily walking exercise across arid thorn scrub'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
    tags: ['Jallikattu', 'Tamil Nadu', 'Agile Draught', 'Migratory Herds', 'ICAR-NBAGR 03035']
  },
  {
    id: 'alambadi-cattle',
    name: 'Alambadi',
    vernacularName: 'ஆலம்பாடி / Alambadi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Dharmapuri, Krishnagiri, and Cauvery river banks bordering Karnataka',
    nbagrCode: 'INDIA_CATTLE_1800_ALAMBADI_03002',
    nbagrStatus: 'Registered Indigenous',
    description: 'Active hill draught cattle resembling Hallikar, prized for fast road trotting and hauling timber through hilly forest tracks.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Endurance muscle fibers',
      thermalGene: 'Cauvery basin climate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Sweeping backwards, then curving upwards with sharp points',
      ears: 'Small, alert',
      coatColor: 'Dark grey to black with white markings on forehead',
      humpAndDewlap: 'Compact muscular hump, thin dewlap',
      sizeAndBuild: 'Medium, active, long-legged and hardy',
      faceProfile: 'Narrow forehead, lean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '310 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Very high endurance along rocky terrain'
    },
    historicalSignificance: 'Bred along the Cauvery river forests for timber transport.',
    pastoralCommunities: ['Vokkaligas', 'Local tribal graziers'],
    careRecommendations: [
      'Forest fringe grazing with supplementary coarse grass',
      'Hoof maintenance on rocky terrain'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584447141399-be2c62da6a14?auto=format&fit=crop&w=800&q=80',
    tags: ['Hill Draught', 'Dharmapuri', 'Tamil Nadu', 'ICAR-NBAGR 03002']
  },
  {
    id: 'malvi-cattle',
    name: 'Malvi',
    vernacularName: 'मालवी / Malvi / Manthani',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Madhya Pradesh',
    homeTract: 'Malwa plateau: Ujjain, Shajapur, Mandsaur, and Rajgarh districts',
    nbagrCode: 'INDIA_CATTLE_1000_MALVI_03019',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned massive draught breed of the Malwa plateau, noted for silver-white coat, strong muscular shoulders, and steadfast plowing capacity.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Heavy draft muscle density genes',
      thermalGene: 'Central Indian plateau heat adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving outwards, upwards, and slightly forwards',
      ears: 'Short, pointed, alert',
      coatColor: 'Silver-grey, turning dark iron grey on neck and quarters in bulls',
      humpAndDewlap: 'Well-developed firm hump, moderately folded dewlap',
      sizeAndBuild: 'Large, deep-chested, strong-boned draft frame',
      faceProfile: 'Broad flat forehead, dished between eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '800 – 1,100 kg per lactation',
      fatPercentage: '4.3% – 4.7%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme endurance under harsh Central Indian summers'
    },
    historicalSignificance: 'Backbone of agriculture across the fertile black soils of the historic Malwa kingdom.',
    pastoralCommunities: ['Malwa farmers', 'Ahirs'],
    careRecommendations: [
      'Nutritious sorghum straw and gram crop residue',
      'Provide spacious shaded stalls'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    tags: ['Malwa Plateau', 'Heavy Draught', 'Madhya Pradesh', 'ICAR-NBAGR 03019']
  },
  {
    id: 'nimari-cattle',
    name: 'Nimari',
    vernacularName: 'निमाड़ी / Nimari / Khargon',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Madhya Pradesh',
    homeTract: 'Nimar region along Narmada valley: East and West Nimar (Khandwa and Khargone)',
    nbagrCode: 'INDIA_CATTLE_1000_NIMARI_03020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Handsome draught breed with distinctive copper-red coat splashed with white spots, blending genetics of Gir and Khillari.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Draft and dairy composite polymorphism',
      thermalGene: 'Narmada valley heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and outwards, similar to Gir',
      ears: 'Moderately long, somewhat pendulous',
      coatColor: 'Copper-red with white splashes and spots across body',
      humpAndDewlap: 'Prominent thoracic hump, loose folded dewlap',
      sizeAndBuild: 'Medium to large, muscular, active temperament',
      faceProfile: 'Moderately convex forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '750 – 1,000 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '490 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to Narmada river valley climate'
    },
    historicalSignificance: 'Composite blend of Gir milk qualities and Khillari draught endurance.',
    pastoralCommunities: ['Nimar Patidars', 'Bhil graziers'],
    careRecommendations: [
      'Balanced green fodder with pulse husks',
      'Regular vaccination against seasonal epidemics'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=800&q=80',
    tags: ['Nimar', 'Narmada Valley', 'Madhya Pradesh', 'Draught', 'ICAR-NBAGR 03020']
  },
  {
    id: 'dangi-cattle',
    name: 'Dangi',
    vernacularName: 'डांगी / Dangi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Madhya Pradesh',
    homeTract: 'Dangs district (Gujarat border), Nashik, and Ahmednagar hill tracts',
    nbagrCode: 'INDIA_CATTLE_1100_DANGI_03006',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned for unmatched resistance to torrential monsoon rains, possessing unique oily skin secretions that repel torrential downpours on steep Western Ghats.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High cutaneous sebaceous gland secretion genes',
      thermalGene: 'Extreme wet-heat thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, projecting outwards and curving upwards',
      ears: 'Small, alert',
      coatColor: 'Distinctive white with red or black speckles and patches',
      humpAndDewlap: 'Firm thoracic hump, moderate dewlap with oily skin secretion',
      sizeAndBuild: 'Medium, sturdy, short legs with rock-hard black hooves that resist foot rot',
      faceProfile: 'Slightly bulging forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '4.5% – 5.1%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '330 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Unrivaled ability to work in non-stop torrential rains and wet mud'
    },
    historicalSignificance: 'Selected by Western Ghats tribes for plowing rice paddies in high-rainfall mountain slopes.',
    pastoralCommunities: ['Konkan and Dangi tribal farmers', 'Warli tribe'],
    careRecommendations: [
      'Maintain adequate dry bedding during heavy monsoon months',
      'Provide coarse mountain grass supplemented with oilseed cakes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80',
    tags: ['Rain Resistant', 'Western Ghats', 'Maharashtra', 'Draught', 'ICAR-NBAGR 03006']
  },
  {
    id: 'gaolao-cattle',
    name: 'Gaolao',
    vernacularName: 'गवळाऊ / Gaolao / Arvi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Madhya Pradesh',
    homeTract: 'Wardha, Nagpur in Maharashtra, and Chhindwara, Seoni in Madhya Pradesh',
    nbagrCode: 'INDIA_CATTLE_1100_GAOLAO_03008',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose breed of the Vidarbha region, recognized for white coat, convex Roman nose face, and alert carriage.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and muscle coordination markers',
      thermalGene: 'Central Indian dry deciduous heat resistance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, blunt, curving slightly backwards',
      ears: 'Medium, alert',
      coatColor: 'Pure white to light grey',
      humpAndDewlap: 'Moderately developed hump and voluminous dewlap',
      sizeAndBuild: 'Medium to large, long legs, athletic build',
      faceProfile: 'Elongated face, distinct convex profile (Roman nose)'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,000 – 1,500 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'High',
      heatTolerance: 'Very high tolerance to intense Vidarbha summer heat'
    },
    historicalSignificance: 'Bred by the Gaoli pastoralists for supply of bullocks to Maratha armies.',
    pastoralCommunities: ['Gaoli community'],
    careRecommendations: [
      'Balanced green fodder with cotton seed cakes',
      'Clean housing with proper airflow'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
    tags: ['Vidarbha', 'Dual Purpose', 'Roman Nose', 'Maharashtra', 'ICAR-NBAGR 03008']
  },
  {
    id: 'nagori-cattle',
    name: 'Nagori',
    vernacularName: 'नागौरी / Nagori Trotter',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Nagaur district and surrounding parts of Jodhpur in central Rajasthan',
    nbagrCode: 'INDIA_CATTLE_1700_NAGORI_03021',
    nbagrStatus: 'Registered Indigenous',
    description: 'One of India’s most famous fast-trotting draught breeds, featuring a long cylindrical body, white coat, and incredible speed in agricultural carting.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Fast trotting locomotion muscle genes',
      thermalGene: 'Arid climate solar radiation resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving outwards and upwards with sharp tips',
      ears: 'Small, alert, horizontal',
      coatColor: 'Bright white to light silver-grey',
      humpAndDewlap: 'Compact upright hump, thin dewlap',
      sizeAndBuild: 'Large, long-legged, clean-limbed, powerful trotter',
      faceProfile: 'Long flat forehead, alert eyes'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '700 – 1,000 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme desert heat endurance'
    },
    historicalSignificance: 'Prized throughout North India for swift bullock carts and agricultural endurance.',
    pastoralCommunities: ['Nagaur farmers', 'Jats'],
    careRecommendations: [
      'High-energy coarse grain supplementation for working trotters',
      'Adequate water provision in hot arid seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
    tags: ['Fast Trotter', 'Nagaur', 'Rajasthan', 'Draught', 'ICAR-NBAGR 03021']
  },
  {
    id: 'mewati-cattle',
    name: 'Mewati',
    vernacularName: 'मेवाती / Mewati / Kosi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana & Rajasthan',
    homeTract: 'Mewat region: Nuh (Haryana), Alwar and Bharatpur (Rajasthan)',
    nbagrCode: 'INDIA_CATTLE_1700_MEWATI_03020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose breed of Mewat, docility combined with strong draft endurance and decent dairy yield.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 polymorphism',
      thermalGene: 'Semi-arid heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards',
      ears: 'Medium, alert',
      coatColor: 'White with darker neck and head in bulls',
      humpAndDewlap: 'Well-developed hump and loose dewlap',
      sizeAndBuild: 'Medium, compact, deep barrel',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '950 – 1,400 kg per lactation',
      fatPercentage: '4.4% – 4.8%',
      weightMaleKg: '470 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to dry heat and cold winter nights'
    },
    historicalSignificance: 'Developed through cross-influences of Hariana and Gir in the Mewat tract.',
    pastoralCommunities: ['Meo community'],
    careRecommendations: [
      'Legume fodder and wheat straw mix',
      'Clean dry shed conditions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0d0be0?auto=format&fit=crop&w=800&q=80',
    tags: ['Mewat', 'Dual Purpose', 'Haryana', 'Rajasthan', 'ICAR-NBAGR 03020']
  },
  {
    id: 'kherigarh-cattle',
    name: 'Kherigarh',
    vernacularName: 'खेरीगढ़ / Kherigarh',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh',
    homeTract: 'Lakhimpur Kheri district in the Terai region of Uttar Pradesh',
    nbagrCode: 'INDIA_CATTLE_2000_KHERIGARH_03016',
    nbagrStatus: 'Registered Indigenous',
    description: 'Active draught breed of the swampy Terai, famous for thin lyre-shaped horns, active trot, and high disease resistance in marshy grasslands.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Terai marsh pathogen resistance',
      thermalGene: 'Terai humid thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Thin, lyre-curved, sweeping upwards and inwards',
      ears: 'Small, alert',
      coatColor: 'Pure white or greyish-white',
      humpAndDewlap: 'Well-defined firm hump, thin dewlap',
      sizeAndBuild: 'Medium, athletic, high-strung, fast trot',
      faceProfile: 'Narrow lean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '310 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Resistant to humid Terai swamp pests and foot-rot'
    },
    historicalSignificance: 'Bred in the Kheri tract for pulling carts through swampy Terai floodplains.',
    pastoralCommunities: ['Terai farmers', 'Tharu communities'],
    careRecommendations: [
      'Pasture grazing on natural Terai grasslands',
      'Timely vaccination against seasonal vector diseases'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
    tags: ['Terai Region', 'Uttar Pradesh', 'Draught', 'Marsh Resilient', 'ICAR-NBAGR 03016']
  },
  {
    id: 'kenkatha-cattle',
    name: 'Kenkatha',
    vernacularName: 'केंकथा / Kenwariya',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh & Madhya Pradesh',
    homeTract: 'Bundelkhand along Ken river: Banda (UP), Panna and Chhatarpur (MP)',
    nbagrCode: 'INDIA_CATTLE_2000_KENKATHA_03015',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy small draught breed of Bundelkhand, able to survive on rocky scrub and drought-prone Ken river basin with high endurance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Famine survival lipid conservation alleles',
      thermalGene: 'Bundelkhand drought tolerance genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Projecting forwards and curving outwards with pointed tips',
      ears: 'Small, alert',
      coatColor: 'Grey on barrel, darkening to dark grey on neck and head',
      humpAndDewlap: 'Compact hump, thin dewlap',
      sizeAndBuild: 'Small, compact, sturdy limbs with hard hooves',
      faceProfile: 'Short face, broad forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '4.6% – 5.0%',
      weightMaleKg: '390 kg',
      weightFemaleKg: '280 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought hardiness in Bundelkhand summer heat'
    },
    historicalSignificance: 'Bred along the rocky gorges of the Ken River.',
    pastoralCommunities: ['Bundelkhand farmers'],
    careRecommendations: [
      'Mineral licks during severe summer drought',
      'Shelter from intense dry hot winds (Loo)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80',
    tags: ['Bundelkhand', 'Ken River', 'Drought Resilient', 'Draught', 'ICAR-NBAGR 03015']
  },
  {
    id: 'ponwar-cattle',
    name: 'Ponwar',
    vernacularName: 'पोंवार / Ponwar',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh',
    homeTract: 'Pilibhit district in Rohilkhand region of Uttar Pradesh',
    nbagrCode: 'INDIA_CATTLE_2000_PONWAR_03023',
    nbagrStatus: 'Registered Indigenous',
    description: 'Small, active draught cattle with black and white patched coat and lyre horns, bred for work in the foothill forests of the Himalayas.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High-speed trotting locomotion markers',
      thermalGene: 'Foothill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Lyre-shaped, curving outwards, upwards, and slightly inwards',
      ears: 'Small, alert',
      coatColor: 'Black and white patches with white blaze on forehead',
      humpAndDewlap: 'Well-developed compact hump, thin dewlap',
      sizeAndBuild: 'Small to medium, active, agile trotter',
      faceProfile: 'Narrow face, slightly dished forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 600 kg per lactation',
      fatPercentage: '4.5% – 5.1%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '290 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to humid forest conditions'
    },
    historicalSignificance: 'Developed in the Purpur tract of Pilibhit.',
    pastoralCommunities: ['Local Rohilkhand farmers'],
    careRecommendations: [
      'Maintain forest grazing access',
      'Seasonal parasite control'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
    tags: ['Pilibhit', 'Uttar Pradesh', 'Foothills', 'Draught', 'ICAR-NBAGR 03023']
  },
  {
    id: 'siri-cattle',
    name: 'Siri',
    vernacularName: 'सिरी / Siri / Trapu',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Sikkim & West Bengal',
    homeTract: 'High altitude Himalayan slopes of Sikkim and Darjeeling hills (1200–3000m)',
    nbagrCode: 'INDIA_CATTLE_2400_SIRI_03027',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique Himalayan mountain zebu breed possessing thick coarse hair coat and deep muscular hump positioned forward on the neck, adapted to cold altitudes and steep climbing.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude lipid metabolism alleles',
      thermalGene: 'Cold mountain weather insulation adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Sharp, curving forwards, upwards and inwards',
      ears: 'Medium, densely haired inside',
      coatColor: 'Black or black and white patched with thick coarse hair',
      humpAndDewlap: 'Massive muscular cervico-thoracic hump situated forward on the neck, minimal dewlap',
      sizeAndBuild: 'Medium, heavy square chest, short sturdy legs with sure-footed hooves',
      faceProfile: 'Broad square forehead with tuft of coarse hair'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '500 – 850 kg per lactation',
      fatPercentage: '5.0% – 5.8%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Cold tolerant; survives sub-zero Himalayan winters'
    },
    historicalSignificance: 'Indigenous to Sikkim and Bhutan border hills, vital for terraced mountain agriculture.',
    pastoralCommunities: ['Lepchas', 'Bhutias', 'Gorkhas'],
    careRecommendations: [
      'High mountain grazing supplemented with maize flour mash',
      'Protection from severe winter snowstorms'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    tags: ['Himalayan Zebu', 'Sikkim', 'Darjeeling', 'Cold Adapted', 'ICAR-NBAGR 03027']
  },
  {
    id: 'vechur-cattle',
    name: 'Vechur',
    vernacularName: 'വെച്ചൂർ പശു / Vechur Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Kerala',
    homeTract: 'Vechur village, Kottayam district, and Kuttanad wetland ecosystem',
    nbagrCode: 'INDIA_CATTLE_0900_VECHUR_03030',
    nbagrStatus: 'Endangered / Rare',
    description: 'Officially recognized by Guinness World Records as the smallest cattle breed in the world. Renowned for extremely high milk yield relative to body mass, easy digestibility of small fat globules, and high disease resistance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Unique beta-lactoglobulin and small micellar beta-casein structure',
      thermalGene: 'Dwarfism-linked metabolic heat dissipation efficiency',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Very small, thin, curved forward and downward or blunt',
      ears: 'Small, alert, horizontal',
      coatColor: 'Light red, fawn, black, or white',
      humpAndDewlap: 'Distinct small hump in bulls, neat hanging dewlap',
      sizeAndBuild: 'Miniature / ultra-dwarf stature (average wither height ~80-90 cm)',
      faceProfile: 'Fine delicate head with prominent expressive eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '550 – 800 kg per lactation (surpassing body weight multi-fold)',
      fatPercentage: '4.8% – 5.5% (Very small fat globule size aiding rapid digestion)',
      weightMaleKg: '170 kg',
      weightFemaleKg: '130 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to humid tropical climate and resistant to mastitis & FMD'
    },
    historicalSignificance: 'Bred in the Kuttanad delta. Rescued from the brink of extinction by Dr. Sosamma Iype and Kerala Agricultural University researchers.',
    pastoralCommunities: ['Traditional homestead farmers of Kuttanad'],
    careRecommendations: [
      'Very low maintenance; consumes just 2-3 kg dry matter/green grass daily',
      'Requires minimal stall space; ideal for sustainable family micro-dairies'
    ],
    imageUrl: '/src/assets/images/specimen_vechur_cow_1792850412091.jpg',
    tags: ['World Smallest Cattle', 'Guinness Record', 'Kerala', 'Miniature', 'ICAR-NBAGR 03030']
  },
  {
    id: 'punganur-cattle',
    name: 'Punganur',
    vernacularName: 'పుంగనూరు ఆవు / Punganur Dwarf',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Andhra Pradesh',
    homeTract: 'Punganur taluk, Chittoor district in the Rayalaseema region',
    nbagrCode: 'INDIA_CATTLE_0100_PUNGANUR_03031',
    nbagrStatus: 'Endangered / Rare',
    description: 'India’s most celebrated sacred miniature zebu cow, characterized by short legs, broad forehead, docile demeanor, and high butterfat milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and prolactin receptor markers',
      thermalGene: 'Semi-arid scrub heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, crescent, curving backwards and inwards along the neck',
      ears: 'Small, alert',
      coatColor: 'White, light grey, or shades of light brown and red',
      humpAndDewlap: 'Small neat hump in males, minimal thin dewlap',
      sizeAndBuild: 'Miniature stature (height 70-90 cm), compact barrel, short legs',
      faceProfile: 'Broad forehead, short face, docile calm eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '5.0% – 8.0% (Exceptionally rich milk fat for cattle)',
      weightMaleKg: '220 kg',
      weightFemaleKg: '160 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to dry semi-arid heat and limited grazing resources'
    },
    historicalSignificance: 'Reared by the royal rulers of the Punganur estate for sacred temple offerings (Ksheerabhishekam).',
    pastoralCommunities: ['Punganur royal estates', 'Rayalaseema homesteaders'],
    careRecommendations: [
      'Economical upkeep; requires small quantities of green fodder and dry grass',
      'Conserved at dedicated state breeding farms in Andhra Pradesh'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
    tags: ['Miniature Cow', 'Rayalaseema', 'Andhra Pradesh', 'High Butterfat', 'ICAR-NBAGR 03031']
  },
  {
    id: 'kasargod-cattle',
    name: 'Kasargod',
    vernacularName: 'കാസർഗോഡ് കുള്ളൻ / Kasargod Dwarf',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Kerala',
    homeTract: 'Kasargod district in northern Kerala along Western Ghats foothills',
    nbagrCode: 'INDIA_CATTLE_0900_KASARGOD_03032',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dwarf cattle of northern Kerala, renowned for producing high quality organic manure and mineral-rich milk on natural forest grazing.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Natural foraging lipid efficiency',
      thermalGene: 'Humid forest microclimate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, blunt, curved forward and outward',
      ears: 'Small, alert',
      coatColor: 'Black, brown, red, or white variations',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Dwarf frame (wither height ~95-100 cm), agile climber',
      faceProfile: 'Delicate head, alert eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '450 – 650 kg per lactation',
      fatPercentage: '4.8% – 5.4%',
      weightMaleKg: '190 kg',
      weightFemaleKg: '145 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to humid monsoon rainfall and heat'
    },
    historicalSignificance: 'Backbone of zero-budget natural farming in Kerala coconut and arecanut orchards.',
    pastoralCommunities: ['Kasargod homestead farmers'],
    careRecommendations: [
      'Natural orchard grazing and kitchen residue browsing',
      'Provides superior organic bio-manure (Jeevamrutha)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    tags: ['Dwarf Cow', 'Kerala', 'Natural Farming', 'Kasargod', 'ICAR-NBAGR 03032']
  },
  {
    id: 'malnad-gidda-cattle',
    name: 'Malnad Gidda',
    vernacularName: 'ಮಲೆನಾಡು ಗಿಡ್ಡ / Malnad Gidda / Uradana',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Malnad region: Shivamogga, Chikkamagaluru, Uttara Kannada, and Udupi',
    nbagrCode: 'INDIA_CATTLE_0800_MALNADGIDDA_03037',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dwarf zebu cattle of the heavy-rainfall Malnad Western Ghats, renowned for disease resistance, sure-footed grazing on steep rainforest slopes, and medicinal milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Rainforest phytochemical assimilation loci',
      thermalGene: 'High humidity thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, blunt, curved backwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Black, brown, fawn, or mixed patches',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Dwarf build (height ~90-100 cm), short sturdy legs with hard black hooves',
      faceProfile: 'Small, attractive head'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '500 – 750 kg per lactation',
      fatPercentage: '4.9% – 5.5%',
      weightMaleKg: '220 kg',
      weightFemaleKg: '150 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to heavy tropical rains, leeches, and tick fever'
    },
    historicalSignificance: 'Integral to the sacred ecology and betel nut / spice plantations of the Western Ghats.',
    pastoralCommunities: ['Havyaka Brahmins', 'Malnad farmers'],
    careRecommendations: [
      'Free forest grazing on wild herbs and bamboo leaves',
      'Provides prized manure for arecanut and cardamom cultivation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1605007493699-ce65834703a3?auto=format&fit=crop&w=800&q=80',
    tags: ['Malnad', 'Western Ghats', 'Dwarf Cow', 'Karnataka', 'ICAR-NBAGR 03037']
  },
  {
    id: 'belahi-cattle',
    name: 'Belahi',
    vernacularName: 'बेलाही / Belahi / Gujjar Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana & Chandigarh',
    homeTract: 'Foothills of Shivalik hills: Panchkula, Ambala, and Yamunanagar',
    nbagrCode: 'INDIA_CATTLE_0500_BELAHI_03038',
    nbagrStatus: 'Registered Indigenous',
    description: 'Migratory dual-purpose cattle reared by pastoral Gujjars, noted for grey or reddish-dun coat, hard hooves, and high stamina in Shivalik foothills.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 polymorphism',
      thermalGene: 'Sub-Himalayan foothill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Reddish-dun or greyish-white',
      humpAndDewlap: 'Prominent thoracic hump, loose dewlap',
      sizeAndBuild: 'Medium, active migratory frame',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,000 – 1,400 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '330 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to seasonal pastoral transhumance'
    },
    historicalSignificance: 'Maintained for generations by migratory Gujjar pastoralists.',
    pastoralCommunities: ['Pastoral Gujjars'],
    careRecommendations: [
      'Seasonal grazing supplemented with mustard cake',
      'Regular foot health monitoring during migration'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
    tags: ['Shivalik Hills', 'Gujjar Pastoral', 'Haryana', 'Dual-Purpose', 'ICAR-NBAGR 03038']
  },
  {
    id: 'gangatiri-cattle',
    name: 'Gangatiri',
    vernacularName: 'गंगातीरी / Eastern Hariana',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttar Pradesh & Bihar',
    homeTract: 'Along the banks of River Ganga in Varanasi, Ghazipur, Ballia (UP) and Bhojpur (Bihar)',
    nbagrCode: 'INDIA_CATTLE_2000_GANGATIRI_03039',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose indigenous cattle native to the fertile Ganga floodplains, noted for pure white coat, docile nature, and good milk yield on river grasses.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and CSN3 alleles',
      thermalGene: 'River basin humid heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving backwards and outwards with pointed tips',
      ears: 'Medium, alert',
      coatColor: 'Complete white or very light grey',
      humpAndDewlap: 'Well-developed thoracic hump, moderately loose dewlap',
      sizeAndBuild: 'Medium, proportionate, symmetrical frame',
      faceProfile: 'Straight forehead profile'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,800 kg per lactation',
      fatPercentage: '4.3% – 4.9%',
      weightMaleKg: '460 kg',
      weightFemaleKg: '340 kg',
      hardiness: 'High',
      heatTolerance: 'Exceptional adaptation to humid floodplains and waterlogged riverbanks'
    },
    historicalSignificance: 'Sacred river cow revered along the holy Ganga ghats of Varanasi and Kashi.',
    pastoralCommunities: ['Yadavs', 'Bhojpur riverine farmers'],
    careRecommendations: [
      'River bank grazing on natural Dub and Kans grasses',
      'Dry stall flooring during monsoon river flooding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
    tags: ['Ganga River', 'Varanasi', 'Uttar Pradesh', 'Bihar', 'Dual-Purpose', 'ICAR-NBAGR 03039']
  },
  {
    id: 'badri-cattle',
    name: 'Badri',
    vernacularName: 'बद्री गाय / Pahari Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Uttarakhand',
    homeTract: 'Himalayan hills of Almora, Pauri, Chamoli, Tehri, and Pithoragarh (1000–2500m)',
    nbagrCode: 'INDIA_CATTLE_2400_BADRI_03040',
    nbagrStatus: 'Registered Indigenous',
    description: 'First registered indigenous cattle breed of Uttarakhand. Small, agile mountain cow grazing on wild Himalayan medicinal herbs and shrubs, yielding rich A2 milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude fatty acid desaturase alleles',
      thermalGene: 'High-altitude cold and hypoxia adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and upwards',
      ears: 'Small, alert, horizontal',
      coatColor: 'Black, brown, red, or dappled with short dense hair',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, sure-footed mountain build with rock-hard cleft hooves for steep slopes',
      faceProfile: 'Small delicate face with alert bright eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '450 – 750 kg per lactation',
      fatPercentage: '4.8% – 5.6% (Rich in antioxidants from alpine herb browsing)',
      weightMaleKg: '250 kg',
      weightFemaleKg: '180 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to mountain cold, rain, and steep altitude'
    },
    historicalSignificance: 'Centuries-old dairy companion of Garhwal and Kumaon mountain folk; milk used in temple ceremonies across Char Dham.',
    pastoralCommunities: ['Garhwali & Kumaoni hill farmers'],
    careRecommendations: [
      'Open hill grazing on Oak (Banj), Rhododendron, and alpine herbal pastures',
      'Provide warm stone cowsheds (Goth) during freezing winter snows'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
    tags: ['Uttarakhand', 'Himalayan Cow', 'Medicinal Milk', 'Badri', 'ICAR-NBAGR 03040']
  },
  {
    id: 'lakhimi-cattle',
    name: 'Lakhimi',
    vernacularName: 'লাখিমী / Lakhimi Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Assam',
    homeTract: 'Brahmaputra valley: Lakhimpur, Dhemaji, Kamrup, and across Assam',
    nbagrCode: 'INDIA_CATTLE_0200_LAKHIMI_03041',
    nbagrStatus: 'Registered Indigenous',
    description: 'Indigenous cattle of Assam and the Brahmaputra valley, small in stature with remarkable ability to thrive on wetland reeds, marsh grass, and agricultural byproducts.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Wetland adaptation alleles',
      thermalGene: 'High-humidity subtropical thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Grey, brown, red, or black',
      humpAndDewlap: 'Small compact hump, thin dewlap',
      sizeAndBuild: 'Small, compact, sure-footed on marshy river banks',
      faceProfile: 'Short, clean-cut face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.6% – 5.2%',
      weightMaleKg: '280 kg',
      weightFemaleKg: '200 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid monsoons and annual Brahmaputra flooding'
    },
    historicalSignificance: 'Foundational domestic animal of rural Assamese homesteads for plowing paddy and family milk.',
    pastoralCommunities: ['Assamese farmers', 'Bodo communities'],
    careRecommendations: [
      'Grazing on riparian floodplains (Chaporis)',
      'Flood season elevated shelter and stored rice straw feeding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    tags: ['Assam', 'Brahmaputra', 'Wetland Cattle', 'Lakhimi', 'ICAR-NBAGR 03041']
  },
  {
    id: 'ladakhi-cattle',
    name: 'Ladakhi',
    vernacularName: 'ལ་དྭགས་ཀྱི་བ་ཕྱུགས / Ladakhi Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'UT of Ladakh',
    homeTract: 'High-altitude cold arid desert valleys of Leh and Kargil (3000–4500m)',
    nbagrCode: 'INDIA_CATTLE_3100_LADAKHI_03042',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique high-altitude cold-tolerant cattle breed of Ladakh, possessing thick hairy coat and biological adaptations to survive extreme hypoxia and sub-zero temperatures (-35°C).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Cold climate lipid synthase and EPAS1 hypoxia alleles',
      thermalGene: 'Extreme cold adaptation / dense undercoat genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving outwards and upwards',
      ears: 'Small, densely hairy inside',
      coatColor: 'Black or dark brown with dense woolly undercoat',
      humpAndDewlap: 'Compact hump, small thick dewlap',
      sizeAndBuild: 'Small, compact, sturdy limbs with tough hooves for rocky mountain terrain',
      faceProfile: 'Short face with broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '5.0% – 5.6%',
      weightMaleKg: '300 kg',
      weightFemaleKg: '220 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to extreme sub-zero cold (-35°C); low tolerance to plains heat'
    },
    historicalSignificance: 'Essential dairy and draft companion of Ladakhi Buddhist and Muslim high-altitude settlements.',
    pastoralCommunities: ['Ladakhi agro-pastoralists'],
    careRecommendations: [
      'Alfalfa (Ole) and barley straw winter feeding',
      'Warm traditional earth-insulated shelters during frozen Himalayan winter'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80',
    tags: ['Ladakh', 'Cold Arid Desert', 'High Altitude', 'Hypoxia Adapted', 'ICAR-NBAGR 03042']
  },
  {
    id: 'konkan-kapila-cattle',
    name: 'Konkan Kapila',
    vernacularName: 'कोकण कपिला / Konkan Kapila',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra & Goa',
    homeTract: 'Konkan coastal belt: Ratnagiri, Sindhudurg, Raigad, and North/South Goa',
    nbagrCode: 'INDIA_CATTLE_1100_KONKANKAPILA_03043',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy small cattle of the Konkan coast, thriving on laterite hills and rice terraces with supreme resistance to tropical tick parasites and torrential rains.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Tropical coastal foraging metabolism',
      thermalGene: 'Coastal monsoon and high-humidity heat adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and upwards',
      ears: 'Small, alert, horizontal',
      coatColor: 'Reddish-brown, grey, black, or white variations',
      humpAndDewlap: 'Small compact hump, neat thin dewlap',
      sizeAndBuild: 'Small to medium, compact, agile on laterite plateau slopes',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.6% – 5.2%',
      weightMaleKg: '350 kg',
      weightFemaleKg: '250 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid maritime heat and wet hoof conditions'
    },
    historicalSignificance: 'Traditional draft and milch breed of Konkani and Goan agriculturalists.',
    pastoralCommunities: ['Konkan farmers', 'Goan gauncars'],
    careRecommendations: [
      'Pasture grazing on coastal plateaus and cashew/coconut orchards',
      'Dry shed flooring during heavy southwest monsoon'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80',
    tags: ['Konkan', 'Goa', 'Coastal Zebu', 'Dual Purpose', 'ICAR-NBAGR 03043']
  },
  {
    id: 'shweta-kapila-cattle',
    name: 'Shweta Kapila',
    vernacularName: 'श्वेत कपिला / Shweta Kapila',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Goa',
    homeTract: 'Valpoi, Sattari, and Ponda taluks in North and South Goa',
    nbagrCode: 'INDIA_CATTLE_3000_SHWETAKAPILA_03044',
    nbagrStatus: 'Registered Indigenous',
    description: 'Completely white sacred cow of Goa, possessing immaculate white coat, white eyelashes, white muzzle, white horns, and white hooves with high spiritual significance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Complete leucistic pigmentation alleles / DGAT1',
      thermalGene: 'High solar reflectance white pigmentation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, pure light/white or yellowish-white',
      ears: 'Small, alert, with white inner hair',
      coatColor: 'Dazzling pure white coat, white eyelashes, white muzzle, and white hooves',
      humpAndDewlap: 'Neat upright hump, moderate white dewlap',
      sizeAndBuild: 'Medium, elegant, docile disposition',
      faceProfile: 'Pleasing feminine head, calm eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '4.7% – 5.3%',
      weightMaleKg: '360 kg',
      weightFemaleKg: '260 kg',
      hardiness: 'High',
      heatTolerance: 'Reflects intense tropical solar radiation effectively'
    },
    historicalSignificance: 'Revered as sacred "Kamadhenu" in Goan temple rituals; mentioned in ancient Goan folklore.',
    pastoralCommunities: ['Goan traditional farmers'],
    careRecommendations: [
      'Orchard grazing in spice and coconut plantations',
      'Balanced mineral supplements'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
    tags: ['Goa', 'Pure White', 'Sacred Cow', 'Milch', 'ICAR-NBAGR 03044']
  },
  {
    id: 'nari-cattle',
    name: 'Nari',
    vernacularName: 'नारी / Nari / Sirohi Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan & Gujarat',
    homeTract: 'Aravalli hill ranges: Sirohi, Pali, Udaipur (Rajasthan) and Sabarkantha (Gujarat)',
    nbagrCode: 'INDIA_CATTLE_1704_NARI_03045',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose breed of the Aravalli hills, bred by Rebari pastoralists for survival on steep rocky terrain and thorn scrub browsing.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Aravalli arid browsing lipid alleles',
      thermalGene: 'Arid rocky hill thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving outwards and upwards with sharp tips',
      ears: 'Medium, alert',
      coatColor: 'White, grey, or reddish-brown with white patches',
      humpAndDewlap: 'Compact firm hump, thin dewlap',
      sizeAndBuild: 'Medium, agile, sure-footed on steep rocky hills',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '900 – 1,300 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '310 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme hardiness in Aravalli scrubland and rocky terrain'
    },
    historicalSignificance: 'Maintained by nomadic Rebaris and Raikas in the southern Aravallis.',
    pastoralCommunities: ['Rebaris', 'Garasias', 'Raikas'],
    careRecommendations: [
      'Silvopastoral thorn scrub grazing',
      'Adequate water provision in hot arid seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
    tags: ['Aravalli Hills', 'Rajasthan', 'Gujarat', 'Rebari', 'ICAR-NBAGR 03045']
  },
  {
    id: 'dagri-cattle',
    name: 'Dagri',
    vernacularName: 'ડાગરી / Dagri / Gujarat Hill Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Tribal belt of Dahod, Panchmahal, Mahisagar, and Chhota Udepur',
    nbagrCode: 'INDIA_CATTLE_0400_DAGRI_03046',
    nbagrStatus: 'Registered Indigenous',
    description: 'Small, hardy draught cattle reared by tribal communities in eastern Gujarat, famed for plowing rocky undulating hill soils with minimal inputs.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Frugal nutrition metabolism markers',
      thermalGene: 'Dry deciduous forest heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards',
      ears: 'Small, alert',
      coatColor: 'White or light grey',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, compact, wiry limbs with tough hooves',
      faceProfile: 'Narrow, clean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '340 kg',
      weightFemaleKg: '240 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'High resistance to drought and poor forage seasons'
    },
    historicalSignificance: 'Essential agricultural draft asset for Bhil and Rathwa tribal farmers.',
    pastoralCommunities: ['Bhil', 'Rathwa', 'Nayaka tribes'],
    careRecommendations: [
      'Forest fringe browsing and crop residue feeding',
      'Protection against common seasonal livestock diseases'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujarat Tribal', 'Dahod', 'Draught', 'Dagri', 'ICAR-NBAGR 03046']
  },
  {
    id: 'thutho-cattle',
    name: 'Thutho',
    vernacularName: 'Thutho / Nagaland Indigenous Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Nagaland',
    homeTract: 'Kohima, Phek, and Zunheboto districts in the hills of Nagaland',
    nbagrCode: 'INDIA_CATTLE_1400_THUTHO_03047',
    nbagrStatus: 'Registered Indigenous',
    description: 'Semi-feral, muscular indigenous cattle of Nagaland, prized for draft in hill jhum cultivation and cultural meat utility.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Mountain forest foraging adaptation',
      thermalGene: 'High-altitude sub-tropical forest resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, sharp points projecting upwards and forwards',
      ears: 'Medium, alert',
      coatColor: 'Black, brownish-black, or pied with white patches',
      humpAndDewlap: 'Prominent muscular cervico-thoracic hump, tight dewlap',
      sizeAndBuild: 'Medium, muscular, deep chest, sure-footed',
      faceProfile: 'Broad forehead, powerful poll'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '350 – 500 kg per lactation',
      fatPercentage: '4.8% – 5.4%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '300 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Well adapted to dense subtropical rainforest and hilly terrain'
    },
    historicalSignificance: 'Integral to Naga traditional agrarian ceremonies and tribal forest management.',
    pastoralCommunities: ['Angami', 'Chakhesang', 'Sumi Nagas'],
    careRecommendations: [
      'Forest grazing in designated community forest pastures',
      'Salt licks provided at community gathering enclosures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
    tags: ['Nagaland', 'Hill Cattle', 'Naga Heritage', 'Thutho', 'ICAR-NBAGR 03047']
  },
  {
    id: 'himachali-pahari-cattle',
    name: 'Himachali Pahari',
    vernacularName: 'हिमाचली पहाड़ी / Pahari Cow',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Himachal Pradesh',
    homeTract: 'Mandi, Kangra, Chamba, Shimla, and Kullu hill districts (1000–3000m)',
    nbagrCode: 'INDIA_CATTLE_0600_HIMACHALIPAHARI_03048',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy mountain cattle of the Western Himalayas, small in stature with dense hair coat, remarkable mountain grazing agility, and nutrient-dense A2 milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High altitude unsaturated fatty acid synthase',
      thermalGene: 'Cold mountain tolerance genes',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Black, red, brown, or pied with thick dense coat',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, compact, sure-footed on steep Himalayan terrace edges',
      faceProfile: 'Small delicate head'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '500 – 800 kg per lactation',
      fatPercentage: '4.8% – 5.5%',
      weightMaleKg: '280 kg',
      weightFemaleKg: '200 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Cold hardy; easily withstands snowy Himalayan winters'
    },
    historicalSignificance: 'Backbone of traditional mountain agriculture across the Himachal hills.',
    pastoralCommunities: ['Gaddi shepherds', 'Himachali mountain farmers'],
    careRecommendations: [
      'Forest browsing on oak leaves and alpine meadow grasses',
      'Warm winter shed protection during snowfall'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80',
    tags: ['Himachal Pradesh', 'Western Himalayas', 'Pahari Cow', 'ICAR-NBAGR 03048']
  },
  {
    id: 'purnea-cattle',
    name: 'Purnea',
    vernacularName: 'पूर्णिया गाय / Purnea Deshi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Bihar',
    homeTract: 'Purnea, Katihar, Kishanganj, and Araria districts in eastern Bihar',
    nbagrCode: 'INDIA_CATTLE_0300_PURNEA_03049',
    nbagrStatus: 'Registered Indigenous',
    description: 'Resilient indigenous cattle of the Kosi floodplains in eastern Bihar, adapted to waterlogged flood plains with high resistance to endemic parasites.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Floodplain nutrition assimilation',
      thermalGene: 'Humid subtropical heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Grey, red, or black',
      humpAndDewlap: 'Medium compact hump, neat dewlap',
      sizeAndBuild: 'Small to medium, compact, hardy hooves',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '450 – 700 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '330 kg',
      weightFemaleKg: '230 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid heat and annual Kosi river flood conditions'
    },
    historicalSignificance: 'Preserved by eastern Bihar farmers through generations of annual flooding.',
    pastoralCommunities: ['Seemanchal rural farmers'],
    careRecommendations: [
      'Supplement coarse grasses with pulse husks',
      'Vaccination against Haemorrhagic Septicaemia (HS) during monsoons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80',
    tags: ['Bihar', 'Kosi Floodplains', 'Dual Purpose', 'Purnea', 'ICAR-NBAGR 03049']
  },
  {
    id: 'kathani-cattle',
    name: 'Kathani',
    vernacularName: 'कठानी / Kathani Bull',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Chandrapur, Gadchiroli, and Gondia forest districts in eastern Vidarbha',
    nbagrCode: 'INDIA_CATTLE_1100_KATHANI_03050',
    nbagrStatus: 'Registered Indigenous',
    description: 'Sturdy draught cattle native to the dense sal and teak forests of Gadchiroli, prized for puddling wet paddy soils and hauling forest produce.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Forest floor draft endurance alleles',
      thermalGene: 'Forest canopy microclimate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, pointing backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Brown, reddish-brown, or greyish-white',
      humpAndDewlap: 'Compact muscular hump, thin dewlap',
      sizeAndBuild: 'Medium, muscular, strong limbs with hard black hooves',
      faceProfile: 'Flat forehead, dished muzzle'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '400 – 650 kg per lactation',
      fatPercentage: '4.6% – 5.1%',
      weightMaleKg: '380 kg',
      weightFemaleKg: '270 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to humid heat and dense forest conditions'
    },
    historicalSignificance: 'Bred by Gond and Kolam tribal cultivators for forest farming.',
    pastoralCommunities: ['Gond tribes', 'Kolams', 'Vidarbha paddy farmers'],
    careRecommendations: [
      'Forest pasture grazing supplemented with rice bran',
      'Routine vaccination against endemic hemorrhagic septicemia'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=800&q=80',
    tags: ['Gadchiroli', 'Vidarbha', 'Gond Heritage', 'Draught', 'ICAR-NBAGR 03050']
  },
  {
    id: 'sanchori-cattle',
    name: 'Sanchori',
    vernacularName: 'सांचोरी / Sanchori',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Sanchore and Jalore districts in south-western Rajasthan',
    nbagrCode: 'INDIA_CATTLE_1700_SANCHORI_03051',
    nbagrStatus: 'Registered Indigenous',
    description: 'Prominent dual-purpose zebu breed of south-west Rajasthan, possessing large lyre-like horns, good milk yield, and excellent draft capability in sandy soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'DGAT1 and desert lipid efficiency',
      thermalGene: 'Extreme desert solar radiation tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Large, lyre-shaped, curving outwards and upwards',
      ears: 'Broad, pendulous',
      coatColor: 'White or silver-grey',
      humpAndDewlap: 'Prominent thoracic hump, loose folded dewlap',
      sizeAndBuild: 'Large, strong-boned, majestic desert build',
      faceProfile: 'Short face, broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,400 – 2,200 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to Thar desert heatwaves exceeding 47°C'
    },
    historicalSignificance: 'Developed along the Luni river basin by Sanchore cattle breeders.',
    pastoralCommunities: ['Rebaris', 'Purohits', 'Chaudharis'],
    careRecommendations: [
      'High-fibre dry fodder with pearl millet (Bajra) stover',
      'Ample water during summer heat spikes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586671267731-dae08276a899?auto=format&fit=crop&w=800&q=80',
    tags: ['Sanchore', 'Rajasthan', 'Thar Border', 'Dual Purpose', 'ICAR-NBAGR 03051']
  },
  {
    id: 'masilum-cattle',
    name: 'Masilum',
    vernacularName: 'Masilum / Khasi Hill Cattle',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Meghalaya',
    homeTract: 'East Khasi Hills, West Khasi Hills, and Ri-Bhoi districts (1000–1800m)',
    nbagrCode: 'INDIA_CATTLE_1300_MASILUM_03052',
    nbagrStatus: 'Registered Indigenous',
    description: 'Indigenous small cattle breed of Meghalaya, adept at grazing steep mist-covered pine slopes and terraced fields in high rainfall zones.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High-rainfall pine forest foraging alleles',
      thermalGene: 'Cold wet climate thermoregulation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Small, alert',
      coatColor: 'Black, brownish-black, or red with white spots',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, sure-footed on steep wet hill slopes',
      faceProfile: 'Small delicate face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '400 – 600 kg per lactation',
      fatPercentage: '4.8% – 5.3%',
      weightMaleKg: '300 kg',
      weightFemaleKg: '210 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Exceptional tolerance to high-altitude rain and damp hill climates'
    },
    historicalSignificance: 'Reared by the Khasi and Jaintia indigenous communities for centuries.',
    pastoralCommunities: ['Khasi and Jaintia farmers'],
    careRecommendations: [
      'Hill grazing supplemented with rice beer mash residues',
      'Protection from prolonged damp monsoon bedding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80',
    tags: ['Meghalaya', 'Khasi Hills', 'Cloud Forest', 'Masilum', 'ICAR-NBAGR 03052']
  },
  {
    id: 'bachaur-cattle',
    name: 'Bachaur',
    vernacularName: 'बछौर / Bachaur',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Bihar',
    homeTract: 'Madhubani, Darbhanga, and Sitamarhi districts in Mithila region',
    nbagrCode: 'INDIA_CATTLE_0300_BACHAUR_03003',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned draught breed of Mithila, closely resembling Hariana, famed for pulling heavy carts through wet clay and plowing sticky soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Heavy draft muscle alleles',
      thermalGene: 'Mithila humid subtropical heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, curving outwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Greyish-white to pure white',
      humpAndDewlap: 'Compact firm hump, moderately loose dewlap',
      sizeAndBuild: 'Medium, compact, sturdy limbs with hard hooves',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '320 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to humid summer heat'
    },
    historicalSignificance: 'Revered in Mithila folklore; celebrated at the historic Sitamarhi cattle fair.',
    pastoralCommunities: ['Maithil farmers'],
    careRecommendations: [
      'Rice straw and mustard cake concentrate',
      'Provide clean shaded sheds'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80',
    tags: ['Mithila', 'Bihar', 'Draught', 'Bachaur', 'ICAR-NBAGR 03003']
  },
  {
    id: 'binjharpuri-cattle',
    name: 'Binjharpuri',
    vernacularName: 'ବିଞ୍ଝାରପୁରୀ / Binjharpuri / Deshi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Odisha',
    homeTract: 'Jajpur, Bhadrak, and Kendrapara districts in coastal Odisha',
    nbagrCode: 'INDIA_CATTLE_1500_BINJHARPURI_03033',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose breed of coastal Odisha, noted for white coat, black muzzle and hooves, and ability to plow waterlogged paddy.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Coastal delta nutrition alleles',
      thermalGene: 'High-humidity coastal heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving upwards and outwards',
      ears: 'Medium, alert',
      coatColor: 'White or light grey with black muzzle, hooves, and switch of tail',
      humpAndDewlap: 'Medium compact hump, neat dewlap',
      sizeAndBuild: 'Medium, proportionate, sturdy limbs',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '900 – 1,350 kg per lactation',
      fatPercentage: '4.3% – 4.8%',
      weightMaleKg: '420 kg',
      weightFemaleKg: '300 kg',
      hardiness: 'High',
      heatTolerance: 'Supreme resistance to humid maritime climate and flood conditions'
    },
    historicalSignificance: 'Backbone of agriculture along the Brahmani and Baitarani river deltas.',
    pastoralCommunities: ['Coastal Odia farmers'],
    careRecommendations: [
      'Paddy straw supplemented with green fodder',
      'Monsoon flood disease preventive vaccinations'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
    tags: ['Odisha', 'Coastal Delta', 'Dual Purpose', 'Binjharpuri', 'ICAR-NBAGR 03033']
  },
  {
    id: 'ghumusari-cattle',
    name: 'Ghumusari',
    vernacularName: 'ଘୁମୁସରୀ / Ghumusari',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Odisha',
    homeTract: 'Ganjam and Kandhamal hill tracts in southern Odisha',
    nbagrCode: 'INDIA_CATTLE_1500_GHUMUSARI_03034',
    nbagrStatus: 'Registered Indigenous',
    description: 'Small, agile draught cattle native to the Eastern Ghats of Odisha, prized for plowing steep terrace paddies and trotting across rocky paths.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Eastern Ghats terrace plowing alleles',
      thermalGene: 'Semi-arid hill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, thick, pointing outwards and upwards',
      ears: 'Small, alert',
      coatColor: 'White, light brown, or grey with black switch of tail',
      humpAndDewlap: 'Small compact hump, neat dewlap',
      sizeAndBuild: 'Small, compact, agile on rocky mountain slopes',
      faceProfile: 'Narrow lean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '450 – 650 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '340 kg',
      weightFemaleKg: '240 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to rocky hill heat and scarce forage'
    },
    historicalSignificance: 'Bred in the Ghumusar estate of Ganjam district.',
    pastoralCommunities: ['Odia hill farmers', 'Kandha tribes'],
    careRecommendations: [
      'Forest fringe grazing and crop residue feeding',
      'Hoof hygiene during monsoon field work'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
    tags: ['Ganjam', 'Eastern Ghats', 'Odisha', 'Draught', 'ICAR-NBAGR 03034']
  },
  {
    id: 'motu-cattle',
    name: 'Motu',
    vernacularName: 'ମୋଟୁ / Motu / Desi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Odisha, Chhattisgarh & Andhra Pradesh',
    homeTract: 'Malkangiri (Odisha), Bastar (Chhattisgarh), and East Godavari (AP) tri-state forest border',
    nbagrCode: 'INDIA_CATTLE_1500_MOTU_03036',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dwarf indigenous cattle of the Dandakaranya forest tract, bred by tribal communities for draft in undulating red laterite soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Forest scrub foraging efficiency',
      thermalGene: 'Central Indian dry forest heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, straight, pointing backwards and upwards',
      ears: 'Small, alert',
      coatColor: 'Brown, reddish-brown, or greyish-white',
      humpAndDewlap: 'Small compact hump, thin dewlap',
      sizeAndBuild: 'Dwarf frame (height ~100 cm), muscular, sure-footed',
      faceProfile: 'Short clean face'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '350 – 550 kg per lactation',
      fatPercentage: '4.7% – 5.3%',
      weightMaleKg: '310 kg',
      weightFemaleKg: '220 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought and forest disease hardiness'
    },
    historicalSignificance: 'Bred by Koya and Maria tribal communities of the historic Dandakaranya forest.',
    pastoralCommunities: ['Koya tribes', 'Bastar tribal farmers'],
    careRecommendations: [
      'Forest grazing on wild grasses and fallen forest pods',
      'Provide salt licks during dry summer months'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80',
    tags: ['Dandakaranya', 'Odisha', 'Tribal Draught', 'Motu', 'ICAR-NBAGR 03036']
  },
  {
    id: 'red-kandhari-cattle',
    name: 'Red Kandhari',
    vernacularName: 'लाल कंधारी / Lakhabunda',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Nanded, Parbhani, Latur, and Hingoli in Marathwada region',
    nbagrCode: 'INDIA_CATTLE_1100_REDKANDHARI_03025',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned uniform deep dark red draught cattle of Marathwada, famed for stamina, fast trotting, and disciplined work in heavy black cotton soils.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Myosin heavy chain endurance alleles',
      thermalGene: 'Semi-arid Deccan plateau heat resistance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short to medium, curving backwards and outwards with sharp tips',
      ears: 'Medium, alert, horizontal',
      coatColor: 'Uniform deep reddish-brown to dark mahogany red throughout body',
      humpAndDewlap: 'Well-developed compact hump, moderately loose dewlap',
      sizeAndBuild: 'Medium to large, deep chest, clean-limbed, powerful draft build',
      faceProfile: 'Moderately convex forehead, dished between horns'
    },
    productivity: {
      primaryUtility: 'Draught (Work)',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '4.5% – 5.0%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme stamina under scorching Marathwada summer sun'
    },
    historicalSignificance: 'Bred in Kandhar taluk of Nanded; maintained by royal patronage of the Rashtrakuta kings.',
    pastoralCommunities: ['Marathwada farmers'],
    careRecommendations: [
      'High-protein sorghum stover and groundnut cake supplementation',
      'Clean dry flooring to protect hooves in black cotton mud'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    tags: ['Marathwada', 'Deep Red', 'Draught', 'Maharashtra', 'ICAR-NBAGR 03025']
  },
  {
    id: 'hissar-cattle',
    name: 'Hissar',
    vernacularName: 'हिसार / Hansi',
    scientificName: 'Bos indicus',
    category: 'Cattle',
    stateOfOrigin: 'Haryana',
    homeTract: 'Hisar, Sirsa, and Bhiwani districts in western Haryana',
    nbagrCode: 'INDIA_CATTLE_0500_HISSAR_03012',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heavy dual-purpose breed developed at the historic Government Livestock Farm, Hisar, blending Kankrej, Hariana, and Gir traits for heavy draft and milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Composite draft-dairy alleles',
      thermalGene: 'Arid climate thermotolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving outwards and upwards, lyre-like',
      ears: 'Medium, slightly drooping',
      coatColor: 'Silver-grey to iron-grey with darker quarters in bulls',
      humpAndDewlap: 'Prominent thoracic hump, loose folded dewlap',
      sizeAndBuild: 'Very large, heavy bone structure, powerful draft frame',
      faceProfile: 'Broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,400 – 2,000 kg per lactation',
      fatPercentage: '4.4% – 4.9%',
      weightMaleKg: '580 kg',
      weightFemaleKg: '410 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to North Indian semi-arid summer spikes'
    },
    historicalSignificance: 'One of the earliest scientifically bred livestock strains of northern India.',
    pastoralCommunities: ['Haryana farmers'],
    careRecommendations: [
      'Substantial green fodder and dry roughage feeding',
      'Spacious open paddocks for heavy working bulls'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80',
    tags: ['Heavy Dual-Purpose', 'Hisar', 'Haryana', 'Draught', 'ICAR-NBAGR 03012']
  },

  // =========================================================================
  // 20 REGISTERED INDIAN BUFFALO BREEDS (Bubalus bubalis / River Buffalo)
  // Officially Registered by ICAR-NBAGR
  // =========================================================================
  {
    id: 'murrah-buffalo',
    name: 'Murrah',
    vernacularName: 'मुर्राह / Khundi / Black Gold',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Haryana & Punjab',
    homeTract: 'Rohtak, Jind, Hisar, Karnal, Fatehabad (Haryana) and Nabha, Patiala (Punjab)',
    nbagrCode: 'INDIA_BUFFALO_1700_MURRAH_04008',
    nbagrStatus: 'Common / Abundant',
    description: 'Premier dairy buffalo breed of the world, nicknamed "Black Gold" of Indian agriculture. Characterized by tightly curled spiral horns (Khundi), jet-black lustrous skin, and massive wedge-shaped milk conformation.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50 (5 pairs submetacentric, 20 pairs acrocentric)',
      fatRegulatorGene: 'DGAT1 and PPARGC1A high lipid synthase regulation',
      thermalGene: 'Melanin rich epidermis requiring water immersion for heat dissipation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, tightly coiled like a spiral ring (Khundi)',
      ears: 'Thin, alert, slightly drooping',
      coatColor: 'Deep jet black; occasional white switch on tail tip',
      humpAndDewlap: 'No dorsal hump (river buffalo); clean brisket and dewlap',
      sizeAndBuild: 'Massive, heavy-boned, deep-bodied barrel structure',
      faceProfile: 'Refined feminine head in females; masculine broad poll in males'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,200 – 4,500 kg per lactation',
      fatPercentage: '7.0% – 8.5%',
      weightMaleKg: '750 kg',
      weightFemaleKg: '550 kg',
      hardiness: 'High',
      heatTolerance: 'Requires wallowing pond or cold misting in hot arid dry spells'
    },
    historicalSignificance: 'Engine of India’s White Revolution (Operation Flood). Exported globally across Asia, Europe, and Latin America to boost dairy productivity.',
    pastoralCommunities: ['Jat farmers', 'Ahirs', 'Gujjars'],
    careRecommendations: [
      'Provide clean wallowing pool or daily water showers to assist thermoregulation',
      'Feed energy-dense green fodder (sorghum, berseem, maize) with mustard cake concentrate',
      'Maintain strict milking hygiene to safeguard against mastitis'
    ],
    imageUrl: '/src/assets/images/specimen_murrah_buffalo_1792850390932.jpg',
    tags: ['Black Gold', 'Spiral Horns', 'Haryana', 'Punjab', 'Highest Milk', 'ICAR-NBAGR 04008']
  },
  {
    id: 'nili-ravi-buffalo',
    name: 'Nili-Ravi',
    vernacularName: 'नीली-रावी / Panch Kalyani',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Punjab',
    homeTract: 'Sutlej and Ravi river valleys: Ferozepur, Fazilka, Amritsar, Gurdaspur districts',
    nbagrCode: 'INDIA_BUFFALO_1600_NILIRAVI_04009',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned for "Panch Kalyani" markings—five distinctive white points: white forehead star/blaze, white muzzle, white switch of tail, and white markings on all four legs, often accompanied by wall eyes (glass eyes).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'DGAT1 / FASN lipid pathway',
      thermalGene: 'River valley wallowing thermoregulation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Short, coiled tightly with irregular curves',
      ears: 'Medium, pointed',
      coatColor: 'Black with Panch Kalyani white markings (forehead, 4 legs, tail switch) and white wall eyes',
      humpAndDewlap: 'None; clean throat and chest',
      sizeAndBuild: 'Medium to heavy, deep barrel, wedge dairy conformation',
      faceProfile: 'Convex forehead with white star, dished between wall eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,000 – 3,500 kg per lactation',
      fatPercentage: '6.8% – 7.8%',
      weightMaleKg: '700 kg',
      weightFemaleKg: '500 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to riverine floodplains; benefits from daily wallowing'
    },
    historicalSignificance: 'Composite created from the Nili (blue waters of Sutlej) and Ravi river buffaloes.',
    pastoralCommunities: ['Punjabi dairy farmers', 'River graziers'],
    careRecommendations: [
      'River or pond wallowing for optimal thermal balance',
      'High-protein green berseem and silage feeding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
    tags: ['Panch Kalyani', 'Wall Eyes', 'Punjab', 'Sutlej-Ravi', 'Milch', 'ICAR-NBAGR 04009']
  },
  {
    id: 'bhadawari-buffalo',
    name: 'Bhadawari',
    vernacularName: 'भदावरी / Copper Buffalo / Janeva',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Uttar Pradesh & Madhya Pradesh',
    homeTract: 'Ravines of Yamuna and Chambal rivers in Agra, Etawah (UP), and Bhind, Morena (MP)',
    nbagrCode: 'INDIA_BUFFALO_2000_BHADAWARI_04002',
    nbagrStatus: 'Conservation Priority',
    description: 'World-famous for having the highest butterfat content of any bovine or bubaline milk in the world (reaching 12.8% - 14%), characterized by copper-colored coat and two white neck lines (Janeva).',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Exceptional DGAT1 lipid synthesis enzyme efficiency',
      thermalGene: 'Chambal ravine arid heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curled backwards, parallel to neck, then inward at tips',
      ears: 'Medium, alert',
      coatColor: 'Distinctive copper or light brownish-red with sparse hair; legs copper fawn',
      humpAndDewlap: 'None; clean neck with two white lines (Janeva) around lower neck',
      sizeAndBuild: 'Medium, wedge-shaped, compact, sturdy hooves',
      faceProfile: 'Narrow forehead, refined face'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,200 – 1,600 kg per lactation',
      fatPercentage: '8.5% – 13.5% (World Record Bovine Milk Fat)',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Unrivalled ability to withstand hot dry summer ravines with low green fodder'
    },
    historicalSignificance: 'Cherished by traditional ghee makers because 1 liter of Bhadawari milk yields double the clarified butter (ghee) of ordinary cattle milk.',
    pastoralCommunities: ['Bhadawar Rajputs', 'Chambal farmers'],
    careRecommendations: [
      'Flourishes on coarse roughages and ravine bush browsing',
      'National conservation breeding programs in ICAR-CIRB actively preserve pure bloodlines'
    ],
    imageUrl: '/src/assets/images/specimen_bhadawari_buffalo_1792850411944.jpg',
    tags: ['World Record Fat', 'Copper Buffalo', 'Chambal', 'Ghee Breed', 'ICAR-NBAGR 04002']
  },
  {
    id: 'jaffarabadi-buffalo',
    name: 'Jaffarabadi',
    vernacularName: 'जाफराबादी / Gir Buffalo / Bhavnagri',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Gir forest, Saurashtra: Junagadh, Bhavnagar, Amreli, Porbandar, and Jamnagar',
    nbagrCode: 'INDIA_BUFFALO_0400_JAFFARABADI_04004',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heaviest and largest buffalo breed of India, distinguished by massive, heavy drooping horns that hang down beside the face with upward-hooked tips, and prominent forehead bulge.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'FASN high lipid yield genotype',
      thermalGene: 'Gir forest wallowing adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Heavy, broad, flat horns drooping down beside the neck with hooked upward ends',
      ears: 'Broad, long, drooping horizontally',
      coatColor: 'Deep black with occasional white star on poll',
      humpAndDewlap: 'Massive neck with heavy dewlap folds around brisket',
      sizeAndBuild: 'Largest Indian buffalo breed; massive barrel, heavy bone structure',
      faceProfile: 'Prominent frontal bump and convex forehead hanging over the eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,100 – 3,200 kg per lactation',
      fatPercentage: '7.5% – 9.0%',
      weightMaleKg: '800 – 1000 kg',
      weightFemaleKg: '600 – 750 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Highly adapted to coastal wetlands and Gir forest underbrush'
    },
    historicalSignificance: 'Bred by forest Maldharis. Famed in Saurashtra folklore for defending calves from Asiatic lions in the Gir forest.',
    pastoralCommunities: ['Gir Maldharis', 'Rabaris'],
    careRecommendations: [
      'Requires access to daily water wallowing',
      'Heavy roughage consumption requires ample greens and tree foliage'
    ],
    imageUrl: '/src/assets/images/specimen_jaffarabadi_buffalo_1792850412357.jpg',
    tags: ['Heaviest Buffalo', 'Drooping Horns', 'Gir Forest', 'Gujarat', 'ICAR-NBAGR 04004']
  },
  {
    id: 'surti-buffalo',
    name: 'Surti',
    vernacularName: 'सुरती / Surti / Charotari',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Kaira, Vadodara, Bharuch, and Surat districts in the fertile Charotar tract',
    nbagrCode: 'INDIA_BUFFALO_0400_SURTI_04011',
    nbagrStatus: 'Registered Indigenous',
    description: 'Medium-sized dairy buffalo with distinctive flat, sickle-shaped horns directed downwards and backwards, and two prominent white collars on the neck and jaw.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Dairy butterfat synthesis loci',
      thermalGene: 'Charotar plain heat adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Flat, sickle-shaped, growing downwards and backwards then turning up at tips',
      ears: 'Medium, alert with reddish hair inside',
      coatColor: 'Black or brown with two white chevron collars: one around lower jaw and one around brisket',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, economical body size, wedge dairy conformation',
      faceProfile: 'Long, narrow face with prominent bright eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,600 – 2,200 kg per lactation',
      fatPercentage: '7.5% – 8.5%',
      weightMaleKg: '550 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'High',
      heatTolerance: 'Exceptional feed conversion efficiency and climate tolerance'
    },
    historicalSignificance: 'Foundational dairy buffalo that powered the Amul cooperative milk revolution in the Anand district of Gujarat.',
    pastoralCommunities: ['Patidars', 'Charotar farmers'],
    careRecommendations: [
      'Very economical maintenance on crop residues and green forage',
      'Provide clean drinking water and daily scrubbing'
    ],
    imageUrl: '/src/assets/images/specimen_surti_buffalo_1792850436010.jpg',
    tags: ['Sickle Horns', 'Gujarat', 'Amul Foundation', 'High Fat', 'ICAR-NBAGR 04011']
  },
  {
    id: 'mehsana-buffalo',
    name: 'Mehsana',
    vernacularName: 'મહેસાણા / Mehsani',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Mehsana, Sabarkantha, Banaskantha, and Gandhinagar districts in north Gujarat',
    nbagrCode: 'INDIA_BUFFALO_0400_MEHSANA_04006',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier milch buffalo produced by crossing Murrah and Surti, characterized by high persistency of lactation, regular breeding cycle, and semi-curled horns.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High lactation persistency alleles',
      thermalGene: 'Semi-arid North Gujarat heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Semi-curled, intermediate between Murrah spiral and Surti sickle',
      ears: 'Medium, alert',
      coatColor: 'Black, dark brown, or grey-black',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Large, long body, heavy dairy barrel, docile',
      faceProfile: 'Long straight face, wide poll'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,000 – 3,200 kg per lactation',
      fatPercentage: '6.8% – 7.6%',
      weightMaleKg: '650 kg',
      weightFemaleKg: '500 kg',
      hardiness: 'High',
      heatTolerance: 'Very high tolerance to hot semi-arid climate'
    },
    historicalSignificance: 'Core dairy breed powering the Dudhsagar Dairy cooperative network in North Gujarat.',
    pastoralCommunities: ['Chaudharis', 'Patidars'],
    careRecommendations: [
      'Balanced green fodder (lucerne/sorghum) and cottonseed cake',
      'Regular wallowing or water spraying in summer'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
    tags: ['Mehsana', 'Dudhsagar', 'High Persistency', 'Milch', 'ICAR-NBAGR 04006']
  },
  {
    id: 'nagpuri-buffalo',
    name: 'Nagpuri',
    vernacularName: 'नागपुरी / Elichpuri / Barari',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Nagpur, Wardha, Amravati, Akola, and Yavatmal districts in Vidarbha',
    nbagrCode: 'INDIA_BUFFALO_1100_NAGPURI_04007',
    nbagrStatus: 'Registered Indigenous',
    description: 'Famous for long, flat, sword-shaped horns curving backwards on each side of the neck to the shoulders, and excellent dual utility for milk and heavy draft.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Dual-purpose muscle and lipid synthesis alleles',
      thermalGene: 'Vidarbha extreme heatwave tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Very long, flat, sword-shaped, curving backwards along the sides of the neck nearly reaching shoulders',
      ears: 'Medium, horizontal',
      coatColor: 'Black; white markings on face, legs, and tail tip common',
      humpAndDewlap: 'None; clean throat',
      sizeAndBuild: 'Medium, athletic, lighter limbs than Murrah, agile',
      faceProfile: 'Long straight face, alert expression'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,800 kg per lactation',
      fatPercentage: '7.0% – 8.2%',
      weightMaleKg: '550 kg',
      weightFemaleKg: '420 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme heat tolerance; withstands Vidarbha dry heat up to 48°C with minimal wallowing'
    },
    historicalSignificance: 'Bred in the Vidarbha region for working in heavy black cotton soil and supplying rich milk.',
    pastoralCommunities: ['Gaolis', 'Vidarbha farmers'],
    careRecommendations: [
      'Economical keeper; thrives on coarse sorghum stover and cotton seed',
      'Can work effectively even in hot dry afternoons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
    tags: ['Sword Horns', 'Vidarbha', 'Maharashtra', 'Dual Purpose', 'ICAR-NBAGR 04007']
  },
  {
    id: 'pandharpuri-buffalo',
    name: 'Pandharpuri',
    vernacularName: 'पंढरपुरी / Dharwari',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Solapur, Kolhapur, Sangli, and Satara along Bhima and Krishna river basins',
    nbagrCode: 'INDIA_BUFFALO_1100_PANDHARPURI_04010',
    nbagrStatus: 'Registered Indigenous',
    description: 'Instantly recognizable by extraordinarily long, flat, twisted horns extending 45 to 65 cm backwards over the back, renowned for high fertility and regular calving.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High fertility and regular estrus cycle alleles',
      thermalGene: 'Deccan drought and heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Very long (up to 65 cm), flat, curving backwards, upwards, and slightly twisted at tips',
      ears: 'Medium, horizontal',
      coatColor: 'Deep black with occasional white spot on forehead',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, wedge dairy frame, cylindrical body',
      faceProfile: 'Narrow lean face, prominent nasal bone'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,500 – 2,200 kg per lactation',
      fatPercentage: '7.0% – 8.0%',
      weightMaleKg: '500 kg',
      weightFemaleKg: '400 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought resistance in dry Deccan districts'
    },
    historicalSignificance: 'Reared around the sacred temple town of Pandharpur; famous for consistent milk supply to Mumbai and Pune markets.',
    pastoralCommunities: ['Dhangars', 'Maratha farmers'],
    careRecommendations: [
      'Sugarcane tops and green maize feeding',
      'Regular grooming of long horns and dry housing'
    ],
    imageUrl: '/src/assets/images/specimen_pandharpuri_buffalo_1792850502525.jpg',
    tags: ['Long Horns', 'Pandharpur', 'Maharashtra', 'High Fertility', 'ICAR-NBAGR 04010']
  },
  {
    id: 'marathwadi-buffalo',
    name: 'Marathwadi',
    vernacularName: 'मराठवाडी / Ellichpuri type',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Beed, Parbhani, Nanded, Jalna, and Latur districts in Marathwada',
    nbagrCode: 'INDIA_BUFFALO_1100_MARATHWADI_04005',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose buffalo of the drought-prone Marathwada region, noted for parallel flat horns directed backwards and high endurance.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Drought lipid conservation markers',
      thermalGene: 'Marathwada drought heat resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Flat, sweeping backwards parallel to neck, reaching shoulder point',
      ears: 'Medium, horizontal',
      coatColor: 'Black to greyish-black',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, lighter body, active draft and dairy conformation',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,100 – 1,500 kg per lactation',
      fatPercentage: '7.2% – 8.3%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought tolerance and low water consumption'
    },
    historicalSignificance: 'Reliable dairy and farm power asset for smallholder farmers across Marathwada.',
    pastoralCommunities: ['Marathwada farmers', 'Hatkar Dhangars'],
    careRecommendations: [
      'Substantial crop residues (sorghum and cotton stalks)',
      'Water provision during hot dry afternoons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80&buffalo=marathwadi',
    tags: ['Marathwada', 'Drought Resilient', 'Maharashtra', 'Dual Purpose', 'ICAR-NBAGR 04005']
  },
  {
    id: 'toda-buffalo',
    name: 'Toda',
    vernacularName: 'തോഡ എരുമ / Toda Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Nilgiri Hills at high altitudes (1500–2500m above sea level)',
    nbagrCode: 'INDIA_BUFFALO_1800_TODA_04013',
    nbagrStatus: 'Endangered / Rare',
    description: 'Semi-wild hill buffalo breed sacred to the indigenous Toda tribe of the Nilgiris, distinguished by dense ash-grey fawn coat and wide crescent horns.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High-fat highland milk adaptation',
      thermalGene: 'Cold mountain rain adaptation; low plains heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Wide crescent, set wide apart, curving inward and pointing outward',
      ears: 'Short, densely hairy inside',
      coatColor: 'Fawn / ash-grey with dense hair covering the body',
      humpAndDewlap: 'None; thick skin suited for cold hill rain',
      sizeAndBuild: 'Medium size, muscular, gregarious hill climber',
      faceProfile: 'Fawn face with light markings around eyes'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '500 – 700 kg per lactation',
      fatPercentage: '8.0% – 9.5%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Low heat tolerance; adapted strictly to cool highland shola forests'
    },
    historicalSignificance: 'Sacred center of Toda tribal rituals and dairy temples (Pal-chii). Grazed in pristine high-altitude shola grasslands.',
    pastoralCommunities: ['Toda Tribe'],
    careRecommendations: [
      'Requires highland grazing ecology; does not adapt well to plains heat',
      'Preserve shola grassland flora for natural nutrition'
    ],
    imageUrl: '/src/assets/images/specimen_toda_buffalo_1792850436187.jpg',
    tags: ['Sacred', 'Nilgiris', 'Tribal', 'Highland', 'Rare', 'ICAR-NBAGR 04013']
  },
  {
    id: 'banni-buffalo',
    name: 'Banni',
    vernacularName: 'બન્ની ભેંસ / Kundi / Maldhari Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Banni grasslands and Rann of Kutch: Bhuj, Nakhatrana, Rapar taluks',
    nbagrCode: 'INDIA_BUFFALO_0400_BANNI_04012',
    nbagrStatus: 'Registered Indigenous',
    description: 'Celebrated night-grazing buffalo of the arid Kutch grasslands, capable of surviving extreme saline heat and producing high milk yields under nomadic pastoralism.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Nocturnal foraging lipid synthesis alleles',
      thermalGene: 'Saline arid desert heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, tightly coiled with double curvature (inverted coil)',
      ears: 'Medium, horizontal',
      coatColor: 'Mostly black; occasionally brown or copper',
      humpAndDewlap: 'None; clean throat',
      sizeAndBuild: 'Large, compact, deep barrel, sturdy legs',
      faceProfile: 'Broad flat forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2,000 – 3,200 kg per lactation',
      fatPercentage: '7.0% – 8.5%',
      weightMaleKg: '650 kg',
      weightFemaleKg: '500 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to water salinity, hot winds, and night grazing'
    },
    historicalSignificance: 'Bred over centuries by Maldhari pastoralists of Banni who graze them untethered at night to escape daytime desert heat.',
    pastoralCommunities: ['Maldharis of Banni', 'Jat and Mutwa pastoralists'],
    careRecommendations: [
      'Access to natural Banni halophytic grasses (Dhaman, Khaval)',
      'Fresh drinking water ponds (Viradas) maintained by pastoralists'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80&buffalo=banni',
    tags: ['Night Grazer', 'Banni Grasslands', 'Kutch', 'Gujarat', 'ICAR-NBAGR 04012']
  },
  {
    id: 'chilika-buffalo',
    name: 'Chilika',
    vernacularName: 'ଚିଲିକା ମଇଁଷି / Desi Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha',
    homeTract: 'Chilika brackish water lake ecosystem: Puri, Khordha, and Ganjam districts',
    nbagrCode: 'INDIA_BUFFALO_1500_CHILIKA_04014',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique semi-aquatic buffalo that grazes on submerged aquatic weeds in the brackish waters of Chilika lagoon, producing prized curd (Chilika Dahi) that stays fresh for days.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Halophytic aquatic lipid biosynthesis alleles',
      thermalGene: 'Lagoon immersion and saline water osmoregulation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards, upwards, and slightly inwards',
      ears: 'Medium, alert',
      coatColor: 'Black, brownish-black, or grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, compact, sturdy hooves adapted to wet marshy lake mud',
      faceProfile: 'Narrow face, dished between eyes'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '600 – 900 kg per lactation',
      fatPercentage: '8.0% – 9.2%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme tolerance to saline lagoon water and marshy mud'
    },
    historicalSignificance: 'Swims long distances into Chilika lake to graze on aquatic vegetation at night.',
    pastoralCommunities: ['Gola community of Chilika'],
    careRecommendations: [
      'Preserve access to Chilika lagoon grazing paths',
      'Minimal stall feeding required due to abundant aquatic macrophytes'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80&buffalo=chilika',
    tags: ['Chilika Lake', 'Brackish Water', 'Odisha', 'Chilika Curd', 'ICAR-NBAGR 04014']
  },
  {
    id: 'kalahandi-buffalo',
    name: 'Kalahandi',
    vernacularName: 'କଳାହାଣ୍ଡି ମଇଁଷି / Pedda Gaddi',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha',
    homeTract: 'Kalahandi and Rayagada districts in south-western Odisha',
    nbagrCode: 'INDIA_BUFFALO_1500_KALAHANDI_04015',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose buffalo of the drought-prone Kalahandi plateau, noted for stamina in plowing rocky soils and decent milk yield.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Plateau draft and dairy dual alleles',
      thermalGene: 'Semi-arid hill climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Half-corrugated, curving backwards, upwards, and inwards',
      ears: 'Medium, alert',
      coatColor: 'Black to ash-grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, sturdy limbs with hard hooves',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '800 – 1,200 kg per lactation',
      fatPercentage: '7.5% – 8.5%',
      weightMaleKg: '480 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'High resistance to dry heat and low water availability'
    },
    historicalSignificance: 'Backbone of tribal agriculture across the Kalahandi hills.',
    pastoralCommunities: ['Gauda community', 'Kandha tribes'],
    careRecommendations: [
      'Forest grazing on native grasses and bamboo leaves',
      'Dry stall conditions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80&buffalo=kalahandi',
    tags: ['Kalahandi', 'Odisha', 'Dual Purpose', 'ICAR-NBAGR 04015']
  },
  {
    id: 'sambalpuri-buffalo',
    name: 'Sambalpuri',
    vernacularName: 'ସମ୍ବଲପୁରୀ / Gowroo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha',
    homeTract: 'Sambalpur, Bargarh, and Jharsuguda districts in western Odisha',
    nbagrCode: 'INDIA_BUFFALO_1500_SAMBALPURI_04016',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heavy dual-purpose buffalo native to the Mahanadi river basin, prized for pulling heavy forest timber and producing rich dairy milk.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Mahanadi river basin lipid alleles',
      thermalGene: 'Subtropical forest riverine adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and outwards, long and broad',
      ears: 'Medium, horizontal',
      coatColor: 'Black, occasionally with white patch on forehead',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Large, powerful draft barrel, heavy bone structure',
      faceProfile: 'Broad forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,000 – 1,500 kg per lactation',
      fatPercentage: '7.4% – 8.2%',
      weightMaleKg: '580 kg',
      weightFemaleKg: '450 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to intense summer heat of western Odisha'
    },
    historicalSignificance: 'Traditionally employed in forest timber hauling and paddy plowing.',
    pastoralCommunities: ['Sambalpur farming communities'],
    careRecommendations: [
      'River wallowing in Mahanadi river channels',
      'Paddy straw and green fodder supplementation'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80&buffalo=sambalpuri',
    tags: ['Sambalpur', 'Mahanadi Basin', 'Odisha', 'Dual Purpose', 'ICAR-NBAGR 04016']
  },
  {
    id: 'bargur-buffalo',
    name: 'Bargur Buffalo',
    vernacularName: 'பர்கூர் எருமை / Bargur Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Bargur forest hills of Erode district, Western Ghats',
    nbagrCode: 'INDIA_BUFFALO_1800_BARGUR_04017',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy hill buffalo of the Western Ghats, reared inside forest enclosures ("Pattys") by Lingayat communities, agile and sure-footed on steep slopes.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Forest hill grazing lipid alleles',
      thermalGene: 'Western Ghats hill forest adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Medium, curving backwards and upwards',
      ears: 'Small, alert',
      coatColor: 'Dark brownish-black to black',
      humpAndDewlap: 'None; clean throat',
      sizeAndBuild: 'Medium, compact, muscular hill climber with hard hooves',
      faceProfile: 'Narrow lean face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '650 – 950 kg per lactation',
      fatPercentage: '7.8% – 8.8%',
      weightMaleKg: '460 kg',
      weightFemaleKg: '360 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to forest canopy and rocky hill trails'
    },
    historicalSignificance: 'Bred in the Bargur hill ranges for milk and agricultural carting.',
    pastoralCommunities: ['Bargur Lingayats', 'Sholaga tribes'],
    careRecommendations: [
      'Forest grazing on bamboo leaves and hill grasses',
      'Predator protection in community enclosures'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=800&q=80&buffalo=bargur',
    tags: ['Bargur Hills', 'Tamil Nadu', 'Western Ghats', 'Hill Buffalo', 'ICAR-NBAGR 04017']
  },
  {
    id: 'chhattisgarhi-buffalo',
    name: 'Chhattisgarhi',
    vernacularName: 'छत्तीसगढ़ी / Desi Bhains',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Chhattisgarh',
    homeTract: 'Raipur, Bilaspur, Durg, and Rajnandgaon districts in central Chhattisgarh plains',
    nbagrCode: 'INDIA_BUFFALO_2600_CHHATTISGARHI_04018',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose buffalo of the central plains of Chhattisgarh, noted for sickle-shaped horns, calm temperament, and steady draught endurance in rice paddies.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Rice bowl agro-climatic lipid alleles',
      thermalGene: 'Central Indian plateau heat tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Sickle-shaped, curving backwards and inwards',
      ears: 'Medium, horizontal',
      coatColor: 'Black or dark grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, proportionate, sturdy legs for muddy rice fields',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '800 – 1,200 kg per lactation',
      fatPercentage: '7.5% – 8.4%',
      weightMaleKg: '490 kg',
      weightFemaleKg: '380 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to intense humid summer heat of central India'
    },
    historicalSignificance: 'Core agricultural draft and milk asset of the "Rice Bowl of India".',
    pastoralCommunities: ['Raut community', 'Chhattisgarh farmers'],
    careRecommendations: [
      'Paddy straw and pond wallowing',
      'Timely vaccination against hemorrhagic septicemia'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586671267731-dae08276a899?auto=format&fit=crop&w=800&q=80&buffalo=chhattisgarhi',
    tags: ['Chhattisgarh', 'Rice Bowl', 'Dual Purpose', 'ICAR-NBAGR 04018']
  },
  {
    id: 'gojri-buffalo',
    name: 'Gojri',
    vernacularName: 'गोजरी / Gujjari Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Punjab & Himachal Pradesh',
    homeTract: 'Foothills of Shivaliks: Hoshiarpur, Ropar, Gurdaspur (Punjab) and Kangra, Una (HP)',
    nbagrCode: 'INDIA_BUFFALO_1600_GOJRI_04019',
    nbagrStatus: 'Registered Indigenous',
    description: 'Transhumant buffalo reared by migratory pastoral Gujjars, traversing between Shivalik foothill pastures and high Himalayan meadows with remarkable stamina.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Migratory transhumance lipid metabolism',
      thermalGene: 'Sub-Himalayan seasonal altitude adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Semi-curled, sweeping backwards and upwards with tips hooked inward',
      ears: 'Medium, alert',
      coatColor: 'Black or dark brown, with white markings on forehead, legs, and tail tip common',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium to large, athletic, sure-footed limbs with tough hooves',
      faceProfile: 'Flat forehead with white star blaze'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,400 – 2,100 kg per lactation',
      fatPercentage: '7.2% – 8.0%',
      weightMaleKg: '600 kg',
      weightFemaleKg: '450 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to long seasonal migratory journeys between plains and hills'
    },
    historicalSignificance: 'Maintained for centuries by nomadic Gujjar pastoral families across Punjab and Himachal.',
    pastoralCommunities: ['Pastoral Gujjars'],
    careRecommendations: [
      'Seasonal pasture grazing along Shivalik riverbeds',
      'Foot health maintenance during long trekking seasons'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=800&q=80&buffalo=gojri',
    tags: ['Gujjar Pastoral', 'Shivalik Hills', 'Punjab', 'Himachal', 'Milch', 'ICAR-NBAGR 04019']
  },
  {
    id: 'dharwadi-buffalo',
    name: 'Dharwadi',
    vernacularName: 'ಧಾರವಾಡ ಎಮ್ಮೆ / Dharwadi',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Dharwad, Belagavi, Haveri, and Gadag districts in northern Karnataka',
    nbagrCode: 'INDIA_BUFFALO_0800_DHARWADI_04020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Renowned dairy buffalo of northern Karnataka whose high-butterfat, rich solid milk is the authentic secret ingredient of the GI-tagged "Dharwad Peda".',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'High total solid (SNF) and lipid synthesis alleles',
      thermalGene: 'Deccan semi-arid climate adaptation',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Semi-curled, curving backwards and upwards',
      ears: 'Medium, alert',
      coatColor: 'Black to brownish-black',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, compact, dairy barrel conformation',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1,300 – 1,800 kg per lactation',
      fatPercentage: '7.5% – 8.8% (High Milk Solids for Traditional Sweets)',
      weightMaleKg: '520 kg',
      weightFemaleKg: '410 kg',
      hardiness: 'High',
      heatTolerance: 'Well adapted to northern Karnataka semi-arid climate'
    },
    historicalSignificance: 'Famous as the source milk for world-renowned GI-tagged Dharwad Peda confectionery.',
    pastoralCommunities: ['Gowli community', 'Lingayat farmers'],
    careRecommendations: [
      'Jowar stover and green maize fodder',
      'Daily water bathing or wallowing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80&buffalo=dharwadi',
    tags: ['Dharwad Peda', 'Karnataka', 'High Solids', 'Milch', 'ICAR-NBAGR 04020']
  },
  {
    id: 'manda-buffalo',
    name: 'Manda',
    vernacularName: 'ମାଣ୍ଡା ମଇଁଷି / Manda Buffalo',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Odisha & Andhra Pradesh',
    homeTract: 'Eastern Ghats plateau: Koraput (Odisha) and Visakhapatnam hills (AP)',
    nbagrCode: 'INDIA_BUFFALO_1500_MANDA_04021',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy hill buffalo of the Eastern Ghats, characterized by ash-grey/brown coat with copper hair, resistant to parasitic diseases and agile on hill terraces.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Eastern Ghats hill foraging alleles',
      thermalGene: 'High-altitude sub-tropical hill climate resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Broad, flat, curving backwards parallel to neck',
      ears: 'Small, alert',
      coatColor: 'Ash grey or copper brown with light knee markings',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, compact, wiry limbs, sure-footed',
      faceProfile: 'Narrow face'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '700 – 1,000 kg per lactation',
      fatPercentage: '7.8% – 8.6%',
      weightMaleKg: '450 kg',
      weightFemaleKg: '350 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme resistance to tick-borne diseases and rocky slopes'
    },
    historicalSignificance: 'Bred by tribal communities in the Koraput biodiversity hotspot.',
    pastoralCommunities: ['Koraput tribal farmers', 'Eastern Ghats hill communities'],
    careRecommendations: [
      'Hill pasture grazing and crop residue feeding',
      'Shelter during heavy torrential monsoon'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80&buffalo=manda',
    tags: ['Koraput', 'Eastern Ghats', 'Odisha', 'Andhra Pradesh', 'Dual Purpose', 'ICAR-NBAGR 04021']
  },
  {
    id: 'purnathadi-buffalo',
    name: 'Purnathadi',
    vernacularName: 'पूर्णाथडी / Purnathadi',
    scientificName: 'Bubalus bubalis',
    category: 'Buffalo',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Purna river basin: Akola, Amravati, Buldhana in Vidarbha',
    nbagrCode: 'INDIA_BUFFALO_1100_PURNATHADI_04022',
    nbagrStatus: 'Registered Indigenous',
    description: 'Resilient dual-purpose buffalo of the Purna river valley in Vidarbha, bred for high draught power in black cotton soils and rich milk production.',
    genomics: {
      csn2Allele: 'A2/A2 (Homozygous)',
      karyotype: '2n = 50',
      fatRegulatorGene: 'Purna river basin lipid and draft alleles',
      thermalGene: 'Vidarbha summer heatwave tolerance',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/281099',
      uniprotAccession: 'P02666'
    },
    physicalTraits: {
      horns: 'Curving backwards and upwards, sword-like',
      ears: 'Medium, horizontal',
      coatColor: 'Black or dark grey',
      humpAndDewlap: 'None; clean neck',
      sizeAndBuild: 'Medium, strong-boned, agile draft limbs',
      faceProfile: 'Flat forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1,200 – 1,700 kg per lactation',
      fatPercentage: '7.2% – 8.1%',
      weightMaleKg: '520 kg',
      weightFemaleKg: '400 kg',
      hardiness: 'High',
      heatTolerance: 'Supreme stamina under hot dry Vidarbha summer conditions'
    },
    historicalSignificance: 'Bred along the fertile alluvial plains of the Purna river.',
    pastoralCommunities: ['Vidarbha farmers', 'Gowlis'],
    careRecommendations: [
      'Purna river or village pond wallowing',
      'Cotton seed cake and sorghum straw feeding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80&buffalo=purnathadi',
    tags: ['Purna River', 'Vidarbha', 'Maharashtra', 'Dual Purpose', 'ICAR-NBAGR 04022']
  }
];


// =========================================================================
// REGISTERED / CERTIFIED INDIAN INDIGENOUS GOAT BREEDS (Capra hircus)
// Officially Registered by ICAR-NBAGR
// =========================================================================
export const INDIAN_GOAT_BREEDS: BreedInfo[] = [
  {
    id: 'jamunapari-goat',
    name: 'Jamunapari',
    vernacularName: 'जमुनापारी / Jamnapari',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Uttar Pradesh',
    homeTract: 'Chambal river ravines of Etawah, Agra, and Bhind districts',
    nbagrCode: 'INDIA_GOAT_2000_JAMUNAPARI_06001',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier Indian dairy goat known as the "Pashu-Dhan Gem of Chambal". Renowned for large majestic frame, pronounced convex Roman nose with parrot-mouth, and exceptionally long pendulous drooping ears (up to 30 cm).',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60 (58 acrocentric autosomes, 2 sex chromosomes)',
      fatRegulatorGene: 'DGAT1 / CSN1S1 allele B/A high casein synthesis',
      thermalGene: 'HSP70 / HSF1 ravines semi-arid thermal resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/100860824',
      uniprotAccession: 'P18626'
    },
    physicalTraits: {
      horns: 'Short, flat, twisted horns directed backwards and upwards',
      ears: 'Exceptionally long, flat, pendulous, folded (25-30 cm) with distinct curl',
      coatColor: 'Predominantly pure white with reddish-tan patches on neck and ears',
      humpAndDewlap: 'None; characteristic thick hair feathering on thighs and buttocks',
      sizeAndBuild: 'Largest Indian goat breed, tall long-legged dairy conformation',
      faceProfile: 'Extremely convex Roman nose with distinctive parrot-mouth profile'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2.0 - 3.5 kg/day (250-320 kg per lactation)',
      fatPercentage: '4.5% - 5.2% (hypoallergenic caprine milk)',
      weightMaleKg: '75-90 kg',
      weightFemaleKg: '50-60 kg',
      hardiness: 'High',
      heatTolerance: 'Extreme adaptation to semi-arid ravine grazing and scrub browse'
    },
    historicalSignificance: 'Named after the Yamuna (Jamuna) river. Highly valued by pastoralists and exported to Southeast Asia and the Americas to improve indigenous caprine stock.',
    pastoralCommunities: ['Etawah goat pastoralists', 'Yadavs', 'Gujjars'],
    careRecommendations: [
      'Requires tree loppings (Acacia, Neem, Subabul) and extensive ravine browse',
      'Spacious elevated slatted flooring to prevent foot rot during monsoon',
      'Regular deworming for gastrointestinal nematodes (Haemonchus contortus)'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80',
    tags: ['Milch', 'Roman Nose', 'Uttar Pradesh', 'Chambal', 'Capra hircus', 'ICAR-NBAGR 06001']
  },
  {
    id: 'barbari-goat',
    name: 'Barbari',
    vernacularName: 'बरबरी / Barbari',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Uttar Pradesh & Rajasthan',
    homeTract: 'Agra, Mathura, Etah, Alwar, and Bharatpur districts',
    nbagrCode: 'INDIA_GOAT_2017_BARBARI_06002',
    nbagrStatus: 'Registered Indigenous',
    description: 'Compact, highly prolific Indian dual-purpose goat ideal for stall-feeding and intensive commercial farming. Noted for short erect alert ears, gazelle-like grace, and frequent multiple births (twins and triplets).',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60 (58 acrocentric autosomes, 2 sex chromosomes)',
      fatRegulatorGene: 'BMP15 / GDF9 hyper-fecundity ovulation markers',
      thermalGene: 'HSP70 stall-feeding and confinement resilience',
      ncbiLocusLink: 'https://www.ncbi.nlm.nih.gov/gene/100860824',
      uniprotAccession: 'P18626'
    },
    physicalTraits: {
      horns: 'Short, twisted, directed backwards and slightly outwards',
      ears: 'Short, tubular, erect pointing outwards like deer ears',
      coatColor: 'White with distinct light brown, tan, or black spots',
      humpAndDewlap: 'Compact cylindrical barrel with clean neckline',
      sizeAndBuild: 'Small to medium, compact, neat dairy wedge build',
      faceProfile: 'Straight forehead with bulging alert expressive eyes'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1.2 - 2.0 kg/day (150-200 kg per lactation)',
      fatPercentage: '4.8% - 5.0%',
      weightMaleKg: '38-45 kg',
      weightFemaleKg: '25-32 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to stall-fed zero-grazing intensive systems'
    },
    historicalSignificance: 'Bred along the Yamuna and Chambal plains. Popular choice for young livestock entrepreneurs due to high kidding rate (1.8 kids/litter).',
    pastoralCommunities: ['Brijwasi farmers', 'Peri-urban smallholders'],
    careRecommendations: [
      'Stall-fed with concentrate pellets, dry wheat straw, and fresh berseem clover',
      'Clean drinking water with electrolyte replenishment in peak summer',
      'Peste des Petits Ruminants (PPR) and Enterotoxaemia (ET) vaccination'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80',
    tags: ['Stall Feeding', 'Prolific', 'Uttar Pradesh', 'Rajasthan', 'ICAR-NBAGR 06002']
  },
  {
    id: 'beetal-goat',
    name: 'Beetal',
    vernacularName: 'बीतल / Beetal',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Punjab',
    homeTract: 'Gurdaspur, Amritsar, and Ferozepur districts',
    nbagrCode: 'INDIA_GOAT_1600_BEETAL_06003',
    nbagrStatus: 'Registered Indigenous',
    description: 'Famous giant dairy and meat goat of Punjab. Morphologically resembles the Jamunapari with Roman nose and long pendulous ears, but features a shorter tail, spiral horns, and predominantly brown or black coat.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'CSN1S1 / DGAT1 dairy lipid alleles',
      thermalGene: 'Alluvial plains seasonal heat-cold resilience'
    },
    physicalTraits: {
      horns: 'Short to medium spiral horns curving backwards and upwards',
      ears: 'Long, flat, pendulous, drooping with curved tip (20-25 cm)',
      coatColor: 'Predominantly golden-brown, rich red, or black with white spots',
      humpAndDewlap: 'Deep body frame with heavy muscular thighs',
      sizeAndBuild: 'Large, robust, tall frame with well-developed udder',
      faceProfile: 'Pronounced convex Roman nose with alert expression'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2.2 - 3.8 kg/day (220-280 kg per lactation)',
      fatPercentage: '4.5% - 5.0%',
      weightMaleKg: '65-85 kg',
      weightFemaleKg: '45-55 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to both humid river plains and semi-arid tracts'
    },
    historicalSignificance: 'Prized by Punjabi farmers for century-long selective dairy breeding. Known as the "Pride of Majha".',
    pastoralCommunities: ['Majha & Doaba farmers', 'Dairy goat breeders'],
    careRecommendations: [
      'High dry matter intake: chaffed maize fodder, mustard cake, mineral mixture',
      'Regular hoof trimming and clean dry bedding'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80',
    tags: ['Punjab', 'Majha', 'Dairy Goat', 'Roman Nose', 'ICAR-NBAGR 06003']
  },
  {
    id: 'black-bengal-goat',
    name: 'Black Bengal',
    vernacularName: 'ব্ল্যাক বেঙ্গল / काला बंगाल',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'West Bengal, Odisha & Bihar',
    homeTract: 'Gangetic plains, Sundarbans delta, and Chota Nagpur plateau',
    nbagrCode: 'INDIA_GOAT_2400_BLACKBENGAL_06004',
    nbagrStatus: 'Registered Indigenous',
    description: 'World-renowned dwarf meat goat celebrated for exquisite tender meat flavor, exceptionally fine leather skin (export quality), high litter size (3-4 kids per kidding), and early sexual maturity.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'BMPR1B / GDF9 hyper-fecundity loci',
      thermalGene: 'Humid sub-tropical disease and parasite resistance'
    },
    physicalTraits: {
      horns: 'Short, thin, pointed outwards and upwards (5-8 cm)',
      ears: 'Short, flat, carried horizontally',
      coatColor: 'Predominantly jet black; occasionally brown or white',
      humpAndDewlap: 'Short compact legs, deep barrel',
      sizeAndBuild: 'Small dwarf stature, tight fine muscularity',
      faceProfile: 'Straight, alert, fine chiseled muzzle'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '0.4 - 0.8 kg/day (low dairy; supreme meat and leather)',
      fatPercentage: '4.5%',
      weightMaleKg: '20-28 kg',
      weightFemaleKg: '15-20 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme disease resistance to humid tropical conditions'
    },
    historicalSignificance: 'Globally famous for its leather (known as "Kushtia/Bengal Kid" in international markets). A cornerstone of rural livelihoods for women smallholders.',
    pastoralCommunities: ['Bengal rural artisans', 'Santhal tribal farmers'],
    careRecommendations: [
      'Open backyard free-range foraging with kitchen waste and green grass',
      'Provide dry warm shelter during heavy monsoon downpours'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
    tags: ['Meat', 'Leather', 'Prolific', 'West Bengal', 'Sundarbans', 'ICAR-NBAGR 06004']
  },
  {
    id: 'sirohi-goat',
    name: 'Sirohi',
    vernacularName: 'सिरोही / Sirohi',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Rajasthan & Gujarat',
    homeTract: 'Aravalli hills of Sirohi, Ajmer, Bhilwara, and Palanpur',
    nbagrCode: 'INDIA_GOAT_1700_SIROHI_06005',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy dual-purpose goat with compact body, cylindrical horns, leaf-like drooping ears, and brown coat mottled with light or dark brown spots. Highly adaptable to hot semi-arid grazing.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Dual-purpose lipid and muscle growth markers',
      thermalGene: 'Thar desert edge heat and water stress tolerance'
    },
    physicalTraits: {
      horns: 'Curved upwards and backwards, cylindrical',
      ears: 'Medium to long, drooping, leaf-like',
      coatColor: 'Brown with dark brown or white specks/patches',
      humpAndDewlap: 'Cylindrical body with strong legs',
      sizeAndBuild: 'Medium to large dual-purpose conformation',
      faceProfile: 'Slightly convex forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1.0 - 1.8 kg/day',
      fatPercentage: '4.6%',
      weightMaleKg: '50-65 kg',
      weightFemaleKg: '35-45 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to rocky Aravalli terrain and extreme heat'
    },
    historicalSignificance: 'Bred by Raika and Rebari pastoral communities of southern Rajasthan.',
    pastoralCommunities: ['Raikas', 'Rebaris', 'Gujjars'],
    careRecommendations: [
      'Thrives on thorny scrub and tree foliage (Khejri, Ber, Kikar)',
      'Periodic mineral supplementation in summer'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?auto=format&fit=crop&w=800&q=80',
    tags: ['Rajasthan', 'Aravalli', 'Dual Purpose', 'Rebari', 'ICAR-NBAGR 06005']
  },
  {
    id: 'osmanabadi-goat',
    name: 'Osmanabadi',
    vernacularName: 'उस्मानाबादी / Osmanabadi',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Osmanabad, Latur, Solapur, and Ahmednagar districts',
    nbagrCode: 'INDIA_GOAT_1100_OSMANABADI_06006',
    nbagrStatus: 'Registered Indigenous',
    description: 'Prolific, disease-resistant meat goat adapted to Marathwada drought-prone tracts. Short glossy black coat, semi-pendulous ears, and high twining percentage.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High lean meat muscle deposition',
      thermalGene: 'Deccan lava plateau drought tolerance'
    },
    physicalTraits: {
      horns: 'Short, flat, backward curved or polled',
      ears: 'Medium, drooping',
      coatColor: 'Glossy jet black (90%), occasionally spotted with white',
      humpAndDewlap: 'Tight skin with strong bone structure',
      sizeAndBuild: 'Medium, long legs, hardy meat type',
      faceProfile: 'Straight to slightly convex'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '0.8 - 1.5 kg/day',
      fatPercentage: '4.5%',
      weightMaleKg: '45-55 kg',
      weightFemaleKg: '32-40 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Survives drought conditions on dry fodder and stubble'
    },
    historicalSignificance: 'Originated in the dry Deccan plateau. Renowned for supreme disease immunity and low mortality.',
    pastoralCommunities: ['Marathwada dryland farmers', 'Dhangars'],
    careRecommendations: [
      'Rotational grazing on scrub grasslands and pigeonpea stalks',
      'Deworming before and after monsoon'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80&goat=osmanabadi',
    tags: ['Maharashtra', 'Marathwada', 'Meat Goat', 'Black Coat', 'ICAR-NBAGR 06006']
  },
  {
    id: 'changthangi-goat',
    name: 'Changthangi',
    vernacularName: 'ལྡང་ཐང་ར་ / चांगथांगी / Pashmina Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Ladakh',
    homeTract: 'Changthang high-altitude cold desert plateau (4,000-5,000m)',
    nbagrCode: 'INDIA_GOAT_0700_CHANGTHANGI_06010',
    nbagrStatus: 'Registered Indigenous',
    description: 'Producer of the world finest Pashmina cashmere fiber (12-14 microns). Reared by nomadic Changpa pastoralists under extreme sub-zero (-40°C) high-altitude desert plateaus.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'FGF5 / KRTAP hair follicle cashmere development gene',
      thermalGene: 'EPAS1 / EGLN1 high-altitude hypoxia and sub-zero adaptation'
    },
    physicalTraits: {
      horns: 'Large, twisted, outward and backward sweeping',
      ears: 'Small, erect or horizontal, protected from freezing wind',
      coatColor: 'White (most prized), grey, black, or brown',
      humpAndDewlap: 'Dense undercoat of fine pashmina under long coarse guard hair',
      sizeAndBuild: 'Medium, compact, deep chest, sturdy sure-footed mountain hooves',
      faceProfile: 'Straight with thick facial hair'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '200 - 350 grams of ultra-fine Pashmina fiber per year',
      fatPercentage: '4.8%',
      weightMaleKg: '35-45 kg',
      weightFemaleKg: '25-35 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme tolerance to sub-zero cold (-40°C) and low oxygen'
    },
    historicalSignificance: 'Reared by the nomadic Buddhist Changpa tribe. Pashmina from this breed is woven into GI-tagged authentic Kashmiri Pashmina shawls.',
    pastoralCommunities: ['Changpa nomadic pastoralists of Ladakh'],
    careRecommendations: [
      'High-altitude pasture grazing on Caragana and alpine grasses',
      'Combing (not shearing) in spring to harvest fine undercoat',
      'Protected winter corrals against snowstorms and Himalayan wolves'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80&goat=changthangi',
    tags: ['Pashmina', 'Ladakh', 'Changthang', 'Cashmere', 'ICAR-NBAGR 06010']
  },
  {
    id: 'malabari-goat',
    name: 'Malabari',
    vernacularName: 'മലബാറി / തലശ്ശേരി / Tellicherry',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Kerala',
    homeTract: 'Kozhikode, Kannur, Malappuram, and Wayanad districts',
    nbagrCode: 'INDIA_GOAT_0900_MALABARI_06008',
    nbagrStatus: 'Registered Indigenous',
    description: 'Adapted to humid tropical rainfall zones of Malabar. Highly prolific dairy and meat goat with varied coat colors and high parasite resilience.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High milk fat and prolific twinning alleles',
      thermalGene: 'Humid tropical climate and gastrointestinal worm tolerance'
    },
    physicalTraits: {
      horns: 'Small, slightly twisted and pointing backwards',
      ears: 'Medium, flat, drooping or semi-pendulous',
      coatColor: 'White, black, brown, or mottled combinations',
      humpAndDewlap: 'Smooth skin with moderate frame',
      sizeAndBuild: 'Medium dairy conformation with well-shaped udder',
      faceProfile: 'Straight to slightly Roman'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1.2 - 2.2 kg/day (180-220 kg per lactation)',
      fatPercentage: '4.6% - 5.1%',
      weightMaleKg: '45-55 kg',
      weightFemaleKg: '30-38 kg',
      hardiness: 'High',
      heatTolerance: 'Exceptional resilience against humid coastal heat'
    },
    historicalSignificance: 'Developed by Arab-influenced seafaring coastal communities of Malabar over centuries of trade.',
    pastoralCommunities: ['Mappila smallholders', 'Kerala coastal farmers'],
    careRecommendations: [
      'Jackfruit leaves, hybrid Napier grass, and coconut oil cake feeding',
      'Elevated wooden slatted goat sheds for humid hygiene'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80&goat=malabari',
    tags: ['Kerala', 'Malabar', 'Tellicherry', 'Dual Purpose', 'ICAR-NBAGR 06008']
  },
  {
    id: 'jakhrana-goat',
    name: 'Jakhrana',
    vernacularName: 'जखराना / Jakhrana',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Jakhrana village and surrounding Behror tehsil in Alwar district',
    nbagrCode: 'INDIA_GOAT_1700_JAKHRANA_06007',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier milch goat of eastern Rajasthan. Lustrous jet-black coat with distinctive white specks on muzzle and ears; yields 3-4 kg of milk daily under semi-arid conditions.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High casein and daily lactation volume loci',
      thermalGene: 'Arid climate thermoregulation and browse foraging'
    },
    physicalTraits: {
      horns: 'Short to medium, directed backwards',
      ears: 'Medium, pendulous, drooping with white spots',
      coatColor: 'Jet black with white spots on ears and muzzle',
      humpAndDewlap: 'Compact straight top-line with capacious udder',
      sizeAndBuild: 'Large, tall, dairy frame',
      faceProfile: 'Straight to slightly Roman face'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '2.5 - 4.0 kg/day (280-350 kg per lactation)',
      fatPercentage: '4.7%',
      weightMaleKg: '60-75 kg',
      weightFemaleKg: '45-55 kg',
      hardiness: 'High',
      heatTolerance: 'Extreme tolerance to semi-arid summer spikes (>46°C)'
    },
    historicalSignificance: 'Bred in the historic Mewat tract. Named after its home village Jakhrana.',
    pastoralCommunities: ['Alwar smallholders', 'Meo farmers'],
    careRecommendations: ['Extensive browse grazing on Khejri loppings', 'Mineral lick blocks in stalls'],
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80&goat=jakhrana',
    tags: ['Rajasthan', 'Alwar', 'Dairy Goat', 'Jakhrana', 'ICAR-NBAGR 06007']
  },
  {
    id: 'chegu-goat',
    name: 'Chegu',
    vernacularName: 'छेगु / Chegu',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Himachal Pradesh & Ladakh',
    homeTract: 'Spiti, Kinnaur, and Lahaul high alpine valleys (>3,500m)',
    nbagrCode: 'INDIA_GOAT_0600_CHEGU_06009',
    nbagrStatus: 'Registered Indigenous',
    description: 'Mountain pashmina goat carrying a dense, fine cashmere underdown protected by long coarse outer guard hairs against sub-zero Himalayan winters.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'FGF5 hair length and secondary follicle density',
      thermalGene: 'Himalayan alpine cold and hypoxia adaptation'
    },
    physicalTraits: {
      horns: 'Long, twisted, curving upward and backward',
      ears: 'Small, alert, horizontal',
      coatColor: 'White, grey, or black with long silky fleece',
      humpAndDewlap: 'Dense inner cashmere undercoat',
      sizeAndBuild: 'Small to medium, compact, agile mountain climber',
      faceProfile: 'Straight profile'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '150 - 250g fine cashmere underdown per year',
      fatPercentage: '4.5%',
      weightMaleKg: '35-42 kg',
      weightFemaleKg: '25-32 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Sub-zero cold adapted; intolerant of humid heat'
    },
    historicalSignificance: 'Spiti and Kinnaur high-altitude pastoralism pillar.',
    pastoralCommunities: ['Kinnaura and Spiti shepherds'],
    careRecommendations: ['Alpine pasture grazing and protected dry winter corrals'],
    imageUrl: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800&q=80',
    tags: ['Himachal', 'Spiti', 'Cashmere', 'Alpine', 'ICAR-NBAGR 06009']
  },
  {
    id: 'surti-goat',
    name: 'Surti Goat',
    vernacularName: 'સુરતી બકરી / Surti',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Surat, Bharuch, and Vadodara districts',
    nbagrCode: 'INDIA_GOAT_0400_SURTI_06011',
    nbagrStatus: 'Registered Indigenous',
    description: 'Pure white docile dairy goat popular with urban households in Gujarat for stall-fed milk production.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High milk fat and solid content markers',
      thermalGene: 'Coastal Gujarat humid-heat adaptation'
    },
    physicalTraits: {
      horns: 'Small, flat, pointing backwards',
      ears: 'Medium, drooping',
      coatColor: 'Pristine pure white',
      humpAndDewlap: 'Compact clean frame',
      sizeAndBuild: 'Small to medium dairy conformation',
      faceProfile: 'Straight forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy)',
      averageYield: '1.5 - 2.5 kg/day (180-240 kg per lactation)',
      fatPercentage: '4.8% - 5.2%',
      weightMaleKg: '40-50 kg',
      weightFemaleKg: '28-36 kg',
      hardiness: 'High',
      heatTolerance: 'Well-adapted to urban stall feeding'
    },
    historicalSignificance: 'Traditional household dairy goat of coastal Gujarat.',
    pastoralCommunities: ['Gujarati urban smallholders'],
    careRecommendations: ['Stall-fed green fodder and pulses chuni'],
    imageUrl: 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujarat', 'Surat', 'White Goat', 'Milch', 'ICAR-NBAGR 06011']
  },
  {
    id: 'sangamneri-goat',
    name: 'Sangamneri',
    vernacularName: 'संगमनेरी / Sangamneri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Sangamner, Rahuri, and Kopargaon tehsils of Ahmednagar',
    nbagrCode: 'INDIA_GOAT_1100_SANGAMNERI_06012',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose medium-sized goat producing quality mutton and 1-2 liters of milk daily.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Balanced dairy-meat dual-purpose markers',
      thermalGene: 'Deccan rain-shadow heat tolerance'
    },
    physicalTraits: {
      horns: 'Medium, directed backwards and upwards',
      ears: 'Medium, drooping',
      coatColor: 'White, black, or brown mottled',
      humpAndDewlap: 'Compact cylindrical body',
      sizeAndBuild: 'Medium, sturdy frame',
      faceProfile: 'Slightly convex forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose',
      averageYield: '1.2 - 2.0 kg/day',
      fatPercentage: '4.5%',
      weightMaleKg: '45-55 kg',
      weightFemaleKg: '30-40 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to drought stress'
    },
    historicalSignificance: 'Bred in the Pravara river basin of Maharashtra.',
    pastoralCommunities: ['Sangamner pastoralists'],
    careRecommendations: ['Rotational grazing and legume crop residue'],
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    tags: ['Maharashtra', 'Sangamner', 'Dual Purpose', 'ICAR-NBAGR 06012']
  },
  {
    id: 'ganjam-goat',
    name: 'Ganjam',
    vernacularName: 'ଗଞ୍ଜାମ / गंजाम',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Odisha',
    homeTract: 'Ganjam, Gajapati, and Rayagada districts',
    nbagrCode: 'INDIA_GOAT_1500_GANJAM_06013',
    nbagrStatus: 'Registered Indigenous',
    description: 'Tall, long-legged meat breed with prominent curved horns, bred by traditional Golla pastoralists in Odisha hills.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High muscle mass and walking stamina',
      thermalGene: 'Eastern Ghats humid forest adaptation'
    },
    physicalTraits: {
      horns: 'Long, twisted, curving upward and backward',
      ears: 'Medium, horizontal to drooping',
      coatColor: 'Brown, black, or variegated',
      humpAndDewlap: 'Long slender muscular legs',
      sizeAndBuild: 'Tall, rangy, draft-adapted frame',
      faceProfile: 'Convex Roman nose'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '0.8 - 1.2 kg/day',
      fatPercentage: '4.6%',
      weightMaleKg: '45-55 kg',
      weightFemaleKg: '32-42 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Excellent stamina for hilly forest grazing'
    },
    historicalSignificance: 'Bred by traditional Golla herdsmen of southern Odisha.',
    pastoralCommunities: ['Golla pastoralists'],
    careRecommendations: ['Extensive forest fringe pasture grazing'],
    imageUrl: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
    tags: ['Odisha', 'Ganjam', 'Eastern Ghats', 'Meat Goat', 'ICAR-NBAGR 06013']
  },
  {
    id: 'attappady-black-goat',
    name: 'Attappady Black',
    vernacularName: 'അട്ടപ്പാടി ബ്ലാക്ക് / Attappady Black',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Kerala',
    homeTract: 'Attappady tribal valley of Palakkad district',
    nbagrCode: 'INDIA_GOAT_0900_ATTAPPADYBLACK_06014',
    nbagrStatus: 'Registered Indigenous',
    description: 'Slender black mountain goat reared by Irula, Muduga, and Kurumba tribes in the Nilgiri biosphere reserve.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Disease resistance and lean meat profile',
      thermalGene: 'Western Ghats hill climate and rain resistance'
    },
    physicalTraits: {
      horns: 'Curved backwards and outwards',
      ears: 'Medium, horizontal or drooping',
      coatColor: 'Jet black with glossy sheen',
      humpAndDewlap: 'Slender agile mountain build',
      sizeAndBuild: 'Small to medium, nimble cliff climber',
      faceProfile: 'Straight profile'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '0.6 - 1.0 kg/day',
      fatPercentage: '4.4%',
      weightMaleKg: '35-42 kg',
      weightFemaleKg: '25-32 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Resistant to damp mountain rot and leeches'
    },
    historicalSignificance: 'Conserved by indigenous tribes of the Nilgiri hills for centuries.',
    pastoralCommunities: ['Irula, Muduga & Kurumba tribes'],
    careRecommendations: ['Hill pasture browse and sheltered rain stalls'],
    imageUrl: 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80',
    tags: ['Kerala', 'Attappady', 'Nilgiris', 'Tribal Breed', 'ICAR-NBAGR 06014']
  },
  {
    id: 'marwari-goat',
    name: 'Marwari',
    vernacularName: 'मारवाड़ी / Marwari Bakra',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Barmer, Jaisalmer, Bikaner, Jodhpur, and Nagaur arid desert tracts',
    nbagrCode: 'INDIA_GOAT_1700_MARWARI_06015',
    nbagrStatus: 'Registered Indigenous',
    description: 'Sturdy desert goat of western Rajasthan famous for lustrous jet-black hair fleece, medium flat drooping ears, and exceptional drought hardiness in the Thar Desert.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High water retention and arid fat metabolism',
      thermalGene: 'Arid desert thermal resilience and low water turnover'
    },
    physicalTraits: {
      horns: 'Short to medium, pointed backwards and upwards with slight spiral twist',
      ears: 'Flat, drooping, medium length (15-18 cm) with white speckles',
      coatColor: 'Jet black with long coarse hair shorn for coarse carpet rugs',
      humpAndDewlap: 'None (slender arid caprine build)',
      sizeAndBuild: 'Medium to large, hardy legs adapted to long desert migrations',
      faceProfile: 'Slightly roman or straight facial bridge'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose (Meat & Milk)',
      averageYield: '0.8 - 1.5 kg/day (120 - 180 kg per lactation)',
      fatPercentage: '4.2% - 4.6%',
      weightMaleKg: '42 - 50 kg',
      weightFemaleKg: '30 - 38 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Survives severe 48°C Thar desert summer droughts'
    },
    historicalSignificance: 'Heritage transhumant breed reared by Raika and Rebari pastoral communities of the Thar Desert.',
    pastoralCommunities: ['Raika', 'Rebari', 'Marwari nomadic herders'],
    careRecommendations: ['Extensive desert browse, mineral lick blocks, and clean drinking water points'],
    imageUrl: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80',
    tags: ['Rajasthan', 'Marwari', 'Thar Desert', 'Dual-Purpose', 'ICAR-NBAGR 06015']
  },
  {
    id: 'zalawadi-goat',
    name: 'Zalawadi',
    vernacularName: 'ઝાલાવાડી / Tara Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Surendranagar, Rajkot, and Ahmedabad semi-arid districts of Saurashtra',
    nbagrCode: 'INDIA_GOAT_0400_ZALAWADI_06016',
    nbagrStatus: 'Registered Indigenous',
    description: 'Tall dual-purpose Saurashtra goat known as Tara Bakri, featuring long corkscrew spiraled horns, long drooping leaf-like ears, and high twinning percentage.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High lipid synthesis in milk',
      thermalGene: 'Adapted to semi-arid saline flatlands'
    },
    physicalTraits: {
      horns: 'Long corkscrew twisted horns directed backwards and outwards',
      ears: 'Long, drooping, pendulous leaf-like ears (20-25 cm)',
      coatColor: 'Jet black with glossy coat; occasionally white patches on muzzle',
      humpAndDewlap: 'None (tall dairy conformation)',
      sizeAndBuild: 'Tall, long-legged, well-proportioned body',
      faceProfile: 'Slightly convex profile'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy) & Meat',
      averageYield: '1.5 - 2.5 kg/day',
      fatPercentage: '4.5%',
      weightMaleKg: '45 - 55 kg',
      weightFemaleKg: '35 - 45 kg',
      hardiness: 'High',
      heatTolerance: 'Excellent tolerance to saline soil and high summer heat'
    },
    historicalSignificance: 'Originated in the historical Zalawad principality of Saurashtra, Gujarat.',
    pastoralCommunities: ['Bharwad and Rabari pastoralists'],
    careRecommendations: ['Acacia tree loppings, cotton seed cake, and regular deworming'],
    imageUrl: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujarat', 'Zalawadi', 'Saurashtra', 'Dairy Goat', 'ICAR-NBAGR 06016']
  },
  {
    id: 'gohilwadi-goat',
    name: 'Gohilwadi',
    vernacularName: 'ગોહિલવાડી / Gohilwadi Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Bhavnagar, Amreli, and Junagadh coastal and hilly tracts of Saurashtra',
    nbagrCode: 'INDIA_GOAT_0400_GOHILWADI_06017',
    nbagrStatus: 'Registered Indigenous',
    description: 'Black dual-purpose goat native to the historical Gohilwad kingdom, possessing long pendulous ears and excellent lactation persistence on coastal scrubland.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High fatty acid mobilization',
      thermalGene: 'High humidity and maritime heat tolerance'
    },
    physicalTraits: {
      horns: 'Slightly twisted, directed backwards and upwards',
      ears: 'Drooping, pendulous, slightly curled at tips',
      coatColor: 'Uniformly black with coarse hair',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium to heavy build, deep chest',
      faceProfile: 'Slightly roman with wide forehead'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose (Meat & Milk)',
      averageYield: '1.2 - 2.0 kg/day',
      fatPercentage: '4.4%',
      weightMaleKg: '45 - 52 kg',
      weightFemaleKg: '34 - 42 kg',
      hardiness: 'High',
      heatTolerance: 'Tolerant to humid Saurashtra coastal monsoons'
    },
    historicalSignificance: 'Bred in the Gohilwad region of Bhavnagar state by pastoralists.',
    pastoralCommunities: ['Bharwads and Kolis of southern Saurashtra'],
    careRecommendations: ['Dry fodder supplementation, coastal shelter, and vaccination for PPR'],
    imageUrl: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujarat', 'Bhavnagar', 'Gohilwadi', 'Coastal', 'ICAR-NBAGR 06017']
  },
  {
    id: 'mehsana-goat',
    name: 'Mehsana Goat',
    vernacularName: 'મહેસાણા બકરી / Mehsani Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Mehsana, Patan, Banaskantha, and Gandhinagar fertile agro-ecological tracts',
    nbagrCode: 'INDIA_GOAT_0400_MEHSANA_06018',
    nbagrStatus: 'Registered Indigenous',
    description: 'Premier dairy and meat goat of north Gujarat, known for high milk yield, docile temperament, and characteristic white speckles on black ears and muzzle.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High lactation efficiency',
      thermalGene: 'Semi-arid agricultural zone thermal adaptation'
    },
    physicalTraits: {
      horns: 'Twisted upwards and backwards',
      ears: 'Drooping with distinctive white specks or marbling',
      coatColor: 'Black with white speckling on ear margins and face',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Large, long body with developed udder',
      faceProfile: 'Straight to slightly convex'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy) & Meat',
      averageYield: '1.4 - 2.2 kg/day',
      fatPercentage: '4.3%',
      weightMaleKg: '48 - 56 kg',
      weightFemaleKg: '36 - 44 kg',
      hardiness: 'High',
      heatTolerance: 'Very resilient to dry north Gujarat heat'
    },
    historicalSignificance: 'Traditional dairy goat of north Gujarat milk cooperative villages.',
    pastoralCommunities: ['Rabari and Patel smallholders'],
    careRecommendations: ['Balanced concentrate feed, green sorghum fodder, clean housing'],
    imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujarat', 'Mehsana', 'Dairy Goat', 'High Yield', 'ICAR-NBAGR 06018']
  },
  {
    id: 'berari-goat',
    name: 'Berari',
    vernacularName: 'बेरारी / Gaorani Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Vidarbha region comprising Nagpur, Wardha, Amravati, and Akola districts',
    nbagrCode: 'INDIA_GOAT_1100_BERARI_06019',
    nbagrStatus: 'Registered Indigenous',
    description: 'Dual-purpose goat of Vidarbha featuring a dark tan or black coat with lighter underline, known for high heat tolerance in the Vidarbha black cotton belt.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'FecB prolifacy-linked markers',
      thermalGene: 'Vidarbha extreme 47°C summer heat resilience'
    },
    physicalTraits: {
      horns: 'Flat, directed backwards and outwards',
      ears: 'Flat, drooping, leaf-shaped',
      coatColor: 'Dark tan or bronze-brown to black with lighter underside',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium, compact, active and alert',
      faceProfile: 'Straight face with prominent eyes'
    },
    productivity: {
      primaryUtility: 'Meat & Milk',
      averageYield: '0.8 - 1.2 kg/day',
      fatPercentage: '4.5%',
      weightMaleKg: '38 - 46 kg',
      weightFemaleKg: '28 - 36 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to severe Vidarbha heatwaves'
    },
    historicalSignificance: 'Bred in the historical Berar province across black cotton agro-climatic zones.',
    pastoralCommunities: ['Dhangar and Gowari communities of Vidarbha'],
    careRecommendations: ['Extensive grazing on cotton stalks and scrub trees, rain protection'],
    imageUrl: 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80',
    tags: ['Maharashtra', 'Vidarbha', 'Berari', 'Heat Tolerant', 'ICAR-NBAGR 06019']
  },
  {
    id: 'gaddi-goat',
    name: 'Gaddi',
    vernacularName: 'गद्दी / Himalayan Pashmina Mountain Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Himachal Pradesh & Uttarakhand',
    homeTract: 'Chamba, Kangra, Kullu, Kinnaur, and Garhwal Himalayan alpine ranges',
    nbagrCode: 'INDIA_GOAT_0600_GADDI_06020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy transhumant Himalayan mountain goat bred by the Gaddi nomads for fine lustrous underhair, meat, and pack transport across high alpine passes.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Keratin fiber gene family',
      thermalGene: 'High-altitude hypoxia and sub-zero frost endurance'
    },
    physicalTraits: {
      horns: 'Heavy, long, pointed backwards and upwards with spiral curve',
      ears: 'Long, drooping (18-22 cm)',
      coatColor: 'Predominantly white with lustrous hair; occasionally black or fawn patches',
      humpAndDewlap: 'None (heavy fleece covering entire body)',
      sizeAndBuild: 'Stout, strong muscular legs, sure-footed hooves',
      faceProfile: 'Convex nose bridge'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '0.5 - 1.5 kg coarse wool/hair per year',
      fatPercentage: '4.8%',
      weightMaleKg: '45 - 55 kg',
      weightFemaleKg: '32 - 40 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme cold resistance; transhumant downward migration in winter'
    },
    historicalSignificance: 'Indispensable companion of the transhumant Gaddi shepherds across the Dhauladhar range.',
    pastoralCommunities: ['Gaddi and Gujjar nomadic pastoralists'],
    careRecommendations: ['Regular fleece shearing, protection from foot rot, high-energy mountain feed'],
    imageUrl: 'https://images.unsplash.com/photo-1574063413132-355dbfd83e25?auto=format&fit=crop&w=800&q=80',
    tags: ['Himachal Pradesh', 'Gaddi', 'Himalayas', 'Mountain Goat', 'ICAR-NBAGR 06020']
  },
  {
    id: 'kannaiadu-goat',
    name: 'Kannaiadu',
    vernacularName: 'கன்னியாடு / Kanni Adu',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Ramanathapuram, Thoothukudi, Virudhunagar, and Sivagangai dry districts',
    nbagrCode: 'INDIA_GOAT_1800_KANNAIADU_06021',
    nbagrStatus: 'Registered Indigenous',
    description: 'Distinctive Tamil Nadu meat goat featuring black coat with two white or fawn stripes on the face and white underline, known for rapid kidding and high meat yield.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Myostatin and rapid muscle accretion markers',
      thermalGene: 'Semi-arid dry zone heat resilience'
    },
    physicalTraits: {
      horns: 'Short, flat, curved backwards',
      ears: 'Medium, semi-pendulous',
      coatColor: 'Black body with characteristic two white lines running from eyes to muzzle',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium, athletic, lean meat conformation',
      faceProfile: 'Straight'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'High dressing percentage (50-52%)',
      fatPercentage: 'Lean carcass quality',
      weightMaleKg: '36 - 44 kg',
      weightFemaleKg: '26 - 32 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to arid thorn scrub and high coastal humidity'
    },
    historicalSignificance: 'Traditional indigenous meat goat conserved by rural agrarian communities of southern Tamil Nadu.',
    pastoralCommunities: ['Kallar and Naicker farming communities'],
    careRecommendations: ['Prosopis and acacia grazing, clean water, timely vaccination'],
    imageUrl: 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
    tags: ['Tamil Nadu', 'Kanni Adu', 'Meat Goat', 'Drought Resilient', 'ICAR-NBAGR 06021']
  },
  {
    id: 'kodi-adu-goat',
    name: 'Kodi Adu',
    vernacularName: 'கொடி ஆடு / Kodi Adu',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Thoothukudi, Tirunelveli, and Tenkasi rain-shadow arid belts',
    nbagrCode: 'INDIA_GOAT_1800_KODIADU_06022',
    nbagrStatus: 'Registered Indigenous',
    description: 'Tall, long-legged meat goat with striking splashes of black, white, and brown markings, capable of browsing high tree tops on rear legs in arid scrublands.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High browse assimilation and rumen efficiency',
      thermalGene: 'High temperature tolerance in rain-shadow scrublands'
    },
    physicalTraits: {
      horns: 'Curved backwards and outwards',
      ears: 'Medium drooping ears',
      coatColor: 'White splashed with black or reddish-brown patches (Kodi pattern)',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Tall, long-legged, agile tree browser',
      faceProfile: 'Roman nose in males'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Tender carcass with 48% meat yield',
      fatPercentage: 'Lean chevon',
      weightMaleKg: '40 - 48 kg',
      weightFemaleKg: '28 - 35 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme heat resistance in southern Tamil Nadu'
    },
    historicalSignificance: 'Reared along coastal and inland thorn forests for chevon production.',
    pastoralCommunities: ['Thevar and Konar livestock keepers'],
    careRecommendations: ['Extensive pasture browsing, dry fodder supplementation in summer'],
    imageUrl: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
    tags: ['Tamil Nadu', 'Kodi Adu', 'Chevon', 'Tall Goat', 'ICAR-NBAGR 06022']
  },
  {
    id: 'salem-black-goat',
    name: 'Salem Black',
    vernacularName: 'சேலம் கருப்பு / Salem Black Adu',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Salem, Dharmapuri, Krishnagiri, and Namakkal northwest agro-climatic zone',
    nbagrCode: 'INDIA_GOAT_1800_SALEMBLACK_06023',
    nbagrStatus: 'Registered Indigenous',
    description: 'Uniformly glossy jet-black meat goat renowned for premium chevon taste, high prolificacy, and outstanding disease resilience in Deccan scrub terrain.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'MC1R melanic locus regulation',
      thermalGene: 'Heat dissipative dark skin melanin protection'
    },
    physicalTraits: {
      horns: 'Medium, curved backwards and outwards',
      ears: 'Medium, semi-pendulous',
      coatColor: 'Completely jet black without any white hair',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium to tall, athletic and well-muscled',
      faceProfile: 'Straight to slightly roman'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Premium tender chevon',
      fatPercentage: 'Lean carcass quality',
      weightMaleKg: '40 - 48 kg',
      weightFemaleKg: '28 - 36 kg',
      hardiness: 'High',
      heatTolerance: 'Resistant to drought and internal parasites'
    },
    historicalSignificance: 'Highly prized across Tamil Nadu for ceremonial feasts and premium livestock markets.',
    pastoralCommunities: ['Vanniyar and Gounder agriculturalists'],
    careRecommendations: ['Tree loppings, clean sheds with elevated wooden slats'],
    imageUrl: 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=800&q=80',
    tags: ['Tamil Nadu', 'Salem Black', 'Premium Chevon', 'Jet Black', 'ICAR-NBAGR 06023']
  },
  {
    id: 'katchaikatti-black-goat',
    name: 'Katchaikatti Black',
    vernacularName: 'கச்சைக்கட்டி கருப்பு / Katchaikatti Adu',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Katchaikatti village and Vadipatti taluk of Madurai district',
    nbagrCode: 'INDIA_GOAT_1800_KATCHAIKATTI_06024',
    nbagrStatus: 'Registered Indigenous',
    description: 'Compact, hardy black goat breed native to Madurai foothills, renowned for high twinning rates, low disease incidence, and tender meat.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High feed conversion ratio',
      thermalGene: 'Adapted to Sirumalai foothills semi-arid climate'
    },
    physicalTraits: {
      horns: 'Pointed backwards and slightly outwards',
      ears: 'Medium drooping ears',
      coatColor: 'Solid black',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Compact, sturdy bone structure',
      faceProfile: 'Straight'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Excellent meat-to-bone ratio',
      fatPercentage: 'Lean chevon',
      weightMaleKg: '34 - 40 kg',
      weightFemaleKg: '24 - 30 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'High resilience to harsh arid conditions'
    },
    historicalSignificance: 'Bred specifically in Katchaikatti village near Vadipatti in Madurai.',
    pastoralCommunities: ['Vadipatti farming families'],
    careRecommendations: ['Extensive browsing on Sirumalai hill slopes, mineral supplementation'],
    imageUrl: 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?auto=format&fit=crop&w=800&q=80',
    tags: ['Tamil Nadu', 'Madurai', 'Katchaikatti', 'Indigenous Meat', 'ICAR-NBAGR 06024']
  },
  {
    id: 'konkan-kanyal-goat',
    name: 'Konkan Kanyal',
    vernacularName: 'कोंकण कन्याळ / Konkan Kanyal Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Sindhudurg, Ratnagiri, and coastal hilly valleys of South Konkan',
    nbagrCode: 'INDIA_GOAT_1100_KONKANKANYAL_06025',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heavy rainfall and high humidity adapted meat goat of Konkan coast, possessing a black coat with white collar around the neck and white legs.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High disease resistance markers',
      thermalGene: 'High rainfall and maritime humidity adaptation'
    },
    physicalTraits: {
      horns: 'Short to medium, directed backwards',
      ears: 'Flat, drooping',
      coatColor: 'Black body with distinct white ring/collar around neck and white lower legs',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium, agile, strong hoof structure',
      faceProfile: 'Straight with bright white facial markings'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Rapid kid growth rate (60 g/day)',
      fatPercentage: 'Lean carcass quality',
      weightMaleKg: '36 - 44 kg',
      weightFemaleKg: '26 - 34 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Completely immune to heavy 3,500 mm Konkan coastal monsoon rot'
    },
    historicalSignificance: 'Developed and maintained by Konkani farmers in the Western Ghats foothill pockets.',
    pastoralCommunities: ['Konkani horticultural and livestock farmers'],
    careRecommendations: ['Elevated slatted floor housing to avoid foot moisture in heavy monsoon'],
    imageUrl: 'https://images.unsplash.com/photo-1590417805178-5e43a6d96e54?auto=format&fit=crop&w=800&q=80',
    tags: ['Maharashtra', 'Konkan', 'High Rain Tolerant', 'Meat Goat', 'ICAR-NBAGR 06025']
  },
  {
    id: 'pantja-goat',
    name: 'Pantja',
    vernacularName: 'पंतजा / Tarai Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Uttarakhand',
    homeTract: 'Udham Singh Nagar and Nainital Tarai humid agricultural plains',
    nbagrCode: 'INDIA_GOAT_2400_PANTJA_06026',
    nbagrStatus: 'Registered Indigenous',
    description: 'Prolific dual-purpose goat of the Tarai region, sporting a light brown coat with dark dorsal striping and high twinning rates under stall-fed conditions.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High prolificacy FecB-allied markers',
      thermalGene: 'Humid sub-tropical Tarai climate resilience'
    },
    physicalTraits: {
      horns: 'Twisted backwards and outwards',
      ears: 'Medium, pendulous',
      coatColor: 'Light to dark brown with dark dorsal line running down spine',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium, compact, cylindrical torso',
      faceProfile: 'Straight profile'
    },
    productivity: {
      primaryUtility: 'Meat & Milk',
      averageYield: '1.0 - 1.5 kg/day',
      fatPercentage: '4.2%',
      weightMaleKg: '38 - 45 kg',
      weightFemaleKg: '26 - 34 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to humid Tarai summer heat and mild winters'
    },
    historicalSignificance: 'Conserved by GB Pant University of Agriculture & Technology in the Tarai belt.',
    pastoralCommunities: ['Tarai marginal farmers and Tharu tribals'],
    careRecommendations: ['Stall-feeding with green fodder and wheat bran, regular vaccination'],
    imageUrl: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&w=800&q=80',
    tags: ['Uttarakhand', 'Tarai', 'Pantja', 'Prolific', 'ICAR-NBAGR 06026']
  },
  {
    id: 'teressa-goat',
    name: 'Teressa',
    vernacularName: 'टेरेसा / Nicobari Island Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Andaman & Nicobar Islands',
    homeTract: 'Teressa and Bompoka remote coral islands of Nicobar archipelago',
    nbagrCode: 'INDIA_GOAT_2600_TERESSA_06027',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique island goat isolated for centuries on Teressa island, displaying dark brown coat with white neck bands, heavy body size, and exceptional maritime hardiness.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Unique isolated island caprine alleles',
      thermalGene: 'Extreme tropical island maritime humidity and saline tolerance'
    },
    physicalTraits: {
      horns: 'Flat, curved backwards',
      ears: 'Medium, horizontal to semi-drooping',
      coatColor: 'Dark brown to black with distinctive white patches on neck and face',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Large, deep barrel, heavy boned for island caprine',
      faceProfile: 'Slightly roman profile'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Rapid growth on wild island vegetation',
      fatPercentage: 'Lean carcass quality',
      weightMaleKg: '45 - 55 kg',
      weightFemaleKg: '35 - 45 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Survives tropical maritime typhoons and salt spray'
    },
    historicalSignificance: 'Reared by the indigenous Nicobarese tribal community of Teressa Island.',
    pastoralCommunities: ['Nicobarese indigenous island tribes'],
    careRecommendations: ['Grazing on wild coconut groves, fresh water access, shelter from monsoon storms'],
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
    tags: ['Andaman & Nicobar', 'Teressa', 'Island Breed', 'Rare Breed', 'ICAR-NBAGR 06027']
  },
  {
    id: 'kahmi-goat',
    name: 'Kahmi',
    vernacularName: 'કાહમી / Kahmi Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Gujarat',
    homeTract: 'Saurashtra region covering Jamnagar, Junagadh, and Rajkot districts',
    nbagrCode: 'INDIA_GOAT_0400_KAHMI_06028',
    nbagrStatus: 'Registered Indigenous',
    description: 'Distinctive dual-toned Saurashtra goat with brown or copper forequarters and jet-black hindquarters, bred by pastoralists for high milk and meat productivity.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Two-tone pigmentation regulation and high milk fat',
      thermalGene: 'Semi-arid Saurashtra heat resilience'
    },
    physicalTraits: {
      horns: 'Slightly twisted, directed backwards',
      ears: 'Long, pendulous, folded (22-26 cm)',
      coatColor: 'Unique bi-color: reddish-brown neck and shoulders, black hindquarters',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Large, tall dairy frame',
      faceProfile: 'Convex with broad muzzle'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose (Meat & Milk)',
      averageYield: '1.5 - 2.5 kg/day',
      fatPercentage: '4.6%',
      weightMaleKg: '50 - 60 kg',
      weightFemaleKg: '38 - 48 kg',
      hardiness: 'High',
      heatTolerance: 'Exceptional resistance to dry heat and long migratory walks'
    },
    historicalSignificance: 'Selected by Maldhari nomadic pastoralists for striking coat color and heavy milk yield.',
    pastoralCommunities: ['Maldharis and Rabaris of Saurashtra'],
    careRecommendations: ['Legume fodder supplementation, regular hoof trimming on rocky soils'],
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    tags: ['Gujarat', 'Saurashtra', 'Kahmi', 'Bi-Color Goat', 'ICAR-NBAGR 06028']
  },
  {
    id: 'rohilkhandi-goat',
    name: 'Rohilkhandi',
    vernacularName: 'रोहिलखंडी / Rohilkhandi Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Uttar Pradesh',
    homeTract: 'Bareilly, Shahjahanpur, Pilibhit, and Badaun Rohilkhand plains',
    nbagrCode: 'INDIA_GOAT_2000_ROHILKHANDI_06029',
    nbagrStatus: 'Registered Indigenous',
    description: 'Black dual-purpose goat of upper Gangetic plains characterized by a white tuft of hair on the forehead, long pendulous ears, and high kidding percentage.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High lactation persistence',
      thermalGene: 'Gangetic alluvial climate adaptability'
    },
    physicalTraits: {
      horns: 'Straight to slightly curved, pointing backwards',
      ears: 'Long, drooping',
      coatColor: 'Black with small white star or tuft on forehead',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium to large, long legs',
      faceProfile: 'Straight'
    },
    productivity: {
      primaryUtility: 'Meat & Milk',
      averageYield: '1.2 - 1.8 kg/day',
      fatPercentage: '4.3%',
      weightMaleKg: '42 - 50 kg',
      weightFemaleKg: '32 - 40 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to humid monsoons and summer heat'
    },
    historicalSignificance: 'Bred in the historical Rohilkhand region of north India.',
    pastoralCommunities: ['Rohilla and local farming communities of western UP'],
    careRecommendations: ['Grazing on river banks and mustard fallows, regular deworming'],
    imageUrl: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80&goat=rohilkhandi',
    tags: ['Uttar Pradesh', 'Rohilkhandi', 'Dual-Purpose', 'Gangetic Plains', 'ICAR-NBAGR 06029']
  },
  {
    id: 'bhakarwali-goat',
    name: 'Bhakarwali',
    vernacularName: 'बाकरवाली / Pir Panjal Transhumant Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Jammu & Kashmir',
    homeTract: 'Poonch, Rajouri, Udhampur, and high alpine pastures of Pir Panjal',
    nbagrCode: 'INDIA_GOAT_0700_BHAKARWALI_06030',
    nbagrStatus: 'Registered Indigenous',
    description: 'Heavy Himalayan transhumant mountain goat bred by the Bakharwal nomadic tribe for long coarse hair fleece, chevon, and milk on seasonal alpine migrations.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High endurance energy metabolism',
      thermalGene: 'Extreme high-altitude cold and snow adaptation'
    },
    physicalTraits: {
      horns: 'Broad, flat, curved backwards and twisted outwards',
      ears: 'Long, flat, pendulous (20-25 cm)',
      coatColor: 'White, black, brown, or variegated with dense long fleece',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Large, heavy bone, broad muscular chest',
      faceProfile: 'Slightly convex with drooping ears'
    },
    productivity: {
      primaryUtility: 'Meat & Fiber',
      averageYield: '1.0 - 2.0 kg coarse hair per year',
      fatPercentage: '4.7%',
      weightMaleKg: '48 - 60 kg',
      weightFemaleKg: '36 - 46 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme alpine cold tolerance; migrates to plains in winter'
    },
    historicalSignificance: 'Indispensable livelihood asset of the nomadic Bakharwals across Kashmir mountains.',
    pastoralCommunities: ['Bakharwal and Gujjar nomadic pastoralists'],
    careRecommendations: ['Foot-bath against foot rot on rocky passes, high protein diet'],
    imageUrl: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80&goat=bhakarwali',
    tags: ['Jammu & Kashmir', 'Bakharwali', 'Pir Panjal', 'Nomadic Pastoral', 'ICAR-NBAGR 06030']
  },
  {
    id: 'gujari-goat',
    name: 'Gujari',
    vernacularName: 'गूजरी / Gujari Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Jaipur, Ajmer, Tonk, Nagaur, and Sikar semi-arid central districts',
    nbagrCode: 'INDIA_GOAT_1700_GUJARI_06031',
    nbagrStatus: 'Registered Indigenous',
    description: 'Large, tall dairy goat of eastern Rajasthan bred by Gujjar pastoralists, possessing white and brown mottled coat, long drooping ears, and high milk yield.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High dairy yield potential',
      thermalGene: 'Semi-arid eastern Rajasthan heat tolerance'
    },
    physicalTraits: {
      horns: 'Short to medium, pointing backwards and upwards',
      ears: 'Very long, flat, pendulous with brown speckles',
      coatColor: 'White with brown, black, or tan patches and mottling',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Large, long-legged dairy conformation',
      faceProfile: 'Convex with broad forehead'
    },
    productivity: {
      primaryUtility: 'Milch (Dairy) & Meat',
      averageYield: '1.5 - 2.5 kg/day',
      fatPercentage: '4.3%',
      weightMaleKg: '50 - 62 kg',
      weightFemaleKg: '38 - 48 kg',
      hardiness: 'High',
      heatTolerance: 'Excellent resilience to semi-arid summer spikes'
    },
    historicalSignificance: 'Reared by the Gujjar pastoral community of Rajasthan for domestic milk and livestock commerce.',
    pastoralCommunities: ['Gujjar pastoralists of central Rajasthan'],
    careRecommendations: ['Tree lopping with khejri leaves, grain supplement, clean shed'],
    imageUrl: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80&goat=gujari',
    tags: ['Rajasthan', 'Gujari', 'Dairy Goat', 'High Milk', 'ICAR-NBAGR 06031']
  },
  {
    id: 'sojat-goat',
    name: 'Sojat',
    vernacularName: 'सोजत / White Sojat Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Rajasthan',
    homeTract: 'Pali, Jodhpur, Nagaur, and Jalore districts of western Rajasthan',
    nbagrCode: 'INDIA_GOAT_1700_SOJAT_06032',
    nbagrStatus: 'Registered Indigenous',
    description: 'Magnificent, heavily-built pure white meat goat renowned for long flat pendulous ears, gentle roman nose, high dressing percentage, and Eid festival preference.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High muscle mass accretion and lean carcass ratio',
      thermalGene: 'Arid desert thermal resilience'
    },
    physicalTraits: {
      horns: 'Mostly polled (hornless) or small flat horns',
      ears: 'Long, flat, pendulous, like a fallen leaf (22-28 cm)',
      coatColor: 'Pristine pure white; occasionally pink skin with faint spots',
      humpAndDewlap: 'None (heavy meat conformation)',
      sizeAndBuild: 'Large, heavy, long cylindrical body with thick legs',
      faceProfile: 'Distinctive roman nose with broad forehead'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Premium tender chevon with 52-54% dressing percentage',
      fatPercentage: 'Lean carcass quality',
      weightMaleKg: '55 - 75 kg',
      weightFemaleKg: '40 - 52 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to arid western Rajasthan scrub'
    },
    historicalSignificance: 'Selected in Sojat city of Pali district for pristine white color and colossal carcass weight.',
    pastoralCommunities: ['Rajasthani farming and goat trading families'],
    careRecommendations: ['High-energy stall feed, crushed gram, mineral mixture, clean shaded stalls'],
    imageUrl: 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80&goat=sojat',
    tags: ['Rajasthan', 'Sojat', 'White Goat', 'Premium Chevon', 'ICAR-NBAGR 06032']
  },
  {
    id: 'bidri-goat',
    name: 'Bidri',
    vernacularName: 'ಬಿದ್ರಿ / Bidri Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Bidar and surrounding northern Deccan lateritic plateau',
    nbagrCode: 'INDIA_GOAT_0900_BIDRI_06033',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy black meat goat of Bidar plateau featuring a straight profile, medium pendulous ears, and high adaptability to semi-arid Deccan plateau scrub.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Deccan caprine meat efficiency',
      thermalGene: 'Arid red laterite soil heat tolerance'
    },
    physicalTraits: {
      horns: 'Straight, directed backwards',
      ears: 'Medium, semi-pendulous',
      coatColor: 'Jet black with glossy sheen; occasional white specks on muzzle',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium, hardy, agile legs',
      faceProfile: 'Straight'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'High dressing percentage with tender chevon',
      fatPercentage: 'Lean meat',
      weightMaleKg: '38 - 46 kg',
      weightFemaleKg: '28 - 35 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Excellent resilience to northern Karnataka drought'
    },
    historicalSignificance: 'Bred in the historical Bidar region by pastoralists for chevon production.',
    pastoralCommunities: ['Kuruba and Dhangar communities of Bidar'],
    careRecommendations: ['Pasture grazing on Deccan hills, mineral salt supplement, rain shelter'],
    imageUrl: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe0a?auto=format&fit=crop&w=800&q=80&goat=bidri',
    tags: ['Karnataka', 'Bidri', 'Bidar', 'Deccan Plateau', 'ICAR-NBAGR 06033']
  },
  {
    id: 'nandidurga-goat',
    name: 'Nandidurga',
    vernacularName: 'ನಂದಿದುರ್ಗ / Nandidurga Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Tumkur, Kolar, Chikkaballapura, and Bangalore rural rocky hill tracts',
    nbagrCode: 'INDIA_GOAT_0900_NANDIDURGA_06034',
    nbagrStatus: 'Registered Indigenous',
    description: 'Pure white to cream meat goat native to the Nandi hills region, featuring tall legs, backwardly curved horns, and high prolificacy in rocky scrublands.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Lean muscle growth alleles',
      thermalGene: 'Rocky plateau diurnal temperature adaptability'
    },
    physicalTraits: {
      horns: 'Curved backwards and outwards',
      ears: 'Medium, flat, pendulous',
      coatColor: 'Completely white to light cream',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium to tall, lean and athletic',
      faceProfile: 'Straight to slightly convex'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'High kidding rate with frequent twins',
      fatPercentage: 'Lean carcass quality',
      weightMaleKg: '42 - 50 kg',
      weightFemaleKg: '30 - 38 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to semi-arid rocky boulder terrain'
    },
    historicalSignificance: 'Conserved around the sacred Nandi Hills plateau of eastern Karnataka.',
    pastoralCommunities: ['Vokkaliga and Kuruba pastoralists'],
    careRecommendations: ['Rocky hill browse, dry fodder, clean housing, timely vaccination'],
    imageUrl: 'https://images.unsplash.com/photo-1584447141399-be2c62da6a14?auto=format&fit=crop&w=800&q=80&goat=nandidurga',
    tags: ['Karnataka', 'Nandidurga', 'White Goat', 'Rocky Plateau', 'ICAR-NBAGR 06034']
  },
  {
    id: 'bundelkhandi-goat',
    name: 'Bundelkhandi',
    vernacularName: 'बुंदेलखंडी / Bundelkhandi Bakri',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Madhya Pradesh & Uttar Pradesh',
    homeTract: 'Jhansi, Lalitpur, Jalaun, Tikamgarh, and Chhatarpur ravines',
    nbagrCode: 'INDIA_GOAT_1000_BUNDELKHANDI_06035',
    nbagrStatus: 'Registered Indigenous',
    description: 'Black dual-purpose goat of the Bundelkhand ravines, possessing long twisted horns, high disease resistance, and supreme tolerance to prolonged drought.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'FecB allied high twinning propensity',
      thermalGene: 'Extreme Bundelkhand 47°C heatwave resistance'
    },
    physicalTraits: {
      horns: 'Flat, twisted backwards and upwards',
      ears: 'Medium, drooping',
      coatColor: 'Solid black with coarse hair',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium, hardy, muscular frame',
      faceProfile: 'Straight'
    },
    productivity: {
      primaryUtility: 'Meat & Milk',
      averageYield: '0.8 - 1.4 kg/day',
      fatPercentage: '4.5%',
      weightMaleKg: '40 - 48 kg',
      weightFemaleKg: '28 - 36 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme drought resistance in dry ravine soils'
    },
    historicalSignificance: 'Conserved across historical Bundelkhand ravines by pastoralists.',
    pastoralCommunities: ['Ahir, Bundela, and tribal pastoralists'],
    careRecommendations: ['Extensive grazing on thorny ravines, drinking water points in summer'],
    imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80&goat=bundelkhandi',
    tags: ['Bundelkhand', 'Madhya Pradesh', 'Uttar Pradesh', 'Drought Hardy', 'ICAR-NBAGR 06035']
  },
  {
    id: 'narayanpatna-goat',
    name: 'Narayanpatna',
    vernacularName: 'ନାରାୟଣପାଟଣା / Koraput Hill Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Odisha',
    homeTract: 'Narayanpatna block and Koraput tribal hill tracts of Eastern Ghats',
    nbagrCode: 'INDIA_GOAT_1500_NARAYANPATNA_06036',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy tribal hill goat conserved by Eastern Ghats adivasis, sporting a black or dark brown coat, compact agile build, and natural parasite resistance.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Endemic disease resistance alleles',
      thermalGene: 'High-rainfall Eastern Ghats forest adaptation'
    },
    physicalTraits: {
      horns: 'Pointed backwards and upwards',
      ears: 'Medium, horizontal to drooping',
      coatColor: 'Black, dark brown, or mixed with tan highlights',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Small to medium, compact, nimble hill climber',
      faceProfile: 'Straight'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Tender chevon with high prolificacy',
      fatPercentage: 'Lean carcass quality',
      weightMaleKg: '30 - 38 kg',
      weightFemaleKg: '22 - 28 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to forest canopy humidity and mountain terrain'
    },
    historicalSignificance: 'Preserved by the Kondh tribal communities in the Koraput biodiversity hotspot.',
    pastoralCommunities: ['Kondh and Paroja tribal communities'],
    careRecommendations: ['Forest browse grazing, night shelter protection against predators'],
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80&goat=narayanpatna',
    tags: ['Odisha', 'Koraput', 'Tribal Breed', 'Eastern Ghats', 'ICAR-NBAGR 06036']
  },
  {
    id: 'sumi-ne-goat',
    name: 'Sumi-Ne',
    vernacularName: 'Sumi-Ne / Naga Hill Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Nagaland',
    homeTract: 'Zunheboto, Kohima, Phek, and Wokha mountainous hill tracts',
    nbagrCode: 'INDIA_GOAT_1400_SUMINE_06037',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique indigenous goat of Nagaland conserved by the Sumi Naga tribe, characterized by thick coarse hair, compact muscular body, and adaptability to steep slopes.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Cold-adapted highland alleles',
      thermalGene: 'Highland mountain cold and wet monsoon tolerance'
    },
    physicalTraits: {
      horns: 'Short, stout, pointed backwards',
      ears: 'Medium, horizontal',
      coatColor: 'Black, brown, white, or piebald with thick hair',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Compact, stocky, strong legs with hard hooves',
      faceProfile: 'Straight'
    },
    productivity: {
      primaryUtility: 'Meat',
      averageYield: 'Tender chevon with high tribal cultural value',
      fatPercentage: 'Lean highland meat',
      weightMaleKg: '34 - 42 kg',
      weightFemaleKg: '25 - 32 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to cold winter rain and steep rocky slopes'
    },
    historicalSignificance: 'Integral to the cultural heritage and traditional festivals of the Sumi Naga people.',
    pastoralCommunities: ['Sumi Naga tribal community'],
    careRecommendations: ['Highland browse, elevated bamboo sheds, vaccination against enterotoxaemia'],
    imageUrl: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0d0be0?auto=format&fit=crop&w=800&q=80&goat=sumine',
    tags: ['Nagaland', 'Sumi-Ne', 'Naga Hills', 'Tribal Heritage', 'ICAR-NBAGR 06037']
  },
  {
    id: 'macherla-goat',
    name: 'Macherla',
    vernacularName: 'మాచర్ల / Macherla Pothu',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Andhra Pradesh & Telangana',
    homeTract: 'Guntur, Palnadu, Mahabubnagar, and Nalgonda semi-arid river basins',
    nbagrCode: 'INDIA_GOAT_0100_MACHERLA_06038',
    nbagrStatus: 'Registered Indigenous',
    description: 'Tall dual-purpose meat and milk goat of Palnadu, displaying a dark brown to black coat, long pendulous ears, and remarkable endurance under hot semi-arid grazing.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'High muscle accretion and lactation efficiency',
      thermalGene: 'Palnadu severe 46°C summer heat tolerance'
    },
    physicalTraits: {
      horns: 'Curved backwards and outwards',
      ears: 'Long, drooping, pendulous (20-24 cm)',
      coatColor: 'Dark brown, black, or mixed patches',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Large, tall legs, well-proportioned frame',
      faceProfile: 'Slightly roman nose'
    },
    productivity: {
      primaryUtility: 'Meat & Milk',
      averageYield: '1.0 - 1.8 kg/day',
      fatPercentage: '4.4%',
      weightMaleKg: '45 - 54 kg',
      weightFemaleKg: '32 - 40 kg',
      hardiness: 'High',
      heatTolerance: 'Supreme adaptation to hot Krishna river basin summers'
    },
    historicalSignificance: 'Bred in the historical Palnadu region around Macherla for livestock trade and milk.',
    pastoralCommunities: ['Yadava and Golla pastoralists of Andhra Pradesh'],
    careRecommendations: ['Subabul and neem tree browse, clean water, shed ventilation'],
    imageUrl: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80&goat=macherla',
    tags: ['Andhra Pradesh', 'Telangana', 'Macherla', 'Palnadu', 'ICAR-NBAGR 06038']
  },
  {
    id: 'suvarna-goat',
    name: 'Suvarna',
    vernacularName: 'ಸುವರ್ಣ / Golden Suvarna Goat',
    scientificName: 'Capra hircus',
    category: 'Goat',
    stateOfOrigin: 'Karnataka',
    homeTract: 'Bagalkot, Belagavi, and Vijayapura fertile river valley belts',
    nbagrCode: 'INDIA_GOAT_0900_SUVARNA_06039',
    nbagrStatus: 'Registered Indigenous',
    description: 'Striking golden-brown dual-purpose goat registered by ICAR-NBAGR, noted for golden lustrous coat, high twinning percentage, and docile temperament.',
    genomics: {
      csn2Allele: 'CSN1S1 Caprine Standard',
      karyotype: '2n = 60',
      fatRegulatorGene: 'Golden phaeomelanin regulation and prolificacy',
      thermalGene: 'Northern Karnataka river valley heat adaptability'
    },
    physicalTraits: {
      horns: 'Short to medium, curved backwards',
      ears: 'Medium, pendulous',
      coatColor: 'Unique golden-brown / amber-fawn with silky sheen',
      humpAndDewlap: 'None',
      sizeAndBuild: 'Medium, well-formed udder and deep chest',
      faceProfile: 'Straight to slightly convex'
    },
    productivity: {
      primaryUtility: 'Dual-Purpose (Meat & Milk)',
      averageYield: '1.2 - 2.0 kg/day',
      fatPercentage: '4.5%',
      weightMaleKg: '42 - 50 kg',
      weightFemaleKg: '32 - 40 kg',
      hardiness: 'High',
      heatTolerance: 'High resistance to humid and dry heat cycles'
    },
    historicalSignificance: 'Named Suvarna (Golden) due to its radiant amber coat; selectively bred in northern Karnataka.',
    pastoralCommunities: ['Kuruba and Lingayat farming families'],
    careRecommendations: ['Quality green fodder, pulse grain supplementation, clean dry bedding'],
    imageUrl: 'https://images.unsplash.com/photo-1605007493699-ce65834703a3?auto=format&fit=crop&w=800&q=80&goat=suvarna',
    tags: ['Karnataka', 'Suvarna', 'Golden Goat', 'Dual-Purpose', 'ICAR-NBAGR 06039']
  }

];

export const INDIAN_DOG_BREEDS: BreedInfo[] = [
  {
    id: 'mudhol-hound',
    name: 'Mudhol Hound',
    vernacularName: 'ಮುಧೋಳ್ ಹೌಂಡ್ / Caravan Hound',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Karnataka & Maharashtra',
    homeTract: 'Mudhol, Bagalkot, and Vijayapura Deccan plateau',
    nbagrCode: 'INDIA_DOG_0800_MUDHOL_09001',
    nbagrStatus: 'Registered Indigenous',
    description: 'Ancient Indian sighthound renowned for aerodynamic lean anatomy, 270-degree panoramic vision, and lightning acceleration (>55 km/h). First native dog breed inducted into the Indian Army for border surveillance and search operations.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78 (76 acrocentric autosomes, 2 sex chromosomes)',
      fatRegulatorGene: 'MSTN sprint muscle fast-twitch hypertrophy',
      thermalGene: 'Deep thoracic cavity and heat-dissipating thin skin'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Medium, pendulous, carried close to the skull',
      coatColor: 'Fawn, black, brindle, white, or chocolate',
      humpAndDewlap: 'Tuck-up waist with deep chest and aerodynamic tuck',
      sizeAndBuild: 'Large, lean, muscular rib cage, long slender legs',
      faceProfile: 'Long narrow tapering muzzle with dark alert eyes'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'Working Sighthound (Speed >55 km/h)',
      fatPercentage: 'Athletic body fat <8%',
      weightMaleKg: '22-28 kg',
      weightFemaleKg: '18-22 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme stamina under hot arid Deccan plateau conditions'
    },
    historicalSignificance: 'Bred by the Ghorpade dynasty of the Princely State of Mudhol. Shrimant Rajesaheb Malojirao presented a pair to King George V in 1914. Officially inducted into the Indian Army in 2017.',
    pastoralCommunities: ['Raja of Mudhol lineage', 'Deccan pastoral hunters'],
    careRecommendations: [
      'Requires daily high-speed sprint exercise and open paddock running',
      'High-protein diet with bone meal and clean lean meats',
      'Thin coat requires warm bedding during cool Deccan winter nights'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    tags: ['Sighthound', 'Indian Army', 'Karnataka', 'Mudhol', 'Canis lupus familiaris']
  },
  {
    id: 'rajapalayam-dog',
    name: 'Rajapalayam',
    vernacularName: 'ராஜபாளையம் நாய் / Polygar Hound',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Rajapalayam town in Virudhunagar district',
    nbagrCode: 'INDIA_DOG_1800_RAJAPALAYAM_09002',
    nbagrStatus: 'Registered Indigenous',
    description: 'Royal guard and boar-hunting sighthound prized by the Nayak kings of Tamil Nadu. Characterized by pristine milky-white short coat, flesh-colored pink nose, golden eyes, and courageous territorial loyalty.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'KIT / MITF extreme piebald coat locus',
      thermalGene: 'Reflective white coat preventing solar overheating'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Semi-drooping, folded forward, medium size',
      coatColor: 'Pure milky white with distinct pink skin and nose',
      humpAndDewlap: 'Deep chest with broad shoulders, tucked abdomen',
      sizeAndBuild: 'Large, aristocratic, muscular sighthound frame',
      faceProfile: 'Heavy wide skull with flesh-colored muzzle and golden eyes'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Estate Guardian & Boar Hunting',
      fatPercentage: 'Low body fat',
      weightMaleKg: '25-32 kg',
      weightFemaleKg: '20-25 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to tropical dry deciduous tracts of Tamil Nadu'
    },
    historicalSignificance: 'Fought alongside Polygar chieftain Veerapandiya Kattabomman against British colonial troops in the Polygar Wars. Featured on a commemorative Indian postage stamp in 2005.',
    pastoralCommunities: ['Rajus of Rajapalayam', 'Nayak royal lineages'],
    careRecommendations: [
      'Requires strong social bonding with family; natural guardian instincts',
      'Sun protection for pink nose during peak summer noon',
      'Nutritious ragi porridge with goat meat and calcium'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
    tags: ['Tamil Nadu', 'Polygar', 'White Hound', 'Nayak Dynasty', 'Guardian']
  },
  {
    id: 'chippiparai-dog',
    name: 'Chippiparai',
    vernacularName: 'சிப்பிப்பாறை / Chippiparai',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Periyar river basin of Madurai, Thoothukudi, and Tirunelveli',
    nbagrCode: 'INDIA_DOG_1800_CHIPPIPARAI_09003',
    nbagrStatus: 'Registered Indigenous',
    description: 'Hardy silver-grey or fawn sighthound, lean and agile with minimal grooming requirements. Renowned for incredible bursts of speed when coursing hare and deer in dry scrub forests.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'High bone density and light skeletal mass',
      thermalGene: 'Arid scrubland heat dissipation'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Rose ears or semi-erect, alert',
      coatColor: 'Silver grey, fawn, silver-tan, or greyish-white',
      humpAndDewlap: 'Extreme tuck-up with curved whip-like tail',
      sizeAndBuild: 'Medium to large, streamlined, extremely lean',
      faceProfile: 'Long tapering head with piercing dark eyes'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'High-speed Coursing & Watch Dog',
      fatPercentage: 'Lean athletic',
      weightMaleKg: '18-24 kg',
      weightFemaleKg: '15-20 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Extreme heat tolerance with virtually no tick sensitivity'
    },
    historicalSignificance: 'Bred by royal families of Chippiparai in Virudhunagar as hunting and companion hounds.',
    pastoralCommunities: ['Tirunelveli & Madurai pastoralists'],
    careRecommendations: [
      'Free running in fenced open grounds',
      'Minimal grooming needed; weekly brush down'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80&dog=chippiparai',
    tags: ['Tamil Nadu', 'Sighthound', 'Chippiparai', 'Silver Grey', 'Canine']
  },
  {
    id: 'kombai-dog',
    name: 'Kombai',
    vernacularName: 'கோம்பை நாய் / Combai',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Theni, Dindigul, and foothills of Western Ghats',
    nbagrCode: 'INDIA_DOG_1800_KOMBAI_09004',
    nbagrStatus: 'Registered Indigenous',
    description: 'Fierce Indian boar hound featuring reddish-tan coat with jet-black muzzle (mask), ridge of hair along the spine, and legendary courage in protecting livestock against predators.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Dense bone and jaw muscle hypertrophy',
      thermalGene: 'Humid hill foothill endurance'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Semi-erect, folded forward',
      coatColor: 'Reddish tan or brown with black muzzle and dark eyes',
      humpAndDewlap: 'Powerful neck, muscular shoulders, ridge along back',
      sizeAndBuild: 'Medium, compact, powerful bite force',
      faceProfile: 'Broad skull with powerful jaws and dark mask'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Predator Deterrence & Farm Guard',
      fatPercentage: 'Compact muscular',
      weightMaleKg: '25-32 kg',
      weightFemaleKg: '20-25 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'High heat and humidity resilience'
    },
    historicalSignificance: 'Used by the Marudhu Pandiyar brothers against wild boars and invaders in 18th-century Sivagangai.',
    pastoralCommunities: ['Western Ghats forest fringe farmers'],
    careRecommendations: [
      'Consistent early socialization and firm leadership',
      'Nutrient-rich diet with cooked meat and grains'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80&dog=kombai',
    tags: ['Tamil Nadu', 'Boar Hound', 'Black Mask', 'Guardian', 'Kombai']
  },
  {
    id: 'indian-pariah-dog',
    name: 'Indian Pariah Dog',
    vernacularName: 'देसी कुत्ता / Indian Native Dog (INDog)',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Pan-India',
    homeTract: 'All agro-climatic zones across the Indian subcontinent',
    nbagrCode: 'INDIA_DOG_0000_PARIAH_09006',
    nbagrStatus: 'Registered Indigenous',
    description: 'Ancient natural landrace surviving for thousands of years without artificial breeding. Highly intelligent, wedge-shaped head, curled ring tail, erect prick ears, and phenomenal natural immunity with virtually no genetic disorders.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'High digestive amylase AMY2B copy numbers',
      thermalGene: 'Pan-Indian natural climate homeostasis'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Erect, pointed prick ears, mobile',
      coatColor: 'Reddish fawn, dark brown, pied, or brindle',
      humpAndDewlap: 'Curled ring tail carried over back',
      sizeAndBuild: 'Medium, athletic, natural balanced canine conformation',
      faceProfile: 'Wedge-shaped head with dark expressive almond eyes'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Natural Watch & Companion Dog',
      fatPercentage: 'Natural balanced build',
      weightMaleKg: '18-26 kg',
      weightFemaleKg: '14-20 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Maximum adaptation to all Indian climates, rain, and heat'
    },
    historicalSignificance: 'Depicted in Bhimbetka rock paintings dating back over 9,000 years. Mentioned in the Mahabharata accompanying Yudhishthira to heaven.',
    pastoralCommunities: ['All rural and pastoral communities across India'],
    careRecommendations: [
      'Zero specialized diet needed; thrives on balanced household food',
      'Virtually zero breed-specific hereditary genetic diseases'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80&dog=pariah',
    tags: ['Pan-India', 'INDog', 'Ancient Landrace', 'Natural Immunity', 'Canis lupus']
  },
  {
    id: 'gaddi-kutta',
    name: 'Gaddi Kutta',
    vernacularName: 'गद्दी कुत्ता / Himalayan Sheepdog / Mahidant',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Himachal Pradesh & Uttarakhand',
    homeTract: 'Dhauladhar mountains, Chamba, Kangra, and Kumaon hills',
    nbagrCode: 'INDIA_DOG_0600_GADDI_09009',
    nbagrStatus: 'Registered Indigenous',
    description: 'Massive, courageous Himalayan livestock guardian bred by nomadic Gaddi pastoralists. Thick double coat, lion-like ruff mane, and fearless protective instinct defending sheep flocks against snow leopards and wolves.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Dense muscle mass and cold insulating lipid layers',
      thermalGene: 'High altitude cold tolerance and hypoxic adaptation'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Drooping, heavily furred',
      coatColor: 'Solid black, black and tan, or golden fawn',
      humpAndDewlap: 'Lion-like thick mane around neck, plumed tail',
      sizeAndBuild: 'Very large, heavy bone structure, powerful chest',
      faceProfile: 'Broad mastiff-like head with alert deep-set eyes'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'High-Altitude Flock Guardian',
      fatPercentage: 'Heavy bone and muscle',
      weightMaleKg: '40-52 kg',
      weightFemaleKg: '32-42 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme sub-zero cold tolerance; prefers temperate climate'
    },
    historicalSignificance: 'Bred by nomadic Gaddi transhumant shepherds who migrate each year between the high Himalayas and low foothills.',
    pastoralCommunities: ['Gaddi shepherds', 'Himachali pastoralists'],
    careRecommendations: [
      'Frequent brushing for thick double coat',
      'Cool shaded housing in warm weather; high protein diet'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80&dog=gaddi',
    tags: ['Himalayas', 'Gaddi', 'Livestock Guardian', 'Himachal', 'Mastiff']
  },
  {
    id: 'rampur-greyhound',
    name: 'Rampur Greyhound',
    vernacularName: 'रामपुर ग्रेहाउंड / Rampur Hound',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Uttar Pradesh',
    homeTract: 'Rampur district and Rohilkhand region',
    nbagrCode: 'INDIA_DOG_2000_RAMPUR_09005',
    nbagrStatus: 'Registered Indigenous',
    description: 'Powerful coursing hound combining speed and bone strength, favored by the Nawabs of Rampur to hunt jackal, wild boar, and antelope.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Sprint speed and jaw bite density',
      thermalGene: 'Gangetic plains heat and winter stamina'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Button ears or rose ears folded back',
      coatColor: 'Black, grey, brindle, or fawn',
      humpAndDewlap: 'Wide chest with hare-feet for speed',
      sizeAndBuild: 'Large, powerful coursing frame',
      faceProfile: 'Flat skull with pointed tapering muzzle'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'Coursing Sighthound (Speed >50 km/h)',
      fatPercentage: 'Lean muscular build',
      weightMaleKg: '28-36 kg',
      weightFemaleKg: '22-28 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'High resistance to northern Indian temperature swings'
    },
    historicalSignificance: 'Royal favorite hound of His Highness Nawab Ahmad Ali Khan of Rampur.',
    pastoralCommunities: ['Rohilkhand royal kennels and hunting lineages'],
    careRecommendations: ['Open ground sprint exercise and high protein diet'],
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80&dog=rampur',
    tags: ['Uttar Pradesh', 'Rampur', 'Sighthound', 'Nawab', 'Canine']
  },
  {
    id: 'kanni-dog',
    name: 'Kanni',
    vernacularName: 'கன்னி நாய் / Maiden Hound',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Tamil Nadu',
    homeTract: 'Sattur, Kovilpatti, and Tirunelveli tracts',
    nbagrCode: 'INDIA_DOG_1800_KANNI_09007',
    nbagrStatus: 'Registered Indigenous',
    description: 'Agile sighthound with glossy black-and-tan (Kanni) or fawn (Paalakanni) coat. Traditionally presented to brides as a loyal lifelong family guardian and protector.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'ASIP black and tan coat pattern allele',
      thermalGene: 'Arid southern plains heat dissipation'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Semi-erect, folded forward',
      coatColor: 'Black and tan with fawn markings above eyes and on feet',
      humpAndDewlap: 'Deep chest and athletic curved tail',
      sizeAndBuild: 'Medium, slim, graceful sighthound',
      faceProfile: 'Narrow muzzle with gentle expressive eyes'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'Family Guardian & Small Game Coursing',
      fatPercentage: 'Lean athletic build',
      weightMaleKg: '16-22 kg',
      weightFemaleKg: '14-18 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme adaptation to dry semi-arid heat'
    },
    historicalSignificance: 'Named "Kanni" (Maiden) as it was traditionally presented by royal and landlord families to a bride on her wedding.',
    pastoralCommunities: ['Tirunelveli & Virudhunagar families'],
    careRecommendations: ['Gentle handling, daily exercise, home cooked meals with meat broth'],
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80&dog=kanni',
    tags: ['Tamil Nadu', 'Kanni', 'Sighthound', 'Black and Tan', 'Canine']
  },
  {
    id: 'jonangi-dog',
    name: 'Jonangi',
    vernacularName: 'జొనాంగి / Kolleru Dog',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Andhra Pradesh',
    homeTract: 'Kolleru lake wetland tract, Krishna, and Guntur districts',
    nbagrCode: 'INDIA_DOG_0100_JONANGI_09008',
    nbagrStatus: 'Registered Indigenous',
    description: 'Unique wetland duck-herding and hunting dog with ultra-short smooth coat, wrinkled forehead, semi-curled tail, and distinct somersault hunting gait.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Smooth micro-coat and wetland swimming adaptation',
      thermalGene: 'Humid coastal lake basin resilience'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Pricked or semi-pricked',
      coatColor: 'Fawn, white, black, or pied with extremely short hair',
      humpAndDewlap: 'Semi-curled tail with somersault jumping gait',
      sizeAndBuild: 'Medium, compact, athletic swimming body',
      faceProfile: 'Wrinkled forehead with keen alert eyes'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Duck Herding & Wetland Guardian',
      fatPercentage: 'Athletic lean',
      weightMaleKg: '18-24 kg',
      weightFemaleKg: '14-19 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Outstanding tolerance to high heat and water exposure'
    },
    historicalSignificance: 'Bred by duck farmers and fishermen along the freshwater Kolleru lake.',
    pastoralCommunities: ['Kolleru lake fishing and duck farming communities'],
    careRecommendations: ['Opportunities for swimming and active fetching exercise'],
    imageUrl: 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80&dog=jonangi',
    tags: ['Andhra Pradesh', 'Kolleru', 'Duck Herder', 'Jonangi', 'Canine']
  },
  {
    id: 'bakharwal-dog',
    name: 'Bakharwal Dog',
    vernacularName: 'बाखरवाल कुत्ता / Gujjar Watchdog',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Jammu and Kashmir',
    homeTract: 'Pir Panjal range, Ladakh transit, and Kashmir high meadows',
    nbagrCode: 'INDIA_DOG_0700_BAKHARWAL_09010',
    nbagrStatus: 'Endangered / Rare',
    description: 'Ancient nomadic livestock guardian dog bred by Gujjar and Bakharwal pastoralists. Heavy bone structure, deep chest, dropped ears, and protective temperament during seasonal transhumance.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Heavy bone density and lipid insulation',
      thermalGene: 'High-altitude sub-zero cold tolerance'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Dropped flat against cheeks',
      coatColor: 'Black with tan points, fawn, or piebald',
      humpAndDewlap: 'Thick fur collar around neck, heavy bone',
      sizeAndBuild: 'Large, powerful livestock guardian frame',
      faceProfile: 'Heavy broad skull with protective gaze'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Transhumant Sheep Flock Guardian',
      fatPercentage: 'Heavy bone and muscle',
      weightMaleKg: '40-55 kg',
      weightFemaleKg: '32-42 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme cold endurance; requires shade in summer'
    },
    historicalSignificance: 'Nomadic guardians of the Gujjar-Bakharwal tribes across Pir Panjal passes.',
    pastoralCommunities: ['Bakharwal and Gujjar nomadic pastoralists'],
    careRecommendations: ['Heavy daily exercise, spacious outdoor terrain, high protein diet'],
    imageUrl: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=800&q=80&dog=bakharwal',
    tags: ['Kashmir', 'Bakharwal', 'Himalayan', 'Guardian', 'Pir Panjal']
  },
  {
    id: 'pandikona-dog',
    name: 'Pandikona',
    vernacularName: 'పండికోన / Kurnool Hunting Dog',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Andhra Pradesh',
    homeTract: 'Pandikona village and Pattikonda taluk in Kurnool district',
    nbagrCode: 'INDIA_DOG_0100_PANDIKONA_09011',
    nbagrStatus: 'Registered Indigenous',
    description: 'Territorial hunting and farm protection dog of Rayalaseema. Medium athletic build, high heat tolerance, and exceptional loyalty to rural families.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Lean muscle mass and high bone strength',
      thermalGene: 'Arid rocky plateau heat resilience'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Erect or semi-erect',
      coatColor: 'Fawn, red, brindle, or piebald',
      humpAndDewlap: 'Athletic waist with curved tail',
      sizeAndBuild: 'Medium, robust, courageous territorial defender',
      faceProfile: 'Wedge head with sharp dark eyes'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Farm Watch & Wild Boar Deterrence',
      fatPercentage: 'Athletic medium build',
      weightMaleKg: '20-26 kg',
      weightFemaleKg: '16-21 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Survives severe Rayalaseema droughts and heat'
    },
    historicalSignificance: 'Bred in Pandikona village of Kurnool for guarding farmsteads against wild boars and predators.',
    pastoralCommunities: ['Rayalaseema farming families'],
    careRecommendations: ['Farm patrol, basic homemade food with eggs and rice'],
    imageUrl: 'https://images.unsplash.com/photo-1586671267731-dae08276a899?auto=format&fit=crop&w=800&q=80&dog=pandikona',
    tags: ['Andhra Pradesh', 'Kurnool', 'Pandikona', 'Farm Dog', 'Canine']
  },
  {
    id: 'bully-kutta',
    name: 'Bully Kutta',
    vernacularName: 'बुली कुत्ता / Indian Mastiff',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Punjab & Rajasthan',
    homeTract: 'Arid border tracts of Punjab, Haryana, and Rajasthan',
    nbagrCode: 'INDIA_DOG_1600_BULLYKUTTA_09012',
    nbagrStatus: 'Registered Indigenous',
    description: 'Colossal, powerful working mastiff known as the "Beast of the East". Massive head, loose folded neck skin, wide chest, and commanding livestock guard presence.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Extreme bone density and jaw masseter hypertrophy',
      thermalGene: 'Arid desert summer and winter temperature tolerance'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Dropped or cropped traditionally, thick leather',
      coatColor: 'Predominantly white, black, fawn, or brindle',
      humpAndDewlap: 'Loose folded skin around throat and neck (dewlap)',
      sizeAndBuild: 'Giant mastiff, heavy boned, massive chest',
      faceProfile: 'Broad square skull with powerful jaws and pendulous flews'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'High-Level Property & Herd Protector',
      fatPercentage: 'Heavy mastiff build',
      weightMaleKg: '60-85 kg',
      weightFemaleKg: '50-65 kg',
      hardiness: 'High',
      heatTolerance: 'Adapted to harsh semi-arid plains'
    },
    historicalSignificance: 'Descendant of ancient Persian and Rajput war and catch dogs used by royal houses.',
    pastoralCommunities: ['Punjabi and Rajasthani estate and livestock owners'],
    careRecommendations: ['Extensive early obedience training, high protein diet with bone broth'],
    imageUrl: 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=800&q=80&dog=bully',
    tags: ['Punjab', 'Indian Mastiff', 'Bully Kutta', 'Guardian', 'Giant Dog']
  },
  {
    id: 'tangkhul-hui',
    name: 'Tangkhul Hui',
    vernacularName: 'তাংখুল হুই / Awang Hu / Manipur Dog',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Manipur',
    homeTract: 'Ukhrul and Senapati mountainous hill tracts of Manipur',
    nbagrCode: 'INDIA_DOG_1200_TANGKHULHUI_09013',
    nbagrStatus: 'Registered Indigenous',
    description: 'Rare indigenous guardian and hunting dog of Manipur, sporting a dense black double coat, curled tail over back, and exceptional agility on steep jungle slopes.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'High alpine endurance and muscular sprint capacity',
      thermalGene: 'Dense sub-tropical rainforest cold and moisture endurance'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Prick or semi-erect, triangular',
      coatColor: 'Jet black with dense undercoat; occasionally white spot on chest',
      humpAndDewlap: 'Muscular neck with thick ruff, tightly curled tail over hip',
      sizeAndBuild: 'Medium, compact, muscular frame with sure-footed paws',
      faceProfile: 'Wedge-shaped head with sharp dark eyes and black muzzle'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Wild Boar Tracking & Village Guard',
      fatPercentage: 'Athletic lean build',
      weightMaleKg: '22 - 28 kg',
      weightFemaleKg: '18 - 24 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Adapted to heavy rain and sub-tropical mountain chills'
    },
    historicalSignificance: 'Historically conserved by the Tangkhul Naga warriors of Ukhrul for guarding hilltop homesteads.',
    pastoralCommunities: ['Tangkhul Naga indigenous communities'],
    careRecommendations: ['Spacious outdoor roaming, high-protein native diet, daily active exercise'],
    imageUrl: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80&dog=tangkhul',
    tags: ['Manipur', 'Tangkhul Hui', 'Naga Dog', 'Hill Guardian', 'Canine']
  },
  {
    id: 'haofa-dog',
    name: 'Haofa',
    vernacularName: 'হাউফা / Tangkhul Naga Hunting Dog',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Manipur & Nagaland',
    homeTract: 'Indo-Myanmar border rainforest hills of Ukhrul and Phek',
    nbagrCode: 'INDIA_DOG_1200_HAOFA_09014',
    nbagrStatus: 'Registered Indigenous',
    description: 'Ancestral tribal sighthound and hunting hound of the Tangkhul region, renowned for silent tracking, prick ears, keen sense of smell, and fierce family loyalty.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Superior olfactory receptor density',
      thermalGene: 'Highland rainforest thermal adaptation'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Erect, pointed forward',
      coatColor: 'Reddish-brown, brindle, fawn, or black',
      humpAndDewlap: 'Tuck-up waist, slender athletic torso',
      sizeAndBuild: 'Medium, nimble, lightning-fast reflexes',
      faceProfile: 'Sharp tapered muzzle with keen amber eyes'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'Game Tracking & High-Altitude Patrol',
      fatPercentage: 'Lean hunting physique',
      weightMaleKg: '20 - 26 kg',
      weightFemaleKg: '16 - 22 kg',
      hardiness: 'High',
      heatTolerance: 'High resilience to rugged forest terrain'
    },
    historicalSignificance: 'Regarded as a sacred hunting partner in ancient Tangkhul Naga folklore and tribal songs.',
    pastoralCommunities: ['Naga hunting and farming families'],
    careRecommendations: ['Regular forest runs, fresh meats and rice, clean shelter'],
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80&dog=haofa',
    tags: ['Manipur', 'Nagaland', 'Haofa', 'Hunting Dog', 'Naga Hound']
  },
  {
    id: 'alangu-mastiff',
    name: 'Alangu Mastiff',
    vernacularName: 'அலங்கு நாய் / South Indian War Mastiff',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Tamil Nadu & Karnataka',
    homeTract: 'Thanjavur, Trichy, and southern Deccan plains',
    nbagrCode: 'INDIA_DOG_1800_ALANGU_09015',
    nbagrStatus: 'Registered Indigenous',
    description: 'Colossal ancient South Indian catch dog and estate guardian, possessing a heavy square head, muscular shoulders, tight short coat, and fearless temperament.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Hypertrophic jaw muscles and high bone density',
      thermalGene: 'Short coat heat dissipation in tropical climate'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Dropped or semi-erect, thick leather',
      coatColor: 'Fawn, brindle, red, or white with dark mask',
      humpAndDewlap: 'Slight dewlap folds, broad massive chest',
      sizeAndBuild: 'Giant mastiff, powerful heavy-boned structure',
      faceProfile: 'Square skull with broad muzzle and scissor bite'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Estate Protection & Large Predator Deterrence',
      fatPercentage: 'Heavy mastiff build',
      weightMaleKg: '50 - 68 kg',
      weightFemaleKg: '40 - 55 kg',
      hardiness: 'High',
      heatTolerance: 'Excellent tolerance to southern Indian heat'
    },
    historicalSignificance: 'Historical war and royal guard dog of the Chola and Thanjavur Maratha kingdoms.',
    pastoralCommunities: ['Estate owners and rural agriculturalists of Tamil Nadu'],
    careRecommendations: ['Early socialization, firm guidance, high-protein diet with bone broth'],
    imageUrl: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80&dog=alangu',
    tags: ['Tamil Nadu', 'Alangu Mastiff', 'War Dog', 'Guard Dog', 'Giant Breed']
  },
  {
    id: 'patti-dog',
    name: 'Patti Dog',
    vernacularName: 'ਪੱਟੀ ਕੁੱਤਾ / Malwa Working Dog',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Punjab',
    homeTract: 'Patti tehsil, Majha, and Malwa agricultural plains of Punjab',
    nbagrCode: 'INDIA_DOG_1600_PATTI_09016',
    nbagrStatus: 'Registered Indigenous',
    description: 'Fast, athletic medium-large working and guarding canine of Punjab, known for clean white or fawn coat, deep chest, and high guarding instinct on canal farms.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Sustained endurance running alleles',
      thermalGene: 'Plains extreme summer and winter adaptability'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Semi-erect or dropped',
      coatColor: 'White, fawn, or light cream with occasional dark patches',
      humpAndDewlap: 'Lean athletic waist and deep chest',
      sizeAndBuild: 'Medium to large, swift and muscular',
      faceProfile: 'Strong muzzle with alert expression'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'Farmstead Protection & Field Patrol',
      fatPercentage: 'Lean working musculature',
      weightMaleKg: '28 - 36 kg',
      weightFemaleKg: '22 - 30 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Tolerates 46°C Punjab summers and 4°C winter frost'
    },
    historicalSignificance: 'Bred in the Patti tract of Tarn Taran district for agricultural watch and ward.',
    pastoralCommunities: ['Punjabi farming families'],
    careRecommendations: ['Extensive outdoor perimeter exercise, raw milk, eggs and rice diet'],
    imageUrl: 'https://images.unsplash.com/photo-1612837017391-4b6b7b0d0be0?auto=format&fit=crop&w=800&q=80&dog=patti',
    tags: ['Punjab', 'Patti Dog', 'Majha', 'Farm Guardian', 'Canine']
  },
  {
    id: 'mahratta-hound',
    name: 'Mahratta Hound',
    vernacularName: 'मराठा शिकारी कुत्रा / Maratha Greyhound',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Maharashtra',
    homeTract: 'Western Maharashtra and Deccan plateau coursing plains',
    nbagrCode: 'INDIA_DOG_1100_MAHRATTA_09017',
    nbagrStatus: 'Registered Indigenous',
    description: 'Slender, lightning-fast coursing hound bred by the Marathas for hunting hare and small deer across the rocky black-soil Deccan plateau.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'High aerobic cardiovascular stroke volume',
      thermalGene: 'Arid Deccan heat endurance during sprint pursuit'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Dropped flat, close to skull',
      coatColor: 'Dark blue-grey brindle, black, or tan with dark points',
      humpAndDewlap: 'Deep chest with narrow waist (tuck-up)',
      sizeAndBuild: 'Medium sighthound, light-boned and aerodynamic',
      faceProfile: 'Long narrow head with keen panoramic sight'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'High-Speed Coursing (up to 55 km/h)',
      fatPercentage: 'Ultra-lean sighthound frame',
      weightMaleKg: '20 - 26 kg',
      weightFemaleKg: '16 - 22 kg',
      hardiness: 'High',
      heatTolerance: 'Built for intense open-field pursuit under midday sun'
    },
    historicalSignificance: 'Rode with the Maratha light cavalry during the 17th and 18th centuries.',
    pastoralCommunities: ['Dhangar pastoralists and rural Maratha hunters'],
    careRecommendations: ['Open sprints in fenced fields, padded bedding, lean protein diet'],
    imageUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80&dog=mahratta',
    tags: ['Maharashtra', 'Maratha Hound', 'Sighthound', 'Coursing', 'Deccan']
  },
  {
    id: 'vikhan-sheepdog',
    name: 'Vikhan Sheepdog',
    vernacularName: 'विखन शिकारी कुत्रा / Himalayan Vikhan Hound',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Himachal Pradesh & Uttarakhand',
    homeTract: 'High Himalayan valleys of Himachal and Uttarakhand border tracts',
    nbagrCode: 'INDIA_DOG_0600_VIKHAN_09018',
    nbagrStatus: 'Registered Indigenous',
    description: 'Rare long-coated mountain flock guardian and leopard deterrent, possessing a thick lion-like mane, heavy bone, and fearless protective instinct in snow.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'Dense insulating undercoat gene markers',
      thermalGene: 'Alpine snow and sub-zero blizzard adaptation'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Small, dropped flat',
      coatColor: 'Black, red, fawn, or piebald with heavy rough coat',
      humpAndDewlap: 'Thick protective fur ruff around neck and shoulders',
      sizeAndBuild: 'Large, powerful legs with thick snow pads',
      faceProfile: 'Strong broad muzzle with deep-set eyes'
    },
    productivity: {
      primaryUtility: 'Livestock Guardian / Working',
      averageYield: 'High-Altitude Flock & Village Defender',
      fatPercentage: 'Heavy mountain build',
      weightMaleKg: '38 - 50 kg',
      weightFemaleKg: '30 - 40 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme cold endurance; requires shaded refuge in hot plains'
    },
    historicalSignificance: 'Ancient guardian of transhumant sheep and goat flocks against snow leopards and wolves.',
    pastoralCommunities: ['Himalayan nomadic shepherds'],
    careRecommendations: ['Thorough seasonal coat brushing, cool mountain environment, high-energy feed'],
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80&dog=vikhan',
    tags: ['Himachal Pradesh', 'Uttarakhand', 'Vikhan', 'Mountain Guardian', 'Snow Dog']
  },
  {
    id: 'kaikadi-dog',
    name: 'Kaikadi',
    vernacularName: 'कैकडी कुत्रा / Nomadic Deccan Terrier',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Maharashtra & Karnataka',
    homeTract: 'Solapur, Osmanabad, and Kalaburagi Deccan pastoral borders',
    nbagrCode: 'INDIA_DOG_1100_KAIKADI_09019',
    nbagrStatus: 'Registered Indigenous',
    description: 'Compact, fiery hunting terrier bred by the nomadic Kaikadi tribe for flushing small game, rats, and hare from burrows across dry Deccan scrublands.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'High-speed burrowing and agile sprint alleles',
      thermalGene: 'Dry thorn-scrub heat tolerance'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Erect or semi-pricked',
      coatColor: 'Black, tan, white, or tricolor with short wiry coat',
      humpAndDewlap: 'None (compact agile terrier conformation)',
      sizeAndBuild: 'Small to medium, muscular, low center of gravity',
      faceProfile: 'Fox-like wedge muzzle with keen dark eyes'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'Rodent & Small Game Flushing',
      fatPercentage: 'Lean wire-coated build',
      weightMaleKg: '14 - 20 kg',
      weightFemaleKg: '11 - 16 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Immune to thorny scrub scratches and arid midday heat'
    },
    historicalSignificance: 'Companion of the nomadic Kaikadi tribe during seasonal pastoral movements.',
    pastoralCommunities: ['Kaikadi nomadic community of Maharashtra'],
    careRecommendations: ['Active daily play, farm foraging, homemade rice and meat diet'],
    imageUrl: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80&dog=kaikadi',
    tags: ['Maharashtra', 'Kaikadi', 'Deccan Terrier', 'Hunting Dog', 'Canine']
  },
  {
    id: 'vaghari-hound',
    name: 'Vaghari Hound',
    vernacularName: 'વાઘરી શિકારી કૂતરો / Sinhala Vaghari Hound',
    scientificName: 'Canis lupus familiaris',
    category: 'Dog',
    stateOfOrigin: 'Gujarat & Rajasthan',
    homeTract: 'Kutch, Banaskantha, and Thar desert border scrublands',
    nbagrCode: 'INDIA_DOG_0400_VAGHARI_09020',
    nbagrStatus: 'Registered Indigenous',
    description: 'Agile desert sighthound bred by the Vaghari community for tracking desert hare and monitor lizards across salty Rann scrub and sand dunes.',
    genomics: {
      csn2Allele: 'Canine Non-Dairy',
      karyotype: '2n = 78',
      fatRegulatorGene: 'High desert sprinting stamina',
      thermalGene: 'Extreme saline desert sand heat resilience'
    },
    physicalTraits: {
      horns: 'None',
      ears: 'Semi-pricked or rose ears',
      coatColor: 'Sandy fawn, red, or brindled with black points',
      humpAndDewlap: 'Lean athletic waist and deep ribcage',
      sizeAndBuild: 'Medium sighthound, wiry and swift',
      faceProfile: 'Narrow pointed muzzle with sharp vision'
    },
    productivity: {
      primaryUtility: 'Sighthound / Hunting',
      averageYield: 'Arid Sand Dune Coursing',
      fatPercentage: 'Lean athletic build',
      weightMaleKg: '18 - 25 kg',
      weightFemaleKg: '14 - 20 kg',
      hardiness: 'Exceptional',
      heatTolerance: 'Supreme tolerance to 48°C desert sun and saline dust'
    },
    historicalSignificance: 'Reared by the traditional Vaghari hunting community of Gujarat.',
    pastoralCommunities: ['Vaghari pastoralists and hunters of Kutch'],
    careRecommendations: ['Extensive running space, cool shade in summer, fresh meat diet'],
    imageUrl: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80&dog=vaghari',
    tags: ['Gujarat', 'Kutch', 'Vaghari Hound', 'Desert Sighthound', 'Canine']
  }

];

export const INDIAN_BREEDS_CATALOG: BreedInfo[] = [
  ...INDIAN_BOVINE_BREEDS,
  ...INDIAN_GOAT_BREEDS,
  ...INDIAN_DOG_BREEDS
];

export const REGISTERED_CATTLE_BREEDS: BreedInfo[] = INDIAN_BREEDS_CATALOG.filter(
  (b) => b.category === 'Cattle'
);

export const REGISTERED_BUFFALO_BREEDS: BreedInfo[] = INDIAN_BREEDS_CATALOG.filter(
  (b) => b.category === 'Buffalo'
);

export const REGISTERED_GOAT_BREEDS: BreedInfo[] = INDIAN_BREEDS_CATALOG.filter(
  (b) => b.category === 'Goat'
);

export const REGISTERED_DOG_BREEDS: BreedInfo[] = INDIAN_BREEDS_CATALOG.filter(
  (b) => b.category === 'Dog'
);

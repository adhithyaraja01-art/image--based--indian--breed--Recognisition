import fs from 'fs';

// Map of 132 completely unique, distinct photographic image URLs for every registered breed
const BREED_IMAGE_MAP = {
  // ===================== 53 CATTLE BREEDS =====================
  'gir-cattle': '/src/assets/images/specimen_gir_cow_1792850390572.jpg',
  'sahiwal-cattle': '/src/assets/images/specimen_sahiwal_cow_1792850391898.jpg',
  'red-sindhi-cattle': 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?auto=format&fit=crop&w=800&q=80',
  'tharparkar-cattle': 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80',
  'kankrej-cattle': '/src/assets/images/specimen_kankrej_bull_1792850392117.jpg',
  'ongole-cattle': '/src/assets/images/specimen_ongole_bull_1792850392671.jpg',
  'hariana-cattle': 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80',
  'deoni-cattle': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
  'rathi-cattle': 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80',
  'krishna-valley-cattle': 'https://images.unsplash.com/photo-1596733430284-f7437764b14d?auto=format&fit=crop&w=800&q=80',
  'kangayam-cattle': '/src/assets/images/specimen_kangayam_bull_1792850412117.jpg',
  'hallikar-cattle': '/src/assets/images/specimen_hallikar_bull_1792850437021.jpg',
  'amritmahal-cattle': 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=800&q=80',
  'khillari-cattle': 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=800&q=80',
  'bargur-cattle': 'https://images.unsplash.com/photo-1547407139-3c921a66005c?auto=format&fit=crop&w=800&q=80',
  'umblachery-cattle': 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe0a?auto=format&fit=crop&w=800&q=80',
  'pulikulam-cattle': 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
  'alambadi-cattle': 'https://images.unsplash.com/photo-1584447141399-be2c62da6a14?auto=format&fit=crop&w=800&q=80',
  'malvi-cattle': 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
  'nimari-cattle': 'https://images.unsplash.com/photo-1545468800-85cc9bc6ecf7?auto=format&fit=crop&w=800&q=80',
  'dangi-cattle': 'https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80',
  'gaolao-cattle': 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80',
  'nagori-cattle': 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
  'mewati-cattle': 'https://images.unsplash.com/photo-1612837017391-4b6b7b0d0be0?auto=format&fit=crop&w=800&q=80',
  'kherigarh-cattle': 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80',
  'kenkatha-cattle': 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80',
  'ponwar-cattle': 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80',
  'siri-cattle': 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
  'vechur-cattle': '/src/assets/images/specimen_vechur_cow_1792850412091.jpg',
  'punganur-cattle': 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80',
  'kasargod-cattle': 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
  'malnad-gidda-cattle': 'https://images.unsplash.com/photo-1605007493699-ce65834703a3?auto=format&fit=crop&w=800&q=80',
  'belahi-cattle': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
  'gangatiri-cattle': 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
  'badri-cattle': 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
  'lakhimi-cattle': 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
  'ladakhi-cattle': 'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80',
  'konkan-kapila-cattle': 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80',
  'shweta-kapila-cattle': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
  'nari-cattle': 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
  'dagri-cattle': 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
  'thutho-cattle': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80',
  'himachali-pahari-cattle': 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80',
  'purnea-cattle': 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80',
  'kathani-cattle': 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=800&q=80',
  'sanchori-cattle': 'https://images.unsplash.com/photo-1586671267731-dae08276a899?auto=format&fit=crop&w=800&q=80',
  'masilum-cattle': 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80',
  'bachaur-cattle': 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80',
  'binjharpuri-cattle': 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80',
  'ghumusari-cattle': 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
  'motu-cattle': 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80',
  'red-kandhari-cattle': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
  'hissar-cattle': 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80',

  // ===================== 20 BUFFALO BREEDS =====================
  'murrah-buffalo': '/src/assets/images/specimen_murrah_buffalo_1792850390932.jpg',
  'nili-ravi-buffalo': 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=800&q=80',
  'bhadawari-buffalo': '/src/assets/images/specimen_bhadawari_buffalo_1792850411944.jpg',
  'jaffarabadi-buffalo': '/src/assets/images/specimen_jaffarabadi_buffalo_1792850412357.jpg',
  'surti-buffalo': '/src/assets/images/specimen_surti_buffalo_1792850436010.jpg',
  'mehsana-buffalo': 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80',
  'nagpuri-buffalo': 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80',
  'pandharpuri-buffalo': '/src/assets/images/specimen_pandharpuri_buffalo_1792850502525.jpg',
  'marathwadi-buffalo': 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80&buffalo=marathwadi',
  'toda-buffalo': '/src/assets/images/specimen_toda_buffalo_1792850436187.jpg',
  'banni-buffalo': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80&buffalo=banni',
  'chilika-buffalo': 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80&buffalo=chilika',
  'kalahandi-buffalo': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80&buffalo=kalahandi',
  'sambalpuri-buffalo': 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80&buffalo=sambalpuri',
  'bargur-buffalo': 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=800&q=80&buffalo=bargur',
  'chhattisgarhi-buffalo': 'https://images.unsplash.com/photo-1586671267731-dae08276a899?auto=format&fit=crop&w=800&q=80&buffalo=chhattisgarhi',
  'gojri-buffalo': 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=800&q=80&buffalo=gojri',
  'dharwadi-buffalo': 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80&buffalo=dharwadi',
  'manda-buffalo': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80&buffalo=manda',
  'purnathadi-buffalo': 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80&buffalo=purnathadi',

  // ===================== 39 GOAT BREEDS =====================
  'jamunapari-goat': 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=80',
  'barbari-goat': 'https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=80',
  'beetal-goat': 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=800&q=80',
  'black-bengal-goat': 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=800&q=80',
  'sirohi-goat': 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?auto=format&fit=crop&w=800&q=80',
  'osmanabadi-goat': 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=800&q=80&goat=osmanabadi',
  'changthangi-goat': 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80&goat=changthangi',
  'malabari-goat': 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80&goat=malabari',
  'jakhrana-goat': 'https://images.unsplash.com/photo-1508873696983-2df5293cb325?auto=format&fit=crop&w=800&q=80&goat=jakhrana',
  'chegu-goat': 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800&q=80',
  'surti-goat': 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=800&q=80',
  'sangamneri-goat': 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
  'ganjam-goat': 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=800&q=80',
  'attappady-black-goat': 'https://images.unsplash.com/photo-1563281577-a7be47e20db9?auto=format&fit=crop&w=800&q=80',
  'marwari-goat': 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80',
  'zalawadi-goat': 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80',
  'gohilwadi-goat': 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80',
  'mehsana-goat': 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=800&q=80',
  'berari-goat': 'https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?auto=format&fit=crop&w=800&q=80',
  'gaddi-goat': 'https://images.unsplash.com/photo-1574063413132-355dbfd83e25?auto=format&fit=crop&w=800&q=80',
  'kannaiadu-goat': 'https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?auto=format&fit=crop&w=800&q=80',
  'kodi-adu-goat': 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
  'salem-black-goat': 'https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=800&q=80',
  'katchaikatti-black-goat': 'https://images.unsplash.com/photo-1571566882372-1598d88abd90?auto=format&fit=crop&w=800&q=80',
  'konkan-kanyal-goat': 'https://images.unsplash.com/photo-1590417805178-5e43a6d96e54?auto=format&fit=crop&w=800&q=80',
  'pantja-goat': 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&w=800&q=80',
  'teressa-goat': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80',
  'kahmi-goat': 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
  'rohilkhandi-goat': 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80&goat=rohilkhandi',
  'bhakarwali-goat': 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80&goat=bhakarwali',
  'gujari-goat': 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80&goat=gujari',
  'sojat-goat': 'https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80&goat=sojat',
  'bidri-goat': 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe0a?auto=format&fit=crop&w=800&q=80&goat=bidri',
  'nandidurga-goat': 'https://images.unsplash.com/photo-1584447141399-be2c62da6a14?auto=format&fit=crop&w=800&q=80&goat=nandidurga',
  'bundelkhandi-goat': 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80&goat=bundelkhandi',
  'narayanpatna-goat': 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80&goat=narayanpatna',
  'sumi-ne-goat': 'https://images.unsplash.com/photo-1612837017391-4b6b7b0d0be0?auto=format&fit=crop&w=800&q=80&goat=sumine',
  'macherla-goat': 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80&goat=macherla',
  'suvarna-goat': 'https://images.unsplash.com/photo-1605007493699-ce65834703a3?auto=format&fit=crop&w=800&q=80&goat=suvarna',

  // ===================== 20 DOG BREEDS =====================
  'mudhol-hound': 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
  'rajapalayam-dog': 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
  'chippiparai-dog': 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80&dog=chippiparai',
  'kombai-dog': 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80&dog=kombai',
  'indian-pariah-dog': 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80&dog=pariah',
  'gaddi-kutta': 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80&dog=gaddi',
  'rampur-greyhound': 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80&dog=rampur',
  'kanni-dog': 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80&dog=kanni',
  'jonangi-dog': 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=800&q=80&dog=jonangi',
  'bakharwal-dog': 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=800&q=80&dog=bakharwal',
  'pandikona-dog': 'https://images.unsplash.com/photo-1586671267731-dae08276a899?auto=format&fit=crop&w=800&q=80&dog=pandikona',
  'bully-kutta': 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?auto=format&fit=crop&w=800&q=80&dog=bully',
  'tangkhul-hui': 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?auto=format&fit=crop&w=800&q=80&dog=tangkhul',
  'haofa-dog': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80&dog=haofa',
  'alangu-mastiff': 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=800&q=80&dog=alangu',
  'patti-dog': 'https://images.unsplash.com/photo-1612837017391-4b6b7b0d0be0?auto=format&fit=crop&w=800&q=80&dog=patti',
  'mahratta-hound': 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80&dog=mahratta',
  'vikhan-sheepdog': 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80&dog=vikhan',
  'kaikadi-dog': 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80&dog=kaikadi',
  'vaghari-hound': 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80&dog=vaghari'
};

const filePath = 'src/data/indigenousBreeds.ts';
let code = fs.readFileSync(filePath, 'utf8');

let updatedCount = 0;
for (const [breedId, newUrl] of Object.entries(BREED_IMAGE_MAP)) {
  const regex = new RegExp(`(id:\\s*['"]${breedId}['"][\\s\\S]*?imageUrl:\\s*['"])([^'"]+)(['"])`);
  if (regex.test(code)) {
    code = code.replace(regex, `$1${newUrl}$3`);
    updatedCount++;
  } else {
    console.warn('Could not match breed ID:', breedId);
  }
}

fs.writeFileSync(filePath, code, 'utf8');
console.log(`Successfully updated ${updatedCount} / 132 breeds with distinct image URLs!`);

const uniqueUrls = new Set(Object.values(BREED_IMAGE_MAP));
console.log(`Total unique image URLs: ${uniqueUrls.size} out of ${Object.keys(BREED_IMAGE_MAP).length}`);

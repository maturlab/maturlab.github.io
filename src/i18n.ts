export type Lang = 'tr' | 'en';

type Text = string | { tr: string; en?: string };
type TextList = string[] | { tr: string[]; en?: string[] };

/** İki dilli bir alanı seçili dile göre döndürür; İngilizcesi yoksa Türkçesi kullanılır. */
export function t(value: Text | undefined, lang: Lang): string {
  if (value === undefined) return '';
  if (typeof value === 'string') return value;
  return (lang === 'en' && value.en) || value.tr;
}

export function tList(value: TextList | undefined, lang: Lang): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return (lang === 'en' && value.en) || value.tr;
}

/** Site içi bağlantılara GitHub Pages alt yolunu (base) ekler. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^https?:|^mailto:/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}` || '/';
}

export const routes = {
  tr: {
    home: '/',
    projects: '/projeler',
    people: '/ekip',
    publications: '/yayinlar',
    contact: '/iletisim',
  },
  en: {
    home: '/en',
    projects: '/en/projects',
    people: '/en/people',
    publications: '/en/publications',
    contact: '/en/contact',
  },
} as const;

export const ui = {
  tr: {
    langName: 'Türkçe',
    otherLang: 'EN',
    otherLangLabel: 'English version',
    nav: { projects: 'Projeler', people: 'Ekip', publications: 'Yayınlar', contact: 'İletişim' },
    labFullName: 'Matur Bütünleşik Koruma ve Evrim Laboratuvarı',
    affiliation: 'Dokuz Eylül Üniversitesi · Fen Fakültesi · Biyoloji Bölümü',
    heroTitle: 'Memelilerde evrim, çeşitlilik ve koruma.',
    heroText:
      'Körfare (Nannospalax) başta olmak üzere Anadolu’nun kemirgenlerini kromozomdan genoma, sahadan laboratuvara kadar inceliyoruz. Türlerin nasıl ortaya çıktığını ve çevrelerine nasıl uyum sağladığını araştırıyor, endemik ve nesli tehlike altındaki türlerin korunması için bilimsel temel oluşturuyoruz. Kemirgenlerin taşıdığı etkenlerin insan ve ekosistem sağlığıyla ilişkisini de Tek Sağlık yaklaşımıyla ele alıyoruz.',
    focusTitle: 'Araştırma alanları',
    focus: [
      ['Sitogenetik ve kromozomal evrim', 'Kromozom bantlama ve kromozomal yeniden düzenlenmelerin tür oluşumundaki rolü.'],
      ['Sistematik ve taksonomi', 'Morfolojik, karyolojik ve moleküler verilerle türlerin tanımlanması ve evrimsel ilişkileri.'],
      ['Populasyon genetiği ve genomik', 'Genetik yapı, gen akışı ve genomdaki adaptasyon izlerinin incelenmesi.'],
      ['Geometrik morfometri', 'İki ve üç boyutlu şekil analizleriyle morfolojik evrimin izlenmesi.'],
      ['Biyocoğrafya ve koruma', 'Türlerin yayılış alanları, genetik çeşitliliği ve koruma öncelikleri.'],
      ['Tek Sağlık', 'Kemirgenlerin taşıdığı zoonotik etkenlerin insan, hayvan ve çevre sağlığı açısından araştırılması.'],
    ],
    featuredProjects: 'Öne çıkan projeler',
    allProjects: 'Tüm projeler',
    team: 'Ekip',
    meetTeam: 'Ekibin tamamı',
    recentPubs: 'Son yayınlar',
    allPubs: 'Tüm yayınlar',
    news: 'Haberler',
    status: { ongoing: 'Devam ediyor', completed: 'Tamamlandı' },
    filterAll: 'Tümü',
    projectsIntro: 'TÜBİTAK, üniversite ve uluslararası kaynaklarla desteklenen, laboratuvarımızda yürütülen ve tamamlanan araştırma projeleri.',
    funding: 'Destek',
    period: 'Dönem',
    projectTeam: 'Proje ekibi',
    fellow: 'Bursiyer',
    ongoingProjects: 'Devam eden projeler',
    completedProjects: 'Tamamlanan projeler',
    networks: 'Uluslararası ağlar',
    networksIntro: 'Laboratuvarımızın yer aldığı Avrupa Bilim ve Teknoloji İşbirliği (COST) aksiyonları.',
    lead: 'Yürütücü',
    viewSource: 'AVESİS’te görüntüle',
    articles: 'Makaleler',
    books: 'Kitaplar ve kitap bölümleri',
    phone: 'Telefon',
    relatedPubs: 'İlgili yayınlar',
    backToProjects: '← Projeler',
    peopleIntro: 'MICE LAB’de çalışan araştırmacılar ve öğrenciler.',
    roles: {
      pi: 'Laboratuvar Yöneticisi',
      postdoc: 'Doktora Sonrası Araştırmacılar',
      phd: 'Doktora Öğrencileri',
      msc: 'Yüksek Lisans Öğrencileri',
      grad: 'Lisansüstü Öğrenciler',
      bsc: 'Lisans Öğrencileri',
      alumni: 'Mezunlar',
    },
    roleSingle: {
      pi: 'Laboratuvar Yöneticisi',
      postdoc: 'Doktora Sonrası Araştırmacı',
      phd: 'Doktora Öğrencisi',
      msc: 'Yüksek Lisans Öğrencisi',
      grad: 'Lisansüstü Öğrenci',
      bsc: 'Lisans Öğrencisi',
      alumni: 'Mezun',
    },
    about: 'Hakkında',
    interests: 'Araştırma ilgi alanları',
    education: 'Eğitim',
    experience: 'Deneyim',
    awards: 'Ödüller ve burslar',
    thesis: 'Tez',
    projects: 'Projeler',
    publications: 'Yayınlar',
    downloadCv: 'Özgeçmişi indir (PDF)',
    backToPeople: '← Ekip',
    profile: 'Profili gör',
    pubsIntro: 'Laboratuvar üyelerinin yayınları. Lab üyelerinin adları koyu yazılmıştır.',
    searchPubs: 'Başlık, yazar veya dergi ara…',
    noResults: 'Sonuç bulunamadı.',
    contactIntro: 'Ortak çalışma, lisansüstü başvuru veya sorularınız için bize ulaşın.',
    address: 'Adres',
    email: 'E-posta',
    joinTitle: 'Ekibe katılın',
    joinText:
      'Evrim, sitogenetik ve koruma biyolojisiyle ilgilenen lisans ve lisansüstü öğrencilerle çalışmaktan mutluluk duyarız. Kısa bir özgeçmiş ve ilgi alanlarınızı anlatan bir e-postayla başvurabilirsiniz.',
    footerNote: 'Tüm hakları saklıdır.',
    notFound: 'Aradığınız sayfa bulunamadı.',
    goHome: 'Ana sayfaya dön',
  },
  en: {
    langName: 'English',
    otherLang: 'TR',
    otherLangLabel: 'Türkçe sürüm',
    nav: { projects: 'Projects', people: 'People', publications: 'Publications', contact: 'Contact' },
    labFullName: 'Matur Integrated Conservation and Evolution Laboratory',
    affiliation: 'Dokuz Eylül University · Faculty of Science · Department of Biology',
    heroTitle: 'Evolution, diversity and conservation in mammals.',
    heroText:
      'We study Anatolia’s rodents, above all blind mole rats (Nannospalax), from chromosomes to genomes and from the field to the lab. We investigate how species arise and adapt to their environments, and build the scientific basis for protecting endemic and threatened species. With a One Health approach, we also study how the agents rodents carry relate to human and ecosystem health.',
    focusTitle: 'Research areas',
    focus: [
      ['Cytogenetics and chromosomal evolution', 'Chromosome banding and the role of chromosomal rearrangements in speciation.'],
      ['Systematics and taxonomy', 'Delimiting species and their relationships with morphological, karyological and molecular data.'],
      ['Population genetics and genomics', 'Genetic structure, gene flow and genomic signatures of adaptation.'],
      ['Geometric morphometrics', 'Tracing morphological evolution with two- and three-dimensional shape analysis.'],
      ['Biogeography and conservation', 'Distribution, genetic diversity and conservation priorities of species.'],
      ['One Health', 'Rodent-borne zoonotic agents in the context of human, animal and environmental health.'],
    ],
    featuredProjects: 'Featured projects',
    allProjects: 'All projects',
    team: 'People',
    meetTeam: 'Meet the team',
    recentPubs: 'Recent publications',
    allPubs: 'All publications',
    news: 'News',
    status: { ongoing: 'Ongoing', completed: 'Completed' },
    filterAll: 'All',
    projectsIntro: 'Ongoing and completed research projects of our laboratory, funded by TÜBİTAK, universities and international programmes.',
    funding: 'Funding',
    period: 'Period',
    projectTeam: 'Project team',
    fellow: 'Research fellow',
    ongoingProjects: 'Ongoing projects',
    completedProjects: 'Completed projects',
    networks: 'International networks',
    networksIntro: 'European Cooperation in Science and Technology (COST) Actions our lab takes part in.',
    lead: 'Principal investigator',
    viewSource: 'View on AVESİS',
    articles: 'Articles',
    books: 'Books and book chapters',
    phone: 'Phone',
    relatedPubs: 'Related publications',
    backToProjects: '← Projects',
    peopleIntro: 'Researchers and students working at MICE LAB.',
    roles: {
      pi: 'Principal Investigator',
      postdoc: 'Postdoctoral Researchers',
      phd: 'PhD Students',
      msc: 'MSc Students',
      grad: 'Graduate Students',
      bsc: 'Undergraduate Students',
      alumni: 'Alumni',
    },
    roleSingle: {
      pi: 'Principal Investigator',
      postdoc: 'Postdoctoral Researcher',
      phd: 'PhD Student',
      msc: 'MSc Student',
      grad: 'Graduate Student',
      bsc: 'Undergraduate Student',
      alumni: 'Alumnus',
    },
    about: 'About',
    interests: 'Research interests',
    education: 'Education',
    experience: 'Experience',
    awards: 'Awards and grants',
    thesis: 'Thesis',
    projects: 'Projects',
    publications: 'Publications',
    downloadCv: 'Download CV (PDF)',
    backToPeople: '← People',
    profile: 'View profile',
    pubsIntro: 'Publications by lab members. Lab members are shown in bold.',
    searchPubs: 'Search title, author or journal…',
    noResults: 'No results found.',
    contactIntro: 'Get in touch for collaborations, graduate applications or any questions.',
    address: 'Address',
    email: 'Email',
    joinTitle: 'Join the lab',
    joinText:
      'We are always happy to hear from undergraduate and graduate students interested in evolution, cytogenetics and conservation biology. Send us a short CV and a few lines about your interests.',
    footerNote: 'All rights reserved.',
    notFound: 'The page you are looking for could not be found.',
    goHome: 'Back to home',
  },
} as const;

export const roleOrder = ['pi', 'postdoc', 'phd', 'msc', 'grad', 'bsc'] as const;

/** Yazar listesinde lab üyelerinin adlarını koyu yapar. */
export function highlightAuthors(authors: string, names: string[]): string {
  const escape = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
  const html = escape(authors);
  if (!names.length) return html;
  const pattern = [...names]
    .sort((a, b) => b.length - a.length)
    .map((n) => escape(n).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  return html.replace(new RegExp(pattern, 'g'), (m) => `<strong>${m}</strong>`);
}

export function authorMatches(authors: string, names: string[]): boolean {
  return names.some((n) => authors.includes(n));
}

/** Başlıktaki _italik_ işaretlerini <em> etiketine çevirir (tür adları için). */
export function formatTitle(title: string): string {
  const escaped = title.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
  return escaped.replace(/_([^_]+)_/g, '<em>$1</em>');
}

// Metinlerde otomatik italik yazılacak cins adları ve tür epitetleri.
// Yeni bir tür adı eklemek için ilgili listeye yazmanız yeterli.
const GENERA = ['Nannospalax', 'Spalax', 'Myomimus', 'Blastocystis', 'Acomys', 'Apodemus', 'Myodes', 'Microtus', 'Talpa', 'Podarcis', 'Darevskia', 'Praomys', 'Dryomys', 'Spermophilus', 'Chionomys', 'Muscardinus'];
const EPITHETS = ['xanthodon', 'leucodon', 'ehrenbergi', 'nehringi', 'cilicicus', 'roachi', 'setzeri', 'siculus', 'glareolus', 'laniger', 'delectorum', 'davidiana', 'taurensis', 'gud', 'avellanarius', 'uralensis', 'flavicollis'];

/** Metni HTML için güvenli hale getirir ve cins/tür adlarını <em> ile italik yapar. */
export function taxa(text: string): string {
  const escaped = text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
  const ep = EPITHETS.join('|');
  return escaped
    .replace(new RegExp(`\\b(${GENERA.join('|')})(\\s(?:${ep}))?\\b`, 'g'), '<em>$1$2</em>')
    .replace(new RegExp(`(^|[\\s(])([A-Z]\\.\\s(?:${ep}))\\b`, 'g'), '$1<em>$2</em>');
}

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
    heroTitle: 'Anadolu’nun yeraltı memelilerinde kromozom, evrim ve koruma.',
    heroText:
      'Kör fareler (Nannospalax) başta olmak üzere Anadolu’nun endemik kemirgenlerini sahada, laboratuvarda ve genomda inceliyoruz. Türlerin nasıl ortaya çıktığını anlamak, onları korumanın ilk adımı.',
    focusTitle: 'Araştırma alanları',
    focus: [
      ['Sitogenetik', 'Kromozom sayısı, bantlama ve kromozomal yeniden düzenlenmelerin tür oluşumundaki rolü.'],
      ['Bütünleşik taksonomi', 'Morfoloji, karyoloji ve moleküler verileri birleştirerek türleri tanımlamak.'],
      ['Populasyon genetiği', 'Populasyonlar arası gen akışı, genetik yapı ve evrimsel geçmiş.'],
      ['Koruma biyolojisi', 'Endemik türlerin yayılış alanları, habitatları ve koruma öncelikleri.'],
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
    projectsIntro: 'Laboratuvarımızda yürütülen ve tamamlanan araştırma projeleri.',
    funding: 'Destek',
    period: 'Dönem',
    projectTeam: 'Proje ekibi',
    relatedPubs: 'İlgili yayınlar',
    backToProjects: '← Projeler',
    peopleIntro: 'MICE LAB’de çalışan araştırmacılar ve öğrenciler.',
    roles: {
      pi: 'Laboratuvar Yöneticisi',
      postdoc: 'Doktora Sonrası Araştırmacılar',
      phd: 'Doktora Öğrencileri',
      msc: 'Yüksek Lisans Öğrencileri',
      bsc: 'Lisans Öğrencileri',
      alumni: 'Mezunlar',
    },
    roleSingle: {
      pi: 'Laboratuvar Yöneticisi',
      postdoc: 'Doktora Sonrası Araştırmacı',
      phd: 'Doktora Öğrencisi',
      msc: 'Yüksek Lisans Öğrencisi',
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
    heroTitle: 'Chromosomes, evolution and conservation of Anatolia’s subterranean mammals.',
    heroText:
      'We study Anatolia’s endemic rodents — above all the blind mole rats (Nannospalax) — in the field, in the lab and in the genome. Understanding how species arise is the first step towards protecting them.',
    focusTitle: 'Research areas',
    focus: [
      ['Cytogenetics', 'Chromosome numbers, banding and the role of chromosomal rearrangements in speciation.'],
      ['Integrative taxonomy', 'Delimiting species by combining morphological, karyological and molecular data.'],
      ['Population genetics', 'Gene flow, genetic structure and evolutionary history across populations.'],
      ['Conservation biology', 'Distribution, habitats and conservation priorities of endemic species.'],
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
    projectsIntro: 'Ongoing and completed research projects of our laboratory.',
    funding: 'Funding',
    period: 'Period',
    projectTeam: 'Project team',
    relatedPubs: 'Related publications',
    backToProjects: '← Projects',
    peopleIntro: 'Researchers and students working at MICE LAB.',
    roles: {
      pi: 'Principal Investigator',
      postdoc: 'Postdoctoral Researchers',
      phd: 'PhD Students',
      msc: 'MSc Students',
      bsc: 'Undergraduate Students',
      alumni: 'Alumni',
    },
    roleSingle: {
      pi: 'Principal Investigator',
      postdoc: 'Postdoctoral Researcher',
      phd: 'PhD Student',
      msc: 'MSc Student',
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

export const roleOrder = ['pi', 'postdoc', 'phd', 'msc', 'bsc'] as const;

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

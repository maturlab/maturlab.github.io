import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Metin alanları iki şekilde yazılabilir:
//   title: "Sadece Türkçe metin"
//   title: { tr: "Türkçe metin", en: "English text" }
// İngilizcesi yazılmazsa İngilizce sayfada Türkçesi gösterilir.
const text = z.union([z.string(), z.object({ tr: z.string(), en: z.string().optional() })]);
const textList = z.union([
  z.array(z.string()),
  z.object({ tr: z.array(z.string()), en: z.array(z.string()).optional() }),
]);

const people = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/people' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      // pi: lab yöneticisi, postdoc, phd: doktora, msc: yüksek lisans, grad: lisansüstü (belirtilmemiş), bsc: lisans, alumni: mezun
      role: z.enum(['pi', 'postdoc', 'phd', 'msc', 'grad', 'bsc', 'alumni']),
      title: text.optional(),
      photo: image().optional(),
      email: z.string().optional(),
      // Yayın listesinde bu kişinin adını tanımak için (ör. "Matur F", "Matur, F.")
      citationNames: z.array(z.string()).default([]),
      interests: textList.optional(),
      bio: text.optional(),
      education: z
        .array(
          z.object({
            degree: text,
            field: text.optional(),
            institution: z.string(),
            years: z.string(),
            thesis: text.optional(),
          }),
        )
        .default([]),
      experience: z
        .array(z.object({ position: text, institution: z.string(), years: z.string() }))
        .default([]),
      awards: z.array(z.object({ title: text, year: z.string() })).default([]),
      // Bilimsel aktiviteler: staj, kongre sunumu, yaz okulu vb.
      activities: z
        .array(z.object({ title: text, where: text.optional(), detail: text.optional(), date: text }))
        .default([]),
      links: z
        .object({
          scholar: z.string().optional(),
          orcid: z.string().optional(),
          scopus: z.string().optional(),
          wos: z.string().optional(),
          researchgate: z.string().optional(),
          avesis: z.string().optional(),
          linkedin: z.string().optional(),
          github: z.string().optional(),
          website: z.string().optional(),
        })
        .default({}),
      cv: z.string().optional(), // public/cv klasöründeki PDF adı, ör. "ferhat-matur.pdf"
      order: z.number().default(100),
      graduated: z.string().optional(), // mezunlar için: "2024 · Yüksek Lisans"
      draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: text,
      summary: text.optional(),
      description: text.optional(),
      // research: araştırma projesi, network: uluslararası ağ (ör. COST Aksiyonu)
      kind: z.enum(['research', 'network']).default('research'),
      status: z.enum(['ongoing', 'completed']),
      years: z.string(),
      funding: text.optional(), // ör. "TÜBİTAK 1001"
      lead: z.string().optional(), // proje yürütücüsü
      collaborators: z.array(z.string()).default([]), // lab dışındaki araştırmacılar
      link: z.string().optional(), // ör. AVESİS proje sayfası
      image: image().optional(),
      imageAlt: text.optional(),
      members: z.array(reference('people')).default([]),
      fellows: z.array(reference('people')).default([]), // projede bursiyer olan lab üyeleri
      tags: textList.optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      draft: z.boolean().default(false),
    }),
});

const publications = defineCollection({
  loader: file('./src/data/publications.yaml'),
  schema: z.object({
    authors: z.string(),
    year: z.number(),
    title: z.string(),
    journal: z.string(),
    volume: z.string().optional(),
    pages: z.string().optional(),
    doi: z.string().optional(),
    url: z.string().optional(),
    type: z.enum(['article', 'chapter', 'book', 'conference', 'thesis']).default('article'),
  }),
});

const news = defineCollection({
  loader: file('./src/data/news.yaml'),
  schema: z.object({
    date: z.coerce.date(),
    text: text,
    url: z.string().optional(),
  }),
});

export const collections = { people, projects, publications, news };

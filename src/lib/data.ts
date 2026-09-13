import { getCollection, type CollectionEntry } from 'astro:content';
import { authorMatches } from '../i18n';

const byOrderThenName = (a: CollectionEntry<'people'>, b: CollectionEntry<'people'>) =>
  a.data.order - b.data.order || a.data.name.localeCompare(b.data.name, 'tr');

export async function getPeople() {
  return (await getCollection('people', (p) => !p.data.draft)).sort(byOrderThenName);
}

export async function getProjects() {
  const statusRank = { ongoing: 0, completed: 1 };
  return (await getCollection('projects', (p) => !p.data.draft)).sort(
    (a, b) =>
      statusRank[a.data.status] - statusRank[b.data.status] ||
      a.data.order - b.data.order ||
      b.data.years.localeCompare(a.data.years),
  );
}

export async function getPublications() {
  return (await getCollection('publications')).sort(
    (a, b) => b.data.year - a.data.year || a.data.title.localeCompare(b.data.title),
  );
}

export async function getNews() {
  return (await getCollection('news')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Tüm lab üyelerinin yayınlarda geçen isim biçimleri */
export async function getLabNames() {
  return (await getPeople()).flatMap((p) => p.data.citationNames);
}

export async function getPublicationsFor(person: CollectionEntry<'people'>) {
  const names = person.data.citationNames;
  if (!names.length) return [];
  return (await getPublications()).filter((pub) => authorMatches(pub.data.authors, names));
}

export async function getProjectsFor(person: CollectionEntry<'people'>) {
  return (await getProjects()).filter((p) => p.data.members.some((m) => m.id === person.id));
}

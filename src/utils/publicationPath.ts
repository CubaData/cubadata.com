import type { Publication } from '../data'

export function publicationPath(publication: Publication) {
  return `/${publication.category}/${publication.slug}`
}

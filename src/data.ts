import encuestasJson from './data/encuestas.json'
import estudiosJson from './data/estudios.json'
import articlesJson from './data/articles.json'
import { formatDateEs, formatTextAsParagraphs } from './utils/formatData'

const FALLBACK_IMAGE = '/images/post/cubadata_default.jpg'

export type Encuesta = {
  slug: string
  title: string
  serie: string | null
  start_date: string
  end_date: string
  questions: number
  responses: number
  pdf: string | null
  image: string
  keywords: string[] | null
  excerpt: string | null
  summary: string[]
}

export type Estudio = {
  slug: string
  date: string
  title: string
  serie: string | null
  isbn: string | null
  authors: string[] | null
  pdf: string | null
  image: string
  keywords: string[] | null
  excerpt: string | null
  summary: string[]
}

export function getEncuestas(): Encuesta[]
{
  const raw = [...encuestasJson]
  raw.sort((a, b) => {
    const dateA = new Date(a.start_date || '').getTime()
    const dateB = new Date(b.start_date || '').getTime()
    return dateB - dateA
  })

  return raw.map(function (item) {
    return {
      slug: item.slug,
      title: item.title,
      serie: item.serie,
      start_date: formatDateEs(item.start_date),
      end_date: formatDateEs(item.end_date),
      questions: item.questions,
      responses: item.responses,
      pdf: item.pdf,
      image: item.image ?? FALLBACK_IMAGE,
      keywords: item.keywords,
      excerpt: item.excerpt,
      summary: formatTextAsParagraphs(item.summary),
    }
  })
}

export function getEncuestaBySlug(slug: string): Encuesta | null
{
  const encuesta = getEncuestas().find((item) => item.slug === slug)
  return encuesta ?? null
}

export function getEstudios(): Estudio[]
{
  const raw = [...estudiosJson]
  raw.sort((a, b) => {
    const dateA = new Date(a.date || '').getTime()
    const dateB = new Date(b.date || '').getTime()
    return dateB - dateA
  })

  return raw.map(function (item) {
    return {
      slug: item.slug,
      date: formatDateEs(item.date),
      title: item.title,
      serie: item.serie,
      isbn: item.isbn,
      authors: item.authors,
      pdf: item.pdf,
      image: item.image ?? FALLBACK_IMAGE,
      keywords: item.keywords,
      excerpt: item.excerpt,
      summary: formatTextAsParagraphs(item.summary),
    }
  })
}

export function getEstudioBySlug(slug: string): Estudio | null
{
  const estudio = getEstudios().find((item) => item.slug === slug)
  return estudio ?? null
}

export type Article = {
  slug: string
  date: string
  title: string
  image: string
  link: string
  keywords: string[] | null
  excerpt: string | null
  summary: string[]
}

export function getArticles(): Article[]
{
  const raw = [...articlesJson]
  raw.sort((a, b) => {
    const dateA = new Date(a.date || '').getTime()
    const dateB = new Date(b.date || '').getTime()
    return dateB - dateA
  })

  return raw.map(function (item) {
    return {
      slug: item.slug,
      date: formatDateEs(item.date),
      title: item.title,
      image: item.image ?? FALLBACK_IMAGE,
      link: item.link,
      keywords: item.keywords,
      excerpt: item.excerpt,
      summary: formatTextAsParagraphs(item.summary),
    }
  })
}

export function getArticleBySlug(slug: string): Article | null
{
  const article = getArticles().find((item) => item.slug === slug)
  return article ?? null
}
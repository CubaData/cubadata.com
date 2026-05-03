import encuestasJson from './data/encuestas.json'
import estudiosJson from './data/estudios.json'
import { formatDateEs, formatTextAsParagraphs } from './utils/formatData'

const FALLBACK_IMAGE = '/images/post/segundo-panel-card.jpg'

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
  const encuestas = encuestasJson.map(function (item) {
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

  return encuestas
}

export function getEncuestaBySlug(slug: string): Encuesta | null
{
  const encuesta = getEncuestas().find((item) => item.slug === slug)
  return encuesta ?? null
}

export function getEstudios(): Estudio[]
{
  const estudios = estudiosJson.map(function (item) {
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

  return estudios
}

export function getEstudioBySlug(slug: string): Estudio | null
{
  const estudio = getEstudios().find((item) => item.slug === slug)
  return estudio ?? null
}
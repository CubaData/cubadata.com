import { getEncuestas, getEstudios } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'
import encuestasJson from '../../data/encuestas.json'
import estudiosJson from '../../data/estudios.json'
import { formatDateEs } from '../../utils/formatData'

type SidebarProps = {
  onNavigate?: Navigate
  isSurvey?: boolean
  serie?: string | null
}

type SeriesItem = {
  slug: string
  title: string
  pdf: string | null
  dateRaw: string
  isSurvey: boolean
}

export function Sidebar({ onNavigate, isSurvey, serie }: SidebarProps) {
  const rawPosts = isSurvey ? getEncuestas().slice(0, 5) : getEstudios().slice(0, 5)

  const latestPosts = rawPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    pdf: post.pdf,
    date: 'start_date' in post ? post.start_date : post.date,
  }))

  const seriesItems: SeriesItem[] = []
  if (serie) {
    const normalizedSerie = serie.toLowerCase()

    encuestasJson.forEach((item) => {
      if (item.serie && item.serie.toLowerCase() === normalizedSerie) {
        seriesItems.push({
          slug: item.slug,
          title: item.title,
          pdf: item.pdf,
          dateRaw: item.start_date,
          isSurvey: true,
        })
      }
    })

    estudiosJson.forEach((item) => {
      if (item.serie && item.serie.toLowerCase() === normalizedSerie) {
        seriesItems.push({
          slug: item.slug,
          title: item.title,
          pdf: item.pdf,
          dateRaw: item.date,
          isSurvey: false,
        })
      }
    })

    seriesItems.sort((a, b) => {
      const dateA = new Date(a.dateRaw || '').getTime()
      const dateB = new Date(b.dateRaw || '').getTime()
      return dateB - dateA
    })
  }

  return (
    <aside className="sidebar modern-sidebar">
      {serie && seriesItems.length > 0 && (
        <div className="sidebar-card">
          <h3>{serie.replaceAll('-', ' ').toUpperCase()}</h3>
          {seriesItems.map(({ slug, title, pdf, dateRaw, isSurvey: itemIsSurvey }) => (
            <article key={slug} className="sidebar-article">
              <h4>
                <AppLink href={pdf ?? (itemIsSurvey ? `/encuestas/${slug}` : `/estudios/${slug}`)} onNavigate={onNavigate}>
                  {title}
                </AppLink>
              </h4>
              <time className="sidebar-date mt-0">{formatDateEs(dateRaw)}</time>
            </article>
          ))}
        </div>
      )}
      <div className="sidebar-card">
        <h3>{isSurvey ? 'Últimas encuestas' : 'Últimos estudios'}</h3>
        {latestPosts.map(({ slug, title, pdf, date }) => (
          <article key={slug} className="sidebar-article">
            <h4>
              <AppLink href={pdf ?? (isSurvey ? `/encuestas/${slug}` : `/estudios/${slug}`)} onNavigate={onNavigate}>
                {title}
              </AppLink>
            </h4>
            <time className="sidebar-date mt-0">{date}</time>
          </article>
        ))}
      </div>
    </aside>
  )
}

import { getEncuestas, getEstudios } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

type SidebarProps = {
  onNavigate?: Navigate
  isSurvey?: boolean
}

export function Sidebar({ onNavigate, isSurvey }: SidebarProps) {
  const rawPosts = isSurvey ? getEncuestas().slice(0, 5) : getEstudios().slice(0, 5)

  const latestPosts = rawPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    pdf: post.pdf,
    date: 'start_date' in post ? post.start_date : post.date,
  }))

  return (
    <aside className="sidebar modern-sidebar">
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

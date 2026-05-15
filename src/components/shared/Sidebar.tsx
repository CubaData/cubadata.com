import { getEncuestas } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

const latestPosts = getEncuestas().slice(0, 5)

type SidebarProps = {
  onNavigate?: Navigate
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar modern-sidebar">
      <div className="sidebar-card">
        <h3>Últimas publicaciones</h3>
        {latestPosts.map(({ slug, title, start_date, pdf }) => (
          <article key={slug} className="sidebar-article">
            <h4>
              <AppLink href={pdf ?? `/encuestas/${slug}`} onNavigate={onNavigate}>
                {title}
              </AppLink>
            </h4>
            <time className="sidebar-date mt-0">{start_date}</time>
          </article>
        ))}
      </div>
    </aside>
  )
}

import { getEncuestas } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

const latestPosts = getEncuestas().slice(0, 3)

type SidebarProps = {
  onNavigate?: Navigate
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar modern-sidebar">
      <div className="sidebar-card">
        <h2>Últimas publicaciones</h2>
        {latestPosts.map(({ slug, title, start_date, pdf }) => (
          <article key={slug} className="sidebar-article">
            <h3>
              <AppLink href={pdf ?? `/encuestas/${slug}`} onNavigate={onNavigate}>
                {title}
              </AppLink>
            </h3>
            <time>{start_date}</time>
          </article>
        ))}
      </div>
    </aside>
  )
}

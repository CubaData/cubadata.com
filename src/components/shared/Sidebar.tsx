import { latestPublications } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

const latestPosts = latestPublications.slice(0, 5)

type SidebarProps = {
  onNavigate?: Navigate
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2>Últimas publicaciones</h2>
      {latestPosts.map(({ href, publication }) => (
        <article key={publication.slug}>
          <img src={publication.image} alt="" />
          <h3>
            <AppLink href={href} onNavigate={onNavigate}>
              {publication.title}
            </AppLink>
          </h3>
          <time>{publication.date} [0]</time>
          <p>{publication.excerpt}</p>
        </article>
      ))}
    </aside>
  )
}

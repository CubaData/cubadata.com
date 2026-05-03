import { getEncuestas } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

const latestPosts = getEncuestas().slice(0, 3)

type SidebarProps = {
  onNavigate?: Navigate
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2>Últimas publicaciones</h2>
      {latestPosts.map(({ slug, image, title, start_date, excerpt, pdf }) => (
        <article key={slug}>
          <img src={image} alt="" />
          <h3>
            <AppLink href={pdf ?? `/encuestas/${slug}`} onNavigate={onNavigate}>
              {title}
            </AppLink>
          </h3>
          <time>{start_date}</time>
          <p>{excerpt}</p>
        </article>
      ))}
    </aside>
  )
}

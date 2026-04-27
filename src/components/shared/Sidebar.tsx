import { allPublications } from '../../data'
import type { Navigate } from '../../types'
import { publicationPath } from '../../utils/publicationPath'
import { AppLink } from './AppLink'

const latestPosts = allPublications.slice(0, 5)

type SidebarProps = {
  onNavigate?: Navigate
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="sidebar">
      <h2>Últimas publicaciones</h2>
      {latestPosts.map((post) => (
        <article key={post.slug}>
          <img src={post.image} alt="" />
          <h3>
            <AppLink href={publicationPath(post)} onNavigate={onNavigate}>
              {post.title}
            </AppLink>
          </h3>
          <time>{post.date} [0]</time>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </aside>
  )
}

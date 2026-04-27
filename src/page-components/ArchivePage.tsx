import { posts, type Category } from '../data'
import type { Navigate } from '../types'
import { AppLink } from '../components/AppLink'
import { Sidebar } from '../components/Sidebar'

type ArchivePageProps = {
  category: Category
  onNavigate?: Navigate
}

export function ArchivePage({ category, onNavigate }: ArchivePageProps) {
  const title = category === 'encuestas' ? 'Encuestas' : 'Estudios'
  const list = posts.filter((post) => post.category === category)

  return (
    <main className="archive-page">
      <div className="container two-column">
        <section>
          <h1 className="archive-title">{title}</h1>
          <div className="archive-list">
            {list.map((post) => (
              <article className="archive-item" key={post.slug}>
                <AppLink className="archive-thumb" href={`/item/${post.slug}`} onNavigate={onNavigate}>
                  <img src={post.image} alt="" />
                </AppLink>
                <div>
                  <h2>
                    <AppLink href={`/item/${post.slug}`} onNavigate={onNavigate}>
                      {post.title}
                    </AppLink>
                  </h2>
                  <p className="meta">
                    {post.author ? `${post.author} - ` : ''}
                    {post.date}
                  </p>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Sidebar onNavigate={onNavigate} />
      </div>
    </main>
  )
}

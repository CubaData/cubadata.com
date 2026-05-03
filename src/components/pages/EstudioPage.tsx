import { getEstudioBySlug } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from '../shared/AppLink'
import { Sidebar } from '../shared/Sidebar'

type EstudioPageProps = {
  slug: string
  onNavigate?: Navigate
}

export function EstudioPage({ slug, onNavigate }: EstudioPageProps) {
  const estudio = getEstudioBySlug(slug)

  if (!estudio) return null

  return (
    <main className="post-page study-page">
      <div className="container two-column">
        <article className="single-post study-post">
          <div className="study-label">Estudio y análisis</div>
          <h1>{estudio.title}</h1>
          <div className="study-meta">
            <time>{estudio.date}</time>
            {estudio.serie && <span>{estudio.serie}</span>}
          </div>
          <img className="single-cover" src={estudio.image} alt="" />
          {estudio.excerpt && <div className="study-intro">{estudio.excerpt}</div>}
          {estudio.summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {estudio.pdf && (
            <AppLink className="hero-button primary" href={estudio.pdf} onNavigate={onNavigate}>
              Ver publicación
            </AppLink>
          )}
        </article>
        <Sidebar onNavigate={onNavigate} />
      </div>
    </main>
  )
}

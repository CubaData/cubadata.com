import { estudios } from '../../data'
import type { Navigate } from '../../types'
import { Sidebar } from '../shared/Sidebar'

type EstudioPageProps = {
  slug: string
  onNavigate?: Navigate
}

export function EstudioPage({ slug, onNavigate }: EstudioPageProps) {
  const estudio = estudios.find((item) => item.slug === slug)

  if (!estudio) return null

  return (
    <main className="post-page study-page">
      <div className="container two-column">
        <article className="single-post study-post">
          <div className="study-label">Estudio y análisis</div>
          <h1>{estudio.title}</h1>
          <div className="study-meta">
            <time>{estudio.date}</time>
            {estudio.researchType && <span>{estudio.researchType}</span>}
          </div>
          {estudio.cover && <img className="single-cover" src={estudio.cover} alt="" />}
          <div className="study-intro">{estudio.excerpt}</div>
          {(estudio.body ?? []).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <Sidebar onNavigate={onNavigate} />
      </div>
    </main>
  )
}

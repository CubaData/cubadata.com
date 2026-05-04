import { getEncuestas } from '../../data'
import type { Navigate } from '../../types'
import { PostCard } from '../shared/PostCard'

type EncuestasPageProps = {
  onNavigate?: Navigate
}

export function EncuestasPage({ onNavigate }: EncuestasPageProps) {
  return (
    <main className="archive-page encuestas-page">
      <div className="container">
        <h1 className="archive-title">Encuestas</h1>
        <div className="post-grid three-columns">
          {getEncuestas().map((encuesta) => (
            <PostCard
              href={`/encuestas/${encuesta.slug}`}
              key={encuesta.slug}
              onNavigate={onNavigate}
              post={encuesta}
            />
          ))}
        </div>
      </div>
    </main>
  )
}

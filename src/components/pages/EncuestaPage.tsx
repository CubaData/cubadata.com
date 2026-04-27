import { encuestas } from '../../data'
import type { Navigate } from '../../types'
import { Sidebar } from '../shared/Sidebar'

type EncuestaPageProps = {
  slug: string
  onNavigate?: Navigate
}

export function EncuestaPage({ slug, onNavigate }: EncuestaPageProps) {
  const encuesta = encuestas.find((item) => item.slug === slug)

  if (!encuesta) return null

  return (
    <main className="post-page survey-page">
      <div className="container two-column">
        <article className="single-post survey-post">
          <time>{encuesta.date}</time>
          <h1>{encuesta.title}</h1>
          <div className="share">Compartir</div>
          <div className="survey-summary">
            <span>Encuesta pública</span>
            {encuesta.sampleSize && <strong>Muestra: {encuesta.sampleSize}</strong>}
            {encuesta.fieldwork && <strong>Campo: {encuesta.fieldwork}</strong>}
          </div>
          {encuesta.cover && <img className="single-cover" src={encuesta.cover} alt="" />}
          {(encuesta.body ?? [encuesta.excerpt]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <Sidebar onNavigate={onNavigate} />
      </div>
    </main>
  )
}

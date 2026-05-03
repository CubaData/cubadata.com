import { getEncuestaBySlug } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from '../shared/AppLink'
import { Sidebar } from '../shared/Sidebar'

type EncuestaPageProps = {
  slug: string
  onNavigate?: Navigate
}

export function EncuestaPage({ slug, onNavigate }: EncuestaPageProps) {
  const encuesta = getEncuestaBySlug(slug)

  if (!encuesta) return null
  
  return (
    <main className="post-page survey-page">
      <div className="container two-column">
        <article className="single-post survey-post">
          <h1>{encuesta.title}</h1>

          <div className="share">Compartir</div>

          <div className="survey-summary">
            <p>Muestra: {encuesta.responses}</p>
            <p>Preguntas: {encuesta.questions}</p>
          </div>

          <p>Fechas: {encuesta.start_date} al {encuesta.end_date}</p>

          <div>
            <img className="single-cover" src={encuesta.image} alt="" />

            {encuesta.summary.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <AppLink className="hero-button primary" href={encuesta.pdf} onNavigate={onNavigate}>
            Descargar PDF
          </AppLink>
        </article>

        <Sidebar onNavigate={onNavigate} />
      </div>
    </main>
  )
}

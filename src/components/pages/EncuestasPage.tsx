import { encuestas } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from '../shared/AppLink'
import { Sidebar } from '../shared/Sidebar'

type EncuestasPageProps = {
  onNavigate?: Navigate
}

export function EncuestasPage({ onNavigate }: EncuestasPageProps) {
  return (
    <main className="archive-page encuestas-page">
      <div className="container two-column">
        <section>
          <h1 className="archive-title">Encuestas</h1>
          <div className="archive-list">
            {encuestas.map((encuesta) => (
              <article className="archive-item encuesta-archive-item" key={encuesta.slug}>
                <AppLink className="archive-thumb" href={`/encuestas/${encuesta.slug}`} onNavigate={onNavigate}>
                  <img src={encuesta.image} alt="" />
                </AppLink>
                <div>
                  <h2>
                    <AppLink href={`/encuestas/${encuesta.slug}`} onNavigate={onNavigate}>
                      {encuesta.title}
                    </AppLink>
                  </h2>
                  <p className="meta">
                    {encuesta.author ? `${encuesta.author} - ` : ''}
                    {encuesta.date}
                  </p>
                  <p>{encuesta.excerpt}</p>
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

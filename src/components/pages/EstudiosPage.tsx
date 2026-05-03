import { getEstudios } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from '../shared/AppLink'
import { Sidebar } from '../shared/Sidebar'

type EstudiosPageProps = {
  onNavigate?: Navigate
}

export function EstudiosPage({ onNavigate }: EstudiosPageProps) {
  return (
    <main className="archive-page estudios-page">
      <div className="container two-column">
        <section>
          <h1 className="archive-title">Estudios</h1>
          <div className="archive-list estudios-list">
            {getEstudios().map((estudio) => (
              <article className="archive-item estudio-archive-item" key={estudio.slug}>
                <AppLink className="archive-thumb" href={`/estudios/${estudio.slug}`} onNavigate={onNavigate}>
                  <img src={estudio.image} alt="" />
                </AppLink>
                <div>
                  <span className="study-label">Estudio y análisis</span>
                  <h2>
                    <AppLink href={`/estudios/${estudio.slug}`} onNavigate={onNavigate}>
                      {estudio.title}
                    </AppLink>
                  </h2>
                  <p className="meta">
                    {estudio.author ? `${estudio.author} - ` : ''}
                    {estudio.date}
                  </p>
                  <p>{estudio.excerpt}</p>
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

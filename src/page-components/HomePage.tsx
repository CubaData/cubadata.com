import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { posts, pressItems } from '../data'
import type { Navigate } from '../types'
import { AppLink } from '../components/AppLink'
import { PostShowcase } from '../components/PostShowcase'
import { SectionTitle } from '../components/SectionTitle'
import { ServiceCard } from '../components/ServiceCard'
import { loadScript } from '../utils/loadScript'

declare global {
  interface Window {
    THREE?: unknown
    VANTA?: {
      NET: (options: Record<string, unknown>) => { destroy: () => void }
    }
  }
}

type HomePageProps = {
  onNavigate?: Navigate
}

export function HomePage({ onNavigate }: HomePageProps) {
  const encuestaPosts = posts.filter((post) => post.category === 'encuestas').slice(0, 6)
  const estudioPosts = posts.filter((post) => post.category === 'estudios').slice(0, 6)
  const heroRef = useRef<HTMLElement>(null)
  const [heroOffset, setHeroOffset] = useState({ x: 0, y: 0 })
  const heroStyle = {
    '--hero-x': `${heroOffset.x}px`,
    '--hero-y': `${heroOffset.y}px`,
  } as CSSProperties

  const handleHeroMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height
    setHeroOffset({ x: x * 34, y: y * 24 })
  }

  useEffect(() => {
    let effect: { destroy: () => void } | undefined
    let cancelled = false

    async function startVanta() {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
      await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js')

      if (cancelled || !heroRef.current || !window.THREE || !window.VANTA?.NET) return

      effect = window.VANTA.NET({
        el: heroRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0xd93b20,
        backgroundColor: 0x2c2c4c,
        points: 17,
        maxDistance: 23,
        spacing: 14,
        showDots: false,
      })
    }

    startVanta().catch(() => undefined)

    return () => {
      cancelled = true
      effect?.destroy()
    }
  }, [])

  return (
    <main>
      <section className="hero-section td-mesh-bg" onMouseMove={handleHeroMouseMove} ref={heroRef} style={heroStyle}>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span>Conoce qué opinan los cubanos</span>
            <h1>Cuba cambia, nosotros te mostramos cómo</h1>
            <p>
              En Cubadata generamos datos, información y análisis de la realidad cubana a partir de la
              realización de encuestas digitales.
            </p>
            <div className="hero-actions">
              <AppLink className="hero-button primary" href="/encuestas" onNavigate={onNavigate}>
                Encuestas
              </AppLink>
              <AppLink className="hero-button secondary" href="/estudios" onNavigate={onNavigate}>
                Estudios
              </AppLink>
            </div>
            <div className="hero-growth">
              <svg viewBox="0 0 42 42" aria-hidden="true">
                <path d="M5 35h32v3H5zM9 23h5v10H9zM18.5 15h5v18h-5zM28 8h5v25h-5z" />
                <path d="M8 17.5 18.5 9l8.2 5.7L35 5.8l2 1.9-9.9 10.6-8.4-5.8L9.8 20z" />
              </svg>
              <div>
                <h3>Crece con Cubadata</h3>
                <p>Nos dedicamos a la investigación en opinión pública y estudios de mercado.</p>
              </div>
            </div>
          </div>
          <img className="hero-image" src="/images/page/home/hero.png" alt="Cubadata" />
        </div>
      </section>

      <section className="partners container">
        <div className="alliances-title">
          <svg viewBox="0 0 44 44" aria-hidden="true">
            <path d="M22 4 5 13v4h34v-4L22 4Zm-9 16H8v14h5V20Zm9 0h-5v14h5V20Zm9 0h-5v14h5V20Zm8 17H5v4h34v-4Z" />
          </svg>
          <span>
            Alianzas
            <br />
            académicas
          </span>
        </div>
        <div className="partner-logos">
          <img src="/images/university/san-martin.png" alt="Universidad San Martín de Porres" />
          <img src="/images/university/barcelona.png" alt="Universidad de Barcelona" />
          <img src="/images/university/uam.png" alt="UAM" />
        </div>
      </section>

      <PostShowcase
        eyebrow="Encuestas públicas"
        title="Encuestas públicas de Cubadata"
        posts={encuestaPosts}
        onNavigate={onNavigate}
      />

      <PostShowcase
        eyebrow="Estudios y análisis"
        title="Estudios y análisis públicos"
        posts={estudioPosts}
        onNavigate={onNavigate}
      />

      <section className="cta-section">
        <div className="container">
          <SectionTitle
            eyebrow="Trabaja con Cubadata"
            title="Soluciones para tu estudio, tu reportaje o tu proyecto basado en Cuba."
          />
          <div className="service-cards">
            <ServiceCard image="/images/service/informa.png" eyebrow="Para periodistas" title="Prensa y medios de comunicación">
              Cubadata pone a disposición de periodistas y comunicadores herramientas ágiles para sondear los estados de opinión en la Isla.
            </ServiceCard>
            <ServiceCard image="/images/service/investiga.png" eyebrow="Para estudiosos" title="Universidades y centros de investigación">
              ¿Desarrollas una investigación sobre la actualidad cubana? Accede a datos verificables y validados científicamente.
            </ServiceCard>
            <ServiceCard image="/images/service/proyecta.png" eyebrow="Para implementadores" title="Organizaciones privadas y sociedad civil">
              Con Cubadata puedes determinar quiénes son, dónde están y qué piensan las fuerzas vivas de la sociedad cubana.
            </ServiceCard>
          </div>
        </div>
      </section>

      <section className="what-we-do container">
        <SectionTitle eyebrow="Qué hacemos" title="en Cubadata" />
        <div className="feature-grid">
          {['Encuestas y sondeos', 'Muestras', 'Evaluaciones', 'Análisis'].map((title, index) => (
            <div className="feature-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>
                {[
                  'Levantamiento de encuestas y sondeos.',
                  'Diseño y selección de muestras para encuestas nacionales.',
                  'Evaluaciones de impacto de programas sociales, campañas y productos.',
                  'Análisis y evaluación de Gobierno y gestión pública.',
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-method">
        <div className="container method-grid">
          <div>
            <SectionTitle
              eyebrow="Así trabajamos en Cubadata"
              title="Pilares de nuestro trabajo"
              text="Cubadata surgió tras la dificultad de obtener y aportar información y estadísticas independientes y verificadas en sociedades cerradas como la cubana."
            />
            <div className="pillars">
              {['Seguridad informática', 'Soporte tecnológico', 'Objetividad', 'Ética', 'Mejora continua', 'Soporte teórico'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <img src="/images/service/technology.png" alt="Tecnología Cubadata" />
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <img src="/images/map/cuba.png" alt="Mapa de Cuba" />
          <div className="stat">
            <span>Alcance</span>
            <strong>16 provincias</strong>
          </div>
          <div className="stat">
            <span>Usuarios</span>
            <strong>25,000+ x mes</strong>
          </div>
          <div className="stat">
            <span>Servidores</span>
            <strong>40+ activos</strong>
          </div>
        </div>
      </section>

      <section className="press container">
        <SectionTitle
          eyebrow="Cubadata en los medios de prensa"
          title="Aportamos a periodistas y comunicadores instrumentos para medir la temperatura social y política en Cuba."
        />
        <div className="press-grid">
          {pressItems.map((item) => (
            <a className="press-card" href={item.url} key={item.title} target="_blank" rel="noreferrer">
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <span>{item.outlet}</span>
              <small>{item.domain}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

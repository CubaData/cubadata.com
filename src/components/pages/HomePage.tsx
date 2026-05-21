import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react'
import { getEncuestas, getEstudios } from '../../data'
import { press } from '../../data/siteContent'
import type { Navigate } from '../../types'
import { AppLink } from '../shared/AppLink'
import { PostShowcase } from '../shared/PostShowcase'
import { SectionTitle } from '../shared/SectionTitle'
import { ServiceCard } from '../shared/ServiceCard'
import { loadScript } from '../../utils/loadScript'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faStreetView, 
  faRocket, 
  faChartArea, 
  faHandshake, 
  faCogs, 
  faLock,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons'

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
  const encuestaPosts = getEncuestas().slice(0, 6)
  const estudioPosts = getEstudios().slice(0, 3)
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
      <section
        className="hero-section td-mesh-bg"
        onMouseMove={handleHeroMouseMove}
        ref={heroRef}
        style={{ ...heroStyle, overflow: 'visible' }}
      >
        <div className="container hero-grid" style={{ overflow: 'visible' }}>
          <div className="hero-copy">
            <h1>Cuba cambia, nosotros te mostramos cómo</h1>
            <p>
              En Cubadata generamos datos, información y análisis de la realidad cubana a partir de la
              realización de encuestas digitales.
            </p>
            <div className="hero-actions">
              <AppLink className="hero-button primary" href="/encuestas" onNavigate={onNavigate}>
                Nuestras Encuestas &rsaquo;
              </AppLink>
              <AppLink className="hero-button primary" href="/estudios" onNavigate={onNavigate}>
                Nuestros Estudios &rsaquo;
              </AppLink>
            </div>
          </div>
          <img
            className="hero-image"
            src="/images/page/home/hero.png"
            alt="Cubadata"
            style={{
              transform: 'translate(var(--hero-x), calc(var(--hero-y) + 140px))',
              zIndex: 100,
              position: 'relative',
            }}
          />
        </div>
      </section>

      <div className="partners-bar-wrapper">
        <section className="partners">
          <div className="alliances-title">
            <svg viewBox="0 0 44 44" aria-hidden="true">
              <path d="M22 4 5 13v4h34v-4L22 4Zm-9 16H8v14h5V20Zm9 0h-5v14h5V20Zm9 0h-5v14h5V20Zm8 17H5v4h34v-4Z" />
            </svg>
            <span>
              Alianzas
              <br />
              &nbsp;académicas
            </span>
          </div>
          <div className="partner-logos">
            <img src="/images/university/san-martin.png" alt="Universidad San Martín de Porres" />
            <img src="/images/university/barcelona.png" alt="Universidad de Barcelona" />
            <img src="/images/university/uam.png" alt="UAM" />
          </div>
        </section>
      </div>

      <PostShowcase
        eyebrow=""
        hrefBase="/encuestas"
        title="Encuestas públicas"
        posts={encuestaPosts}
        onNavigate={onNavigate}
      />

      <PostShowcase
        eyebrow=""
        hrefBase="/estudios"
        title="Estudios y análisis"
        posts={estudioPosts}
        onNavigate={onNavigate}
      />

      <section className="cta-section">
        <div className="container">
          <div className="cta-header">
            <h2>Trabaja con Cubadata</h2>
            <p>Soluciones para tu estudio, tu reportaje o tu proyecto basado en Cuba.</p>
          </div>
          <div className="service-cards">
            <ServiceCard 
              image="/images/service/informa.png" 
              eyebrow="Para periodistas" 
              title="Prensa y medios de comunicación"
              ctaText="INFORMA CON CUBADATA"
              href=""
            >
              Cubadata pone a disposición de periodistas y comunicadores herramientas ágiles para sondear los estados de opinión en la Isla.
            </ServiceCard>
            <ServiceCard 
              image="/images/service/investiga.png" 
              eyebrow="Para estudiosos" 
              title="Universidades y centros de investigación"
              ctaText="INVESTIGA CON CUBADATA"
              href=""
            >
              ¿Desarrollas una investigación sobre la actualidad cubana? Accede a datos verificables y validados científicamente.
            </ServiceCard>
            <ServiceCard 
              image="/images/service/proyecta.png" 
              eyebrow="Para implementadores" 
              title="Organizaciones privadas y sociedad civil"
              ctaText="PROYECTA CON CUBADATA"
              href=""
            >
              Con Cubadata puedes determinar quiénes son, dónde están y qué piensan las fuerzas vivas de la sociedad cubana.
            </ServiceCard>
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <div className="container what-we-do-grid">
          <div className="what-we-do-left">
            <div className="what-we-do-illustration">
              <img src="/images/service/technology.png" alt="Tecnología Cubadata" />
            </div>
            <div className="what-we-do-title">
              <h3>Qué hacemos</h3>
              <span className="highlight">en Cubadata</span>
            </div>
          </div>
          <div className="what-we-do-right">
            {[
              { title: 'Encuestas y sondeos', text: 'Levantamiento de encuestas y sondeos.' },
              { title: 'Muestras', text: 'Diseño y selección de muestras para encuestas nacionales.' },
              { title: 'Evaluaciones', text: 'Evaluaciones de impacto de programas sociales, campañas y productos.' },
              { title: 'Análisis', text: 'Análisis y evaluación de Gobierno y gestión pública.' }
            ].map((item, index) => (
              <div className="what-we-do-item" key={index}>
                <div className="item-content">
                  <div className="item-title-row">
                    <span className="item-dash"></span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-method">
        <div className="container">
          <div className="method-content">
            <span className="method-eyebrow">Así trabajamos en Cubadata</span>
            <h2 className="method-title">Pilares de nuestro trabajo</h2>
            <p className="method-description">
              Cubadata surgió tras la dificultad de obtener y aportar información y estadísticas independientes y verificadas en sociedades cerradas como la cubana. Nuestro aporte consiste en la realización de encuestas digitales, tomando como punto de partida aplicaciones de comunicación en línea.
            </p>
            <AppLink className="method-button" href="/quienes-somos" onNavigate={onNavigate}>
              CONOCE MÁS &rsaquo;
            </AppLink>
          </div>

          <div className="pillars-diagram">
            <svg width="0" height="0" style={{ position: 'absolute' }}>
              <defs>
                <linearGradient id="pillarGradient" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#183b9c" />
                  <stop offset="16%" stopColor="#5262a4" />
                  <stop offset="33%" stopColor="#696999" />
                  <stop offset="50%" stopColor="#917485" />
                  <stop offset="66%" stopColor="#cd8164" />
                  <stop offset="83%" stopColor="#d25536" />
                  <stop offset="100%" stopColor="#d44325" />
                </linearGradient>
              </defs>
            </svg>
            <div className="diagram-center">
              <img src="/images/logo/circle-large.png" alt="CU" />
              <div className="orbit orbit-1"></div>
              <div className="orbit orbit-2"></div>
              <div className="orbit orbit-3"></div>
              <div className="orb orb-1"></div>
              <div className="orb orb-1b"></div>
              <div className="orb orb-2"></div>
              <div className="orb orb-2b"></div>
              <div className="orb orb-3"></div>
              <div className="orb orb-3b"></div>
            </div>

            <div className="pillar-item top">
              <div className="pillar-icon">
                <FontAwesomeIcon icon={faStreetView} />
              </div>
              <h3>Objetividad</h3>
              <p>Todos nuestros estudios están basados en evidencia.</p>
            </div>

            <div className="pillar-item right-top">
              <div className="pillar-icon">
                <FontAwesomeIcon icon={faRocket} />
              </div>
              <h3>Mejora continua</h3>
              <p>Nos esforzamos por perfeccionar continuamente nuestras capacidades.</p>
            </div>

            <div className="pillar-item right-bottom">
              <div className="pillar-icon">
                <FontAwesomeIcon icon={faChartArea} />
              </div>
              <h3>Soporte teórico</h3>
              <p>Trabajamos con contenido de instrumentos basados en teoría.</p>
            </div>

            <div className="pillar-item bottom">
              <div className="pillar-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3>Ética</h3>
              <p>Respetamos a los encuestados, desde los principios de consentimiento informado, no maleficencia y justicia.</p>
            </div>

            <div className="pillar-item left-bottom">
              <div className="pillar-icon">
                <FontAwesomeIcon icon={faCogs} />
              </div>
              <h3>Soporte tecnológico</h3>
              <p>Adaptamos las nuevas tecnologías a las circunstancias de la Isla.</p>
            </div>

            <div className="pillar-item left-top">
              <div className="pillar-icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
              <h3>Seguridad informática</h3>
              <p>Utilizamos los estándares de encriptación más modernos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-bg-map">
          <img src="/images/map/cuba.png" alt="Mapa de Cuba" />
        </div>
        <div className="container">
          <div className="stats-header">
            <h2>Una tecnología que se adapta</h2>
            <p>
              Adaptando las nuevas tecnologías a las circunstancias de la Isla, con énfasis en la seguridad informática, 
              llegamos a los ciudadanos de manera directa a través de aplicaciones de comunicación en línea, 
              utilizando los estándares de encriptación más modernos.
            </p>
          </div>
          <div className="stats-cards-wrapper">
            <div className="stats-connecting-line"></div>
            <div className="stats-cards">
              {[
                { label: 'Alcance', value: '16 provincias' },
                { label: 'Usuarios', value: '25,000+ x mes' },
                { label: 'Servidores', value: '40+ activos' }
              ].map((item, index) => (
                <div className="stat-card" key={index}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="press-section container">
        <div className="press-layout">
          <div className="press-header">
            <h2>Cubadata en los medios de prensa</h2>
            <p>
              Aportamos a periodistas y comunicadores instrumentos para medir la temperatura social y política en Cuba.
            </p>
            <a className="press-more-button" href="https://linktr.ee/cubadata" target="_blank" rel="noreferrer">
              VER MÁS &rsaquo;
            </a>
          </div>
          <div className="press-list">
            {press.map((item, index) => (
              <a className="press-item" href={item.url} key={index} target="_blank" rel="noreferrer">
                <div className="press-quote-bg">
                  <FontAwesomeIcon icon={faQuoteLeft} />
                </div>
                <p className="press-headline">{item.title}</p>
                <div className="press-footer">
                  <div className="press-logo-wrapper">
                    <img src={item.image} alt={item.outlet} />
                  </div>
                  <div className="press-meta">
                    <strong>{item.outlet}</strong>
                    <span>{item.domain}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

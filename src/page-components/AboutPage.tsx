import { advisors } from '../data'
import { SectionTitle } from '../components/SectionTitle'

export function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-grid">
          <div>
            <span>Sobre nosotros</span>
            <h1>El origen de Cubadata</h1>
            <p>
              Cubadata surgió cerca del paralelo 38, en Corea del Sur, durante una conferencia sobre cómo obtener
              y aportar información y estadísticas en sociedades cerradas. En ese contexto recurrimos a los
              dispositivos móviles para realizar encuestas digitales voluntarias y verificables.
            </p>
          </div>
          <img src="/images/page/about/hero.png" alt="Equipo Cubadata" />
        </div>
      </section>

      <section className="container team-section">
        <SectionTitle title="Equipo directivo" />
        <div className="team-grid directors">
          {[
            ['Pablo Díaz Espí', 'Director general'],
            ['Salvi Pascual', 'Director técnico'],
            ['Karla Velásquez Figuera', 'Directora de proyectos'],
            ['Arístides A. Vara Horna', 'Director de investigaciones'],
          ].map(([name, role]) => (
            <article className="person-card director-card" key={name}>
              <img src="/images/logo/circle.png" alt="" />
              <h3>{name}</h3>
              <p>{role}</p>
              <span>Linkedin</span>
              <span>Twitter</span>
            </article>
          ))}
        </div>
      </section>

      <section className="container team-section">
        <SectionTitle title="Grupo consultor de Cuba Data" />
        <div className="team-grid consultants">
          {[
            ['Carlos Aníbal Alonso', 'Coordinador de publicaciones', '/images/person/carlos.jpg'],
            ['Hilda Landrove Torres', 'Consultora académica', '/images/person/hilda.png'],
          ].map(([name, role, image]) => (
            <article className="person-card" key={name}>
              <img src={image} alt="" />
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container team-section">
        <SectionTitle title="Consejo asesor académico de Cubadata" />
        <div className="team-grid">
          {advisors.map(([name, role, image]) => (
            <article className="person-card" key={name}>
              <img src={image} alt="" />
              <h3>{name}</h3>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-text container">
        <SectionTitle title="Cómo trabajamos" />
        <p>
          Para obtener información válida, cada encuesta se basa en constructos; es decir, en escalas producto de
          la combinación lineal de varios ítems o preguntas, que a su vez actúan como indicadores. El uso de
          constructos facilita el control del error de medición, además que garantiza la validez de las variables
          estudiadas.
        </p>
      </section>

      <section className="about-links container">
        <div>
          <h3>Escríbenos</h3>
          <p>Ponte en contacto con el equipo de Cubadata.</p>
        </div>
        <div>
          <h3>Servicios</h3>
          <p>Conoce los servicios de Cubadata.</p>
        </div>
      </section>
    </main>
  )
}

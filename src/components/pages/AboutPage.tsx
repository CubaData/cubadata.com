import { advisors } from '../../data/siteContent'
import { SectionTitle } from '../shared/SectionTitle'

export function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container about-grid">
          <div className="about-copy">
            <span className="eyebrow">SOBRE NOSOTROS</span>
            <h1>
              El origen de <span className="highlight">Cubadata</span>
            </h1>
            <p>
              Cubadata surgió cerca del paralelo 38, en Corea del Sur, durante una conferencia sobre
              cómo obtener y aportar información y estadísticas en sociedades cerradas. Debido a las
              restricciones y la censura de instituciones oficiales, así como al control de los
              contenidos de internet y del correo electrónico, realizar estudios poblacionales
              independientes es extremadamente difícil en Cuba, donde no existe ninguna consultora
              desligada del Gobierno. En ese contexto, aprovechando el desarrollo de las nuevas
              tecnologías y de la seguridad digital, en Cubadata recurrimos a los dispositivos
              móviles, a través de los cuales contactamos a decenas de miles de usuarios de
              aplicaciones de comunicación, para realizar encuestas digitales voluntarias y
              verificables.
            </p>
          </div>
        
            <img src="/images/logo/circle-large.png" alt="Equipo Cubadata" />
        </div>
      </section>

      <div className="directors-wrapper">
        <section className="container team-section">
          <SectionTitle title="Equipo directivo" />
          <div className="team-grid directors">
            {[
              ['Pablo Díaz Espí', 'Director general', '/images/person/pablo.jpg'],
              ['Salvi Pascual', 'Director técnico', '/images/person/salvi.png'],
              ['Karla Velásquez Figuera', 'Directora de proyectos', '/images/person/karla.jpg'],
              ['Arístides A. Vara Horna', 'Director de investigaciones', '/images/person/aristides.jpeg'],
            ].map(([name, role, image]) => (
              <article className="person-card director-card" key={name}>
                <div className="person-image">
                  <img src={image} alt={name} />
                </div>
                <h3>{name}</h3>
                <p>{role}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="container team-split-section">
        <div className="section-header">
          <h4>Grupo consultor de Cuba Data</h4>
        </div>
        <div className="section-content">
          {[
            ['Carlos Aníbal Alonso', 'Coordinador de publicaciones', '/images/person/carlos.jpg'],
            ['Hilda Landrove Torres', 'Consultora académica', '/images/person/hilda.png'],
          ].map(([name, role, image]) => (
            <article className="person-row-card" key={name}>
              <img src={image} alt={name} />
              <div className="person-info">
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container team-split-section">
        <div className="section-header">
          <h4>Consejo asesor académico de Cubadata</h4>
        </div>
        <div className="section-content">
          {advisors.map(([name, role, image]) => (
            <article className="person-row-card" key={name}>
              <img src={image} alt={name} />
              <div className="person-info">
                <h3>{name}</h3>
                <p>{role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work-text container border-bottom">
        <SectionTitle title="Cómo trabajamos" />
        <p>
          Para obtener información válida, cada encuesta se basa en constructos; es decir, en escalas producto de
          la combinación lineal de varios ítems o preguntas, que a su vez actúan como indicadores. El uso de
          constructos facilita el control del error de medición, además que garantiza la validez de las variables
          estudiadas.
        </p>
      </section>

      <section className="work-text container">
        <SectionTitle title="Principios éticos" />
        <p>
          Con el compromiso de garantizar la integridad, seguridad y confidencialidad de los datos que recopila, Cubadata establece los siguientes principios éticos en su práctica:
        </p> 
          <br /><br />
          <h3>Respeto por la privacidad y anonimato</h3>
          <br /><br />

          <p>Todos los datos recolectados y distribuidos por Cubadata se mantienen en estricta anonimización, garantizando que no hay manera de identificar a los individuos a partir de los datos recolectados. Este compromiso se extiende a todos los aspectos de nuestra investigación y distribución de datos.</p>
          <br /><br />
          <h3>Consentimiento informado</h3>
          <br /><br />

          <p>Todo participante en nuestras encuestas proporciona su consentimiento voluntario e informado antes de compartir cualquier información. Este consentimiento abarca tanto la recolección inicial como cualquier uso futuro de sus datos con el propósito de investigaciones que reflejen la realidad cubana.</p>
          <br /><br />
          <h3>Integridad de los datos</h3>
          <br /><br />

          <p>Cubadata se compromete a no recolectar, almacenar o distribuir ningún dato o información sensible que pueda comprometer la integridad y seguridad de los participantes. Nos aseguramos de que los datos no contengan detalles como registros médicos, información financiera o cualquier otro tipo de información personal delicada.</p>
          <br /><br />

          <h3>Transparencia y uso público</h3>
          <br /><br />

          <p>Los conjuntos de datos que Cubadata recopila y distribuye están diseñados para ser de uso público. Promovemos la investigación y el análisis transparente, asegurándonos de que la información sea accesible para quienes buscan comprender y abordar los diversos aspectos de la realidad cubana.</p>
          <br /><br />

          <h3>Seguridad y minimización de riesgos</h3>
          <br /><br />

          <p>Estamos comprometidos en garantizar que no exista un riesgo significativo de reidentificación de los individuos a partir de nuestros datos secundarios. Implementamos protocolos y tecnologías avanzadas para salvaguardar todos los datos y minimizar cualquier potencial riesgo para nuestros participantes.</p>
          <br /><br />

          <p className="text-center"> * &nbsp; &nbsp; * &nbsp; &nbsp; *</p>
          <br /><br />
        <p>
          Cubadata se adhiere a estos principios éticos en todos sus proyectos y actividades. Estamos comprometidos con la protección y seguridad de nuestros participantes y con la promoción de investigaciones éticas y responsables que contribuyan al entendimiento y avance de la sociedad cubana.
        </p>
      </section>  
    </main>
  )
}

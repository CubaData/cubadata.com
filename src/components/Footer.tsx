import type { Navigate } from '../types'
import { AppLink } from './AppLink'

type FooterProps = {
  onNavigate?: Navigate
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/images/logo/white.png" alt="CubaData" />
          <p>© CubaData. Todos los derechos reservados.</p>
        </div>
        <div>
          <h3>Publicaciones</h3>
          <AppLink href="/encuestas" onNavigate={onNavigate}>
            Encuestas
          </AppLink>
          <AppLink href="/estudios" onNavigate={onNavigate}>
            Estudios
          </AppLink>
        </div>
        <div>
          <h3>Redes Sociales</h3>
          <a href="https://www.facebook.com/cubadatacom" target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/cubadata" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

import type { Navigate } from '../../types'
import { AppLink } from './AppLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  // faFacebookF,
  // faInstagram,
  // faTwitter,
  // faLinkedinIn,
  faRobot,
} from '@fortawesome/free-solid-svg-icons'

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
          <h3>Contacto</h3>
          <div className="footer-links">
            <a href="mailto:contact@cubadata.com" className="footer-link-item">
              <svg viewBox="0 0 24 24" className="footer-icon" aria-hidden="true">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>contact@cubadata.com</span>
            </a>
            <a href="https://wa.me/+13054571656" target="_blank" rel="noreferrer" className="footer-link-item">
              <svg viewBox="0 0 24 24" className="footer-icon" aria-hidden="true">
                <path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.183 8.183 0 012.41 5.82c0 4.52-3.67 8.19-8.19 8.19-1.53 0-3.04-.43-4.35-1.24l-.31-.19-3.24.85.87-3.16-.21-.33a8.17 8.17 0 01-1.25-4.33c0-4.52 3.67-8.19 8.19-8.19m-3.53 4.63c-.19-.43-.4-.44-.58-.45-.15 0-.32-.01-.5-.01-.17 0-.45.07-.69.32-.23.26-.9.88-.9 2.15 0 1.27.92 2.5 1.05 2.68.12.17 1.82 2.78 4.41 3.9.61.27 1.09.43 1.47.55.62.2 1.18.17 1.63.1.5-.07 1.53-.63 1.74-1.23.21-.6.21-1.12.15-1.23-.07-.11-.23-.17-.5-.3s-.84-.41-1.01-.47c-.17-.06-.3-.1-.43.1-.13.19-.51.64-.63.78-.12.14-.24.16-.51.03-.26-.13-1.11-.41-2.11-1.3-.78-.7-1.31-1.56-1.46-1.83-.15-.27-.02-.41.12-.55.12-.12.26-.31.4-.46.13-.15.18-.25.26-.42.09-.17.04-.32-.02-.45-.06-.13-.51-1.23-.7-1.68z" />
              </svg>
              <span>+1 305 457 1656</span>
            </a>
            <a href="https://ai.cubadata.com" target="_blank" rel="noreferrer" className="footer-link-item">
              <FontAwesomeIcon icon={faRobot} className="footer-icon" />
              <span>Cubadata AI</span>
            </a>
          </div>
        </div>
        <div>
          <h3>Redes Sociales</h3>
          <div className="footer-links">
            <a href="https://www.facebook.com/cubadata" target="_blank" rel="noreferrer" className="footer-link-item">
              <svg viewBox="0 0 24 24" className="footer-icon" aria-hidden="true">
                <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/cuba.data/" target="_blank" rel="noreferrer" className="footer-link-item">
              <svg viewBox="0 0 24 24" className="footer-icon" aria-hidden="true">
                <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a href="https://x.com/realcubadata" target="_blank" rel="noreferrer" className="footer-link-item">
              <svg viewBox="0 0 24 24" className="footer-icon" aria-hidden="true">
                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>X / Twitter</span>
            </a>
            <a href="https://www.linkedin.com/company/cubadata" target="_blank" rel="noreferrer" className="footer-link-item">
              <svg viewBox="0 0 24 24" className="footer-icon" aria-hidden="true">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

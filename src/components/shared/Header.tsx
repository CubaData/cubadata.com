import { useState, useEffect } from 'react'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

const navItems = [
  { label: 'Encuestas', href: '/encuestas' },
  { label: 'Estudios', href: '/estudios' },
  { label: 'Sobre nosotros', href: '/quienes-somos' },
  { label: 'Principios éticos', href: '/principios-eticos' },
  { label: 'Contacto', href: '/contacto' },
  { label: '🤖 AI', href: 'https://ai.datacuba.com/', target: '_blank' },
]

type HeaderProps = {
  activePage: string
  onNavigate?: Navigate
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <header className={`site-header${activePage === '/' ? ' home-header' : ''}`}>
      <div className="header-inner">
        <AppLink className="brand" href="/" onNavigate={onNavigate}>
          <img src={activePage === '/' ? '/images/logo/white.png' : '/images/logo/color.png'} alt="Cubadata" />
        </AppLink>
        <nav className="desktop-nav" aria-label="Principal">
          {navItems.map((item) => (
            <AppLink
              className={activePage === item.href ? 'active' : undefined}
              href={item.href}
              key={item.label}
              onNavigate={onNavigate}
              target={item.target}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>
        <button className="menu-toggle" onClick={() => setOpen((value) => !value)} aria-label="Abrir menú">
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Principal móvil">
          <div className="mobile-nav-header">
            <AppLink className="brand" href="/" onNavigate={() => setOpen(false)}>
              <img src="/images/logo/white.png" alt="Cubadata" />
            </AppLink>
            <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
            </button>
          </div>
          <div className="mobile-nav-inner">
            {navItems.map((item) => (
              <AppLink
                className={activePage === item.href ? 'active' : undefined}
                href={item.href}
                key={item.label}
                onNavigate={(href) => {
                  setOpen(false)
                  onNavigate?.(href)
                }}
                target={item.target}
              >
                {item.label}
              </AppLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
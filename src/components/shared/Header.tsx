import { useState } from 'react'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

const navItems = [
  { label: 'Encuestas', href: '/encuestas' },
  { label: 'Estudios', href: '/estudios' },
  { label: 'Sobre nosotros', href: '/quienes-somos' },
  { label: 'Principios éticos', href: '#' },
]

type HeaderProps = {
  activePage: string
  onNavigate?: Navigate
}

export function Header({ activePage, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false)

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
          {navItems.map((item) => (
            <AppLink href={item.href} key={item.label} onNavigate={onNavigate}>
              {item.label}
            </AppLink>
          ))}
        </nav>
      )}
    </header>
  )
}
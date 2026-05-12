import type { ReactNode } from 'react'
import type { Navigate } from '../../types'

type AppLinkProps = {
  children: ReactNode
  className?: string
  href: string
  onNavigate?: Navigate
  target?: string
}

export function AppLink({ children, className, href, onNavigate, target }: AppLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={(event) => {
        if (!onNavigate || !href.startsWith('/') || target === '_blank') return
        event.preventDefault()
        onNavigate(href)
      }}
    >
      {children}
    </a>
  )
}

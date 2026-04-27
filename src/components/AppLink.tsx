import type { ReactNode } from 'react'
import type { Navigate } from '../types'

type AppLinkProps = {
  children: ReactNode
  className?: string
  href: string
  onNavigate?: Navigate
}

export function AppLink({ children, className, href, onNavigate }: AppLinkProps) {
  return (
    <a
      className={className}
      href={href}
      onClick={(event) => {
        if (!onNavigate || !href.startsWith('/')) return
        event.preventDefault()
        onNavigate(href)
      }}
    >
      {children}
    </a>
  )
}

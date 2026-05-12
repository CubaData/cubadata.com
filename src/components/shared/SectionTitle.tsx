import type { ReactNode } from 'react'

type SectionTitleProps = {
  eyebrow?: string
  title: string
  text?: string
  action?: ReactNode
}

export function SectionTitle({ eyebrow, title, text, action }: SectionTitleProps) {
  return (
    <div className="section-title-container">
      <div className="section-title">
        {eyebrow && <span>{eyebrow}</span>}
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
      {action && <div className="section-title-action">{action}</div>}
    </div>
  )
}

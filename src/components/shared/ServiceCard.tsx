import type { ReactNode } from 'react'

type ServiceCardProps = {
  children: ReactNode
  eyebrow: string
  image: string
  title: string
  ctaText: string
  href: string
}

export function ServiceCard({ children, eyebrow, image, title, ctaText, href }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card-content">
        <span className="service-card-eyebrow">{eyebrow}</span>
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{children}</p>
        <div className="service-card-cta">
          <span className="cta-bar"></span>
          <span>{ctaText}</span>
        </div>
      </div>
      <div className="service-card-image">
        <img src={image} alt="" />
      </div>
    </article>
  )
}

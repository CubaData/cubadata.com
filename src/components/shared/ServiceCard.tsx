import type { ReactNode } from 'react'

type ServiceCardProps = {
  children: ReactNode
  eyebrow: string
  image: string
  title: string
}

export function ServiceCard({ children, eyebrow, image, title }: ServiceCardProps) {
  return (
    <article className="service-card">
      <img src={image} alt="" />
      <span>{eyebrow}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  )
}

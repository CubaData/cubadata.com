import type { Encuesta, Estudio } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from './AppLink'

type PostCardProps = {
  href: string
  post: Encuesta | Estudio
  onNavigate?: Navigate
}

export function PostCard({ href, post, onNavigate }: PostCardProps) {
  const defaultImage = '/images/post/cubadata_default.jpg'

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget
    target.src = defaultImage
    target.onerror = null 
  }

  return (
    <article className="post-card">
      <AppLink className="post-image" href={href} onNavigate={onNavigate}>
        <img 
          src={post.image || defaultImage} 
          alt="" 
          referrerPolicy="no-referrer"
          onError={handleImageError} 
        />
      </AppLink>
      <div className="post-card-body">
        <h3>
          <AppLink href={href} onNavigate={onNavigate}>
            {post.title}
          </AppLink>
        </h3>
        <p>{post.excerpt}</p>
        <time>
          {'start_date' in post ? `${post.start_date} — ${post.end_date}` : post.date}
        </time>
      </div>
    </article>
  )
}
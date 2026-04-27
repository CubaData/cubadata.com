import type { Publication } from '../../data'
import type { Navigate } from '../../types'
import { publicationPath } from '../../utils/publicationPath'
import { AppLink } from './AppLink'

type PostCardProps = {
  post: Publication
  onNavigate?: Navigate
}

export function PostCard({ post, onNavigate }: PostCardProps) {
  const href = publicationPath(post)

  return (
    <article className="post-card">
      <AppLink className="post-image" href={href} onNavigate={onNavigate}>
        <img src={post.image} alt="" />
      </AppLink>
      <div className="post-card-body">
        <h3>
          <AppLink href={href} onNavigate={onNavigate}>
            {post.title}
          </AppLink>
        </h3>
        <p>{post.excerpt}</p>
        <time>{post.date}</time>
      </div>
    </article>
  )
}

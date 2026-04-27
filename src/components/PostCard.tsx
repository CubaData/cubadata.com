import type { Post } from '../data'
import type { Navigate } from '../types'
import { AppLink } from './AppLink'

type PostCardProps = {
  post: Post
  onNavigate?: Navigate
}

export function PostCard({ post, onNavigate }: PostCardProps) {
  return (
    <article className="post-card">
      <AppLink className="post-image" href={`/item/${post.slug}`} onNavigate={onNavigate}>
        <img src={post.image} alt="" />
      </AppLink>
      <div className="post-card-body">
        <h3>
          <AppLink href={`/item/${post.slug}`} onNavigate={onNavigate}>
            {post.title}
          </AppLink>
        </h3>
        <p>{post.excerpt}</p>
        <time>{post.date}</time>
      </div>
    </article>
  )
}

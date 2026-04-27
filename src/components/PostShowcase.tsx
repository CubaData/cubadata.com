import type { Post } from '../data'
import type { Navigate } from '../types'
import { PostCard } from './PostCard'
import { SectionTitle } from './SectionTitle'

type PostShowcaseProps = {
  eyebrow: string
  onNavigate?: Navigate
  posts: Post[]
  title: string
}

export function PostShowcase({ eyebrow, onNavigate, posts, title }: PostShowcaseProps) {
  return (
    <section className="post-showcase container">
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}

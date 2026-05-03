import type { Encuesta, Estudio } from '../../data'
import type { Navigate } from '../../types'
import { PostCard } from './PostCard'
import { SectionTitle } from './SectionTitle'

type PostShowcaseProps = {
  hrefBase: string
  eyebrow: string
  onNavigate?: Navigate
  posts: Array<Encuesta | Estudio>
  title: string
}

export function PostShowcase({ eyebrow, hrefBase, onNavigate, posts, title }: PostShowcaseProps) {
  return (
    <section className="post-showcase container">
      <SectionTitle eyebrow={eyebrow} title={title} />
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard href={`${hrefBase}/${post.slug}`} key={post.slug} post={post} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}

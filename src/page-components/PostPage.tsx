import type { Post } from '../data'
import type { Navigate } from '../types'
import { Sidebar } from '../components/Sidebar'

type PostPageProps = {
  post: Post
  onNavigate?: Navigate
}

export function PostPage({ post, onNavigate }: PostPageProps) {
  return (
    <main className="post-page">
      <div className="container two-column">
        <article className="single-post">
          <time>{post.date}</time>
          <h1>{post.title}</h1>
          <div className="share">Compartir</div>
          {post.cover && <img className="single-cover" src={post.cover} alt="" />}
          {(post.body ?? [post.excerpt]).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <Sidebar onNavigate={onNavigate} />
      </div>
    </main>
  )
}

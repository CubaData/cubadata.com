import { getEstudioBySlug } from '../../data'
import type { Navigate } from '../../types'
import { AppLink } from '../shared/AppLink'
import { Sidebar } from '../shared/Sidebar'

type EstudioPageProps = {
  slug: string
  onNavigate?: Navigate
}

export function EstudioPage({ slug, onNavigate }: EstudioPageProps) {
  const estudio = getEstudioBySlug(slug)

  if (!estudio) return null

  return (
    <main className="post-page study-page">
      <div className="container">
        <header className="post-header">
          <div className="post-header-content">
            <div className="date-with-bar">
              <span className="red-vertical-bar"></span>
              <time>{estudio.date}</time>
            </div>
            <h1>{estudio.title}</h1>
          </div>
          <div className="post-header-image">
            <img src={estudio.image} alt={estudio.title} />
          </div>
        </header>

        <div className="two-column">
          <article className="single-post study-post">
            <div className="social-share">
              <button className="share-btn share-main">
                <ShareIcon />
                Compartir
              </button>
              <button className="share-btn facebook">
                <FacebookIcon />
                Facebook
              </button>
              <button className="share-btn twitter">
                <TwitterIcon />
                X
              </button>
              <button className="share-btn pinterest">
                <PinterestIcon />
                Pinterest
              </button>
              <button className="share-btn whatsapp">
                <WhatsappIcon />
                WhatsApp
              </button>
            </div>

            {estudio.summary.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}

            {estudio.pdf && (
              <div className="pdf-download-section">
                <div className="pdf-preview-card">
                  <img src={estudio.image} alt="PDF Preview" />
                  <AppLink className="pdf-download-link" href={estudio.pdf} onNavigate={onNavigate}>
                    <DownloadIcon />
                    Descargar PDF
                  </AppLink>
                </div>
              </div>
            )}
          </article>
          <Sidebar onNavigate={onNavigate} />
        </div>
      </div>
    </main>
  )
}

const ShareIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/></svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
)

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.27 2.67 7.9 6.47 9.35-.08-.8-.15-2.02.03-2.89.17-.75 1.09-4.63 1.09-4.63s-.27-.55-.27-1.37c0-1.28.74-2.24 1.67-2.24.79 0 1.17.59 1.17 1.3 0 .79-.5 1.98-.76 3.08-.22.92.46 1.67 1.37 1.67 1.64 0 2.91-1.73 2.91-4.22 0-2.21-1.59-3.75-3.85-3.75-2.62 0-4.16 1.97-4.16 4 0 .79.31 1.65.69 2.12.08.09.09.18.06.27-.07.29-.22.9-.25.99-.04.15-.13.18-.3.11-1.1-.51-1.78-2.12-1.78-3.41 0-2.77 2.01-5.32 5.81-5.32 3.05 0 5.42 2.17 5.42 5.08 0 3.03-1.91 5.49-4.56 5.49-.89 0-1.73-.46-2.01-.99l-.55 2.08c-.2 1.3-.75 2.93-1.12 3.53C9.36 21.8 10.65 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
)

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12.031 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.333 4.993L2 22l5.135-1.348a9.921 9.921 0 004.887 1.28h.004c5.506 0 9.99-4.478 9.99-9.985 0-2.667-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.031 2zM6.523 17.141l-.313-.497a8.442 8.442 0 01-1.293-4.66c.002-4.669 3.806-8.469 8.48-8.469 2.262 0 4.39.882 5.99 2.484a8.423 8.423 0 012.481 5.99c-.002 4.67-3.806 8.471-8.474 8.471h-.003a8.423 8.423 0 01-4.305-1.185l-.309-.184-3.206.841.853-3.125z"/></svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/></svg>
)

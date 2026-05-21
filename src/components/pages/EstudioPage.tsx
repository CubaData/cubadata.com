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

  const handleShare = (platform: 'main' | 'facebook' | 'twitter' | 'pinterest' | 'whatsapp') => {
    const url = window.location.href
    const title = estudio.title

    switch (platform) {
      case 'main':
        if (navigator.share) {
          navigator.share({ title, url }).catch(console.error)
        } else {
          navigator.clipboard.writeText(url)
          alert('Enlace copiado al portapapeles')
        }
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer')
        break
      case 'pinterest':
        const media = estudio.image ? (estudio.image.startsWith('http') ? estudio.image : window.location.origin + estudio.image) : ''
        window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer')
        break
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`, '_blank', 'noopener,noreferrer')
        break
    }
  }

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
              <button className="share-btn share-main" onClick={() => handleShare('main')}>
                <ShareIcon />
                Compartir
              </button>
              <button className="share-btn facebook" onClick={() => handleShare('facebook')}>
                <FacebookIcon />
              </button>
              <button className="share-btn twitter" onClick={() => handleShare('twitter')}>
                <TwitterIcon />
              </button>
              <button className="share-btn pinterest" onClick={() => handleShare('pinterest')}>
                <PinterestIcon />
              </button>
              <button className="share-btn whatsapp" onClick={() => handleShare('whatsapp')}>
                <WhatsappIcon />
              </button>
            </div>

            {estudio.authors && estudio.authors.length > 0 && (
              <div className="post-metadata">
                <p>Autores: <strong>{estudio.authors.join(', ')}</strong></p>
                {estudio.serie && <p>Serie: <strong>{estudio.serie}</strong></p>}
                {estudio.isbn && <p>ISBN: <strong>{estudio.isbn}</strong></p>}
              </div>
            )}

            {estudio.summary.length > 0 ? (
              estudio.summary.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))
            ) : (
              estudio.excerpt && <p>{estudio.excerpt}</p>
            )}

            {estudio.pdf && (
              <AppLink className="pdf-download-button" href={estudio.pdf} onNavigate={onNavigate}>
                <DownloadIcon />
                Descargar PDF
              </AppLink>
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
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.394 0 12.03c0 2.12.553 4.189 1.606 6.006L0 24l6.132-1.608a11.83 11.83 0 005.915 1.572h.004c6.632 0 12.032-5.4 12.035-12.036a11.83 11.83 0 00-3.529-8.51"/></svg>
)

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/></svg>
)

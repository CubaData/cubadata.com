const scriptLoaders = new Map<string, Promise<void>>()

export function loadScript(src: string) {
  const existingLoader = scriptLoaders.get(src)
  if (existingLoader) return existingLoader

  const loader = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)
    if (existing?.dataset.loaded === 'true') {
      resolve()
      return
    }

    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      existing.addEventListener('error', () => reject(new Error(`Could not load ${src}`)), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = () => {
      script.dataset.loaded = 'true'
      resolve()
    }
    script.onerror = () => reject(new Error(`Could not load ${src}`))
    document.head.appendChild(script)
  })

  scriptLoaders.set(src, loader)
  return loader
}

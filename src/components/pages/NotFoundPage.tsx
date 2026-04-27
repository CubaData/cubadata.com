export function NotFoundPage() {
  return (
    <main className="not-found container">
      <h1>Página no encontrada</h1>
      <p>La página solicitada no existe en esta versión estática.</p>
      <a className="not-found-link" href="/">
        Volver al inicio
      </a>
    </main>
  )
}

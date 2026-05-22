export function formatDateEs(iso: string | null): string
{
  if (!iso) return ''
  if (iso.length === 7) {
    const normalized = `${iso}-01T12:00:00`
    const date = new Date(normalized)
    if (Number.isNaN(date.getTime())) return iso
    return date.toLocaleDateString('es', { month: 'long', year: 'numeric' })
  }
  const normalized = iso.length === 10 ? `${iso}T12:00:00` : iso
  const date = new Date(normalized)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
}

export function formatTextAsParagraphs(text: string | null): string[]
{
  if(text == null || text == '') return []
  return text.replace('\n\n', '\n').split('\n').filter(Boolean);
}
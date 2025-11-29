export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + "..."
}

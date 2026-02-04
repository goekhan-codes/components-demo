/**
 * JS-Module (Tag: Module):
 * - Jede Datei ist (in Vite) ein ES-Modul.
 * - Wir können "named exports" und "default exports" nutzen.
 *
 * Best Practice (didaktisch):
 * - Named exports: gut, wenn eine Datei mehrere Dinge exportiert.
 * - Default export: praktisch, wenn die Datei genau "eine Sache" liefert.
 */

// Named export: kann mit { toTitleCase } importiert werden.
export function toTitleCase(value) {
  return String(value)
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

// Default export: kann mit frei wählbarem Namen importiert werden.
export default function formatGreeting(name) {
  const safe = toTitleCase(name || 'du')
  return `Hallo, ${safe}!`
}

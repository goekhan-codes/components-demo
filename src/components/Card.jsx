/**
 * Card = Containment-Beispiel.
 *
 * Konzept: Containment ("Einschließen")
 * - Die Card weiß vorher NICHT, welche Kinder sie bekommt.
 * - Alles zwischen <Card> ... </Card> landet als props.children hier.
 *
 * Vorteil:
 * - Card ist generisch und wiederverwendbar.
 */
function Card({ title, children, footer }) {
  return (
    <div className="card">
      {title ? <h3 className="card__title">{title}</h3> : null}
      <div className="card__content">{children}</div>
      {footer ? <div className="card__footer">{footer}</div> : null}
    </div>
  )
}

export default Card

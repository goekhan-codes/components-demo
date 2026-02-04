/**
 * Eine kleine "Section"-Komponente.
 *
 * Konzept: Komponenten
 * - Komponenten sind Funktionen (oder Klassen), die JSX zurückgeben.
 * - Props sind Parameter: Section({ title, children })
 *
 * Didaktik: Diese Komponente ist bewusst simpel.
 */
function Section({ title, subtitle, children }) {
  return (
    <section className="section">
      <header className="section__header">
        <h2 className="section__title">{title}</h2>
        {subtitle ? <p className="section__subtitle">{subtitle}</p> : null}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}

export default Section

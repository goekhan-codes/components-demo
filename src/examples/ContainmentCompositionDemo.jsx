import Card from '../components/Card'
import SplitPane from '../components/SplitPane'
import CodeBlock from '../components/CodeBlock'

/**
 * Containment & Composition
 *
 * Containment:
 * - Eine Komponente ist eine "Box" und rendert {children}.
 * - Die Kinder sind völlig frei.
 *
 * Composition:
 * - UI wird aus Komponenten zusammengebaut.
 * - Hier zeigen wir zusätzlich "Slots" (left/right) als Props.
 */
function ContainmentCompositionDemo() {
  const left = (
    <Card title="Links (Slot)" footer={<span className="hint">als Prop: left</span>}>
      <p>
        Dieser Block wird als <code>left</code>-Prop in <code>SplitPane</code> übergeben.
      </p>
    </Card>
  )

  const right = (
    <Card title="Rechts (Slot)" footer={<span className="hint">als Prop: right</span>}>
      <p>
        Dieser Block wird als <code>right</code>-Prop in <code>SplitPane</code> übergeben.
      </p>
    </Card>
  )

  return (
    <div className="stack">
      <Card title="Containment mit children">
        <Card
          title="Ich bin eine Card in einer Card"
          footer={<span className="hint">children = alles zwischen den Tags</span>}
        >
          <p>
            Das hier ist Inhalt, der von außen "hineingesteckt" wurde.
            Die Card kennt den Inhalt vorher nicht.
          </p>
        </Card>
        <CodeBlock>{`function Card({ children }) {
  return <div className="card">{children}</div>
}

<Card>
  <p>Beliebiger Inhalt</p>
</Card>`}</CodeBlock>
      </Card>

      <Card title="Composition mit Slots (left/right)">
        <SplitPane left={left} right={right} />
        <CodeBlock>{`function SplitPane({ left, right }) {
  return (
    <div>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

<SplitPane left={<Left />} right={<Right />} />`}</CodeBlock>
      </Card>
    </div>
  )
}

export default ContainmentCompositionDemo

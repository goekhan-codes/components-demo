/**
 * SplitPane = Composition-Beispiel ("Slots").
 *
 * Konzept: Composition ("Zusammensetzen")
 * - Wir setzen UI aus kleineren Komponenten/Elementen zusammen.
 * - Hier: zwei "Plätze" (left/right) werden als Props übergeben.
 *
 * Unterschied zu Containment:
 * - Containment nutzt meist children (eine große "Box").
 * - SplitPane hat mehrere "Löcher" (Slots) => eigene Props.
 */
function SplitPane({ left, right }) {
  return (
    <div className="split">
      <div className="split__pane">{left}</div>
      <div className="split__pane">{right}</div>
    </div>
  )
}

export default SplitPane

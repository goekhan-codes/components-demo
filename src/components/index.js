// Re-Exports (didaktisch):
// Statt viele relative Pfade zu importieren, kann man zentrale Exports nutzen.
// Beispiel:
//   import { Card, Section } from './components'
//
// Achtung (Best Practice): Nicht übertreiben – bei kleinen Projekten ist es optional.

export { default as Section } from './Section'
export { default as Card } from './Card'
export { default as SplitPane } from './SplitPane'
export { default as CodeBlock } from './CodeBlock'

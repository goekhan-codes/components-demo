/**
 * CodeBlock: nur UI für Code-Snippets.
 *
 * Best Practice:
 * - UI-Komponenten möglichst "dumm" halten: keine Business-Logik,
 *   nur Darstellung.
 */
function CodeBlock({ children }) {
  return (
    <pre className="code" aria-label="Codebeispiel">
      <code>{children}</code>
    </pre>
  )
}

export default CodeBlock

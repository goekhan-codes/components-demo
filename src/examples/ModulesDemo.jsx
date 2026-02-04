import Card from '../components/Card'
import CodeBlock from '../components/CodeBlock'

// Default export: Name ist frei wählbar beim Import.
import formatGreeting from '../utils/text'

// Named export: Name muss stimmen (oder via "as" umbenennen).
import { toTitleCase } from '../utils/text'

/**
 * Module (ESM)
 *
 * Ziel:
 * - Zeigen, wie import/export in React-Projekten funktioniert.
 * - Unterschied Default Export vs Named Export.
 */
function ModulesDemo() {
  const rawName = '  niclas aaron  '

  return (
    <div className="stack">
      <Card title="Default Export vs. Named Export">
        <p>
          <strong>Input:</strong> <code>{JSON.stringify(rawName)}</code>
        </p>
        <p>
          <strong>Named:</strong> <code>toTitleCase</code> →{' '}
          <span className="pill">{toTitleCase(rawName)}</span>
        </p>
        <p>
          <strong>Default:</strong> <code>formatGreeting</code> →{' '}
          <span className="pill">{formatGreeting(rawName)}</span>
        </p>

        <CodeBlock>{`// Default export
import formatGreeting from '../utils/text'

// Named export
import { toTitleCase } from '../utils/text'`}</CodeBlock>
      </Card>
    </div>
  )
}

export default ModulesDemo

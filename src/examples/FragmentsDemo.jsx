import { Fragment } from "react";
import Card from "../components/Card";
import CodeBlock from "../components/CodeBlock";

/**
 * Fragmente (Fragments)
 *
 * Problem:
 * - Eine Komponente muss genau EIN "Root"-Element zurückgeben.
 *
 * Lösung:
 * - Fragment gruppiert mehrere Elemente, ohne extra DOM-Wrapper zu erzeugen.
 * - Kurzschreibweise: <> ... </>
 * - Wenn du z. B. in einer Liste einen key brauchst, nutze <Fragment key={...}>.
 */
function FragmentsDemo() {
  const posts = [
    {
      id: "a",
      title: "Post A",
      body: "Fragmente verhindern unnötige Wrapper.",
    },
    {
      id: "b",
      title: "Post B",
      body: "Mit <Fragment key> kannst du in map() keys setzen.",
    },
  ];

  return (
    <div className="stack">
      <Card
        title="1) Fragment als Root ohne Wrapper"
        footer={
          <span className="hint">
            Im DOM entsteht kein zusätzliches &lt;div&gt;.
          </span>
        }
      >
        {/*
          Hier ist das Fragment das Root-Element.
          Vorteil: Wir müssen KEIN "unnötiges" <div> einziehen.
        */}
        <>
          <p>
            <strong>Element 1</strong> (Absatz)
          </p>
          <p>
            <strong>Element 2</strong> (Absatz)
          </p>
        </>
        <CodeBlock>{`function MyComponent() {
  return (
    <>
      <p>Element 1</p>
      <p>Element 2</p>
    </>
  )
}`}</CodeBlock>
      </Card>

      <Card title="2) Fragment + key in map()">
        <ul className="list" role="list">
          {posts.map((p) => (
            <Fragment key={p.id}>
              <li className="list__item">
                <strong>{p.title}</strong>
              </li>
              <li className="list__item list__item--muted">{p.body}</li>
            </Fragment>
          ))}
        </ul>
        <CodeBlock>{`import { Fragment } from 'react'

posts.map(p => (
  <Fragment key={p.id}>
    <li>{p.title}</li>
    <li>{p.body}</li>
  </Fragment>
))`}</CodeBlock>
      </Card>
    </div>
  );
}

export default FragmentsDemo;

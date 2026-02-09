import Section from "./components/Section";
import FragmentsDemo from "./examples/FragmentsDemo";
import ModulesDemo from "./examples/ModulesDemo";
import ContainmentCompositionDemo from "./examples/ContainmentCompositionDemo";
import Header from "./components/header";
import "./App.css";

/**
 * components-demo
 *
 * Ziel: Eine kleine "Sammelseite" für Unterricht.
 * - JSX & Komponenten
 * - Module (import/export)
 * - Fragmente (Fragments)
 * - Containment & Composition
 *
 * Hinweis:
 * - Die eigentlichen Beispiele liegen in src/examples/*
 * - Wiederverwendbare UI-Bausteine liegen in src/components/*
 */
function App() {
  return (
    <>
      <Header className=""
        title="JSX, Komponenten, Module"
        subtitle="Diese App ist als Lern-/Erklärprojekt gedacht. Lest die Kommentare im Code und schaut euch die Beispiele in <code>src/examples</code> an."
      />
      <div className="grid " >
        <Section
          title="Fragmente (Fragments)"
          subtitle="Mehrere Elemente zurückgeben – ohne unnötige Wrapper im DOM"
        >
          <FragmentsDemo />
        </Section>
        <Section
          title="JS-Module (import/export)"
          subtitle="Default vs Named Export – und warum Module die Code-Organisation verbessern"
        >
          <ModulesDemo />
        </Section>
      </div>

      <Section
        title="Containment & Composition"
        subtitle="children (Containment) vs Slots (Composition) – React setzt auf Komposition statt Vererbung"
      >
        <ContainmentCompositionDemo />
      </Section>
    </>
  );
}

export default App;

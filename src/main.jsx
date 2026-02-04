import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Shared (global) component styles for the demo.
// (Didaktisch: So sieht ein typisches "global CSS + component CSS" Setup aus.)
import './components/styles.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

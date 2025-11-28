import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../mobile/src/index.css'
import ResponsiveApp from './ResponsiveApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ResponsiveApp />
  </StrictMode>,
)
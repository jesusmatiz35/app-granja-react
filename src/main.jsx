import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { BrowserRouter } from 'react-router'
import { GranjaApp } from './GranjaApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GranjaApp />
    </BrowserRouter>
  </StrictMode>,
)

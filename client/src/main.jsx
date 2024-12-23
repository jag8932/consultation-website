import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <footer>
    <a href="https://www.flaticon.com/free-icons/texture" title="texture icons">Texture icons created by luketaibai - Flaticon</a>
    </footer>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <div className='hero'>
          <img src="engineering_1.jpg" alt="engineering picture"></img>
        </div>
    <App />
  </StrictMode>,
)

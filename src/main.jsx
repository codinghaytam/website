import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from './Topbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
  </StrictMode>,
)

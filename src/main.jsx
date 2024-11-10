import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from './Topbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Projects from './projects.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
    <Hero/>
    <About/>
    <Projects/>
  </StrictMode>,
)

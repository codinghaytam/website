import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from './Topbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import Projects from './projects.jsx'
import Talk_to from './talk_to.jsx'
import Footer from './footer.jsx'
import View3D from './3DView.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Talk_to/>
    <Footer/>
  </StrictMode>,
)
/* <TopBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Talk_to/>
    <Footer/> */
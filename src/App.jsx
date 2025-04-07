import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Landing from './Components/Landing/Landing'
import Skills from './Components/Skills/Skills'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
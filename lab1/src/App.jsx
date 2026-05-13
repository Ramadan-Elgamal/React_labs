import React from 'react'
import Hero from './components/Hero'
import Bio from './components/Bio'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-white'>
      <div className="w-full bg-white text-black flex flex-col gap-6">
        <Hero />
        <Bio />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  )
}

export default App
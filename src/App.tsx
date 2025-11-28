
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import DiagnosticForm from './components/DiagnosticForm'
import Results from './components/Results'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white font-inter overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <DiagnosticForm />
        <Results />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App

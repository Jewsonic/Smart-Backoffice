
import React, { useState, useEffect } from 'react'
import {Menu, X, MessageCircleDashed as MessageCircle} from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Como Atuamos', id: 'como' },
    { label: 'Resultados', id: 'cases' },
    { label: 'Contato', id: 'contato' },
  ]

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <svg 
              width="200" 
              height="60" 
              viewBox="0 0 200 60" 
              className="h-10 lg:h-12 w-auto cursor-pointer transition-transform hover:scale-105"
              onClick={() => scrollToSection('inicio')}
            >
              {/* Fundo verde com bordas arredondadas */}
              <rect width="200" height="60" fill="#B6FF40" rx="8"/>
              
              {/* Letras "SB" em destaque */}
              <text x="100" y="28" fontSize="26" fontWeight="bold" fill="#0057A3" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" letterSpacing="2">
                SB
              </text>
              
              {/* Linha divisória */}
              <line x1="40" y1="35" x2="160" y2="35" stroke="#0057A3" strokeWidth="1.5" opacity="0.3"/>
              
              {/* Texto "Smart Backoffice" */}
              <text x="100" y="50" fontSize="9" fontWeight="600" fill="#0057A3" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" letterSpacing="1">
                SMART BACKOFFICE
              </text>
              

            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-slate-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Fale Conosco
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-slate-700 hover:text-slate-900 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contato')}
                className="w-full mt-4 bg-slate-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Fale Conosco
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header

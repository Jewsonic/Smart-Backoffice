
import React from 'react'
import { motion } from 'framer-motion'
import {Brain, Zap, LineChart, Cog, Mail, Phone, MapPin} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { icon: Brain, name: 'Gestão Empresarial' },
    { icon: Zap, name: 'Automação' },
    { icon: LineChart, name: 'Finanças & BPO' },
    { icon: Cog, name: 'Otimização' }
  ]

  const quickLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Como Atuamos', href: '#como' },
    { label: 'Resultados', href: '#cases' },
    { label: 'Contato', href: '#contato' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                <span className="text-smart-green">Smart</span><span className="text-smart-blue">Backoffice</span>
              </h3>
              
              <p className="text-primary-300 text-lg leading-relaxed mb-6 max-w-md">
                Consultoria empresarial especializada em gestão, automação e finanças. 
                Transformamos negócios através de tecnologia e processos otimizados.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-primary-300">
                  <Mail size={18} className="text-slate-400" />
                  <a 
                    href="mailto:contato@smartbackoffice.com.br"
                    className="hover:text-white transition-colors"
                  >
                    contato@smartbackoffice.com.br
                  </a>
                </div>
                <div className="flex items-center gap-3 text-primary-300">
                  <Phone size={18} className="text-slate-400" />
                  <a 
                    href="https://wa.me/5511985148378"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    (11) 98514-8378
                  </a>
                </div>
                <div className="flex items-center gap-3 text-primary-300">
                  <MapPin size={18} className="text-slate-400" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-300 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  return (
                    <li key={index} className="flex items-center gap-3">
                      <IconComponent size={16} className="text-slate-400 flex-shrink-0" />
                      <span className="text-primary-300">{service.name}</span>
                    </li>
                  )
                })}
              </ul>
              
              <div className="mt-8 bg-primary-800 rounded-xl p-4">
                <h5 className="font-semibold mb-2 text-slate-300">
                  Diagnóstico Gratuito
                </h5>
                <p className="text-primary-300 text-sm mb-3">
                  Identifique oportunidades de melhoria no seu negócio
                </p>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors w-full"
                >
                  Solicitar Agora
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-primary-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-400 text-sm">
              © {currentYear} Smart Backoffice. Todos os direitos reservados.
            </div>
            
            <div className="text-primary-400 text-sm text-center md:text-right">
              <div className="font-medium text-slate-400">
                Consultoria orientada a resultados
              </div>
              <div>
                Gestão • Automação • Tecnologia • Resultados
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

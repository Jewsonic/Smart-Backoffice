
import React from 'react'
import { motion } from 'framer-motion'
import {ArrowRight, CheckCircle, TrendingUp} from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="pt-20 lg:pt-24 pb-16 lg:pb-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <motion.h1 
                  className="text-3xl lg:text-5xl font-bold text-primary-900 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Gestão, Automação e 
                  <span className="text-slate-700 block">Finanças</span>
                  para impulsionar o crescimento da sua empresa
                </motion.h1>
                
                <motion.p 
                  className="text-lg lg:text-xl text-primary-600 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Transforme a rotina da sua empresa com uma consultoria que organiza as finanças, 
                  melhora processos e automatiza tarefas — para que você tenha mais tempo, controle e resultados.
                </motion.p>
                
                <motion.p 
                  className="text-base lg:text-lg text-primary-600 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Implementamos soluções simples e eficazes que aumentam a produtividade, reduzem custos 
                  e trazem previsibilidade para o seu negócio.
                </motion.p>
              </div>

              {/* Benefits */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold text-primary-900">Em até 90 dias, você pode ter:</h3>
                <div className="grid sm:grid-cols-1 gap-3">
                  {[
                    'Processos organizados e padronizados',
                    'Time treinado e produtivo',
                    'Indicadores e dados confiáveis'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-slate-600 flex-shrink-0" size={20} />
                      <span className="text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <button
                  onClick={() => scrollToSection('contato')}
                  className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Solicitar Diagnóstico
                  <ArrowRight size={20} />
                </button>
                
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Conhecer Serviços
                  <TrendingUp size={20} />
                </button>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                      <TrendingUp className="text-slate-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-800">+20% Produtividade</h3>
                      <p className="text-primary-600 text-sm">em média em 90 dias</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary-800">150+</div>
                      <div className="text-sm text-primary-600">Empresas atendidas</div>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-slate-700">98%</div>
                      <div className="text-sm text-slate-600">Satisfação</div>
                    </div>
                  </div>
                  
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-slate-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                  </div>
                  <p className="text-center text-sm text-primary-600">Eficiência operacional</p>
                </div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-slate-200 to-gray-200 rounded-full opacity-20 -z-10" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-tr from-gray-200 to-slate-200 rounded-full opacity-20 -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

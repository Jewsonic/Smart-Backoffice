
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Search, Settings, Users, ArrowRight} from 'lucide-react'

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Diagnóstico e Análise',
      description: 'Entendemos sua operação, mapeamos números e identificamos onde estão as perdas e oportunidades de ganho.',
      details: [
        'Levantamento financeiro e de processos',
        'Identificação de gargalos e retrabalho',
        'Relatório com ações de melhoria e prioridades'
      ],
      duration: '1 a 2 semanas'
    },
    {
      icon: Settings,
      number: '02',
      title: 'Plano e Implantação',
      description: 'Transformamos o diagnóstico em um plano claro e começamos a agir junto com você.',
      details: [
        'Plano de ação personalizado e viável',
        'Implantação de ferramentas e automações',
        'Padronização e testes dos novos processos'
      ],
      duration: '4 a 8 semanas'
    },
    {
      icon: Users,
      number: '03',
      title: 'Treinamento e Acompanhamento',
      description: 'Preparamos sua equipe para manter a evolução e garantir que os resultados se consolidem.',
      details: [
        'Treinamento prático e direto ao ponto',
        'Documentação das rotinas e boas práticas',
        'Acompanhamento e suporte contínuo'
      ],
      duration: 'Contínuo'
    }
  ]

  return (
    <section id="como" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div 
          ref={ref}
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl lg:text-5xl font-bold text-primary-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Como Atuamos
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nossa metodologia comprovada em 3 etapas para garantir resultados 
              sustentáveis e transformação real do seu negócio.
            </motion.p>
          </div>

          {/* Process Steps */}
          <div className="relative max-w-full">
            
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10 px-6 sm:px-8">
              {steps.map((step, index) => {
                const IconComponent = step.icon
                
                return (
                  <motion.div
                    key={index}
                    className="relative px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  >
                    {/* Mobile Connection Line */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-slate-300 to-slate-200 z-0" />
                    )}
                    
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-slate-300 relative z-10">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                        <IconComponent size={32} className="text-slate-700" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-primary-900 mb-4">
                        {step.title}
                      </h3>
                      
                      <p className="text-primary-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Details */}
                      <ul className="space-y-2 mb-6">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-sm text-primary-600">
                            <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Duration */}
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <span className="text-slate-700 font-semibold text-sm">
                          Duração: {step.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button
              onClick={() => {
                const element = document.getElementById('diagnostico')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Fazer meu diagnóstico financeiro
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

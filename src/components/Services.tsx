
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Brain, Zap, LineChart, Cog, ArrowRight} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const services = [
    {
      icon: Brain,
      title: 'Gestão Empresarial',
      description: 'Planejamento, governança e OKRs com foco em resultados.',
      details: [
        'Planejamento estratégico e operacional',
        'Implementação de OKRs e KPIs',
        'Governança corporativa',
        'Gestão de performance'
      ],
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Automação em Tecnologia',
      description: 'Implantação de ferramentas, integrações e IA aplicada ao negócio.',
      details: [
        'Automação de processos',
        'Integração de sistemas',
        'Implementação de IA',
        'Ferramentas de produtividade'
      ],
      color: 'accent'
    },
    {
      icon: LineChart,
      title: 'Finanças & BPO',
      description: 'Rotinas financeiras, dashboards, precificação e projeções.',
      details: [
        'Controle financeiro',
        'Dashboards gerenciais',
        'Precificação estratégica',
        'Projeções e orçamentos'
      ],
      color: 'primary'
    },
    {
      icon: Cog,
      title: 'Otimização de Processos',
      description: 'Mapeamento, padronização e melhoria contínua (Lean/Agile).',
      details: [
        'Mapeamento de processos',
        'Padronização de rotinas',
        'Metodologia Lean/Agile',
        'Melhoria contínua'
      ],
      color: 'accent'
    }
  ]

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              Nossos Serviços
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Soluções sob medida para pequenas e médias empresas que querem crescer com eficiência e controle.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const isAccent = service.color === 'accent'
              
              return (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-slate-300 hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    isAccent ? 'bg-slate-100' : 'bg-slate-100'
                  }`}>
                    <IconComponent 
                      size={32} 
                      className={isAccent ? 'text-slate-600' : 'text-slate-700'} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-primary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm text-primary-600">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          isAccent ? 'bg-slate-600' : 'bg-slate-600'
                        }`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`flex items-center gap-2 font-semibold transition-colors duration-200 ${
                    isAccent 
                      ? 'text-slate-600 hover:text-slate-700' 
                      : 'text-slate-700 hover:text-slate-800'
                  }`}>
                    Saiba mais
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

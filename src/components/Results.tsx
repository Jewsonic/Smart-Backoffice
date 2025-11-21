
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {TrendingUp, Target, Zap, Shield, BarChart3, Clock} from 'lucide-react'

const Results = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Produtividade',
      metric: '+20%',
      description: 'Aumento médio de produtividade em 90 dias',
      color: 'accent'
    },
    {
      icon: Target,
      title: 'Previsibilidade',
      metric: '95%',
      description: 'Precisão nas projeções e planejamentos',
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Escalabilidade',
      metric: '3x',
      description: 'Capacidade de crescimento sem aumentar custos',
      color: 'accent'
    }
  ]

  const metrics = [
    { label: 'Redução de custos operacionais', value: '15-30%' },
    { label: 'Tempo de resposta melhorado', value: '50%' },
    { label: 'Processos automatizados', value: '80%' },
    { label: 'Satisfação da equipe', value: '92%' }
  ]



  return (
    <section id="cases" className="py-16 lg:py-24 bg-white">
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
              Resultados Comprovados
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Nossos clientes alcançam resultados tangíveis e sustentáveis 
              através da implementação de nossas soluções.
            </motion.p>
          </div>

          {/* Main Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const isAccent = benefit.color === 'accent'
              
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    isAccent ? 'bg-slate-100' : 'bg-slate-100'
                  }`}>
                    <IconComponent 
                      size={40} 
                      className={isAccent ? 'text-slate-600' : 'text-slate-700'} 
                    />
                  </div>
                  
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 ${
                    isAccent ? 'text-slate-600' : 'text-slate-700'
                  }`}>
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-primary-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Metrics Grid */}
          <motion.div 
            className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-8 lg:p-12 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-primary-900 text-center mb-8">
              Benefícios Tangíveis
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-slate-600 mb-2">
                    {metric.value}
                  </div>
                  <p className="text-primary-700 font-medium text-sm">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Results

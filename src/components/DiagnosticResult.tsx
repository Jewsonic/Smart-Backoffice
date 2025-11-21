
import React from "react"
import { motion } from "framer-motion"
import {CheckCircle, AlertTriangle, TrendingUp, ArrowRight, RefreshCw} from 'lucide-react'

interface DiagnosticResultProps {
  score: number
  answers: Record<string, number>
  questions: Array<{
    id: string
    title: string
    question: string
    options: Array<{ text: string; value: number }>
  }>
  onReset: () => void
}

const DiagnosticResult: React.FC<DiagnosticResultProps> = ({ score, answers, questions, onReset }) => {
  const getResultData = () => {
    if (score <= 4) {
      return {
        level: "Estágio Inicial",
        color: "red",
        icon: AlertTriangle,
        message: "Sua empresa está no início da jornada de organização financeira.",
        description: "Identificamos que há muito espaço para melhorias fundamentais que podem trazer ganhos rápidos e significativos.",
        recommendations: [
          "Implementar controle básico de entradas e saídas",
          "Estabelecer rotinas financeiras semanais",
          "Criar planilhas de controle de caixa",
          "Definir responsáveis pelas rotinas financeiras"
        ],
        benefits: [
          "Redução de até 30% nos custos operacionais",
          "Visibilidade completa do fluxo de caixa",
          "Eliminação de surpresas financeiras",
          "Base sólida para crescimento"
        ]
      }
    } else if (score <= 8) {
      return {
        level: "Estágio Intermediário",
        color: "yellow",
        icon: TrendingUp,
        message: "Sua empresa já tem uma base financeira, mas ainda há oportunidades importantes.",
        description: "Você está no caminho certo, mas precisa evoluir para ter mais previsibilidade e controle estratégico.",
        recommendations: [
          "Automatizar processos financeiros manuais",
          "Implementar dashboards e indicadores em tempo real",
          "Estabelecer projeções e planejamento financeiro",
          "Integrar sistemas para eliminar retrabalho"
        ],
        benefits: [
          "Ganho de 20% em produtividade financeira",
          "Decisões baseadas em dados confiáveis",
          "Redução de erros e retrabalho",
          "Previsibilidade de caixa para 90 dias"
        ]
      }
    } else if (score <= 12) {
      return {
        level: "Estágio Avançado",
        color: "blue",
        icon: CheckCircle,
        message: "Parabéns! Sua empresa tem uma gestão financeira sólida.",
        description: "Você já tem boas práticas implementadas. Agora é hora de otimizar e usar o financeiro como ferramenta estratégica.",
        recommendations: [
          "Implementar análises preditivas e cenários",
          "Criar indicadores de performance avançados",
          "Automatizar relatórios gerenciais",
          "Integrar financeiro com estratégia de crescimento"
        ],
        benefits: [
          "Otimização de 15% nos processos existentes",
          "Visão estratégica de longo prazo",
          "Decisões mais rápidas e assertivas",
          "Escalabilidade do negócio"
        ]
      }
    } else {
      return {
        level: "Estágio Excelente",
        color: "green",
        icon: CheckCircle,
        message: "Excepcional! Sua gestão financeira está no mais alto nível.",
        description: "Sua empresa é referência em organização financeira. Continue aprimorando e explore novas fronteiras de eficiência.",
        recommendations: [
          "Implementar IA para análises preditivas",
          "Criar modelos de simulação avançados",
          "Otimizar integração entre todas as áreas",
          "Estabelecer benchmarks de mercado"
        ],
        benefits: [
          "Manutenção da excelência operacional",
          "Inovação contínua em processos",
          "Vantagem competitiva sustentável",
          "Crescimento previsível e escalável"
        ]
      }
    }
  }

  const result = getResultData()
  const IconComponent = result.icon
  const percentage = Math.round((score / 15) * 100)

  const generateWhatsAppMessage = () => {
    let message = `Olá! Acabei de fazer o diagnóstico financeiro no site.\n\n`
    message += `📊 *Resultado do Diagnóstico*\n`
    message += `Pontuação: ${score}/15 pontos\n`
    message += `Estágio: ${result.level}\n\n`
    message += `━━━━━━━━━━━━━━━━━━\n\n`
    message += `*📋 Respostas Detalhadas:*\n\n`
    
    questions.forEach((question, index) => {
      const answerValue = answers[question.id]
      const selectedOption = question.options.find(opt => opt.value === answerValue)
      
      message += `${index + 1}️⃣ *${question.title}*\n`
      message += `Resposta: ${selectedOption?.text}\n`
      message += `Pontos: ${answerValue}/3\n\n`
    })
    
    message += `━━━━━━━━━━━━━━━━━━\n\n`
    message += `Gostaria de saber como melhorar minha gestão financeira!`
    
    return encodeURIComponent(message)
  }

  const colorClasses = {
    red: {
      bg: "bg-red-50",
      border: "border-red-200",
      text: "text-red-700",
      icon: "text-red-600",
      badge: "bg-red-100 text-red-700"
    },
    yellow: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      text: "text-yellow-700",
      icon: "text-yellow-600",
      badge: "bg-yellow-100 text-yellow-700"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-700",
      icon: "text-blue-600",
      badge: "bg-blue-100 text-blue-700"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200",
      text: "text-green-700",
      icon: "text-green-600",
      badge: "bg-green-100 text-green-700"
    }
  }

  const colors = colorClasses[result.color as keyof typeof colorClasses]

  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Result Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className={`${colors.bg} ${colors.border} border-b-4 p-8 lg:p-12 text-center`}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                <div className={`w-24 h-24 ${colors.badge} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent size={48} className={colors.icon} />
                </div>
              </motion.div>

              <motion.h2 
                className="text-3xl lg:text-4xl font-bold text-primary-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {result.level}
              </motion.h2>

              <motion.div 
                className="flex items-center justify-center gap-4 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-5xl font-bold text-accent-600">{score}</span>
                <span className="text-2xl text-primary-600">/ 15 pontos</span>
              </motion.div>

              <motion.div 
                className="max-w-md mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="h-4 bg-white rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    className="h-full bg-accent-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
                <p className="text-sm text-primary-600 mt-2">{percentage}% de maturidade financeira</p>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-2xl font-bold text-primary-900 mb-3">{result.message}</h3>
                <p className="text-lg text-primary-600 leading-relaxed">{result.description}</p>
              </motion.div>

              {/* Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-primary-50 rounded-2xl p-6 lg:p-8"
              >
                <h4 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="text-accent-600" size={24} />
                  Recomendações Prioritárias
                </h4>
                <ul className="space-y-3">
                  {result.recommendations.map((rec, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                    >
                      <CheckCircle className="text-accent-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-primary-700">{rec}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="bg-accent-50 rounded-2xl p-6 lg:p-8"
              >
                <h4 className="text-xl font-bold text-primary-900 mb-4">Benefícios Esperados</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {result.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.3 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-primary-700 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <a
                  href={`https://wa.me/5511985148378?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Falar com Especialista
                  <ArrowRight size={20} />
                </a>
                
                <button
                  onClick={onReset}
                  className="flex-1 border-2 border-primary-300 text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Refazer Diagnóstico
                  <RefreshCw size={20} />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DiagnosticResult

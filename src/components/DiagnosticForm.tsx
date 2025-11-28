
import React, { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {CheckCircle, ArrowRight} from 'lucide-react'
import DiagnosticResult from "./DiagnosticResult"

interface Question {
  id: string
  title: string
  question: string
  options: {
    text: string
    value: number
  }[]
}

const DiagnosticForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const questions: Question[] = [
    {
      id: "controle",
      title: "Controle Financeiro",
      question: "Como está o controle de entradas e saídas da empresa?",
      options: [
        { text: "Não existe um controle fixo (tudo é feito de forma manual ou esporádica)", value: 0 },
        { text: "Temos planilhas, mas sem atualização constante", value: 1 },
        { text: "Usamos planilhas ou sistema com rotina semanal", value: 2 },
        { text: "Controle diário automatizado com conciliação bancária", value: 3 }
      ]
    },
    {
      id: "custos",
      title: "Custos e Lucro",
      question: "Você sabe quanto realmente ganha em cada produto ou serviço?",
      options: [
        { text: "Não sabemos o lucro exato, só o total mensal", value: 0 },
        { text: "Fazemos uma estimativa básica de custos", value: 1 },
        { text: "Temos planilhas de custo e lucro por produto/serviço", value: 2 },
        { text: "Margens calculadas e acompanhadas com indicadores financeiros", value: 3 }
      ]
    },
    {
      id: "planejamento",
      title: "Planejamento Financeiro",
      question: "Existe um planejamento financeiro para os próximos meses?",
      options: [
        { text: "Não, as decisões são tomadas conforme o caixa", value: 0 },
        { text: "Temos metas, mas sem acompanhamento formal", value: 1 },
        { text: "Planejamos receitas e despesas principais mensalmente", value: 2 },
        { text: "Mantemos projeções e metas financeiras revisadas periodicamente", value: 3 }
      ]
    },
    {
      id: "processos",
      title: "Processos e Ferramentas",
      question: "Como são feitas as rotinas financeiras (pagamentos, cobranças, relatórios)?",
      options: [
        { text: "Tudo manual, com retrabalho frequente", value: 0 },
        { text: "Usamos planilhas e conciliação manual", value: 1 },
        { text: "Parte automatizada com algum sistema ou app", value: 2 },
        { text: "Totalmente automatizado, com integração entre sistemas", value: 3 }
      ]
    },
    {
      id: "estrategia",
      title: "Estratégia e Crescimento",
      question: "O financeiro apoia as decisões estratégicas da empresa?",
      options: [
        { text: "Não, é apenas operacional (pagar e receber)", value: 0 },
        { text: "Às vezes, usamos dados financeiros em decisões pontuais", value: 1 },
        { text: "Sim, o financeiro gera relatórios de apoio à gestão", value: 2 },
        { text: "Sim, usamos indicadores e projeções para guiar o crescimento", value: 3 }
      ]
    }
  ]

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Object.keys(answers).length === questions.length) {
      setShowResult(true)
    }
  }

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
  const progress = (Object.keys(answers).length / questions.length) * 100

  if (showResult) {
    return <DiagnosticResult score={totalScore} answers={answers} questions={questions} onReset={() => { setShowResult(false); setAnswers({}); setCurrentStep(0) }} />
  }

  return (
    <section id="diagnostico" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl lg:text-5xl font-bold text-primary-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Diagnóstico Financeiro
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Em qual estágio financeiro sua empresa está? Faça o teste e descubra em menos de 2 minutos.
            </motion.p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mt-8">
              <div className="flex justify-between text-sm text-primary-600 mb-2">
                <span>Progresso</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-primary-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {questions.map((question, index) => (
              <motion.div
                key={question.id}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 lg:p-8 shadow-lg border border-primary-100"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: '#0057A3' }}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary-900 mb-2">{question.title}</h3>
                    <p className="text-primary-700">{question.question}</p>
                  </div>
                </div>

                <div className="space-y-3 ml-14">
                  {question.options.map((option, optionIndex) => (
                    <label
                      key={optionIndex}
                      className={`flex items-start gap-3 p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                        answers[question.id] === option.value
                          ? "bg-accent-100 border-2 border-accent-600 shadow-md"
                          : "bg-white border-2 border-gray-200 hover:border-accent-300 hover:bg-accent-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={option.value}
                        checked={answers[question.id] === option.value}
                        onChange={() => handleAnswerChange(question.id, option.value)}
                        className="mt-1 w-5 h-5 text-accent-600 focus:ring-accent-500"
                      />
                      <span className={`flex-1 ${
                        answers[question.id] === option.value
                          ? "text-primary-900 font-medium"
                          : "text-primary-700"
                      }`}>
                        {option.text}
                      </span>
                      {answers[question.id] === option.value && (
                        <CheckCircle className="text-accent-600 flex-shrink-0" size={20} />
                      )}
                    </label>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Submit Button */}
            <motion.div 
              className="text-center pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                type="submit"
                disabled={Object.keys(answers).length !== questions.length}
                className={`px-10 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 mx-auto shadow-lg ${
                  Object.keys(answers).length === questions.length
                    ? "bg-accent-600 text-white hover:bg-accent-700 hover:shadow-xl transform hover:-translate-y-1"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Ver meu resultado
                <ArrowRight size={20} />
              </button>
              {Object.keys(answers).length !== questions.length && (
                <p className="text-sm text-primary-600 mt-4">
                  Responda todas as perguntas para ver seu resultado
                </p>
              )}
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}

export default DiagnosticForm


import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Mail, Phone, MessageCircleDashed as MessageCircle, Send, MapPin, Clock, CheckCircle, XCircle, Instagram, Linkedin} from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    try {
      // Send email via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e62f15fd-b2ea-41b5-8b27-1f6bb4336753',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          subject: `Novo contato de ${formData.name} - Smart Backoffice`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        throw new Error(result.message || 'Erro ao enviar mensagem')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Erro ao enviar mensagem. Por favor, tente novamente.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@smartbackoffice.com.br',
      link: 'mailto:contato@smartbackoffice.com.br'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '(11) 988477377',
      link: 'https://wa.me/5511988477377'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@smartbackofficeconsultoria',
      link: 'https://www.instagram.com/smartbackofficeconsultoria/'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Smart Backoffice',
      link: 'https://www.linkedin.com/in/smartbackofficeconsultoria/'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'São Paulo, SP',
      link: null
    },
    {
      icon: Clock,
      label: 'Horário',
      value: 'Seg-Sex 9h às 18h',
      link: null
    }
  ]

  return (
    <section id="contato" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50">
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
              Fale Conosco
            </motion.h2>
            <motion.p 
              className="text-lg lg:text-xl text-primary-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Pronto para transformar seu negócio? Entre em contato conosco 
              e solicite um diagnóstico gratuito.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">
                  Solicite um Diagnóstico Gratuito
                </h3>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">
                        Mensagem enviada com sucesso!
                      </h4>
                      <p className="text-green-700 text-sm">
                        Obrigado pelo contato. Retornaremos em breve!
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <XCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">
                        Erro ao enviar mensagem
                      </h4>
                      <p className="text-red-700 text-sm">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-primary-700 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors"
                      placeholder="Nome da sua empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 transition-colors resize-none"
                      placeholder="Conte-nos sobre seus desafios e objetivos..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-700 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">
                    Informações de Contato
                  </h3>
                  
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => {
                      const IconComponent = info.icon
                      
                      return (
                        <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                            <IconComponent size={24} className="text-slate-600" />
                          </div>
                          <div>
                            <div className="text-sm text-primary-600 font-medium">
                              {info.label}
                            </div>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="text-primary-900 font-semibold hover:text-slate-600 transition-colors"
                                target={info.link.startsWith('http') ? '_blank' : undefined}
                                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {info.value}
                              </a>
                            ) : (
                              <div className="text-primary-900 font-semibold">
                                {info.value}
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <MessageCircle size={24} className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800">
                        Atendimento Rápido
                      </h4>
                      <p className="text-green-600 text-sm">
                        Fale conosco pelo WhatsApp
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href="https://wa.me/5511988477377?text=Olá! Gostaria de saber mais sobre os serviços da Smart Backoffice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Chamar no WhatsApp
                  </a>
                </div>

                {/* Additional Info */}
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h4 className="font-bold text-primary-900 mb-3">
                    Por que escolher a Smart Backoffice?
                  </h4>
                  <ul className="space-y-2 text-primary-700">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                      Diagnóstico gratuito e sem compromisso
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                      Resultados comprovados em 90 dias
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                      Acompanhamento contínuo
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full" />
                      Especialistas em automação e gestão
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

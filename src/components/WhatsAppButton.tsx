import React from 'react'
import {MessageCircleDashed as MessageCircle} from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = "5511985148378"
  const defaultMessage = "Olá! Gostaria de saber mais sobre os serviços da Smart Backoffice."

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <MessageCircle size={28} className="group-hover:rotate-12 transition-transform duration-300" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
    </motion.a>
  )
}

export default WhatsAppButton

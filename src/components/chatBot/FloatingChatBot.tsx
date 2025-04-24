"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, ChevronDown, Info, Phone, Clock, Home } from "lucide-react"

// Definir tipos para los mensajes
type MessageType = {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

// Definir tipos para las categorías
type Category = {
  id: string
  name: string
  icon: React.ReactNode
}

// Definir tipos para las preguntas predefinidas
type PredefinedQuestion = {
  id: string
  text: string
  category: string
}

// Definir preguntas y respuestas predefinidas
const predefinedQA: Record<string, string> = {
  hola: "¡Hola! ¿En qué puedo ayudarte hoy?",
  "quien eres": "Soy un chatbot simple creado para responder preguntas predefinidas.",
  "como estas": "Estoy bien, gracias por preguntar. ¿Y tú?",
  "que puedes hacer":
    "Puedo responder preguntas predefinidas. Puedes seleccionar una de las opciones disponibles o escribir tu pregunta.",
  servicios: "Ofrecemos servicios de desarrollo web, diseño UI/UX y consultoría tecnológica.",
  "servicios web":
    "Nuestros servicios web incluyen desarrollo de sitios web, aplicaciones web, e-commerce y sistemas de gestión de contenido.",
  "servicios diseño":
    "Nuestros servicios de diseño incluyen diseño de interfaces, experiencia de usuario, identidad visual y prototipos interactivos.",
  "servicios consultoría":
    "Ofrecemos consultoría en transformación digital, optimización de procesos y estrategias tecnológicas para empresas.",
  horarios: "Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00.",
  "horario oficina": "Nuestra oficina está abierta de lunes a viernes de 9:00 a 18:00.",
  "horario soporte": "El soporte técnico está disponible 24/7 para clientes con contrato de mantenimiento.",
  contacto: "Puedes contactarnos en info@ejemplo.com o llamar al +123456789.",
  "contacto email": "Nuestro email de contacto es info@ejemplo.com",
  "contacto teléfono": "Puedes llamarnos al +123456789",
  "contacto dirección": "Estamos ubicados en Calle Ejemplo 123, Ciudad Ejemplo",
  gracias: "¡De nada! Estoy aquí para ayudarte.",
  adios: "¡Hasta luego! Que tengas un buen día.",
}

// Definir categorías
const categories: Category[] = [
  { id: "general", name: "General", icon: <Home size={16} /> },
  { id: "servicios", name: "Servicios", icon: <Info size={16} /> },
  { id: "horarios", name: "Horarios", icon: <Clock size={16} /> },
  { id: "contacto", name: "Contacto", icon: <Phone size={16} /> },
]

// Lista de preguntas predefinidas para mostrar como botones, organizadas por categoría
const predefinedQuestions: PredefinedQuestion[] = [
  // General
  { id: "q1", text: "¿Quién eres?", category: "general" },
  { id: "q2", text: "¿Qué puedes hacer?", category: "general" },
  { id: "q3", text: "Hola", category: "general" },
  { id: "q4", text: "¿Cómo estás?", category: "general" },

  // Servicios
  { id: "s1", text: "¿Qué servicios ofrecen?", category: "servicios" },
  { id: "s2", text: "Servicios de desarrollo web", category: "servicios" },
  { id: "s3", text: "Servicios de diseño", category: "servicios" },
  { id: "s4", text: "Servicios de consultoría", category: "servicios" },

  // Horarios
  { id: "h1", text: "¿Cuáles son los horarios?", category: "horarios" },
  { id: "h2", text: "Horario de oficina", category: "horarios" },
  { id: "h3", text: "Horario de soporte", category: "horarios" },

  // Contacto
  { id: "c1", text: "¿Cómo puedo contactarlos?", category: "contacto" },
  { id: "c2", text: "Email de contacto", category: "contacto" },
  { id: "c3", text: "Teléfono de contacto", category: "contacto" },
  { id: "c4", text: "Dirección de la oficina", category: "contacto" },
]

// Función para encontrar la mejor coincidencia
const findBestMatch = (input: string): string => {
  input = input.toLowerCase().trim()

  // Verificar coincidencia exacta
  if (predefinedQA[input]) {
    return predefinedQA[input]
  }

  // Buscar coincidencia parcial
  for (const question in predefinedQA) {
    if (input.includes(question)) {
      return predefinedQA[question]
    }
  }

  // Respuesta por defecto
  return "Lo siento, no entiendo esa pregunta. ¿Puedes intentar con otra o seleccionar una de las opciones disponibles?"
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: 1,
      text: "¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [activeCategory, setActiveCategory] = useState("general")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll al último mensaje
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Agregar mensaje del usuario
    const userMessage: MessageType = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simular respuesta del bot con un pequeño retraso
    setTimeout(() => {
      const botResponse: MessageType = {
        id: messages.length + 2,
        text: findBestMatch(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
    }, 500)

    setInputValue("")
  }

  const handleQuestionClick = (questionText: string) => {
    // Agregar mensaje del usuario
    const userMessage: MessageType = {
      id: messages.length + 1,
      text: questionText,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simular respuesta del bot con un pequeño retraso
    setTimeout(() => {
      const botResponse: MessageType = {
        id: messages.length + 2,
        text: findBestMatch(questionText),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  // Filtrar preguntas por categoría activa
  const filteredQuestions = predefinedQuestions.filter((question) => question.category === activeCategory)

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Botón flotante para abrir/cerrar el chat */}
      <button
        onClick={toggleChat}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 rotate-90" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageCircle size={24} className="text-white" />}
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200">
          {/* Encabezado del chat */}
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Chat de Ayuda</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <ChevronDown size={20} />
            </button>
          </div>

          {/* Área de mensajes */}
          <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-3 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p>{message.text}</p>
                  <span
                    className={`text-xs block mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}
                  >
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Pestañas de categorías */}
          <div className="border-t border-gray-200 bg-gray-50">
            <div className="flex overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-center min-w-[80px] py-2 px-3 text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Preguntas predefinidas por categoría */}
          <div className="p-3 border-t border-gray-200 bg-gray-50 max-h-[120px] overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {filteredQuestions.map((question) => (
                <button
                  key={question.id}
                  onClick={() => handleQuestionClick(question.text)}
                  className="bg-white text-blue-600 text-sm py-1 px-3 rounded-full border border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  {question.text}
                </button>
              ))}
            </div>
          </div>

          {/* Formulario de entrada */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 bg-white">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Escribe tu mensaje..."
                className="flex-1 border border-gray-300 rounded-l-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

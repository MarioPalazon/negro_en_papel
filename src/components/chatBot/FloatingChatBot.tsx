"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, ChevronDown, Info, Phone, Home } from "lucide-react"

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
    hola: "",
        "¿en que consiste?":
            "Hacemos un hermoso retrato a grafito de tu mascota, cualquier duda presiona las otras opciones.",
    servicios: "",
        "retrato a grafito":
            "Nuestro servicio consiste en retratos en grafito hecho a mano de tu mascotita.",
        "valores y dimensiones":
            "Los precios y tamaños son: Tamaño A3: $12.000 Tamaño A4: $17.000",
        "¿que incluye?":
            "El retrato incluye un marco de madera y vidrio.",
        "¿como solicitar un retrato?":
            "Envía la fotografía de tu mascotita que deseas retratar por email o instagram.",
    contacto: "",
        "email de contacto": "Nuestro email de contacto es negro.enpapel@gmail.com",
        "red social de contacto": "https://www.instagram.com/negro_enpapel",
  gracias: "¡De nada! Estoy aquí para ayudarte.",
  adios: "¡Hasta luego! Que tengas un buen día.",
}

// Definir categorías
const categories: Category[] = [
  { id: "general", name: "General", icon: <Home size={16} /> },
  { id: "servicios", name: "Servicios", icon: <Info size={16} /> },
  //{ id: "horarios", name: "Horarios", icon: <Clock size={16} /> },
  { id: "contacto", name: "Contacto", icon: <Phone size={16} /> },
]

// Lista de preguntas predefinidas para mostrar como botones, organizadas por categoría
const predefinedQuestions: PredefinedQuestion[] = [
  // General
  { id: "q1", text: "¿En que consiste?", category: "general" },
  // Servicios
  { id: "s1", text: "Retrato a grafito", category: "servicios" },
  { id: "s2", text: "Valores y dimensiones", category: "servicios" },
  { id: "s3", text: "¿Que incluye?", category:"servicios"},
  { id: "s4", text: "¿Como solicitar un retrato?", category:"servicios"},

  // Contacto
  { id: "c1", text: "Email de contacto", category: "contacto" },
  { id: "c2", text: "Red Social de contacto", category: "contacto" },
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
                  className={`max-w-[95%] rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {message.text==="https://www.instagram.com/negro_enpapel" ? (
                    <a className="text-blue-800 hover:underline" target="_blank" href="https://www.instagram.com/negro_enpapel">{message.text}</a>
                  ):
                    (<p>{message.text}</p>)
                  }                  
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

        </div>
      )}
    </div>
  )
}

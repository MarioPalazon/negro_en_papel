import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router'
import './index.css'
import FloatingChatBot from './components/chatBot/FloatingChatBot'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
    <FloatingChatBot />
  </StrictMode>,
)

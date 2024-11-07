import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App'
import { FinanceProvider } from './Task/FinanceContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FinanceProvider>
      <App />
    </FinanceProvider>
  </StrictMode>
)
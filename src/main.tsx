import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ActiveProvider } from './Contexts/isActiveContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <ActiveProvider>
      <App />
    </ActiveProvider>
  </StrictMode>,
)

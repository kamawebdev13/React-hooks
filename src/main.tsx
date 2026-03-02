import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppDos from './AppDos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppDos />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import AppDos from './AppDos.tsx'
import AppTres from './AppTres.tsx'
// import AppCuatro from './AppCuatro.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App/> */}
    {/* <AppDos /> */}
    <AppTres />
    {/* <AppCuatro/> */}
  </StrictMode>,
)

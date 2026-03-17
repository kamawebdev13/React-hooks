import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import AppDos from './AppDos.tsx'
// import AppTres from './AppTres.tsx'
// import AppCuatro from './AppCuatro.tsx'
// import AppCinco from './AppCinco.tsx'
// import AppSeis from './AppSeis.tsx'
// import AppSiete from './AppSiete.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
    {/* <AppDos /> */}
    {/* <AppTres /> */}
    {/* <AppCuatro/> */}
    {/* <AppCinco/> */}
    {/* <AppSeis/> */}
    {/* <AppSiete /> */}
  </StrictMode>,
)

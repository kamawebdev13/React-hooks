import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import Perfil from './componentes/Perfil';
import { Ajustes } from './componentes/Ajustes';

function App() {
  return (
    <BrowserRouter>
      
      <div className="fixed inset-0 bg-slate-100 flex flex-col overflow-y-auto">
        
        
        <nav className="w-full bg-slate-800 p-4 flex gap-6 shadow-xl text-white z-50">
          <Link to="/" className="font-bold hover:text-blue-300">Inicio</Link>
          <Link to="/Perfil" className="font-bold hover:text-blue-300">Perfil</Link>
          <Link to="/Ajustes" className="font-bold hover:text-blue-300">Ajustes</Link>
        </nav>

       
        <main className="grow flex flex-col items-center pt-16 px-4 pb-10">
          
         
          <div className="w-full max-w-xl bg-blue-300 p-8 rounded-3xl shadow-2xl border-2 border-blue-400">
            
          
            <div className="w-full text-slate-900">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route 
                  path="/Perfil" 
                  element={<Perfil nombre='Karina' especialidad='Web Dev' experiencia={4} />} 
                />
                <Route path="/Ajustes" element={<Ajustes />} />
                <Route path="*" element={<h2 className="text-center">404</h2>} />
              </Routes>
            </div>

          </div>
        </main>
      </div>
    </BrowserRouter>
  ); 
}

export default App;
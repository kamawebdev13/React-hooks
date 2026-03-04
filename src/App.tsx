import ContadorSkills from './componentes/ContadorSkills';
import './componentes/index.css'

function App() {
  
  return (
    <div className="min-h-screen  bg-slate-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
       ✨ Contador de Habilidades ✨
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <ContadorSkills/>
        
        <ContadorSkills/>
       
        
      </div>
    </div>

    
  );
};

export default App

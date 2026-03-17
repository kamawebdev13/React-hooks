import  InterruptorMagico  from './componentes/InterruptorMagico';
import './componentes/index.css';

function AppTres() {
  return (
    <div className="min-h-screen  bg-slate-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
       ✨ Interruptor Magico ✨
      </h1>
      
      {/* Contenedor principal con Grid adaptable */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
       
        <InterruptorMagico />
        
        <InterruptorMagico/>
        <InterruptorMagico />
        
        <InterruptorMagico/>
        <InterruptorMagico />
        
        <InterruptorMagico/>
        
      </div>
    </div>
  );
}

export default AppTres;
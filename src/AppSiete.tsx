import  TablaPedidos  from './componentes/TablaPedidos.tsx';
import './componentes/index.css';

function AppSiete() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
       Tabla de Pedidos
      </h1>
      <h2 className='text-3xl font-bold mb-12'>Fantastic 4️⃣</h2>
      
      {/* Contenedor actualizado */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 p-8 border rounded-xl bg-blue-300 shadow-sm mx-auto max-w-4xl">
        <TablaPedidos />
        
      </div>
    </div>
  );
};

export default AppSiete;
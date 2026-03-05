import  TablaPedidos  from './componentes/TablaPedidos';
import './componentes/index.css';

function AppCinco() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-4xl font-extrabold text-center text-slate-900 mb-12">
       🎁 Tabla de Pedidos 🎁
      </h1>
      
      {/* Contenedor actualizado */}
      <div className="flex flex-row flex-wrap justify-center items-center gap-10 p-8 border rounded-xl bg-white shadow-sm mx-auto max-w-4xl">
        <TablaPedidos/>
        <TablaPedidos/>
      </div>
    </div>
  );
};

export default AppCinco;
import { useState, ChangeEvent } from 'react';

interface ElMensajeProps {
  titulo?: string;
}

export function ElMensaje({ titulo = "Creacion y Validacion de Password" }: ElMensajeProps) {
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
        {titulo}
      </h2>
      
      <input 
        type="text" 
        value={password} 
        onChange={handleChange} 
        placeholder="Escribe tu contraseña..." 
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    
    </div>
  );
}

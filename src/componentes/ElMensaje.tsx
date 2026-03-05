import { useState, ChangeEvent } from 'react';

interface ElMensajeProps {
  titulo?: string;
}

export function ElMensaje({ titulo = "Creación y Validación de Password" }: ElMensajeProps) {
  const [password, setPassword] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const esInvalido = password.length > 0 && password.length < 8;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
        {titulo}
      </h2>
      
      <input 
        type="password" 
        value={password} 
        onChange={handleChange} 
        placeholder="Escribe tu contraseña..." 
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-all
          ${esInvalido ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'}`}
      />

      {esInvalido && (
        <p className="mt-2 text-sm text-red-500 font-bold">
          ALERTA: EL PASSWORD TIENE MENOS DE 8 CARACTERES!!!
        </p>
      )}
    </div>
  );
};
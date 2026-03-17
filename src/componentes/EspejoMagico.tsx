import { useState, ChangeEvent } from 'react';

interface EspejoProps {
  titulo?: string;
}

export function EspejoMagico({ titulo = "Reflejo Mágico" }: EspejoProps) {
  const [texto, setTexto] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  const invertido = texto.split('').reverse().join('');

  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">
        {titulo}
      </h2>
      
      <input 
        type="text" 
        value={texto} 
        onChange={handleChange} 
        placeholder="Escribe algo aquí..." 
        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      
      <article className="mt-6 space-y-4">
        <div className="p-3 bg-slate-50 rounded-lg">
          <p className="text-xs font-semibold text-slate-500 uppercase">Lo que dices:</p>
          <p className="text-lg text-slate-700 break-words">{texto || "..."}</p>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-xs font-semibold text-blue-500 uppercase">El espejo dice:</p>
          <p className="text-lg text-blue-700 font-mono break-words">{invertido || "..."}</p>
        </div>
      </article>
    </section>
  );
}
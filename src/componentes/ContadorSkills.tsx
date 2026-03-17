import { useState } from 'react';

const BtnPreview = () => {
    const [puntos, setPuntos] = useState<number>(0);

    const increase = () => setPuntos(puntos + 1);
    const decrease = () => setPuntos(puntos - 1);

    return (
        <div className="p-10 transition-colors duration-300 border border-slate-200 rounded-xl bg-white shadow-sm">
            
            <div className="text-center mb-4">
                <span className="text-sm text-slate-500 uppercase font-semibold">Nivel de Habilidad</span>
                <p className="text-4xl font-black text-slate-800">{puntos}</p>
            </div>

            <button 
                className="mt-4 w-full bg-black py-4 rounded-lg hover:opacity-90 transition-all flex flex-col items-center justify-center gap-1" 
                onClick={increase}
            >
                <span className="text-sm text-slate-400">Aprender Tecnología</span>
                <span className="text-2xl text-red-500 font-bold">+1</span>
            </button>

            <button 
                className="mt-4 w-full bg-black py-4 rounded-lg hover:opacity-90 transition-all flex flex-col items-center justify-center gap-1" 
                onClick={decrease}
            >
                <span className="text-sm text-slate-400">Olvidar Tecnología</span>
                <span className="text-2xl text-green-500 font-bold">-1</span>
            </button>
        </div>
    );
};

export default BtnPreview;
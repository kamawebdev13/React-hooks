interface InfoProps {
  nombre: string;
  especialidad: string;
  experiencia: number;
}

const Perfil = ({ nombre, especialidad, experiencia }: InfoProps) => {
  return (
    <div className="w-80 max-w-full mx-auto bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500 box-border">
      <h2 className="text-2xl text-center font-bold text-gray-800 leading-tight">{nombre}</h2>
      <p className="text-indigo-600 text-center font-medium">{especialidad}</p>
      <p className="text-gray-500 text-center text-sm mt-2">{experiencia} años de experiencia</p>
    </div>
  );
}

export default Perfil;
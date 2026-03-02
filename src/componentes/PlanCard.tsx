interface PlanCardProps {
  nombrePlan: string;
  precio: number;
  esPopular: boolean;
}

const PlanCard = ({ nombrePlan, precio, esPopular }: PlanCardProps) => {
  // 1. Definimos los dos estilos por separado
  const estiloNormal = "border-gray-300 bg-white shadow-md";
  const estiloDestacado = "border-blue-500 border-4 bg-blue-50 shadow-2xl scale-105";

  return (
    // 2. Aplicamos el estilo según el valor de esPopular
    <div className={`p-6 rounded-xl transition-all ${esPopular ? estiloDestacado : estiloNormal}`}>
      
      {/* Si es popular, mostramos un pequeño texto arriba */}
      {esPopular && (
        <p className="text-blue-600 font-bold text-xs uppercase">⭐ Recomendado</p>
      )}

      <h2 className="text-2xl font-bold">{nombrePlan}</h2>
      <p className="text-gray-600">{precio}€ al mes</p>
      
      <button className="mt-4 w-full bg-black text-blue-900 py-2 rounded-lg">
        Elegir plan
      </button>
    </div>
  );
};

export default PlanCard;
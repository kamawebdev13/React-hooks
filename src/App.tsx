import StockBadge from './componentes/StockBadge'
import PlanCard from './componentes/PlanCard'
import './componentes/index.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 rounded-lg p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Galería de Productos y Planes
      </h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sección de Stock */}
        <StockBadge productName="Iphone 17" quantity={5} />
        <StockBadge productName="Samsung galaxy" quantity={50} />
        <StockBadge productName="Huawei p9" quantity={0} />
        
        {/* Sección de Planes */}
        <PlanCard nombrePlan="Básico" precio={20} esPopular={false} />
        <PlanCard nombrePlan="Premium" precio={50} esPopular={true} />
      </div>
    </div>
  )
}

export default App
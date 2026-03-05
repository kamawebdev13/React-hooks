
// 2. Definición de la Interface
interface Pedido {
  id: string;
  cliente: string;
  total: number;
  estado: 'Entregado' | 'Pendiente' | 'Cancelado';
}

// 3. Array de pedidos de prueba
const pedidos: Pedido[] = [
  { id: "#ORD-773", cliente: "🔥Jonny Storm🔥", total: 125.50, estado: 'Entregado' },
  { id: "#ORD-892", cliente: "👱‍♀️Sue Storm👱‍♀️", total: 45.00, estado: 'Pendiente' },
  { id: "#ORD-903", cliente: "🪨Ben Grimm 🪨", total: 210.99, estado: 'Entregado' },
  { id: "#ORD-116", cliente: "👨🏼‍🔬Reed Richards👨🏼‍🔬", total: 89.00, estado: 'Cancelado' },
];

const TablaPedidos = () => {
  // 5. Lógica visual para los colores del Badge
  const getBadgeColor = (estado: Pedido['estado']) => {
    switch (estado) {
      case 'Entregado':
        return 'bg-green-100 text-green-800';
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelado':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Panel de Pedidos</h2>
      
      {/* 4. Tabla de Tailwind */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 bg-white text-sm">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-2 font-medium text-gray-900">ID</th>
              <th className="px-4 py-2 font-medium text-gray-900">Cliente</th>
              <th className="px-4 py-2 font-medium text-gray-900">Total</th>
              <th className="px-4 py-2 font-medium text-gray-900">Estado</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td className="px-4 py-2 font-medium text-gray-700">{pedido.id}</td>
                <td className="px-4 py-2 text-gray-700">{pedido.cliente}</td>
                <td className="px-4 py-2 text-gray-700">${pedido.total.toFixed(2)}</td>
                <td className="px-4 py-2">
                  <span className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 font-semibold ${getBadgeColor(pedido.estado)}`}>
                    {pedido.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaPedidos;
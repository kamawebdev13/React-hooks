const ListaTareas = () => {
  const Tareas = [
    { id: "#ORD-773", task: "Subir Repo", completada: false },
    { id: "#ORD-892", task: "Debugging", completada: true },
    { id: "#ORD-903", task: "Api Testing", completada: false },
    { id: "#ORD-116", task: "Subir componentes", completada: true },
  ];

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800">Lista de Tareas</h2>
      </div>

      <ul className="divide-y divide-slate-100">
        {Tareas.map((item) => (
          <li
            key={item.id}
            className={`p-4 flex justify-between items-center ${
              item.completada ? "line-through text-slate-400 bg-slate-50" : "text-red-600"
            }`}
          >
            <span>{item.task}</span>
            <span className="text-xs text-slate-400 font-mono">{item.id}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;

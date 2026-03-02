interface NotificacionProps {
  mensaje: string;
  tipo: 'exito' | 'alerta' | 'error';
}

const Notificacion = ({ mensaje, tipo }: NotificacionProps) => {
  return (
    <div className={`
      p-4 rounded border-l-4 
      ${tipo === 'exito' 
        ? 'bg-green-100 text-green-800 border-green-500' 
        : tipo === 'alerta' 
          ? 'bg-yellow-100 text-yellow-800 border-yellow-500' 
          : 'bg-red-100 text-red-800 border-red-500'
      }
    `}>
      <p>{mensaje}</p>
    </div>
  );
};

export default Notificacion;
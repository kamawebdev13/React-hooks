import Notificacion from './componentes/Notificacion';
import './componentes/index.css'

function AppDos() {
  return (
    <div className="p-10 flex flex-col gap-4 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Centro de Notificaciones</h1>
      
      <Notificacion 
        mensaje="¡Tu perfil ha sido actualizado con éxito!" 
        tipo="exito" 
      />

      <Notificacion 
        mensaje="Tu suscripción vencerá pronto. Renueva ahora." 
        tipo="alerta" 
      />

      <Notificacion 
        mensaje="Hubo un error al procesar el pago." 
        tipo="error" 
      />
    </div>
  );
}

export default AppDos;
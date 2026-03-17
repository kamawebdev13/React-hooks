import { useState } from 'react';

const ButtonPreview = () => {

    const [isConnected, setIsConnected] = useState<boolean>(false);

    const TurnBtn = () => setIsConnected(!isConnected);


return (
    <div className={`p-10 transition-colors duration-300 ${isConnected ? 'bg-green-300':'bg-gray-400' }`}>
        <button className="mt-4 w-full bg-black text-blue-900 py-2 rounded-lg" onClick={TurnBtn}>{isConnected ? 'CONECTADO':'DESCONECTADO' }</button>
    </div>

);

};


export default ButtonPreview;

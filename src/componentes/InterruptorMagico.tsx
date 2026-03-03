import { useState } from 'react';

const ButtonPreview = () => {

    const [isOn, setIsOn] = useState<boolean>(false);

    const TurnBtn = () => setIsOn(!isOn);


return (
    <div className={`p-10 transition-colors duration-300 ${isOn ? 'bg-yellow-300':'bg-gray-400' }`}>
        <button className="mt-4 w-full bg-black text-blue-900 py-2 rounded-lg" onClick={TurnBtn}>{isOn ? 'APAGAR':'ENCENDER' }</button>
    </div>

);

};


export default ButtonPreview;

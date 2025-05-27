{/*import { useState } from "react";*/}

function Sidebar() {
  {/*const [openModal, setOpenModal] = useState(false);*/}

  return (
        <div>
        {/*{openModal && (*/}
            <div className="fixed shadow-4xl shadow-black/80 rounded-2xl top-0 left-0 w-[60vw] md:w-[20vw] h-full bg-black z-50 text-white p-[2vw]">
            <button
                className="absolute top-4 right-4 text-2xl font-semibold">
                X
            </button>
                {/*Los datos del sidebar */}
            <nav className="mt-12 flex flex-col py-[6vh] mx-[2vw] gap-6 text-lg">
                <a className="cursor-pointer">Inicio</a>
                <a className="cursor-pointer">Los 177 Pueblos Mágicos</a>
                <a className="cursor-pointer">Estados</a>
                <a className="cursor-pointer">México Desconocido</a>
            </nav>
                {/*Empiezan los derechos*/} 
            <div className="absolute bottom-4 text-xs left-[2vw] text-gray-400">
                © 2024 Pueblos Mágicos | México Desconocido
            </div>
            </div>
        {/*)}*/}
        </div>
    );
    }
export default Sidebar;

import Imagen from "../../assets/images/Logo.png";

type Props = {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
};

function Sidebar({ sidebar, setSidebar }: Props) {
  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-[60vw]  md:w-[20vw] z-50
        bg-black text-white p-[2vw] rounded-r-2xl  shadow-[0_0_40px_rgba(0,0,0,0.9)] 
        transform transition-transform duration-300 ease-in-out
        ${sidebar ? "translate-x-0" : "-translate-x-full"}
      `}
    >

      <div className="flex mt-[2.5vh] md:mt-[1vh] items-center justify-center ">
        <img src={Imagen} alt="Logo" className="h-[3.2vh] md:h-[5vh]" />
      </div>

      {/* Botón para cerrar */}
      <button
        onClick={() => setSidebar(false)}
        className="absolute top-4 right-4 text-2xl font-semibold cursor-pointer"
      >
        X
      </button>

      {/* Menú */}
      <nav className="mt-12 flex flex-col mx-[2vw] gap-6 text-lg">
        <a className="cursor-pointer">Inicio</a>
        <a className="cursor-pointer">Los 177 Pueblos Mágicos</a>
        <a className="cursor-pointer">Estados</a>
        <a className="cursor-pointer">México Desconocido</a>
      </nav>

      {/* Derechos */}
      <div className="absolute bottom-4 text-xs left-[2vw] text-gray-400">
        © 2024 Pueblos Mágicos | México Desconocido
      </div>
    </div>
  );
}

export default Sidebar;

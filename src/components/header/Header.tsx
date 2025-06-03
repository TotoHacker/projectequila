import { useState } from "react";
import SearchBar from "./SearchBar";
import Imagen from "../../assets/images/Logo.png"
import Hamburguesa from "../../assets/hamburgesaIcono.svg"

  type Props = {
    setSidebar: (value: boolean) => void;
  };

const Header = ({ setSidebar }: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="bg-black text-white  w-full relative">

      <div className="p-4 md:p-6 lg:p-8 flex flex-wrap items-center justify-between">
        <button className="cursor-pointer" onClick={() => setSidebar(true)}>
          <img src={Hamburguesa} alt="Barras" className="h-[4vh] md:h-[6vh]" />
        </button>
      
        
        <div className="flex w-[70vw] sm:h-20 sm:w-auto">
            <img src={Imagen} alt="Logo" className="w-full h-full" />
        </div>

        <button onClick={() => setShowSearch(!showSearch)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
        </button>
        </div>
      {showSearch && <SearchBar />}
    </div>
  );
};

export default Header;

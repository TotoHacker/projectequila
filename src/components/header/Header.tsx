import { useState } from "react";
import SearchBar from "./SearchBar";
import Imagen from "../../assets/images/Logo.png"

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="bg-black text-white p-4 md:p-6 lg:p-8 flex flex-col items-center justify-between w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button>
          </button>
          <div className="flex items-center space-x-2">
            <img src={Imagen} alt="Logo" className="h-20" />
          </div>
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

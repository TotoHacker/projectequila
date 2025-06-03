import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="w-full flex justify-center absolute top-[100%] z-[100] bg-black/60 p-[4vh]">
        
      <div className="flex items-center bg-white text-black px-4 py-2 rounded-full w-[80%] md:w-2/3 shadow-lg">
        <input
          type="text"
          placeholder="Busca un pueblo o estado..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow outline-none text-lg placeholder:text-gray-500"
        />
        <svg
          className="w-6 h-6 text-black cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;

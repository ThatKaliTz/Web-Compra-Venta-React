import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useHistory si estás usando react-router-dom
import Lupa from "../assets/lupa.svg";

export function SearchBar({ section }) {
  const [searchValue, setSearchValue] = useState(""); // Estado para almacenar el valor de búsqueda
  const navigate = useNavigate(); // Obtiene el objeto de historial de navegación

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Si se presiona Enter
      switch (section) {
        case "search":
          {
            navigate(`/search/${searchValue}`); // Redirecciona a la ruta "/search/<valor de búsqueda>"
            setSearchValue("");
          }
          break;
        case "category":
          // TODO
          break;
        default:
      }
    }
  };

  const handleChange = (event) => {
    setSearchValue(event.target.value); // Actualiza el estado con el valor del input
  };

  return (
    <div className="flex -my-2 p-4">
      <div className="relative flex-1">
        <input
          type="search"
          id="searchInput"
          className="block w-full py-2 pl-10 pr-4 rounded-lg text-sm text-gray-500 border border-gray-300 focus:outline-none focus:border-amber-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:border-amber-500"
          placeholder="Buscar producto..."
          value={searchValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress} // Agrega el controlador de eventos para Enter
        />
        <div className="absolute inset-y-0 left-0 pl-1 ml-2 flex items-center pointer-events-none">
          <img src={Lupa} alt="Lupa" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

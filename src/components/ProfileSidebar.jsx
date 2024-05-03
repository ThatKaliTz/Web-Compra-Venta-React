import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProfileSidebar = ({
  isWishlist,
  listsInfo,
  onOptionSelect,
  setHasLists,
}) => {
  const [selectedOption, setSelectedOption] = useState(0);

  useEffect(() => {
    setHasLists(listsInfo.length > 0);
  }, [listsInfo, setHasLists]);

  useEffect(() => {
    setSelectedOption(0);
    if (listsInfo.length > 0) {
      onOptionSelect(listsInfo[0].idList);
    }
  }, []);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    if (listsInfo.length > 0) {
      onOptionSelect(listsInfo[index].idList);
    }
  };

  useEffect(() => {
    setSelectedOption(0);
    if (listsInfo.length > 0) {
      onOptionSelect(listsInfo[0].idList);
    }
  }, [isWishlist]);

  return (
    <div className="flex flex-col w-full md:w-64 bg-white md:border-e border-gray-200 pt-7 pb-2 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700">
      {/* Title */}
      <div className="px-6">
        <h1 className="flex-none text-xl font-bold dark:text-white">
          {isWishlist ? "Lista de deseos" : "Mis productos"}
        </h1>
      </div>

      {/* Options */}
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1">
          {/* Renderizar las opciones de acuerdo a isWishlist */}
          {isWishlist ? (
            // Opciones para lista de deseos
            listsInfo.length === 0 ? (
              <li>
                <p className="text-sm  text-slate-700 dark:text-white">
                  No hay listas disponibles
                </p>
              </li>
            ) : (
              listsInfo.map((item, index) => (
                <li key={index}>
                  <Link
                    className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg ${
                      selectedOption === index
                        ? "bg-amber-100 hover:bg-amber-100"
                        : "hover:bg-gray-100"
                    } dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                    onClick={() => handleOptionClick(index)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))
            )
          ) : (
            // Opciones para mis productos
            <>
              <li>
                <Link
                  className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg ${
                    selectedOption === 0
                      ? "bg-amber-100 hover:bg-amber-100"
                      : "hover:bg-gray-100"
                  } dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                  onClick={() => handleOptionClick(0)}
                >
                  Aprobados
                </Link>
              </li>
              <li>
                <Link
                  className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg ${
                    selectedOption === 1
                      ? "bg-amber-100 hover:bg-amber-100"
                      : "hover:bg-gray-100"
                  } dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                  onClick={() => handleOptionClick(1)}
                >
                  Pendientes de revisión
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default ProfileSidebar;

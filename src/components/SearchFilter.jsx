import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Price from "../assets/price.svg";
import Category from "../assets/category.svg";
import Stock from "../assets/stock.svg";

const SearchFilter = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleCategorySelect = (index) => {
    setSelectedCategory(index === selectedCategory ? null : index);
    navigate(`/search/${categories[index]}`);
  };

  const handleStockSelect = (index) => {
    setSelectedStock(index === selectedStock ? null : index);
  };
  const stockOptions = ["Con stock (5+)", "Sin Stock (10+)"];
  const categories = [
    "Ropa",
    "Electronica",
    "Hogar y jardín",
    "Salud y Belleza",
    "Juguetes y juegos",
    "Libros y medios",
    "Muebles y decoracion",
    "Joyería y Relojes",
    "Automóviles y Accesorios",
    "Artículos para Mascotas",
  ];

  return (
    <div
      id="application-SearchFilter"
      className="flex flex-col w-full md:w-64 bg-white md:border-e border-gray-200 pt-7 pb-2 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
    >
      {/* Title */}
      <div className="px-6">
        <h1 className="flex-none text-xl font-bold dark:text-white">Filtros</h1>
      </div>

      {/* Options */}
      <nav
        className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
        data-hs-accordion-always-open
      >
        <ul className="space-y-1.5">
          {/* Categorias */}
          <li className="hs-accordion flex-col md:hidden" id="users-accordion">
            <Option title="Categoría" img={Category} />
            <div
              id="users-accordion-sub"
              className="hs-accordion-content w-full pl-6 overflow-hidden transition-[height] duration-300 hidden"
            >
              <ul className="space-y-1 border-t border-gray-200 p-4">
                {categories.map((category, index) => (
                  <FilterItem
                    key={index}
                    text={category}
                    selected={index === selectedCategory}
                    onSelect={() => handleCategorySelect(index)}
                  />
                ))}
              </ul>
            </div>
          </li>
          {/* Stock */}
          <li className="hs-accordion" id="users-accordion">
            <Option title="Existencia" img={Stock} />
            <div
              id="users-accordion-sub"
              className="hs-accordion-content w-full pl-6 overflow-hidden transition-[height] duration-300 hidden"
            >
              <ul className="space-y-1 border-t border-gray-200 p-4">
                {stockOptions.map((option, index) => (
                  <FilterItem
                    key={index}
                    text={option}
                    selected={index === selectedStock}
                    onSelect={() => handleStockSelect(index)}
                  />
                ))}
              </ul>
            </div>
          </li>

          {/* Precio */}
          <li className="hs-accordion" id="users-accordion">
            <Option title="Precio" img={Price} />
            {/* Filtros */}
            <div
              id="users-accordion-sub"
              className="hs-accordion-content w-full pl-6 overflow-hidden transition-[height] duration-300 hidden"
            >
              <PriceFilter />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Option = ({ title, img }) => {
  return (
    <>
      <button
        type="button"
        className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-amber-600 hs-accordion-active:hover:bg-transparent text-base text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        <img src={img} className="w-6" alt="Price" />
        {title}
        <Arrows />
      </button>
    </>
  );
};

const FilterItem = ({ text, selected, onSelect }) => {
  const handleCheckboxChange = () => {
    onSelect(text);
  };

  return (
    <li>
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={handleCheckboxChange}
          className="size-5 rounded border-gray-300 text-amber-600 bg-gray-100 focus:ring-amber-500 dark:focus:ring-amber-600"
        />
        <span className="text-sm font-medium text-gray-700">{text}</span>
      </label>
    </li>
  );
};

const PriceFilter = () => {
  // Estado para almacenar los valores de los campos de texto
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (event) => {
    // Expresión regular para aceptar solo números y un punto decimal
    const regex = /^[0-9.]*$/;

    // Verifica si el valor ingresado coincide con la expresión regular
    if (regex.test(event.target.value)) {
      // Actualiza el estado solo si el valor ingresado es válido
      setMinPrice(event.target.value);
    }
  };

  const handleMaxPriceChange = (event) => {
    // Expresión regular para aceptar solo números y un punto decimal
    const regex = /^[0-9.]*$/;

    // Verifica si el valor ingresado coincide con la expresión regular
    if (regex.test(event.target.value)) {
      // Actualiza el estado solo si el valor ingresado es válido
      setMaxPrice(event.target.value);
    }
  };

  // Función para reiniciar los valores de los campos de texto
  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
  };

  // Lógica para filtrar los productos según los precios ingresados
  // Aquí puedes implementar la lógica de filtrado que necesites

  return (
    <>
      <header className="flex items-center justify-between p-4">
        <span className="text-sm font-medium text-gray-700">
          De ${minPrice || 0} a ${maxPrice || 0}
        </span>

        <button
          type="button"
          className="text-sm font-medium text-gray-900 underline underline-offset-4"
          onClick={handleReset}
        >
          Reiniciar
        </button>
      </header>
      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between gap-4">
          <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">$</span>

            <input
              type="text"
              id="FilterPriceFrom"
              placeholder="Min"
              value={minPrice}
              onChange={handleMinPriceChange}
              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm font-medium"
            />
          </label>

          <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600">$</span>

            <input
              type="text"
              id="FilterPriceTo"
              placeholder="Máx"
              value={maxPrice}
              onChange={handleMaxPriceChange}
              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm font-medium"
            />
          </label>
        </div>
      </div>
      <div className="flex justify-center mt-1">
        <button
          type="button"
          className="py-3 px-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Filtrar
        </button>
      </div>
    </>
  );
};

const Arrows = () => {
  return (
    <>
      <svg
        className="hs-accordion-active:block ms-auto hidden w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
      <svg
        className="hs-accordion-active:hidden ms-auto block w-4 h-4"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>{" "}
    </>
  );
};

export default SearchFilter;

/*
Mas acordeones 
          <li className="hs-accordion" id="users-accordion">
            <Option title="Price" img={Price} />
            <div
              id="users-accordion-sub"
              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
            >
              <ul
                className="hs-accordion-group ps-3 pt-2"
                data-hs-accordion-always-open
              >
                <li className="hs-accordion" id="users-accordion-sub-1">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sub Menu 1
                    <svg
                      className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="users-accordion-sub-1-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
                  >
                    <ul className="pt-2 ps-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="hs-accordion" id="users-accordion-sub-2">
                  <button
                    type="button"
                    className="hs-accordion-toggle w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sub Menu 2
                    <svg
                      className="hs-accordion-active:block ms-auto hidden w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                    <svg
                      className="hs-accordion-active:hidden ms-auto block w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>

                  <div
                    id="users-accordion-sub-2-child"
                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden ps-2"
                  >
                    <ul className="pt-2 ps-2">
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          href="#"
                        >
                          Link 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

*/

import React, { useState } from "react";
import QuantityButton from "./QuantityButton";

export const SellDetails = ({ onClose, onAccept, products }) => {
  // Estado para almacenar si se ha seleccionado una producta
  const [isProductSelected, setIsProductSelected] = useState(false);

  // Función para manejar el cambio de selección de producta
  const handleProductSelectionChange = () => {
    setIsProductSelected(true);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    if (!isProductSelected) {
      // Muestra un mensaje de error en la interfaz
      setIsProductSelected(false);
      return; // Evitar que se envíe el formulario
    }
    onAccept();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10 w-full max-w-lg overflow-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Vender un producto
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Seleccione el producto que desea vender.
            </p>
          </div>

          <div className="mt-5">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              O
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Producta de productas */}
                <div className="p-2 flex flex-col h-60 space-y-4 overflow-y-scroll">
                  {products.map((product, index) => (
                    <ProductRow
                      key={index}
                      product={product}
                      onChange={handleProductSelectionChange}
                    />
                  ))}
                </div>

                {/* Cantidad */}
                <div className="flex flex-col space-y-6 justify-center items-center">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-gray-600">
                      Cantidad:
                    </p>
                    <QuantityButton maxLimit={10} />
                  </div>
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-600">
                      Precio:
                    </label>
                    <input
                      type="text"
                      name="product-price"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Precio de mi producto"
                      required
                    />
                  </div>
                </div>
                {/* Botones */}
                <div className="flex justify-center items-center gap-4 mt-4">
                  <button
                    onClick={onClose}
                    className=" flex-grow py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className={`flex-grow py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${
                      isProductSelected ? "" : "opacity-50 pointer-events-none"
                    }`}
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductRow = ({ onChange, product }) => {
  return (
    <div className="w-full h-20 md:h-80 justify-between items-center p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <input
          id="bordered-radio-1"
          type="radio"
          name="selected-product"
          value=""
          className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600"
          onChange={onChange}
          required
        />
        <div className="w-1/12">
          <img
            src={product.img}
            alt="User Profile"
            className="w-auto rounded-full object-cover"
          />
        </div>
        <div className="w-3/4 flex flex-col">
          <span className="text-base font-semibold text-gray-800 dark:text-white">
            {product.title}
          </span>
          <p className="text-xs text-gray-500 truncate">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellDetails;

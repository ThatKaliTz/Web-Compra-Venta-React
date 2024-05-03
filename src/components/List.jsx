import React, { useState } from "react";
import Checkbox from "./Checkbox";

export const AddList = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10 w-full max-w-lg overflow-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Crear una lista
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Ingrese los datos de su lista
            </p>
          </div>

          <div className="mt-5">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              O
            </div>

            {/* Formulario */}
            <form>
              <div className="grid gap-y-4">
                {/* Imagen */}
                <div className="flex justify-center items-center gap-5">
                  <img
                    className="inline-block items-center w-16 h-16 object-cover rounded-full ring-2 ring-white dark:ring-gray-800"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
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
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" x2="12" y1="3" y2="15"></line>
                        </svg>
                        Subir foto
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mas info */}
                <div className="space-y-3">
                  <label
                    htmlFor="list-name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Nombre de la lista
                  </label>
                  <input
                    name="list-name"
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Nombre de la lista"
                    required
                  />

                  <label
                    htmlFor="list-description"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Descripción
                  </label>
                  <textarea
                    name="list-description"
                    className="py-3 px-4 block w-full h-32 resize-none border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Descripción"
                    required
                  />
                </div>

                <Checkbox label="Lista privada" />

                {/* Botones */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={onClose}
                    className=" flex-grow py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className=" flex-grow py-3 px-4  inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Agregar lista
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

export const EditList = ({ onClose, productList, idListSelected }) => {
  const list = productList.find((list) => list.idList === idListSelected);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10 w-full max-w-lg overflow-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Editar una lista
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Editar los datos de su lista
            </p>
          </div>

          <div className="mt-5">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              O
            </div>

            {/* Formulario */}
            <form>
              <div className="grid gap-y-4">
                {/* Imagen */}
                <div className="flex justify-center items-center gap-5">
                  <img
                    className="inline-block items-center w-16 h-16 object-cover rounded-full ring-2 ring-white dark:ring-gray-800"
                    src={list.img}
                    alt=""
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
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
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" x2="12" y1="3" y2="15"></line>
                        </svg>
                        Subir foto
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mas info */}
                <div className="space-y-3">
                  <label
                    htmlFor="list-name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Nombre de la lista
                  </label>
                  <input
                    name="list-name"
                    type="text"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Nombre de la lista"
                    defaultValue={list.title}
                    required
                  />

                  <label
                    htmlFor="list-description"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Descripción
                  </label>
                  <textarea
                    name="list-description"
                    className="py-3 px-4 block w-full h-32 resize-none border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Descripción"
                    defaultValue={list.description}
                    required
                  />
                </div>

                <Checkbox label="Lista privada" isPrivate={list.isPrivate} />

                {/* Botones */}
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={onClose}
                    className=" flex-grow py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className=" flex-grow py-3 px-4  inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Editar lista
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

export const SelectList = ({ onClose, onAccept, lists }) => {
  // Estado para almacenar si se ha seleccionado una lista
  const [isListSelected, setIsListSelected] = useState(false);

  // Función para manejar el cambio de selección de lista
  const handleListSelectionChange = () => {
    setIsListSelected(true);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isListSelected) {
      // Muestra un mensaje de error en la interfaz
      setIsListSelected(false);
      return; // Evitar que se envíe el formulario
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10 w-full max-w-lg overflow-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Agregar a lista
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Seleccione una lista para guardar el producto.
            </p>
          </div>

          <div className="mt-5">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              O
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Lista de listas */}
                <div className="p-2 flex flex-col h-60 space-y-4 overflow-y-scroll">
                  {lists && lists.length > 0 ? (
                    lists.map((list, index) => (
                      <ListRow
                        key={index}
                        list={list}
                        onChange={handleListSelectionChange}
                      />
                    ))
                  ) : (
                    <div className="flex justify-center items-center flex-grow">
                      <p className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400">
                        No hay listas disponibles. Crea una en Perfil.{" "}
                      </p>
                    </div>
                  )}
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
                    onClick={onAccept}
                    className={`flex-grow py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 ${
                      isListSelected ? "" : "opacity-50 pointer-events-none"
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

const ListRow = ({ onChange, list }) => {
  return (
    <div className="w-full h-80 justify-between items-center p-4 rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center space-x-4">
        <input
          id="bordered-radio-1"
          type="radio"
          name="selected-list"
          value=""
          className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600"
          onChange={onChange}
          required
        />
        <div className="w-1/12">
          <img
            src={list.img}
            alt="User Profile"
            className="w-auto rounded-full object-cover"
          />
        </div>
        <div className="w-3/4 flex flex-col">
          <span className="text-base font-semibold text-gray-800 dark:text-white">
            {list.title}
          </span>
          <p className="text-xs text-gray-500 truncate">{list.description}</p>
        </div>
      </div>
    </div>
  );
};

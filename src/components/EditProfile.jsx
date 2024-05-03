import { useContext, useState, useRef } from "react";
import Checkbox from "./Checkbox";
import { AuthContext } from "../AuthContext";

const EditProfile = ({ onClose, profile }) => {
  const { userData, setUserData } = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);
  const [arrayBuffer, setArrayBuffer] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Obtener el primer archivo seleccionado
    const reader = new FileReader();

    reader.onloadend = () => {
      // Cuando se carga la imagen, actualiza el estado con la URL de la imagen
      setImage(reader.result);
    };

    if (file) {
      // Lee el archivo como URL
      reader.readAsDataURL(file);
    }

    // handleSaveImage();
  };

  const handleUploadButtonClick = () => {
    // Hacer clic en el input file programáticamente
    fileInputRef.current.click();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 z-10 w-full max-w-lg overflow-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Edición de datos
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Ingrese los datos a editar
            </p>
          </div>

          <div className="mt-5">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              O
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="full-name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Nombre y Apellido
                  </label>
                  <div className="sm:flex">
                    <input
                      name="nombre"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Nombre"
                      defaultValue={profile.name}
                    />
                    <input
                      name="apellidoP"
                      type="text"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Apellido"
                      defaultValue={profile.lastName}
                    />
                  </div>
                </div>
                {/* Imagen */}
                <div className="flex justify-center items-center gap-5">
                  <img
                    className="inline-block items-center w-16 h-16 object-cover rounded-full ring-2 ring-white dark:ring-gray-800"
                    src={profile.img}
                    alt=""
                  />
                  <div className="flex gap-x-2">
                    <div>
                      <button
                        type="button"
                        onClick={handleUploadButtonClick}
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
                    {/* Input file oculto */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                {/* Mas info */}
                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Correo Electrónico"
                    defaultValue={profile.email}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    name="contrasenia"
                    type="password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Contraseña"
                    defaultValue={profile.password}
                    required
                  />
                  <label
                    htmlFor="confirm-password"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Confirmar Contraseña
                  </label>
                  <input
                    name="confirmPassword"
                    type="password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Confirmar Contraseña"
                    defaultValue={profile.password}
                    required
                  />
                </div>

                <Checkbox label="Perfil privado" />

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
                    Editar
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

export default EditProfile;

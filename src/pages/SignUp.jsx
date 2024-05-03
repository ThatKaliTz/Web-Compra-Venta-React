import Title from "../components/Title";
import DatePicker from "react-datepicker";
import { useContext, useState, useRef } from "react";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Alert from "../components/Alert";
import { InfoMessage } from "../components/Message";

export function SignUp() {
  return (
    <>
      <Content />
    </>
  );
}

const Content = () => {
  const navigate = useNavigate();
  const { setIsLogged, setUserData } = useContext(AuthContext);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
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
  };

  const handleUploadButtonClick = () => {
    // Hacer clic en el input file programáticamente
    fileInputRef.current.click();
  };

  // Estado para almacenar los valores de los inputs
  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      const form = event.target;
      const formData = new FormData(form);
      // Agregar la imagen al FormData
      formData.append("fotoPerfil", image);

      // Verificar el contenido de formData antes de enviarlo
      const jsonData = JSON.stringify(Object.fromEntries(formData));
      console.log("JSON data:", jsonData);
      fetch("http://localhost/BDM---PWCI/api/registrarUsuario.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Respuesta del servidor:", data);
          if (data.error) {
            console.error("Error del servidor:", data.error);
            setErrorMsg(data.error);
          } else {
            setIsModalOpen(true);
            setIsAlertOpen(false);
          }
        })
        .catch((error) => {
          console.error("Error al enviar datos:", error);
        });
    } else {
      // Si no hay imagen, simplemente envía el formulario sin la imagen
      console.error("No hay imagen seleccionada");
      setErrorMsg("No hay imagen seleccionada");
    }
  };

  const setErrorMsg = (msg) => {
    setType("Error");
    setMessage(msg);
    setIsAlertOpen(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Modal
  const handleModalClick = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  // Sign up area
  const handleCancelClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex w-full justify-center items-center py-14">
        <div className="w-5/6 px-10 md:px-28 py-4 bg-white border  border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700  overflow-auto">
          {isAlertOpen && <Alert type={type} message={message} />}
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Perfil de usuario
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Llena los campos para poder registrarte.
              </p>
            </div>
            <div className="mt-5">
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                O
              </div>
              <form onSubmit={handleSubmit}>
                {" "}
                <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                  <div className="sm:col-span-3">
                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                      Foto de perfil
                    </label>
                  </div>

                  <div className="sm:col-span-9">
                    {/* Imagen */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        className="inline-block items-center w-16 h-16 object-cover rounded-full ring-2 ring-white dark:ring-gray-800"
                        src={
                          image
                            ? image
                            : "https://i.ytimg.com/vi/2cFnfD4iZzM/maxresdefault.jpg"
                        }
                        alt="Foto de perfil"
                        name="fotoPerfil"
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
                  </div>

                  <div className="sm:col-span-3">
                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                      Nombre
                    </label>
                  </div>

                  <div className="sm:col-span-9">
                    <div className="sm:flex">
                      <input
                        type="text"
                        name="nombre"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Ingrese su nombre"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                      Apellidos
                    </label>
                  </div>

                  <div className="sm:col-span-9">
                    <div className="sm:flex">
                      <input
                        type="text"
                        name="apellidoP"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Paterno"
                        required
                      />
                      <input
                        type="text"
                        name="apellidoM"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Materno"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                      Usuario
                    </label>
                  </div>

                  <div className="sm:col-span-9">
                    <div className="sm:flex">
                      <input
                        type="text"
                        name="nombreUsuario"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Ingrese su nombre de usuario"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                      Correo electrónico
                    </label>
                  </div>

                  <div className="sm:col-span-9">
                    <input
                      type="email"
                      name="email"
                      className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                      placeholder="Ingrese su correo electrónico"
                      required
                    />
                  </div>

                  <div className="sm:col-span-3">
                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                      Contraseña
                    </label>
                  </div>

                  <div className="sm:col-span-9">
                    <div className="space-y-2">
                      <input
                        type="password"
                        name="contrasenia"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Ingrese su contraseña"
                        required
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        placeholder="Confirme su contraseña"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="inline-block">
                      <label
                        htmlFor="af-account-phone"
                        className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200"
                      >
                        Fecha de nacimiento
                      </label>
                    </div>
                  </div>

                  <Birthdate />

                  <GenderSelector />
                </div>
                <div className="mt-5 flex justify-end gap-x-2">
                  <button
                    onClick={handleCancelClick}
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Cancelar
                  </button>

                  <button
                    type="submit"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <InfoMessage
        isOpen={isModalOpen}
        title="Cuenta exitosamente creada"
        message="Ahora puedes iniciar sesión."
        onAccept={handleModalClick}
      />
    </>
  );
};

const Birthdate = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const maxDate = new Date(); // Obtiene la fecha actual

  return (
    <div className="sm:col-span-9">
      <div className="sm:flex">
        <DatePicker
          className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 w-full"
          name="fechaNacim"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText="Seleccionar fecha"
          dateFormat="dd/MM/yyyy"
          yearDropdownItemNumber={15}
          showYearDropdown
          required
          maxDate={maxDate} // Establece la fecha máxima como la fecha actual
        />
      </div>
    </div>
  );
};

const GenderSelector = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <>
      <div className="sm:col-span-3">
        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
          Sexo
        </label>
      </div>

      <div className="sm:col-span-9">
        <div className="sm:flex">
          <label className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            <input
              type="radio"
              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-amber-500 dark:checked:border-amber-500 dark:focus:ring-offset-gray-800"
              id="af-account-gender-checkbox-male"
              name="sexo"
              value="male"
              checked={selectedGender === "male"}
              onChange={handleGenderChange}
              required
            />
            <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
              Masculino
            </span>
          </label>

          <label className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            <input
              type="radio"
              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-amber-500 dark:checked:border-amber-500 dark:focus:ring-offset-gray-800"
              id="af-account-gender-checkbox-female"
              name="sexo"
              value="female"
              checked={selectedGender === "female"}
              onChange={handleGenderChange}
            />
            <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
              Femenino
            </span>
          </label>

          <label className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            <input
              type="radio"
              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-amber-500 dark:checked:border-amber-500 dark:focus:ring-offset-gray-800"
              id="af-account-gender-checkbox-other"
              name="sexo"
              value="other"
              checked={selectedGender === "other"}
              onChange={handleGenderChange}
            />
            <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
              Otro
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  return (
    <>
      <div className="sm:col-span-3">
        <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
          Rol de usuario
        </label>
      </div>

      <div className="sm:col-span-9">
        <div className="sm:flex">
          <label className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            <input
              type="radio"
              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-amber-500 dark:checked:border-amber-500 dark:focus:ring-offset-gray-800"
              id="af-account-role-checkbox-comprador"
              name="sexo"
              value="comprador"
              checked={selectedRole === "comprador"}
              onChange={handleRoleChange}
              required
            />
            <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
              Comprador
            </span>
          </label>

          <label className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
            <input
              type="radio"
              className="shrink-0 mt-0.5 border-gray-300 rounded-full text-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-amber-500 dark:checked:border-amber-500 dark:focus:ring-offset-gray-800"
              id="af-account-role-checkbox-vendedor"
              name="sexo"
              value="vendedor"
              checked={selectedRole === "vendedor"}
              onChange={handleRoleChange}
            />
            <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
              Vendedor
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

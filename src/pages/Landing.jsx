import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import Image from "../assets/img/img-landing.png";

export function Landing() {
  return (
    <div className="w-full mb-8 py-6 md:py-12 md:px-12 lg:px-36 flex flex-col justify-center items-center">
      <div className="flex flex-col space-y-12 justify-center content-center	 items-center md:flex-row md:justify-between w-full px-4">
        <Welcome />
        <LoginForm />
      </div>
    </div>
  );
}

const Welcome = () => {
  return (
    <div className="my-3 md:my-12 py-6 px-4 md:mb-12 w-full md:w-[50%]">
      <div className="md:mt-1 flex justify-center items-center pr-0 sm:pl-2 sm:pr-4">
        <img
          src={Image}
          alt="Imagen Principal"
          className="w-5/6 object-cover"
        />
      </div>
      <h1 className="mb-4 font-bold uppercase text-gray-800 text-4xl lg:text-5xl dark:text-gray-200">
        ¡Encuentra los mejores productos!
      </h1>
      <p className="text-gray-600 ">
        ¡Bienvenido a MyStore! En nuestro sitio web, encontrarás una amplia
        selección de productos cuidadosamente elegidos para satisfacer todas tus
        necesidades. Desde dispositivos electrónicos hasta moda y productos para
        el hogar, estamos aquí para ofrecerte la mejor calidad y variedad.
      </p>
    </div>
  );
};

const LoginForm = () => {
  const { setIsLogged, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [message, setMessage] = useState("");

  const useHandle = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    validarLogin(formData);
  };

  const validarLogin = async (formData) => {
    try {
      const response = await fetch(
        "http://localhost/BDM---PWCI/api/validarLogin.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.get("email"),
            contrasenia: formData.get("contrasenia"),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error en la solicitud al servidor");
      }

      const data = await response.json();
      console.log("Respuesta del servidor:", data);

      if (data.error) {
        console.error("Error en el inicio de sesión:", data.error);
        setMessage(data.error);
        setIsAlertOpen(true);
      } else {
        setIsLogged(true);
        setUserData(data);
        console.log("Usuario autenticado:", data.idUsuario);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="border-2 w-full md:w-[40%] border-gray-700 rounded-xl px-4 py-6 sm:px-14 sm:py-8">
      <div className="text-center">
        <h1 className="block text-2xl font-bold text-gray-800 ">
          Inicio de sesión
        </h1>
        <div className="flex justify-center mt-2 items-center space-x-2">
          <p className="text-sm text-gray-600 ">¿No tienes una cuenta?</p>
          <Link
            to="/signUp"
            className="text-amber-500 text-sm decoration-2 hover:underline font-medium"
          >
            Haz clic aquí
          </Link>
        </div>
      </div>
      <div className="mt-5">
        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
          O
        </div>
        <form onSubmit={useHandle} className="space-y-4">
          <section>
            <label htmlFor="email" className="block text-sm mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
              required
              aria-describedby="email-error"
            />
          </section>

          <section>
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm mb-2">
                Contraseña
              </label>
            </div>
            <div className="relative">
              <input
                type="password"
                name="contrasenia"
                className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                required
                aria-describedby="password-error"
              />
            </div>
          </section>

          {isAlertOpen && <p className="text-red-500 text-sm ">{message}</p>}

          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 py-4 px-8 justify-center items-center gap-x-2 text-sm font-semibold rounded-lg bg-amber-500 text-white hover:bg-amber-700"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

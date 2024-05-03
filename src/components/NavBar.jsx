import { Link } from "react-router-dom";
import LogoSVG from "../assets/logo.svg";
import LogoIMG from "../assets/logo-2.png";
import { SearchBar } from "./SearchBar";
import { Categories } from "./Categories";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export function NavBar() {
  const { isLogged, userData } = useContext(AuthContext);

  let userName = "User";
  let userImage = "";
  if (isLogged && userData) {
    userName = userData.nombre;
    userImage = userData.fotoPerfil;
  } else {
    userName = "Invitado";
    userImage = "URL_por_defecto_para_invitado";
  }

  const Logo = () => {
    return (
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <Link className="block text-amber-500" to="/home">
          <span className="sr-only">Home</span>
          <img src={LogoIMG} alt="Logo" className="w-24" />
        </Link>
      </div>
    );
  };

  const MenuOptions = () => {
    return (
      <>
        <div className="relative md:flex md:items-center md:justify-between">
          {/* Menu de opciones */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <Link
                to="/home"
                className="text-gray-500 transition hover:text-gray-500/75"
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/shoppingHistory"
                className="text-gray-500 transition hover:text-gray-500/75"
              >
                Historial
              </Link>
            </li>

            <li>
              <Link
                className="text-gray-500 transition hover:text-gray-500/75"
                to="/shoppingCart"
              >
                Carrito
              </Link>
            </li>
            <li></li>
          </ul>
          {/* Categorias */}
          <Categories />
        </div>
        {UserOptions()}
      </>
    );
  };

  const UserOptions = () => {
    const { setIsLogged } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOff = () => {
      setIsLogged(false);
      navigate("/");
    };

    return (
      <div className="flex items-center gap-4">
        <div className="hs-dropdown z-10 relative hidden md:block">
          <button
            id="hs-dropdown-custom-trigger"
            type="button"
            className="hs-dropdown-toggle py-1 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            <img
              className="w-8 h-8 object-cover rounded-full ml-2"
              src={userImage}
              alt={userName}
            />
            <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
              {userName}
            </span>
            <svg
              className="hs-dropdown-open:rotate-180 size-4 mr-2"
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
            className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
            aria-labelledby="hs-dropdown-custom-trigger"
          >
            <MenuItems handleLogOff={handleLogOff} />
          </div>
        </div>
      </div>
    );
  };

  const MenuItems = ({ handleLogOff }) => {
    return (
      <>
        <Link
          to="/profile"
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-500 hover:bg-amber-300 focus:outline-none focus:bg-amber-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
        >
          Ver perfil
        </Link>
        <Link
          to="/chats"
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-500 hover:bg-amber-300 focus:outline-none focus:bg-amber-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
        >
          Mis mensajes
        </Link>
        <Link
          to={"/uploadProduct"}
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-500 hover:bg-amber-300 focus:outline-none focus:bg-amber-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
        >
          Vender un producto
        </Link>
        <Link
          to="/salesReport"
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-500 hover:bg-amber-300 focus:outline-none focus:bg-amber-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
        >
          Reporte de ventas
        </Link>
        <Link
          to="/productApproval"
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-500 hover:bg-amber-300 focus:outline-none focus:bg-amber-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
        >
          Revisiones
        </Link>
        <span
          onClick={handleLogOff}
          className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-500 hover:bg-amber-300 focus:outline-none focus:bg-amber-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
        >
          Cerrar sesion
        </span>
      </>
    );
  };

  const MobileMenu = () => {
    const { setIsLogged } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOff = () => {
      setIsLogged(false);
      navigate("/");
    };
    return (
      <div className="hs-dropdown flex md:hidden">
        <button
          id="hs-dropdown-custom-trigger"
          type="button"
          className="hs-dropdown z-10 relative rounded p-2 text-gray-600 transition hover:text-amber-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700"
          aria-labelledby="hs-dropdown-custom-trigger"
        >
          <MenuItems handleLogOff={handleLogOff} />
        </div>
      </div>
    );
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {Logo()}

          {isLogged && (
            <div className="w-52 sm:w-auto">
              <SearchBar section="search" />
            </div>
          )}

          {isLogged && <MenuOptions />}

          {/* Menu Desplegable */}
          {isLogged && <MobileMenu />}
        </div>
      </div>
    </header>
  );
}

import { Category } from "./Category";
import Dropdown from "../assets/dropdown.svg";
import imgMenu from "../assets/img/img-menu.jpg";

const link = "/search";

export function Categories() {
  const FirstColumn = () => {
    return (
      <>
        <Category title="Ropa" iconName="RopaIcon" link={link} />
        <Category title="Electronica" iconName="ElectronicaIcon" link={link} />
        <Category
          title="Hogar y jardín"
          iconName="HogarJardinIcon"
          link={link}
        />
        <Category
          title="Salud y Belleza"
          iconName="SaludBellezaIcon"
          link={link}
        />
        <Category
          title="Juguetes y juegos"
          iconName="JuguetesJuegosIcon"
          link={link}
        />
        <Category
          title="Libros y medios"
          iconName="LibrosMediosIcon"
          link={link}
        />
        <Category
          title="Muebles y decoracion"
          iconName="MueblesDecoracionIcon"
          link={link}
        />
      </>
    );
  };

  const SecondColumn = () => {
    return (
      <>
        <Category
          title="Joyería y Relojes"
          iconName="JoyeriaRelojesIcon"
          link={link}
        />
        <Category
          title="Automóviles y Accesorios"
          iconName="AutomovilesAccesoriosIcon"
          link={link}
        />
        <Category
          title="Artículos para Mascotas"
          iconName="ArticulosMascotasIcon"
          link={link}
        />
      </>
    );
  };

  const ThirdColumn = () => {
    return (
      <>
        <a className="mt-4 group dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={imgMenu}
              alt="Image Description"
              className="rounded-lg "
            />
          </div>

          <div className="mt-2">
            <p className="text-gray-500 dark:text-gray-200">
              El mejor sitio web para realizar tus compras en línea.
            </p>
          </div>
        </a>
      </>
    );
  };

  return (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
    >
      <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
        <div className="flex flex-col gap-6 text-sm gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-start md:gap-x-7 md:mt-0 mr-6 md:divide-y-0 md:divide-solid dark:divide-gray-700">
          <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover]">
            <button
              type="button"
              className="flex items-center text-sm w-full text-gray-500 transition hover:text-gray-500/75"
            >
              Categorías
              <img
                src={Dropdown}
                alt="Dropdown"
                className="flex-shrink-0 ms-2 w-4"
              />
            </button>

            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-20 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
              <div className="grid grid-cols-2 md:grid-cols-10">
                {/* COLUMNA 1 */}
                <div className="md:col-span-3">
                  <div className="flex flex-col py-6 px-3 md:px-6">
                    <div className="space-y-4">
                      <span className="mb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-200">
                        Categorias
                      </span>
                      {FirstColumn()}
                    </div>
                  </div>
                </div>
                {/* COLUMNA 2 */}
                <div className="md:col-span-3">
                  <div className="flex flex-col py-9 px-3 md:px-6">
                    <div className="space-y-4"></div>
                    <br />
                    {SecondColumn()}
                  </div>
                </div>
                {/* COLUMNA 3 */}
                <div className="col-span-full md:col-span-4">
                  <div className="flex flex-col bg-gray-50 p-6 dark:bg-gray-700">
                    <span className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-200">
                      Acerca de nosotros
                    </span>
                    {ThirdColumn()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

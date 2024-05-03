import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Video from "../components/Video";

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

export function EditProduct() {
  const location = useLocation();
  const { product } = location.state;
  return (
    <>
      <Content product={product} />
    </>
  );
}

const Content = ({ product }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    if (formValues != null) {
      navigate("/home");
    }
  };

  const handleCancelClick = () => {
    // Aquí rediriges al perfil
    navigate("/profile");
  };
  return (
    <div className="flex w-full justify-center items-center py-14">
      <div className="w-5/6 px-10 md:px-28 py-4 bg-white border  border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700  overflow-auto">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Editar un producto
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Ingrese los datos de su producto
            </p>
          </div>
          <div className="mt-5">
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              O
            </div>
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex-col">
              {/* Info */}
              <div className="space-y-4">
                <label
                  htmlFor="product-name"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Nombre de mi producto
                </label>
                <input
                  type="text"
                  name="product-name"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Nombre de mi producto"
                  defaultValue={product.title}
                  required
                />

                <label
                  htmlFor="product-description"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Descripción
                </label>
                <textarea
                  name="product-description"
                  className="py-3 px-4 block w-full h-32 resize-none border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Descripción"
                  defaultValue={product.description}
                  required
                />

                <SelectCategory
                  categories={categories}
                  selectedCategory={product.category}
                />

                <label
                  htmlFor="product-name"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Precio
                </label>
                <input
                  type="text"
                  name="product-price"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Precio de mi producto"
                  defaultValue={product.price}
                  required
                />

                <label
                  htmlFor="product-name"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Stock
                </label>
                <input
                  type="text"
                  name="product-stock"
                  className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  placeholder="Stock de mi producto"
                  defaultValue={product.stock}
                  required
                />
              </div>

              {/* Multimedia */}
              <section>
                {/* Imagen */}
                <div className="col-span-full space-y-4 mt-5 my-2">
                  <label
                    htmlFor="product-img"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Subir imágenes
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex flex-col md:flex-row text-sm leading-6 text-gray-600">
                        <label
                          for="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                {/* Video */}
                <div className="flex flex-col space-y-4 justify-center items-center my-7">
                  <div className="w-full lg:w-2/5">
                    <Video />
                  </div>
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
                        Subir video
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Botones */}
              <div className="flex flex-col md:flex-row px-0 lg:px-24 md:gap-6 mt-10">
                <button
                  onClick={handleCancelClick}
                  className="flex-grow h-14 py-3 px-4 mb-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-grow h-14 py-3 px-4 mb-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Editar producto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
const SelectCategory = ({ categories, selectedCategory }) => {
  const handleCategoryChange = (event) => {
    selectedCategory(event.target.defaultValue);
  };

  return (
    <>
      <label
        htmlFor="countries"
        className="block mb-2 text-sm text-gray-800 dark:text-white"
      >
        Elige una categoría
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleCategoryChange}
        defaultValue={selectedCategory}
        required // añade el atributo required aquí
      >
        <option defaultValue="" disabled hidden>
          Elige una categoría
        </option>
        {categories.map((category, index) => (
          <option key={index}>{category}</option>
        ))}
      </select>
    </>
  );
};

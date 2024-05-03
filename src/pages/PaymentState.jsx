import { useState } from "react";
import { useLocation } from "react-router-dom";
import CheckIcon from "../assets/img/check-icon.png";
import { RatingStars } from "../components/RatingStars";
import { Pagination } from "../components/Pagination";

export function PaymentState() {
  const location = useLocation();
  const { products } = location.state;
  return (
    <>
      <InitialMessage
        title="¡Tu pago se ha realizado exitosamente!"
        message="Distintio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum."
      />

      <ReviewSection products={products} />

      <Pagination totalPages={3} />
    </>
  );
}

const InitialMessage = ({ title, message }) => {
  return (
    <div className="grid sm:px-10 lg:px-20 xl:px-32">
      <div className="mt-8 space-y-3 rounded-lg border-2 bg-white px-6 py-24 m-6 sm:px-6">
        <div className="mx-auto max-w-2xl flex-col text-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src={CheckIcon}
              alt="Check Image"
              className="mx-auto max-w-full w-10 h-10 mb-4 sm:w-12 sm:h-12"
            />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

const ReviewSection = ({ products }) => {
  return (
    <div className="grid sm:px-10 lg:px-20 ">
      <div className="sm:mx-auto mt-8 space-y-3 rounded-lg border-2 bg-white px-4 py-24 m-6 sm:px-6">
        <div className="mx-auto flex-col space-y-6 max-w-6xl lg:px-8">
          {/*Title*/}
          <div className="flex-col px-2 space-y-2 mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-18">
              Reseñas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
          </div>
          <div className="space-y-6 lg:px-2 overflow-hidden">
            {/* Renderizar ReviewProduct para cada producto */}
            {products.map((product, index) => (
              <ReviewProduct key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewProduct = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="flex flex-col space-y-2">
      <div className="w-full">
        <h2 className="text-gray-500 text-lg font-semibold mb-2">
          {product.title}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:items-start space-y-2 md:space-x-6">
        <div className="flex flex-col md:mt-4 items-center md:items-start">
          {/* Imagen */}
          <div className="w-40 h-40 relative rounded-lg overflow-hidden placeholder-container">
            {imageLoaded ? (
              <img
                src={product.img}
                alt="Imagen de reviews"
                className="w-full h-full object-contain placeholder-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  setImageLoaded(false);
                }}
              />
            ) : null}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center placeholder-content">
                No disponible
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center flex-grow">
          <RatingStars />
          <label
            htmlFor="review-description"
            className="block text-sm mb-2 dark:text-white"
          >
            Descripción
          </label>
          <textarea
            name="review-description"
            className="py-3 px-4 block w-full h-32 resize-none border-gray-200 rounded-lg text-sm focus:border-amber-500 focus:ring-amber-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Descripción"
            required
          />
          <div className="flex justify-center md:justify-end w-full">
            {/* Ajuste de ancho para ocupar toda la línea */}
            <button
              type="button"
              className="py-3 px-12 my-2 inline-flex text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-task-created-alert"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

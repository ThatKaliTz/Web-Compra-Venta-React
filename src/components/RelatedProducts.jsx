import React, { useState } from "react";

// Componente Product
const Product = ({ openModal, imageUrl, label, name, price }) => {
  return (
    <article className="group relative block overflow-hidden">
      {/* Imagen */}
      <img
        src={imageUrl}
        alt=""
        className="h-36 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-40"
      />
      {/* Contenido de abajo */}
      <div className="relative border border-gray-200 bg-white p-2">
        <span className="whitespace-nowrap bg-amber-300 px-2 py-1 text-xs font-medium">
          {" "}
          {label}{" "}
        </span>
        <h3 className="mt-2 text-base font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-xs text-gray-700">{price}</p>
        <div className="mt-2">
          <button
            onClick={openModal}
            className="block w-full rounded bg-amber-500 text-white hover:bg-amber-700 p-2 text-xs font-medium transition hover:scale-105"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  );
};

// Componente ProductColumn
const RelatedProducts = ({ products, openModal }) => {
  return (
    <div className="mt-4 lg:row-span-4 lg:mt-0 space-y-4 mr-6 pl-6 lg:border-l lg:border-gray-200">
      <h2 className="sr-only">Product information:</h2>
      <p className="text-xl tracking-tight font-semibold text-gray-900">
        Podría interesarte...
      </p>
      <div className="flex-col w-full md:w-3/4 px-4 overflow-y-auto space-y-4 sm:items-center">
        {products.map((product, index) => (
          <Product key={index} {...product} openModal={openModal} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

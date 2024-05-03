import React from "react";
import { useParams } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";
import { MyProduct } from "./Home";
import { Pagination } from "../components/Pagination";
import NoResults from "../components/NoResults";

let searchQuery = "";
const numberOfResults = 10;

const resultProducts = [
  {
    title: "Product 1",
    price: "10.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "/product",
  },
  {
    title: "Product 2",
    price: "20.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "#",
  },
  {
    title: "Product 3",
    price: "30.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "#",
  },
  {
    title: "Product 4",
    price: "40.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "#",
  },
  {
    title: "Product 5",
    price: "50.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "#",
  },
  {
    title: "Product 6",
    price: "60.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "#",
  },
  {
    title: "Product 7",
    price: "70.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "#",
  },
  {
    title: "Product 8",
    price: "80.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    url: "#",
  },
];

export function Search() {
  let { query } = useParams(); // Obtiene el valor dinámico de la ruta
  searchQuery = query;

  return (
    <>
      <Content />
    </>
  );
}

const Content = () => {
  return (
    <div className="px-50 sm:px-0">
      <div className="min-h-screen flex flex-col md:flex-row  gap-3 sm:px-4 min-w-0">
        <div className="flex justify-center">
          <SearchFilter />
        </div>
        <Title />
      </div>
    </div>
  );
};

const ProductGrid = ({ products }) => {
  // Calcula el número de columnas basado en el número de productos
  const calculateColumns = () => {
    const productsPerRow = 4; // Cuántos productos quieres por fila
    const totalProducts = products.length;
    return Math.ceil(totalProducts / productsPerRow);
  };

  return (
    <section className="flex justify-center">
      <div className="flex flex-wrap mt-6 -mb-10 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <MyProduct
              key={index}
              title={product.title}
              price={product.price}
              img={product.img}
              url={product.url}
              tag={"Oferta"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Title = () => {
  const totalPages = Math.ceil(numberOfResults / 10);

  return (
    <>
      {numberOfResults > 0 ? (
        <div className="flex-col pt-6 pl-5 sm:pl-0">
          <header className="sm:px-4">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {`Resultados de ${searchQuery}`}
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {"Se encontraron " + numberOfResults + " resultados"}
            </p>
          </header>
          <section>
            <ProductGrid products={resultProducts} />
            <Pagination totalPages={totalPages} />
          </section>
        </div>
      ) : (
        <div className="w-full h-full">
          <NoResults msg={"No se encontraron resultados"} />
        </div>
      )}
    </>
  );
};

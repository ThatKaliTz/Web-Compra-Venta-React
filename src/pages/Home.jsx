import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";

// Dashboard
const imgDashboard = [
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
  },
  {
    src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
  },
];

// Products
const featuredProducts = [
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
];

const productsBestSellers = [
  {
    title: "Product 1",
    price: "10.00",
    img: "https://thehdesign.com.mx/10780-large_default/carmen-mueble-bar-estilo-vintage-con-madera-de-encino-3-puertas-con-ratan.jpg",
    url: "/product",
  },
  {
    title: "Product 2",
    price: "20.00",
    img: "https://thehdesign.com.mx/10780-large_default/carmen-mueble-bar-estilo-vintage-con-madera-de-encino-3-puertas-con-ratan.jpg",
    url: "#",
  },
  {
    title: "Product 3",
    price: "30.00",
    img: "https://thehdesign.com.mx/10780-large_default/carmen-mueble-bar-estilo-vintage-con-madera-de-encino-3-puertas-con-ratan.jpg",
    url: "#",
  },
  {
    title: "Product 4",
    price: "40.00",
    img: "https://thehdesign.com.mx/10780-large_default/carmen-mueble-bar-estilo-vintage-con-madera-de-encino-3-puertas-con-ratan.jpg",
    url: "#",
  },
];

export function Home() {
  return (
    <>
      <Dashboard images={imgDashboard} />
      <ProductsSection
        titleSection="Destacados"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        products={featuredProducts}
      />
      <ProductsSection
        titleSection="Más vendidos"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        products={productsBestSellers}
      />
    </>
  );
}

const Dashboard = ({ images }) => {
  return (
    <div className="max-w-full px-2 md:px-20 mx-auto mt-14 mb-8 items-center">
      <div className="h-56 sm:h-64 xl:h-[400px] relative -z-10">
        <Carousel indicators={false}>
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`Imagen ${index}`} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export const MyProduct = ({ title, price, img, url, tag }) => {
  return (
    <article>
      <Link to={url} className="group relative block overflow-hidden">
        <img
          src={img}
          alt={title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 rounded-lg"
        />
        <div className="relative border border-gray-100 bg-white p-6">
          <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            {tag}
          </span>
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          <p className="mt-1.5 text-sm text-gray-700">${price}</p>
          <form className="mt-4">
            <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
              Añadir al carrito
            </button>
          </form>
        </div>
      </Link>
    </article>
  );
};

const ProductsSection = ({ titleSection, description, products }) => {
  return (
    <section className="flex flex-wrap justify-center md:justify-start  mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="py-4">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
          {titleSection}
        </h2>
        <p className="mt-4 max-w-md text-gray-500">{description}</p>
      </header>
      <div className=" mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <MyProduct
            key={index}
            title={product.title}
            price={product.price}
            img={product.img}
            url={product.url}
            tag={"🔥 Tendencia"}
          />
        ))}
      </div>
    </section>
  );
};

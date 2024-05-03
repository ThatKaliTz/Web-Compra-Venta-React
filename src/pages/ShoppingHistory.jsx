import React, { useState } from "react";
import Title from "../components/Title";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Pagination } from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import NoResults from "../components/NoResults";

const listOfProducts = [
  {
    title: "Product 1",
    price: "10.00",
    img: "#",
    tags: ["tag1", "tag2", "tag3"],
    url: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    date: "2022-01-01",
  },
  {
    title: "Product 2",
    price: "20.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    tags: ["tag1", "tag2", "tag3"],
    url: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    date: "2022-01-01",
  },
  {
    title: "Product 3",
    price: "400.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    tags: ["tag1", "tag2", "tag3"],
    url: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    date: "2022-01-01",
  },
  {
    title: "Product 4",
    price: "90.00",
    img: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    tags: ["tag1", "tag2", "tag3"],
    url: "https://casacamejo.com.mx/wp-content/uploads/2023/02/Hisense-14-04.jpg",
    date: "2022-01-01",
  },
];

export function ShoppingHistory() {
  return (
    <>
      <Title
        title="Historial de compras"
        description="Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
          quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum."
      />
      <Content />
    </>
  );
}

const Content = () => {
  return (
    <>
      <div className="grid sm:px-10 md:px-15 lg:px-20 xl:px-32">
        <div className="mt-8 space-y-3 rounded-lg border-2 bg-white px-4 py-12 m-6 sm:px-6 overflow-x-auto">
          <div className="mx-auto max-w-full flex-col space-y-6 lg:px-8">
            <DateFilter />
            <HistoryList products={listOfProducts} />
            <Pagination totalPages={3} />
          </div>
        </div>
      </div>
    </>
  );
};

const CalendarIcon = () => {
  return (
    <div className="absolute z-10 inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <svg
        className="w-4 h-4 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
      </svg>
    </div>
  );
};

const DateFilter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilter = () => {
    // Implement your filter logic here using startDate and endDate
    console.log("Filtering data from", startDate, "to", endDate);
  };

  return (
    <>
      <div className="flex justify-center gap-1 ml-3 -mb-2 items-center">
        <div className="relative">
          <CalendarIcon />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Seleccione fecha de inicio..."
            className="bg-gray-50 border border-gray-300
          text-gray-900 text-sm rounded-lg focus:ring-amber-500
           focus:border-amber-500 block w-full ps-10 p-2.5 
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <span className="mx-4 text-gray-500">a</span>
        <div className="relative">
          <CalendarIcon />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Seleccione fecha final..."
            className="bg-gray-50 border border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-amber-500
            focus:border-amber-500 block w-full ps-10 p-2.5 
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      {/*Button*/}
      <div className="flex items-center justify-center ml-2">
        <button
          type="button"
          onClick={handleFilter}
          className="py-3 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          disabled={!startDate || !endDate}
        >
          Filtrar
        </button>
      </div>
    </>
  );
};

const HistoryList = ({ products }) => {
  return (
    <div className="space-y-6 lg:px-2">
      {products && products.length > 0 ? (
        products.map((product, index) => <MyProduct key={index} {...product} />)
      ) : (
        <NoResults msg={"No se encontraron resultados"} />
      )}
    </div>
  );
};

const MyProduct = ({ title, price, tags, img, url, date }) => {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="my-8">
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="w-40 h-40 relative rounded-lg overflow-hidden placeholder-container">
          {imageLoaded ? (
            <img
              src={img}
              alt="Imagen de reviews"
              className="w-full h-full object-contain placeholder-image"
              onError={(e) => {
                e.target.style.display = "none";
                setImageLoaded(false);
              }}
            />
          ) : null}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center  placeholder-content">
              No disponible
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between">
            <h2 className="text-gray-500 text-lg font-semibold justify-start -mb-6 animate-scale-out">
              {title}
            </h2>
            <h2 className="text-gray-700 text-base justify-end mb-2">{date}</h2>
          </div>
          <Breadcrumb tags={tags} />
          <span className="text-gray-700 text-base mt-1.5 mb-2">${price}</span>
        </div>
      </div>
    </div>
  );
};

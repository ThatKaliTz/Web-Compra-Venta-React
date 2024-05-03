import Title from "../components/Title";
import { DatePicker } from "../components/Datepicker";
import { Pagination } from "../components/Pagination";
import ProductTable from "../components/ProductTable";

const productInfo = [
  {
    id: 1,
    title: "Producto Mas Vendido y Mas Barato de la Semana Actual",
    quantity: 100,
    price: 10.65,
    img: "https://i.pinimg.com/564x/36/b4/ef/36b4ef433ac9c2cf9d34e54aa3a38340.jpg",
  },
  {
    id: 2,
    title: "Producto 2",
    quantity: 150,
    price: 15.75,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Producto 3",
    quantity: 200,
    price: 20.8,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Producto 4",
    quantity: 250,
    price: 25.9,
    img: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Producto 5",
    quantity: 300,
    price: 30.95,
    img: "https://via.placeholder.com/150",
  },
];

export function SalesReport() {
  const StatsSection = () => {
    return (
      <div className="mx-auto max-w-7xl mb-6 xl:px-6 lg:px-10 md:px-10 sm:px-4">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl">
              <div className="inline-flex justify-center items-center xl:mt-6">
                <span className="size-2 inline-block bg-gray-500 rounded-full me-2"></span>
                <span className="text-xs font-semibold uppercase text-gray-600 ">
                  Productos totales
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-3xl xl:mb-6 sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                  150
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl">
              <div className="inline-flex justify-center items-center xl:mt-6">
                <span className="size-2 inline-block bg-green-500 rounded-full me-2"></span>
                <span className="text-xs font-semibold uppercase text-gray-600 ">
                  Productos vendidos la última semana
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-3xl xl:mb-6 sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                  25
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl">
              <div className="inline-flex justify-center items-center xl:mt-6">
                <span className="size-2 inline-block bg-red-500 rounded-full me-2"></span>
                <span className="text-xs font-semibold uppercase text-gray-600 ">
                  Productos agotados
                </span>
              </div>

              <div className="text-center">
                <h3 className="text-3xl xl:mb-6 sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                  4
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Title
        title="Reporte de ventas"
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
      />
      {StatsSection()}

      <div className="flex flex-col px-0 sm:px-10 lg:px-20 xl:px-32">
        <div className="lg:px-0 flex flex-col justify-center sm:px-4 min-w-0">
          <DatePicker />
          <ProductTable products={null} isReport={true} className="" />
          <Pagination totalPages={5} />
        </div>
      </div>
    </>
  );
}

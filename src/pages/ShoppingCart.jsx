import Title from "../components/Title";
import ProductTable from "../components/ProductTable";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

export function ShoppingCart() {
  return (
    <>
      <Title
        title="Carrito de compras"
        description="Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum."
      />
      <Content productInfo={productInfo} />
    </>
  );
}

const Content = ({ productInfo }) => {
  const [subtotal, setSubtotal] = useState(0);

  const updateSubtotal = (newSubtotal) => {
    setSubtotal(newSubtotal);
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-6 pb-0 pt-10 sm:px-4 lg:grid lg:max-w-7xl lg:px-4 lg:pb-2 lg:pt-0">
        <div className="flex flex-col space-y-2 lg:flex-row justify-center gap-x-6">
          <section className="w-full lg:h-screen lg:w-[70%] min-w-0 overflow-x-auto md:overflow-x-hidden">
            <ProductTable
              products={productInfo}
              updateTotalAmount={updateSubtotal}
            />
          </section>
          <div className="xl:w-[30%] min-w-0">
            <OrderDetails subtotal={subtotal} products={productInfo} />
          </div>
        </div>
      </div>
    </>
  );
};
const OrderDetails = ({ subtotal, products }) => {
  const navigate = useNavigate();

  // Verificar si hay productos
  const hasProducts = products && products.length > 0;

  // Calcular subtotal, impuestos, envío y total solo si hay productos
  const subtotalNumber = hasProducts ? parseFloat(subtotal) : 0;
  const taxes = hasProducts ? subtotalNumber * 0.15 : 0;
  const shipping = hasProducts ? subtotalNumber * 0.05 : 0;
  const total = hasProducts ? subtotalNumber + taxes + shipping : 0;

  const handlePayClick = () => {
    if (hasProducts) {
      navigate("/paymentState", { state: { products } });
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg border-gray-4 border-1 overflow-hidden shadow-md p-6 mt-2">
        <h2 className="text-lg font-semibold mb-4">Detalles de pago</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>{"$" + subtotalNumber.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Impuestos</span>
          <span>{"$" + taxes.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Envío</span>
          <span>{"$" + shipping.toFixed(2)} </span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-500">Total</span>
          <span className="font-semibold text-gray-500">
            {"$" + total.toFixed(2)}
          </span>
        </div>
        <div className="flex-col mt-7 space-y-1">
          <h2 className="text-lg font-semibold mb-4">Método de pago:</h2>
          <div className="flex items-center ps-4 border border-gray-200 rounded">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
            >
              Tarjeta de crédito
            </label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 focus:ring-amber-500 dark:focus:ring-amber-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-white dark:border-gray-600"
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ms-2 text-sm font-medium text-gray-900"
            >
              Tarjeta de débito
            </label>
          </div>
        </div>

        <button
          onClick={handlePayClick}
          className={`bg-amber-500 text-white py-2 px-4 rounded-lg mt-4 w-full ${
            !hasProducts && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!hasProducts}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import QuantityButton from "./QuantityButton";
import DeleteIcon from "./DeleteIcon";
import NoResults from "./NoResults";

const ProductRow = ({ product, isReport, quantity, onQuantityChange }) => {
  const [localQuantity, setLocalQuantity] = useState(quantity);

  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

  const handleQuantityChange = (newQuantity) => {
    setLocalQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <tr className="border-b">
      <td className="py-4 min-w-[200px]">
        <div className="flex pl-4 items-center">
          <img
            className="object-cover h-16 w-16 mr-4 rounded-lg"
            src={product.img}
            alt="Product img"
          />
          <span className="font-semibold text-gray-500 lg:pr-16 sm:pr-2 sm:mr-2 animate-scale-out transform lg:translate-x-2">
            {product.title}
          </span>
        </div>
      </td>
      {!isReport && (
        <>
          <td className="py-4 min-w-[60px]">${product.price.toFixed(2)}</td>
          <td className="py-4 min-w-[100px]">
            <QuantityButton
              maxLimit={100}
              quantity={localQuantity}
              onChange={handleQuantityChange}
            />
          </td>
        </>
      )}
      {isReport && (
        <td className="py-4 min-w-[100px] transform translate-x-9">
          {product.quantity}
        </td>
      )}
      <td className="py-4 min-w-[60px]">
        ${(product.price * localQuantity).toFixed(2)}
      </td>
      {!isReport && (
        <td className="py-4 min-w-[60px] pl-8 md:pl-10">
          <DeleteIcon size={24} />
        </td>
      )}
    </tr>
  );
};
const ProductTable = ({ products, isReport, updateTotalAmount }) => {
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  useEffect(() => {
    if (!isReport) {
      const total = calculateTotal();
      updateTotalAmount(total);
    }
  }, [quantities, products, isReport, updateTotalAmount]);

  const calculateTotal = () => {
    // Verificar si products es null o indefinido
    if (!products) {
      return 0; // Si no hay productos, el total es cero
    }

    return products
      .reduce((acc, product) => {
        const quantity = quantities[product.id] || 1;
        return acc + product.price * quantity;
      }, 0)
      .toFixed(2);
  };

  // Verificar si products es null o indefinido
  if (!products) {
    return (
      <div className="my-6">
        <NoResults msg="No se encontraron resultados" />
      </div>
    );
  }

  return (
    <table className="w-full bg-white rounded-lg border-gray-4 border-1 shadow-md my-6 overflow-y-auto">
      <thead>
        <tr className="align-top">
          <th className="text-left pb-4 pl-4 pt-4 font-semibold">Producto</th>
          {!isReport && (
            <th className="text-left pb-4 pt-4 font-semibold">Precio</th>
          )}
          <th className="text-left pb-4 pt-4 px-8 font-semibold">
            {isReport ? "Cantidad vendida" : "Cantidad"}
          </th>
          <th className="text-left pb-4 pt-4 font-semibold">Total</th>
          {!isReport && (
            <th className="text-left pb-4 pt-4 px-10 font-semibold"></th>
          )}
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <ProductRow
            key={index}
            product={product}
            isReport={isReport}
            quantity={quantities[product.id] || 1}
            onQuantityChange={(quantity) =>
              handleQuantityChange(product.id, quantity)
            }
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;

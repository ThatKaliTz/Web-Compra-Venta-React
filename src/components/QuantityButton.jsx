import React, { useState } from "react";

function QuantityButton({ maxLimit, onChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 0 && newQuantity <= maxLimit) {
      setQuantity(newQuantity);
      onChange(newQuantity); // Llama a la función de devolución de llamada
    } else if (isNaN(newQuantity)) {
      setQuantity(0);
    } else if (newQuantity > maxLimit) {
      setQuantity(maxLimit);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      onChange(quantity - 1); // Llama a la función de devolución de llamada
    }
  };

  const increaseQuantity = () => {
    if (quantity < maxLimit) {
      setQuantity(quantity + 1);
      onChange(quantity + 1); // Llama a la función de devolución de llamada
    }
  };

  return (
    <div>
      <label htmlFor="Quantity" className="sr-only">
        {" "}
        Quantity{" "}
      </label>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className={`h-10 w-10 text-gray-600 transition hover:opacity-75 ${
            quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={decreaseQuantity}
          disabled={quantity === 1}
        >
          &minus;
        </button>

        <input
          type="text"
          value={quantity}
          onChange={handleQuantityChange}
          className="h-10 w-14 rounded border-gray-200 text-center"
        />

        <button
          type="button"
          className={`h-10 w-10 leading-10 text-gray-600 transition hover:opacity-75 ${
            quantity === maxLimit ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={increaseQuantity}
          disabled={quantity === maxLimit}
        >
          {"+"}
        </button>
      </div>
    </div>
  );
}

export default QuantityButton;

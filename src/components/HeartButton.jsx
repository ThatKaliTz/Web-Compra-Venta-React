import React, { useState } from "react";

function HeartButton({ onClick }) {
  const [isFilled, setIsFilled] = useState(false);
  const [strokeColor, setStrokeColor] = useState("black");

  const handleClick = () => {
    setIsFilled(!isFilled);
    setStrokeColor(isFilled ? "black" : "red"); // Toggle stroke color
    onClick && onClick(!isFilled); // Call the onClick function with the new filled state
  };

  return (
    <button type="button" onClick={handleClick} className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        fill="none"
        stroke={strokeColor}
        className="text-red-500 mr-1 hover:text-gray-700"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 21.367l-1.482-.853C5.29 16.522 2 13.134 2 9.101 2 6.408 4.195 4.268 7.05 4.268c1.566 0 3.049.875 4.107 2.234C11.951 5.143 13.434 4.268 15 4.268c2.855 0 5.05 2.14 5.05 4.833 0 4.033-3.29 7.421-8.518 11.412L12 21.367z"
          fill={isFilled ? "red" : "none"}
        />
      </svg>
    </button>
  );
}

export default HeartButton;

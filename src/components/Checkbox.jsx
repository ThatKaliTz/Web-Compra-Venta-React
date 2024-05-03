import React, { useState } from "react";

export default function Checkbox({ label, isPrivate = false }) {
  const [isChecked, setIsChecked] = useState(isPrivate);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex justify-center items-center me-5 cursor-pointer">
      <span className="ms-3 px-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </span>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`relative w-11 h-6 ${
          isChecked ? "bg-yellow-400" : "bg-gray-200"
        } rounded-full peer ${
          isChecked
            ? "peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white"
            : ""
        } dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
      />
    </label>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Función para quitar acentos y caracteres especiales
const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export function Category({ title, iconName, link }) {
  const [iconPath, setIconPath] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const icon = await import(`../assets/icon-categories/${iconName}.svg`);
        setIconPath(icon.default);
      } catch (error) {
        console.error("Error loading icon:", error);
      }
    };

    loadIcon();
  }, [iconName]);

  // Quita los acentos y caracteres especiales del título
  const normalizedTitle = removeAccents(title);

  // Concatena el enlace y el título normalizado
  const concatenatedLink = `${link}/${normalizedTitle
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <Link
      to={concatenatedLink} // Utiliza el enlace concatenado
      className="flex gap-x-4 my-2 text-gray-500 hover:text-amber-600 dark:text-gray-200 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
    >
      {iconPath && (
        <img className="flex-shrink-0 w-6 h-6" src={iconPath} alt={title} />
      )}
      <div className="flex-grow">
        <p>{title}</p>
      </div>
    </Link>
  );
}

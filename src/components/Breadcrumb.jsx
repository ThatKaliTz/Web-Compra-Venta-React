import React from "react";

// Componente para una etiqueta individual
function Tag({ label, isLast }) {
  return (
    <div className="flex items-center">
      <a href="#" className="mr-2 text-sm font-medium text-gray-900">
        {label}
      </a>
      {!isLast && (
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-4 text-gray-300"
        >
          <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
        </svg>
      )}
    </div>
  );
}

// Componente para la lista de etiquetas
function TagsList({ tags }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex my-2 space-x-2">
        {tags.map((tag, index) => (
          <li key={index}>
            <Tag label={tag} isLast={index === tags.length - 1} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Componente contenedor de la lista de etiquetas
function Breadcrumb({ tags }) {
  return (
    <div className="bg-white">
      <TagsList tags={tags} />
    </div>
  );
}

export default Breadcrumb;

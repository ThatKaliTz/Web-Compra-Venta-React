import React from "react";

function Stars({ rating }) {
  const MAX_STARS = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < rating) {
        stars.push(
          <svg
            key={i}
            className="text-yellow-400 h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            className="text-gray-200 h-5 w-5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            />
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="flex items-center">
      {renderStars()}
      <p className="sr-only">{rating} out of 5 stars</p>
    </div>
  );
}

export function Reviews({ rating, count }) {
  return (
    <div className="mt-6">
      <h3 className="sr-only">Reseñas</h3>
      <div className="flex items-center">
        <Stars rating={rating} />
        <a
          href="#sReview"
          className="ml-3 text-sm font-medium text-pink-600 hover:text-purple-500"
        >
          {count} reseñas
        </a>
      </div>
    </div>
  );
}

export function ReviewComment({ rating, name, image, date, title, comment }) {
  return (
    <div className="mb-6">
      {/* Stars */}
      <div className="flex items-center gap-3 mb-4">
        <Stars rating={rating} />{" "}
        {/* Utiliza el componente Stars con la calificación proporcionada */}
      </div>
      {/* Review Info */}
      <h3 className="font-manrope font-semibold text-xl sm:text-xl leading-9 text-black mb-4">
        {title}
      </h3>
      <div className="flex flex-col min-[400px] sm:flex-row justify-between gap-5 mb-4">
        <div className="flex items-center gap-3">
          <img src={image} alt={`${name} image`} className="w-8 h-8" />{" "}
          {/* Utiliza la imagen proporcionada */}
          <h6 className="font-semibold text-base leading-6 text-indigo-600 ">
            {name}
          </h6>{" "}
          {/* Utiliza el nombre proporcionado */}
        </div>
        <p className="font-normal text-base leading-6 text-gray-400">{date}</p>{" "}
        {/* Utiliza la fecha proporcionada */}
      </div>
      <p className="font-normal text-base leading-6 text-gray-400 max-xl:text-justify">
        {comment}
      </p>
    </div>
  );
}

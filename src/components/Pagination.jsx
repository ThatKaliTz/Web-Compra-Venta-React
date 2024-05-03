import React, { useState } from "react";

export function Pagination({ totalPages }) {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="flex items-center justify-center mt-4  gap-x-1">
      <button
        type="button"
        className={`min-h-[46px] min-w-[46px] py-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
          currentPage === 1
            ? "disabled:opacity-50 disabled:pointer-events-none"
            : ""
        }`}
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
      >
        <span aria-hidden="true" className="sr-only">
          Next
        </span>
        <svg
          className="flex-shrink-0 size-3.5 transform rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="flex items-center gap-x-1">
        <span className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-1 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          {currentPage}
        </span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-">
          of
        </span>
        <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm">
          {totalPages}
        </span>
      </div>
      <button
        type="button"
        className={`min-h-[46px] min-w-[46px] py-4 px-4 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${
          currentPage === totalPages
            ? "disabled:opacity-50 disabled:pointer-events-none"
            : ""
        }`}
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
      >
        <span aria-hidden="true" className="sr-only">
          Next
        </span>
        <svg
          className="flex-shrink-0 size-3.5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </nav>
  );
}

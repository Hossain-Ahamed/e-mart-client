import React from "react";

const ProductCardLoading = () => {
  return (
    <>
      <div
        role="status"
        className="w-36 h-60 lg:h-96 md:w-52 md:h-80 border animate-pulse"
      >
        <div className="flex items-center justify-center">
        <figure>
              <div
                className="w-36 h-40 md:h-64 md:w-52"
                >
                </div>
            </figure>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full "></div>
        <div className="flex items-center mt-4">
          <svg
            className="w-10 h-10 me-3 text-gray-200 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full "></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default ProductCardLoading;

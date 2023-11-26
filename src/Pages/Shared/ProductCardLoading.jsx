import React from "react";

const ProductCardLoading = () => {
  return (
    <>
      <div
        role="status"
        className="w-36 h-60 lg:h-96 md:w-52 md:h-80 border animate-pulse rounded-md"
      >
        <div className="flex items-center justify-center">
        <figure>
              <div
                className="w-36 h-40 md:h-64 md:w-52 bg-gray-200"
                >
                </div>
            </figure>
        </div>
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default ProductCardLoading;

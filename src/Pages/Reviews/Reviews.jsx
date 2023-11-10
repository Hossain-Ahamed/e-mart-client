import React, { useState } from "react";
import useProduct from "../../Hooks/useProduct";
import ReactStars from "react-rating-stars-component";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Reviews = () => {
  const {axiosSecure} = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSize, setSearchSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const {
    refetch,
    data: products = [],
    isLoading,
  } = useQuery({
    queryKey: ["products", searchQuery, searchSize, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/products-reviews`
      );
        console.log(res.data)
      return res.data;
    },
  });

   //const pages = Math.ceil
   const handleInputChange = (e) => {
    setCurrentPage(0)
    setSearchQuery(e.target.value);
  };

  // Filter products with reviews
  const productsWithReviews = products.filter(
    (product) => product.reviews && product.reviews.length > 0
  );
  console.log(productsWithReviews)

  // Determine the size of the star rating based on screen width
  const screenSize = window.innerWidth;

  // Calculate the desired size for the star rating component
  const starRatingSize = screenSize < 768 ? 16 : 24; // Adjust the size as needed

  return (
    <>
      <div className="px-20">
      <div className="relative mt-5 flex justify-between items-center mb-3">
        <div>
          <select
            value={searchSize}
            onChange={(e) => {
              setSearchSize(parseInt(e.target.value));
            }}
            className="block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  "
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="500">500</option>
          </select>
        </div>
        <div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search By Product"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
        </div>
      </div>

        {productsWithReviews.map((product) => (
          <div key={product._id} className="flex bg-gray-100 m-10 rounded-md border shadow-lg">
            <div className=" relative w-48">
              <img src={product?.image} alt="" />
              <p className=" absolute bottom-4 text-accent tracking-tighter text-sm font-semibold italic bg-white">
                {product?.productTitle}
              </p>
            </div>
            <div className="p-10 w-full h-64 overflow-y-scroll">
              {product?.reviews?.map((review) => (
                <div key={review?._id}>
                  <p>
                    Posted By <span className="text-accent italic">{review?.name}{" "}</span>
                    <span className="text-sm text-gray-600">
                      on{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(new Date(review?.createdAt))}
                    </span>
                  </p>
                  <p>"{review?.comment}"</p>
                  <ReactStars
                    count={5}
                    value={review?.rating}
                    edit={false}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    size={starRatingSize}
                    activeColor="#ffd700"
                  />
                  <div className="divider"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

{/* <nav
        className="w-full flex justify-center mt-5 select-none pb-5"
        aria-label="Page navigation example"
      >
        <ul className="inline-flex -space-x-px text-sm">

        {!isLoading && count > 0 && [...Array(Math.ceil(count / searchSize)).keys()].map((number) => (
            <li
              key={number}
              className={`${currentPage === number
                ? "bg-slate-400 text-white"
                : "text-gray-500 bg-white"
                } flex items-center justify-center px-3 h-8 leading-tight  border border-gray-300 first:rounded-l-lg last:rounded-r-lg hover:bg-gray-100 hover:text-gray-700`}
            >
              <button
                onClick={() => {
                  setCurrentPage(number);
                }}
              >
                {number + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav> */}
      </div>
    </>
  );
};

export default Reviews;

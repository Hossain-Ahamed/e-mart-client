import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import AdminTitle from "../../../../../Component/AdminTitle";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const ManageProduct = () => {
  const { axiosSecure } = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSize, setSearchSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const {
    refetch,
    data: { products = [], count = 0 } = {},
    isLoading,
  } = useQuery({
    queryKey: ["products", searchQuery, searchSize, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/products?q=${searchQuery}&size=${searchSize}&currentPage=${currentPage}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  //const pages = Math.ceil
  const handleInputChange = (e) => {
    setCurrentPage(0);
    setSearchQuery(e.target.value);
  };

  const handleDelete = (product) => {
    Swal.fire({
      title: `Are you want to delete ${product?.productTitle}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${product?._id}`).then((data) => {
          //console.log(data)
          if (data?.data?.deletedCount > 0) {
            //fetchProducts();
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <>
      <div className="h-full p-10 w-full">
        <AdminTitle heading={`All Products(${products.length})`} />
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
        <section className="px-4 bg-white max-w-5xl mx-auto">
          {/* table  */}
          <div className="relative shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3 text-center">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Sub-Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(products) && products.length > 0 ? (
                  products.map((product) => (
                    <tr
                      key={product?._id}
                      className={`bg-white border-b  hover:bg-gray-50 `}
                    >
                      {/* row 1 */}

                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={product?.image}
                                alt={product?.productTitle}
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-gray-700 text-sm line-clamp-1">
                              {product?.productTitle}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {product?.category}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {product?.subCategory}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <p className="flex">
                          <TbCurrencyTaka />
                          {product?.price}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-lg text-blue-600 text-center">
                        <Link to={`/dashboard/edit-product/${product?._id}`}>
                          <BiEdit />
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-lg text-red-600 text-center">
                        <button onClick={() => handleDelete(product)}>
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center font-semibold text-xl text-red-600"
                    >
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <nav
          className="w-full flex justify-center mt-5 select-none pb-5"
          aria-label="Page navigation example"
        >
          <ul className="inline-flex -space-x-px text-sm">
            {!isLoading &&
              count > 0 &&
              [...Array(Math.ceil(count / searchSize)).keys()].map((number) => (
                <li
                  key={number}
                  className={`${
                    currentPage === number
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
        </nav>
      </div>
    </>
  );
};

export default ManageProduct;

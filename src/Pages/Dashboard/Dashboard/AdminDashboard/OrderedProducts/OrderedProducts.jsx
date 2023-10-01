import React, { useState } from "react";
import useOrderedProducts from "../../../../../Hooks/useOrderedProducts";
import useProfile from "../../../../../Hooks/useProfile";
import useAllUserProfile from "../../../../../Hooks/useAllUserProfile";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import AdminTitle from "../../../../../Component/AdminTitle";

const OrderedProducts = () => {
  const { axiosSecure } = useAxiosSecure();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSize, setSearchSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);

  const {
    refetch,
    data: orderedProducts = {},
    isLoading,
  } = useQuery({
    queryKey: ["orderedProducts", searchQuery, searchSize, currentPage],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/get-all-ordered-products?q=${searchQuery}&size=${searchSize}&currentPage=${currentPage}`
      );
      console.log(res.data);
      return res.data;
    },
  });

  //const pages = Math.ceil
  const handleInputChange = (e) => {
    setCurrentPage(0)
    setSearchQuery(e.target.value);
  };

  const [userProfiles] = useAllUserProfile();
  //console.log(userProfiles)
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (email) => {
    // Find the user profile that matches the email
    const userProfile = userProfiles.find((profile) => profile.email === email);
    console.log("Selected User Profile:", userProfile);
    setSelectedUser(userProfile);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <section className="mt-8 py-7 px-4 bg-white max-w-5xl mx-auto">
      {/* table  */}
      <AdminTitle heading="All Orders"></AdminTitle>

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
          <label for="table-search" className="sr-only">
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
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search By Phone"
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            />
          </div>
        </div>
      </div>
      <table className="w-full min-w-[700px] text-sm text-left text-gray-500 select-none">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Order Id
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Placed On
            </th>
            <th scope="col" className="px-6 py-3">
              Phone
            </th>
            <th scope="col" className="px-6 py-3">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading ? <p>Loading</p> : <>
          
          {orderedProducts &&
            Array.isArray(orderedProducts?.orders) &&
            orderedProducts?.orders.map((i, count) => (
              <tr key={i?._id} className="bg-white border-b  hover:bg-gray-50 ">
                {/* <td className="px-6 py-4">
                                      <img className="w-10 h-10 rounded-full" src={i?.image} alt={i?.name} />

                                  </td> */}
                <td className="px-6 py-4">#{i?._id.slice(-6)}</td>
                <td className="px-6 py-4">
                  {i?.orderStatus[i?.orderStatus.length - 1]?.name}
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(new Date(i?.orderStatus[0]?.time))}
                  </p>
                  <p className="text-sm">
                    {new Date(i?.orderStatus[0]?.time).toLocaleTimeString(
                      "en-US"
                    )}
                  </p>
                </td>
                <td className="px-2 py-4">{i?.userPhone}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/dashboard/ordered-products/${i?._id}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    See Details
                  </Link>
                </td>
              </tr>
            ))}
            </>
}
        </tbody>
      </table>

      <nav
        className="w-full flex justify-center mt-5 select-none"
        aria-label="Page navigation example"
      >
        <ul className="inline-flex -space-x-px text-sm">
          
          { !isLoading && [
            ...Array(Math.ceil(orderedProducts?.count / searchSize)).keys(),
          ].map((number) => (
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
    </section>
  );
};

export default OrderedProducts;

{
  /* <>
            <div className="h-full w-full p-10">
        <div className="">
          <p>{orderedProducts.length}</p>
          <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
            <tbody>
            {orderedProducts.map((product, index) => (
  <tr key={product._id}>
    <td>
      <p>Order {index + 1}</p>
    <p>Coupon: {product.coupon}</p>
    <p>Courier Charge: {product.courirerCharge}</p>
    <p>Discounted Amount: {product.discountedAmount}</p>
    <p>Final Amount: {product.finalAmount}</p>
    <p>Order Type: {product.orderType || "N/A"}</p>
    <p>Subtotal Amount: {product.subTotalAmount}</p>
    <p>User Address: {product.userAddress}</p>
    <p>User City: {product.userCity}</p>
    <p>User Phone: {product.userPhone}</p>
    <p>User ID: {product.userId}</p>
    <p>Transaction ID: {product.transactionId || "N/A"}</p>
    </td>
    
    <td>Order Status:</td>
    <td>
      {product.orderStatus.map((status, statusIndex) => (
        <p key={statusIndex}>
          Name: {status.name}, Message: {status.message}, Time: {status.time}
        </p>
      ))}
    </td>
    <td>Ordered Items:</td>
    <td>
      {product.orderedItems.map((item, itemIndex) => (
        <p key={itemIndex}>
          Product ID: {item.productId}, Product Name: {item.productName}, Product Price: {item.productPrice}, Product Quantity: {item.productQuantity}
        </p>
      ))}
    </td>
  </tr>
))}

            </tbody>
          </table>
        </div>
      </div>

      <div>
      <input type="checkbox" id="customer-info" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="customer-info" className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
            <h3 className="text-lg font-bold"></h3>
         
                </div>
            </div>
      </div>
        </> */
}

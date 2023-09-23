import React, { useContext, useEffect, useState } from "react";
import { cartDataContext } from "../../../Contexts/CartDataProvider";
import useProfile from "../../../Hooks/useProfile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Error from "../../Shared/error/Error";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AdminTitle from "../../../Component/AdminTitle";
import UserTitle from "../../../Component/UserTitle";
const CheckOut = () => {
  // states
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const [serverRequesting, setserverRequesting] = useState(false);
  const [selectedOrderItems, setselectedOrderItems] = useState([]);
  const [deliveryCharge, setDeliveryCharge] = useState(10000);
  const [totalProductPrice, settotalProductPrice] = useState(10000);

  const [discount, setDiscount] = useState({
    couponCode: "",
    discountedAmmount: 0.0,
  });

  const { user } = useContext(AuthContext);

  const [profile] = useProfile();
  const { name, email, phone, address, city } = profile;
  // const [total] = useParams();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVERADDRESS}/checkout?email=${user?.email}`,
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        // console.log(data.data);
        setselectedOrderItems(data.data.cart);
        setDeliveryCharge(data.data?.deliveryCharge);
        settotalProductPrice(data.data?.totalProductPrice);
      })
      .catch((e) => {
        <Error />;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user?.email]);

  // _____________________________________________________
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const handleCoupon = (data) => {
    // console.log(data);
    setserverRequesting(true);

    axios.post(`${import.meta.env.VITE_SERVERADDRESS}/get-discount-by-coupon?email=${user?.email}`, data,
      {
        withCredentials: true,
      }
    )
      .then((data) => {
        toast.success("YAY !!!")
        setDiscount({
          couponCode: data.data?.couponCode,
          discountedAmmount: data.data?.discountedAmmount,
        });
      })
      .catch((e) => {
        setDiscount({ couponCode: "", discountedAmmount: 0 });
        toast.error(e?.response?.data?.message);
        reset();
      })
      .finally(() => setserverRequesting(false));
  };

  if (loading) {
    return <>Loading...</>;
  }

  const handlePlaceOrder = () => {

    const data = { couponName: discount?.couponCode }
    axios.post(`${import.meta.env.VITE_SERVERADDRESS}/checkout?email=${user?.email}`, data,
      {
        withCredentials: true,
      } )
      .then((data) => {
        console.log(data.data)
        navigate(`/dashboard/payment-methods/${data.data?.orderData?.insertedId}`, {
          state: {
            totalPayment: totalProductPrice + deliveryCharge - discount?.discountedAmmount,
            products: selectedOrderItems,
            _id : data.data?.insertedId
          }
        });
      })
      .catch((e) => {
        <Error />;
      })

  }

  return (
    <>
      <div className="h-full p-10">
        <UserTitle heading="CheckOut" />
        <div className="grid grid-cols-3 gap-5 m-10">
          <div className="col-span-2">
            <div className="border rounded-md shadow-lg bg-white mb-5 p-5">
              <p className="text-sm">
                Deliver to:{" "}
                <span className="text-base  font-medium">{name}</span>
              </p>
              <p className="my-1">{phone}</p>
              <div className="flex gap-3">
                <p>
                  {address}, {city}
                </p>

                <Link
                  className="text-blue-600 text-sm"
                  to="/dashboard/edit-user-profile"
                >
                  Edit
                </Link>
              </div>
            </div>
            <div className="border rounded-md shadow-lg bg-white mb-5 p-5 overflow-x-auto">
              <table className="min-w-full">
                <thead className="text-center">
                  <tr className="  border-b mb-3">
                    <th
                      scope="col"
                      className="px-2 py-2 text-center text-[#A3A3A3] text-lg font-normal uppercase tracking-w_ider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 text-center text-[#A3A3A3] text-lg font-normal uppercase tracking-w_ider"
                    >
                      Qty
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 text-center text-[#A3A3A3] text-lg font-normal uppercase tracking-w_ider"
                    >
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrderItems.map((item, index) => (
                    <tr
                      className=" user-select-none text-center border-b hover:bg-slate-100/75 "
                      key={index}
                    >
                      <td
                        scope="col"
                        className="px-2 py-4 text-center text-sm font-medium text-gray-500  tracking-w_ider"
                      >
                        {item.productTitle}
                      </td>
                      <td
                        scope="col"
                        className="px-2 py-4 text-center text-sm font-medium text-gray-500  tracking-w_ider"
                      >
                        {item.quantity}
                      </td>
                      <td
                        scope="col"
                        className="px-2 py-4 text-center text-sm font-medium text-gray-500  tracking-w_ider"
                      >
                        {item.price}
                      </td>
                      {/* Add more properties as needed */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="border rounded-md shadow-lg bg-white p-5 h-72">
            <div>
              <form onSubmit={handleSubmit(handleCoupon)}>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    {...register("couponName")}
                    autoComplete="off"
                    id="default-search"
                    className="block w-full p-3  text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                    placeholder="Coupon Code"
                    required
                  />
                  <button
                    type="submit"
                    disabled={serverRequesting}
                    className="text-white absolute right-2.5 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 disabled:bg-slate-400"
                  >
                    Apply
                  </button>
                </div>
              </form>

              <div className="flex justify-between items-center px-1 my-2">
                <p>Total Product Price:</p> <p>{totalProductPrice} </p>
              </div>
              <div className="flex justify-between items-center px-1">
                <p>Delivery Charge:</p> <p>{deliveryCharge}</p>
              </div>
              <div className="flex justify-between items-center px-1 my-2">
                <p>Discount:</p>
                <p>- {discount?.discountedAmmount}</p>
              </div>
              <div className="flex justify-between items-center px-1">
                <p>Total Payment: </p>{" "}
                <p>
                  {totalProductPrice +
                    deliveryCharge -
                    discount?.discountedAmmount}
                </p>
              </div>
            </div>
            <button onClick={handlePlaceOrder}
              className="w-full h-10 focus:ring focus:ring-3 ring-yellow-300  bg-accent text-white text-lg font-bold rounded-sm mt-10 disabled:bg-gray-500"
              disabled={serverRequesting}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

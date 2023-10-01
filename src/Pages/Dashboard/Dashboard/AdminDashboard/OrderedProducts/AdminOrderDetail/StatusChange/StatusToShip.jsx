import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../../../Hooks/useAxiosSecure";
import useRole from "../../../../../../../Hooks/useRole";
import useAuth from "../../../../../../../Hooks/useAuth";
import { json } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const StatusToShip = ({ id, refetchOrderDetail }) => {
    const { axiosSecure } = useAxiosSecure();
    const { userRoleDataLoading } = useRole();
  const { loading } = useAuth();
    const { refetch, data: deliveryPartner = [] } = useQuery({
        queryKey: ["deliveryPartner", axiosSecure],
        enabled: (!loading && !userRoleDataLoading),
        queryFn: async () => {
          const res = await axiosSecure.get(`/get-delivery-partner`);
          //console.log(res.data);
          return res?.data?.deliveryPartner;
        },
      });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const deliveryMan = JSON.parse(data?.deliveryPartner)
    const requestData = {
        id: id,
        message: data?.message,
        deliveryPartner: deliveryMan
    }
    axiosSecure.patch("/status-processed-to-shipped", requestData)
    .then((data)=>{
        refetchOrderDetail();
        toast.success("Successful!")
        
    })
    .catch((e) => {
        console.log(e);
        Swal.fire(
          {
            icon: "error",
            title: `${e?.response?.status} ${e?.code} `,
            text: `${e?.response?.data?.message}`
          }
        )
      });
  };

  const backToProcessed = () =>{
    const requestData = {
        id: id,
    }
    axiosSecure.patch("/status-back-to-processed", requestData)
    .then((data)=>{
        refetchOrderDetail();
        toast.success("Successfully returned")
        
    })
    .catch((e) => {
        console.log(e);
        Swal.fire(
          {
            icon: "error",
            title: `${e?.response?.status} ${e?.code} `,
            text: `${e?.response?.data?.message}`
          }
        )
      });
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-5 border rounded-md bg-slate-100 p-2"
    >
      <div className="mb-6">
        <label
          htmlFor="status"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Next Step
        </label>
        <input
          type="text"
          id="status"
          value="Shipped"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 read-only:cursor-not-allowed"
          placeholder="Next Step Name"
          readOnly
        />
      </div>
      <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">Delivery Partner</span>
                </label>
                <select
                
                className="select select-bordered rounded-md"
                  {...register("deliveryPartner", { required: true })}
                  defaultValue=""
                  
                >
                    <option 
                      disabled value="">
                    Select One
                  </option>
                  {
                    deliveryPartner.map(item => (
                      <option key={item?._id}
                       value={JSON.stringify({email: item?.email, name: item?.name})}>
                    {item?.name}
                  </option>
                    ))
                  }
                </select>
              </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Message
        </label>
        <textarea
          id="message"
          defaultValue="Your order has been shipped & is on it's way to you!"
          {...register("message", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none h-20"
        />
      </div>

      
      <div className="w-full flex justify-between items-center">
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Proceed To &#34;Shipped&#34;{" "}
      </button>
      <button onClick={backToProcessed} className="border-0 bg-none font-medium text-red-500 hover:text-red-600 hover:underline">Back To &#34;Processed&#34;</button>
      </div>
    </form>
  );
};

export default StatusToShip;

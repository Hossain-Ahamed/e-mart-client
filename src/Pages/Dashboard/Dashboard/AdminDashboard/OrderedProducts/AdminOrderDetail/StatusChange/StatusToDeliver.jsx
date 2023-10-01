import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../../../../Hooks/useAxiosSecure";
import useRole from "../../../../../../../Hooks/useRole";
import useAuth from "../../../../../../../Hooks/useAuth";
import { json } from "react-router-dom";

const StatusToDeliver = ({ id }) => {
    
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    //TODO first check the OTP inside the response if all okay then save it. Otherwise show unauthorized !!
  };

  
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
          value="Delivered"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 read-only:cursor-not-allowed"
          placeholder="Next Step Name"
          readOnly
        />
      </div>

      <div className="mb-6">
        <label
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          OTP
        </label>
        <input
          type="text"
          {...register("OTP", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 read-only:cursor-not-allowed"
          placeholder="Ask and Enter OTP"
          
        />
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
          defaultValue="Congratulations! Your order has been successfully delivered. We hope you enjoy your purchase. If you have any feedback or questions, please don't hesitate to reach out to us."
          {...register("message", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none h-20"
        />
      </div>
      
     
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Proceed To &#34;Delivered&#34;{" "}
      </button>
    </form>
  );
};

export default StatusToDeliver;

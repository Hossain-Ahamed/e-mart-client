import React from "react";
import { useForm } from "react-hook-form";
import useRole from "../../../../../../../Hooks/useRole";

const StatusToReadyToDelivery = ({ id }) => {
    const {role} = useRole();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    //TODO generate OTP
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
          value="Ready for delivery"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 read-only:cursor-not-allowed"
          placeholder="Next Step Name"
          readOnly
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
          defaultValue="Your order is now ready for delivery. Thank you for choosing our service."
          {...register("message", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none h-20"
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
      >
        Proceed To &#34;Ready To Delivery&#34;{" "}
      </button>
    </form>
  );
};

export default StatusToReadyToDelivery;

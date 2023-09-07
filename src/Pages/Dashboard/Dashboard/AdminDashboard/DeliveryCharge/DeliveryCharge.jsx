import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const DeliveryCharge = () => {
    const {
        data: places = []
      } = useQuery(["places"], async () => {
        try {
          const res = await axios.get(`http://localhost:5000/address`);
          //console.log(res.data);
          return res.data;
        } catch (error) {
          throw new Error(error.response?.data?.message || "An error occurred");
        }
      });
    
      const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset,
      } = useForm();
      
      const onSubmit = (data) => {
        console.log(data)
            const { defaultCharge, minimumOrderCostLimit, address, deliveryCharge } = data;
            const newDeliveryCharge = {
              defaultCharge: parseInt(defaultCharge),
              minimumOrderCostLimit: parseInt(minimumOrderCostLimit),
              address,
              deliveryCharge: parseInt(deliveryCharge),
            };
            console.log(newDeliveryCharge);
    
            axios
              .post("http://localhost:5000/delivery-charge", newDeliveryCharge, {
                withCredentials: true,
              })
              .then((data) => {
                console.log("new", data.data);
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Done",
                    showConfirmButton: false,
                    timer: 1500,
                  });
              })
              .catch((e) => {
                console.log(e);
                if (e?.response?.status === 409) {
                }
              });
          }
        
    return (
        <>
        <div className="bg-white p-20 h-full">
        
        <div className="flex">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>

              {/* ------Default Delivery Charge------ */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Default Delivery Charge (tk)</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered rounded-md"
                  value="30"
                  {...register("defaultCharge", {})}
                />
              </div>

              {/* ------Minimum Order Cost Limit------ */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">Minimum Order Cost Limit (tk)</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered rounded-md"
                  value="1000"
                  {...register("minimumOrderCostLimit", {})}
                />
              </div>

              {/* -----Address----- */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <select
                  {...register("address", { required: true })}
                  className="select select-bordered rounded-md"
                >
                  {places.map((place) => (
                    <option key={place._id} value={place.name}>
                      {place.name}
                    </option>
                  ))}
                </select>
                <label className="label">
                  {errors.address?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.address.message}
                    </span>
                  )}
                </label>
              </div>

              {/* -------Delivery Charge----- */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text font-semibold">
                    Delivery Charge
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Delivery Charge"
                  className="input input-bordered rounded-md"
                  {...register("deliveryCharge", {
                    required: {
                      value: true,
                      message: "Delivery Charge is Required",
                    },
                  })}
                />
              </div>

              <br />
              <input
                className="w-full h-12 cursor-pointer bg-accent text-white hover:bg-slate-200 hover:text-primary font-bold rounded-md mt-5"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default DeliveryCharge;
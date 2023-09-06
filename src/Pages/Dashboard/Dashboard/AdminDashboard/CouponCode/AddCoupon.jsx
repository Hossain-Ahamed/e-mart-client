import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import slugify from "slugify";
import AdminTitle from "../../../../../Component/AdminTitle";
import { format } from "date-fns"; // Import the format function
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AddCoupon = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();

  // const [dateRange, setDateRange] = useState([null, null]);
  const [selectedDateRange, setSelectedDateRange] = useState([null, null]);
  const [startDate, endDate] = selectedDateRange;

  const onSubmit = (data) => {
    const {
      couponCode,
      percentage,
      minimumOrderAmount,
      maximumDiscountLimit,
      numberOfUse,
      dateRange,
    } = data;

    // Format the selected date range to 'pp' format
    // const formattedStartDate = selectedDateRange[0] ? format(new Date(selectedDateRange[0]), 'pp') : null;
    // const formattedEndDate = selectedDateRange[1] ? format(new Date(selectedDateRange[1]), 'pp') : null;

    const newCategory = {
      couponCode,
      percentage,
      minimumOrderAmount,
      maximumDiscountLimit,
      numberOfUse,
      //dateRange: [formattedStartDate, formattedEndDate],
      dateRange,
      slug: slugify(couponCode),
    };

    console.log(newCategory);

    axios
      .post("http://localhost:5000/coupon", newCategory, {
        withCredentials: true,
      })
      .then((data) => {
        console.log("new", data.data);
        if (data.data.insertedId) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "One new coupon code added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        if (e?.response?.status === 409) {
        }
      });
  };

  return (
    <>
      <div className="h-full p-5 px-10 bg-white">
        <AdminTitle heading="Add New Category"></AdminTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <input
              type="text"
              placeholder="Coupon Code"
              className="input input-bordered rounded-md"
              {...register("couponCode", { required: true })}
            />
          </div>
          <div className="form-control my-3">
            <input
              placeholder="Percentage"
              type="text"
              className="input input-bordered rounded-md"
              {...register("percentage", { required: true })}
            />
          </div>
          <div className="form-control">
            <input
              placeholder="Minimum Order Amount"
              type="text"
              className="input input-bordered rounded-md"
              {...register("minimumOrderAmount", { required: true })}
            />
          </div>
          <div className="form-control my-3">
            <input
              placeholder="Maximum Discount Limit"
              type="text"
              className="input input-bordered rounded-md"
              {...register("maximumDiscountLimit", { required: true })}
            />
          </div>
          <div className="form-control">
            <input
              placeholder="Number of Use"
              type="text"
              className="input input-bordered rounded-md"
              {...register("numberOfUse", { required: true })}
            />
          </div>

          <div className="form-control my-3">
            <Controller
              control={control}
              name="dateRange"
              render={({ field }) => (
                <>
                  <DatePicker
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(dates) => {
                      setSelectedDateRange(dates);
                      field.onChange(dates);
                    }}
                    isClearable={true}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                  />
                </>
              )}
              rules={{
                required: true,
              }}
            />
          </div>

          <input
            type="submit"
            className="w-full h-12 cursor-pointer bg-primary text-white hover:bg-slate-200 hover:text-primary font-bold rounded-md mt-5"
            value="Add Coupon Code"
          />
        </form>
      </div>
    </>
  );
};

export default AddCoupon;

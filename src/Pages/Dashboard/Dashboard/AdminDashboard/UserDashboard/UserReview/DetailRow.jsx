import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { TbCurrencyTaka } from "react-icons/tb";
import Swal from "sweetalert2";
import useProfile from "../../../../../../Hooks/useProfile";

const DetailRow = ({ products }) => {
    //console.log(products)
  return (
    <>
      <div className="h-full grid grid-cols-2 gap-5 p-10">
      {products &&
            Array.isArray(products) &&
            products.map((i, count) => (
          <div key={count} className="">
            <div className="border rounded-md shadow-lg">
              <div className="grid grid-cols-2">
                <figure>
                  <img
                    className="w-32 h-40 md:h-64 md:w-52 p-2"
                    src={i?.productImage}
                    alt={i?.productName}
                  />
                </figure>

                <div className="my-1 text-center">
                  <p className="text-gray-700 text-sm truncate text-ellipsis overflow-hidden px-3">
                    {i?.productName}
                  </p>
                 
                </div>
                <p>Id, {i?.productId}</p>
                </div>
                <ReviewForm cart_product={i} id={i?.productId} />
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const ReviewForm = ({ cart_product, id }) => {
    const [profile] = useProfile();
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
  
    const onSubmit = (data) => {
        const { rating, comment } = data;
        const {_id, name, email} = profile
        const reviewData = { rating, comment, _id, name, email };
      
        axios
          .post(`http://localhost:5000/products/${id}/reviews`, reviewData, {
            withCredentials: true,
          })
          .then((response) => {
            console.log("Review added:", response.data);
            if (response.data?.message === "Review added successfully.") {
              reset(); // Clear the form
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Review submitted successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Review submission failed",
              });
            }
          })
          .catch((error) => {
            console.error("Error adding review:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong",
            });
          });
      };
      
    
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Add a hidden field to store the cart_product ID */}
        <input type="hidden" {...register("productId")} value={id} />
  
        <div className="form-control">
          <input
            type="number"
            placeholder="Rating 1 to 5"
            className="input input-bordered rounded-md"
            {...register("rating", { required: true })}
          />
        </div>
        <div className="form-control">
          <textarea
            placeholder="Comment Here"
            className="textarea textarea-bordered rounded-md h-24"
            {...register("comment", { required: true })}
          ></textarea>
        </div>
        <input
          type="submit"
          className="w-full h-10 bg-primary text-white font-bold rounded-md mt-5"
          value="Add your review"
        />
      </form>
    );
  };

export default DetailRow;

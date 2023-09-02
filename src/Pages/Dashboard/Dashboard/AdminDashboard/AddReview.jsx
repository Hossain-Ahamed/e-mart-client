import React from "react";
import useCart from "../../../../Hooks/useCart";
import { TbCurrencyTaka } from "react-icons/tb";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import axios from "axios";
import useProduct from "../../../../Hooks/useProduct";

const AddReview = () => {
  const [cart] = useCart();

  return (
    <>
      <div className="h-full grid grid-cols-2 gap-5 p-10">
        {cart.map((cart_product) => (
          <div key={cart_product._id} className="">
            <div className="border rounded-md shadow-lg">
              <div className="grid grid-cols-2">
                <figure>
                  <img
                    className="w-32 h-40 md:h-64 md:w-52 p-2"
                    src={cart_product.image}
                    alt={cart_product.productTitle}
                  />
                </figure>

                <div className="my-1 text-center">
                  <p className="text-gray-700 text-sm truncate text-ellipsis overflow-hidden px-3">
                    {cart_product.productTitle}
                  </p>
                  <p className="flex text-green-700 font-bold lg:text-xl justify-center my-1">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {cart_product.price}
                    {cart_product.mainPrice !== cart_product.price && (
                      <s className="flex text-sm text-gray-600">
                        <TbCurrencyTaka></TbCurrencyTaka>
                        {cart_product.mainPrice}
                      </s>
                    )}
                  </p>
                </div>
                </div>
                <ReviewForm cart_product={cart_product} key={cart_product._id} />
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const ReviewForm = ({ cart_product }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const { rating, comment, productId } = data;
    const _id = productId;
    console.log(_id)
    const updatedProduct = { rating, comment };
  
    axios
      .patch(`http://localhost:5000/products/${_id}`, updatedProduct, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Updated product:", response.data);
        if (response.data?.result?.modifiedCount === 1) {
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
        console.error("Error updating product:", error);
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
      <input type="hidden" {...register("productId")} value={cart_product._id} />

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

export default AddReview;

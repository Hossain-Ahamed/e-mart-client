import React, { useEffect, useState } from "react";
import useAddToCart from "../../Hooks/useAddToCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import BackToTopButton from "../../Component/BackToTopButton";

const ProductOverView = () => {
  const productDetail = useLoaderData();
  const [cart] = useCart();

  const [alreadyAdded, setalreadyAdded] = useState(false);

  const {
    _id,
    image,
    productTitle,
    price,
    mainPrice,
    des,
    stock,
    weight,
    size,
    quantity,
  } = productDetail;
  useEffect(() => {
    setalreadyAdded(cart.some((obj) => obj._id === _id));
  }, [cart, _id]);

  const handleAddToCart = useAddToCart();
  return (
    <>
      <div className="md:flex my-10 mx-16 gap-8">
        <figure>
          <img
            className="md:h-[450px] md:w-96 border"
            src={image}
            alt={productTitle}
          />
        </figure>

        <div className=" md:w-3/5">
          <p className="text-gray-700 text-xl font-bold">{productTitle}</p>

          <div className="divider"></div>
          <p className="flex text-yellow-700 font-bold lg:text-xl my-1">
            <TbCurrencyTaka></TbCurrencyTaka>
            {price}
            {mainPrice !== price && (
              <s className="flex text-sm text-gray-600">
                <TbCurrencyTaka></TbCurrencyTaka>
                {mainPrice}
              </s>
            )}
          </p>
          <div className="divider"></div>
          <p>Weight: {weight}</p>
          <p className="my-2">Size: {size}</p>
          <div className="divider"></div>
          <p>Current Stock: {quantity}</p>
          <p className="my-2">In Stock: {stock}</p>

          {quantity > 0 ? (
            alreadyAdded ? (
              <button className="flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-48 md:h-14 bg-accent text-white mt-5">
                <AiOutlineShoppingCart />
                <span>Added</span>
              </button>
            ) : (
              <button
                onClick={() => handleAddToCart(productDetail, 1)}
                className="flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-48 md:h-14 bg-accent text-white mt-5"
              >
                <AiOutlineShoppingCart />
                <span>Add to Cart</span>
              </button>
            )
          ) : (
            <button
              className="flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-48 md:h-14 bg-accent text-white mt-5 cursor-not-allowed"
              disabled
            >
              <AiOutlineShoppingCart />
              <span>Out of Stock</span>
            </button>
          )}
        </div>
      </div>
      <div className="border p-5 m-16">
        <h3 className="text-xl font-bold">Description</h3>
        <div className="divider"></div>
        <p className=" text-gray-600">{des}</p>
      </div>
      <BackToTopButton />
    </>
  );
};

export default ProductOverView;

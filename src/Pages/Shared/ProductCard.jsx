import React, { useEffect, useState } from "react";
import useAddToCart from "../../Hooks/useAddToCart";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const ProductCard = ({ showProduct }) => {
  const { _id, image, productTitle, price, mainPrice, quantity } = showProduct;

  const [cart] = useCart();

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [alreadyAdded, setalreadyAdded] = useState(false);

  useEffect(() => {
    setalreadyAdded(cart.some((obj) => obj._id === _id));
  }, [cart, _id]);

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleAddToCart = useAddToCart();
  return (
    <>
      <div className="w-32 h-96 md:w-52 border">
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(showProduct)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={`/overView/${_id}`}>
            <figure>
              <img
                className="w-32 h-40 md:h-64 md:w-52"
                src={image}
                alt={productTitle}
              />
            </figure>
          </Link>
          {hoveredProduct === showProduct &&
          (
            quantity > 0 ? (
              alreadyAdded ? (
                <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 bg-accent text-white mx-auto">
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <span className="">Added</span>
              </button>
              ) : (
                <button
                onClick={() => handleAddToCart(showProduct, 1)}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 bg-accent text-white mx-auto"
              >
                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                <span className="">Add to Cart</span>
              </button>
              )
            ) : (
              <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 bg-accent text-white mx-auto cursor-not-allowed" disabled>
                <AiOutlineShoppingCart />
                <span>Out of Stock</span>
              </button>
            )
            
          )
          }
        </div>
        <hr className="mb-1" />
        <div className="border-t-2">
          <div className="my-1 text-center">
            <p className="text-gray-700 text-sm truncate text-ellipsis overflow-hidden px-3">
              {productTitle}
            </p>
            <p className="flex text-yellow-700 font-bold lg:text-xl justify-center my-1">
              <TbCurrencyTaka></TbCurrencyTaka>
              {price}
              {mainPrice !== price && (
                <s className="flex text-sm text-gray-600">
                  <TbCurrencyTaka></TbCurrencyTaka>
                  {mainPrice}
                </s>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

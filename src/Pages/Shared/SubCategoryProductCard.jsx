import React, { useEffect, useState } from "react";
import useAddToCart from "../../Hooks/useAddToCart";
import { AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useRole from "../../Hooks/useRole";
import toast from "react-hot-toast";
// import useAddToWishList from "../../Hooks/useAddToWishList";
// import useWishList from "../../Hooks/useWishList";

const SubCategoryProductCard = ({ showProduct }) => {
  const { _id, image, productTitle, price, mainPrice, quantity } = showProduct;

  const {role} = useRole();
  //console.log(role);


  const [cart] = useCart();
  // const [wishList] = useWishList();

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [alreadyAdded, setalreadyAdded] = useState(false);
  // const [inWishList, setInWishList] = useState(false);

  useEffect(() => {
    if(role === "user")
    {
      setalreadyAdded(cart.some((obj) => obj._id === _id));
    }
  }, [cart, _id, role]);

  // useEffect(() => {
  //   setInWishList(wishList.some((obj) => obj._id === _id));
  // }, [wishList, _id]);

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleAddToCart = useAddToCart();
  // const handleAddToWishList = useAddToWishList();

  // const toggleWishList = () => {
  //   if (!inWishList) {
  //     handleAddToWishList(showProduct);
  //   } else {
  //     // Handle removing from wishlist here if needed
  //   }
  //   setInWishList(!inWishList);
  // };
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
          {hoveredProduct === showProduct && (
            <>
              {quantity > 0 ? (
                <div className="">
                  {alreadyAdded ? (
                    <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl font-bold w-32 h-8 md:w-52 md:h-10 bg-accent text-white mx-auto">
                      <AiOutlineShoppingCart></AiOutlineShoppingCart>
                      <span className="">Added</span>
                    </button>
                  ) : (
                    <>

                    {/* TODO: Need to change or disable addToCart for admin and others */}
                    <button
                      onClick={() => {["admin", "Order Manager", "Product Manager", "Delivery Partner"].includes(role) ? toast.error("You are not an user!") : handleAddToCart(showProduct, 1)}}
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 bg-accent text-white mx-auto"
                    >
                      <AiOutlineShoppingCart></AiOutlineShoppingCart>
                      <span className="">Add to Cart</span>
                    </button>
                    {/* <button
                        onClick={() => handleAddToWishList(showProduct, 1)}
                        className="absolute bottom-10 left-48 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 mx-auto"
                      >
                        {inWishList ? (
                          <AiFillHeart className="text-red-600" />
                        ) : (
                          <AiOutlineHeart />
                        )}
                      </button> */}
                    </>
                  )}
                  
                </div>
              ) : (
                <button
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 bg-red-600 text-white mx-auto cursor-not-allowed"
                  disabled
                >
                  <AiOutlineShoppingCart />
                  <span>Out of Stock</span>
                </button>
              )}
           </>
          )}
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

export default SubCategoryProductCard;

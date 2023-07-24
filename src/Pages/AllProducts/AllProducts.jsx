import React from "react";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const AllProducts = ({ product }) => {
  const { _id, name, img, realPrice, price } = product;
  return (
    <>
      <div className="w-[140px] h-[180px] md:w-[200px] md:h-[310px] lg:w-[220px] lg:h-[320px] hover:shadow-lg mx-auto">
        <Link>
          <figure className="flex justify-center">
            <img className="w-44 h-28 md:h-40 lg:h-52" src={img} />
          </figure>
          <div className="px-2">
            <div className="md:my-5 lg:my-1">
              <h2 className="text-[11px] md:text-xl lg:text-lg font-normal">
                {name}
              </h2>
              <p className="flex text-[11px] md:text-lg text-[#807F7F]">
                <TbCurrencyTaka></TbCurrencyTaka>
                {price}
                {realPrice && (
                  <s className="flex text-[11px] md:text-[13px] text-[#A9A9A9]">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {realPrice}
                  </s>
                )}
              </p>
            </div>
            <button>Add to Cart</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AllProducts;

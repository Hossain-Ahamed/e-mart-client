import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

import { TbCurrencyTaka } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useProduct from '../../../Hooks/useProduct';
import useAddToCart from '../../../Hooks/useAddToCart';

const NewProduct = () => {

    const  [ product ]  = useProduct();

    const products = product.filter(
      showProduct => showProduct.category === 'men' && showProduct['sub-category'] === 'newProducts'
            );

    const handleAddToCart = useAddToCart();

    return (
        <>
            <div className=' py-12'>
        <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
            <h3 className='text-lg md:text-2xl font-bold'>New Products</h3>
            <hr className='border'/>
            <hr className='border'/>
            </div>
        <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10'>
        <Swiper
        slidesPerView={2}
        spaceBetween={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        
        
      >
        
          {
            products.map(showProduct => ( <SwiperSlide
            key={showProduct._id}>
            <div className="w-[130px] h-[350px] md:w-[200px] md:h-[400px] hover:drop-shadow-xl">
        <Link >
          <figure>
            <img className="w-[130px] h-[200px] md:w-[200px] md:h-[250px]" src={showProduct.img} />
          </figure>
          <div className="">
            <div className="my-3">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">
                {showProduct.name}
              </h2>
              <p className="flex text-orange-400 font-bold lg:text-lg">
                <TbCurrencyTaka></TbCurrencyTaka>
                {showProduct?.price}
                {(showProduct?.mainPrice !==showProduct?.price) && (
                  <s className="flex text-sm text-gray-600">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {showProduct.mainPrice}
                  </s>
                )}
              </p>
            </div>
          </div>
        </Link>
        <button onClick={() => handleAddToCart(showProduct)} className="flex justify-center items-center gap-2 border lg:text-xl w-32 h-8 md:w-40 md:h-10 rounded-md bg-slate-200 hover:bg-orange-400 hover:text-white">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              <span className="">Add to Cart</span>
            </button>
      </div>
            </SwiperSlide>)
          )}
          
        </Swiper>
        </div>
        </div>
        </>
    );
};

export default NewProduct;
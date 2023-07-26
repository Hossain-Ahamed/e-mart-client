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

const BestSellers = () => {

   const [product] = useProduct();
   const bestSellers = product.filter(
            bestSeller => bestSeller.category === 'men' && bestSeller['sub-category'] === 'bestDeals'
          );

    // useEffect(() => {
    //   fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => {
    //       const bestSellers = data.filter(
    //         bestSeller => bestSeller.category === 'men' && bestSeller['sub-category'] === 'bestDeals'
    //       );
    //       setProduct(bestSellers);
    //     });
    // }, []);  

    return (
        <>
        <div className=' py-12'>
        <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
            <h3 className='text-lg md:text-2xl font-bold'>Best Sellers</h3>
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
            bestSellers.map(bestSeller => ( <SwiperSlide
            key={bestSeller._id}>
            <div className="w-[130px] h-[350px] md:w-[200px] md:h-[400px] hover:drop-shadow-xl bg-white">
        <Link >
          <figure>
            <img className="w-[130px] h-[200px] md:w-[200px] md:h-[250px]" src={bestSeller.img} />
          </figure>
          <div className="">
            <div className="my-3 px-2">
            <h2 className="text-lg md:text-xl font-semibold text-gray-700">
                {bestSeller.name}
              </h2>
              <p className="flex text-orange-400 font-bold lg:text-lg">
                <TbCurrencyTaka></TbCurrencyTaka>
                {bestSeller?.price}
                {(bestSeller?.mainPrice !==bestSeller?.price) && (
                  <s className="flex text-sm text-gray-600">
                    <TbCurrencyTaka></TbCurrencyTaka>
                    {bestSeller.mainPrice}
                  </s>
                )}
              </p>
            </div>
          </div>
        </Link>
        <button className="flex justify-center items-center gap-2 border lg:text-xl w-32 h-8 md:w-40 md:h-10 rounded-md bg-slate-200 hover:bg-orange-400 hover:text-white">
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

export default BestSellers;
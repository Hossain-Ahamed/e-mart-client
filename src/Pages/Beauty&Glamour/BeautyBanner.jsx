import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Men'sFashion/HomeForMen/Banner.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BeautyBanner = () => {
    return (
        <>
        <div className="grid lg:flex justify-center md:gap-5 py-6">
        <div className="w-[300px] md:w-[700px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-md"
        >
          <SwiperSlide>
          <div className="relative">
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/images/stencil/original/carousel/3/slider-01.jpg?c=1" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-2xl font-bold">New Arrivals</h1>
          <p className="text-white text-3xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/images/stencil/original/carousel/4/slider-02.jpg?c=1" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-2xl font-bold">New Arrivals</h1>
          <p className="text-white text-3xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
          </SwiperSlide>
          
        </Swiper>
        </div>

        <div className="relative w-[300px] lg:w-[250px]">
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/top-banner-01.jpg" alt="" className="rounded-md h-[400px]" />
            <div className="absolute right-20 top-6">
            <h1 className="text-white text-xl">New Arrivals</h1>
          <p className="text-white text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
      </div>

      <div className="px-4 lg:px-16 py-5 bg-zinc-100">
      <Swiper
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
        delay: 2800,
        disableOnInteraction: false,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        "@0.75": {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        "@1.00": {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Autoplay]} 
      className="mySwiper h-32">
        <SwiperSlide>
          <div className="flex gap-10 items-center bg-white">
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/offer-img-01.jpg" alt="" className="border-r-2 " />
            <div className="">
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Hair Oil</p>
              <p className="text-sm text-purple-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-10 items-center bg-white">
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/offer-img-02.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Lipstick</p>
              <p className="text-sm text-purple-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-10 items-center bg-white">
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/offer-img-03.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Eye Shadow</p>
              <p className="text-sm text-purple-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-10 items-center bg-white">
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/offer-img-04.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Facial Cream</p>
              <p className="text-sm text-purple-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        
      </Swiper>
      </div>
        </>
    );
};

export default BeautyBanner;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Men'sFashion/HomeForMen/Banner.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const GroceryBanner = () => {
    return (
        <>
        <div className="grid lg:flex justify-center p-12">
        <div className="w-[320px] h-[200px] md:w-[700px] md:h-[400px] mx-auto ">
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
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="relative">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/original/carousel/27/slider-02__71477.jpg?c=1" alt="" />
            <div className="absolute top-4 left-4 md:top-28 md:left-24">
            <h1 className="uppercase text-lg md:text-2xl">Always Fresh & Juicy</h1>
          <p className="uppercase text-xl md:text-3xl font-bold my-1 md:my-5">Vegetables Sauce</p>
          <button className="text-white font-bold bg-green-500 w-32 h-10">Shop Now</button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/original/carousel/26/slider-01__76247.jpg?c=1" alt="" />
            <div className="absolute top-4 left-4 md:top-28 md:left-24">
            <h1 className="uppercase text-lg md:text-2xl">100% Organics</h1>
          <p className="uppercasetext-xl md:text-3xl font-bold my-1 md:my-5">Fresh Fruits Juice</p>
          <button className="text-white font-bold bg-green-500 w-32 h-10">Shop Now</button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/original/carousel/28/slider-03.jpg?c=1" alt="" />
            <div className="absolute top-4 left-4 md:top-28 md:left-24">
            <h1 className=" text-lg md:text-2xl uppercase">Flat 25% Off</h1>
          <p className="text-xl md:text-3xl font-bold my-1 md:my-5 uppercase">Fruit & Vegetables</p>
          <button className="text-white font-bold bg-green-500 w-32 h-10">Shop Now</button>
            </div>
        </div>
          </SwiperSlide>
        </Swiper>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-[445px] mx-auto ">
        <div className="relative w-[300px] lg:w-[200px]">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/top-banner-02.jpg" alt="" />
            <div className="absolute top-2 left-8">
            <h1 className="text-lg">New Arrivals</h1>
          <p className="text-2xl font-bold">Fresh Vegetables</p>
          <button className="hover:text-white font-bold hover:bg-green-500 w-32 h-10">Save 20%</button>
            </div>
        </div>

        <div className="relative w-[300px] lg:w-[200px]">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/top-banner-04.jpg" alt="" />
            <div className="absolute top-2 left-8">
            <h1 className="text-center text-lg">Big Saving</h1>
          <p className="text-center text-xl font-bold">Save 35% OFF</p>
          <button className="hover:text-white font-bold hover:bg-green-500 w-32 h-10">Save 20%</button>
            </div>
        </div>

        <div className="relative w-[300px] lg:w-[200px]">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/top-banner-03.jpg" alt="" />
            <div className="absolute top-2 left-8">
            <h1 className="text-lg">100% Organics</h1>
          <p className="text-xl font-bold">Healthy Fruits</p>
          <button className="hover:text-white font-bold hover:bg-green-500 w-32 h-10">Save 20%</button>
            </div>
        </div>

        <div className="relative w-[300px] lg:w-[200px]">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/top-banner-01.jpg" alt="" />
            <div className="absolute top-2 left-8">
            <h1 className="text-lg text-center">Season Sale</h1>
          <p className="text-center text-xl font-bold">Daily Eating</p>
          <button className="hover:text-white font-bold hover:bg-green-500 w-32 h-10">Save 20%</button>
            </div>
        </div>
        </div>
      </div>

      <div className="px-4 lg:px-16 py-5 bg-zinc-100">
      <Swiper
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
        delay: 2500,
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
          spaceBetween: 10,
        },
      }}
      modules={[Autoplay]} 
      className="mySwiper">
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 h-[110px] bg-white p-4">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/offer-img-04.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Organic Milk</p>
              <p className="text-sm text-green-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 h-[110px] bg-white p-4">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/offer-img-01.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Organic Juice</p>
              <p className="text-sm text-green-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 h-[110px] bg-white p-4">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/offer-img-05.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Fresh Vegetables</p>
              <p className="text-sm text-green-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 h-[110px] bg-white p-4">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/offer-img-02.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Fresh Fruits</p>
              <p className="text-sm text-green-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 h-[110px] bg-white p-4">
            <img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/offer-img-03.jpg" alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Breakfast & Dairy</p>
              <p className="text-sm text-green-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        
      </Swiper>
      </div>
        </>
    );
};

export default GroceryBanner;
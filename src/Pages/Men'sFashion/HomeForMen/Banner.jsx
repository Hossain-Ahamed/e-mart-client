import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../HomeForMen/Banner.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <div className="grid lg:flex justify-center md:gap-5 py-6">
        <div className="w-[300px] h-[200px] md:w-[700px] md:h-[400px]">
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
            <img src="https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&h=400" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-2xl font-bold">New Arrivals</h1>
          <p className="text-white text-3xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnMlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&h=400" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-2xl font-bold">New Arrivals</h1>
          <p className="text-white text-3xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&h=400" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-2xl font-bold">New Arrivals</h1>
          <p className="text-white text-3xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1556004583-d2aaffbba592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&h=400" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-2xl font-bold">New Arrivals</h1>
          <p className="text-white text-3xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="grid md:flex lg:grid gap-3 justify-center">
        <div className="relative w-[300px] lg:w-[250px] lg:h-[200px]">
            <img src="https://images.unsplash.com/photo-1619225379807-e9002c44c462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=300&h=220" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-xl">New Arrivals</h1>
          <p className="text-white text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>

        <div className="relative w-[300px] lg:w-[250px] lg:h-[200px]">
            <img src="https://images.unsplash.com/photo-1617689563472-c66428e83d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&h=220" alt="" className="rounded-md" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-xl">New Arrivals</h1>
          <p className="text-white text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
        </div>
      </div>

      <div className="px-4 lg:px-16 py-5">
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
          <div className="flex gap-16 lg:gap-28 border-r-2">
            <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hpcnRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100" alt="" />
            <div>
            <h3 className="text-orange-700 ">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Comfort Shirt</p>
              <p className="text-blue-500 text-sm">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 border-r-2">
            <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&h=100" alt="" />
            <div>
            <h3 className="text-orange-700 ">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Comfort Shirt</p>
              <p className="text-blue-500 text-sm">Up to 20% Off</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 border-r-2">
            <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&h=100" alt="" />
            <div>
            <h3 className="text-orange-700 ">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Comfort Shirt</p>
              <p className="text-blue-500 text-sm">Up to 20% Off</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-16 lg:gap-28 border-r-2">
            <img src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100" alt="" />
            <div>
              <h3 className="text-orange-700 ">Big Range Of</h3>
              <p className="lg:text-xl font-bold my-1">Comfort Shirt</p>
              <p className="text-blue-500 text-sm">Up to 20% Off</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Banner;

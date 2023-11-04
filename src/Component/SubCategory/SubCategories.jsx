import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { Link, useNavigate } from "react-router-dom";
import useSubCategory from "../../Hooks/useSubCategory";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const SubCategories = ({ subcategory }) => {
  //console.log(subcategory)
  const navigate = useNavigate();

  return (
    <>
      <div className=" lg:p-12 p-3 pt-6 lg:pt-20">
        <div className="grid grid-cols-3 items-center gap-0">
          <h3 className="text-lg md:text-2xl font-bold">Sub-Categories</h3>
          <hr className="border" />
          <hr className="border" />
        </div>
        <div className="w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-3 lg:mt-10">
          <Swiper
            slidesPerView={2}
            spaceBetween={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            rewind={true}
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
                slidesPerView: 5,
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
            {subcategory &&
              Array.isArray(subcategory) &&
              subcategory.map((subCategories) => (
                <SwiperSlide onClick={() => {navigate(`/sub-category-pages/${subCategories?.slug}`)}} key={subCategories?._id}>
                  <div className="w-36 h-36 md:w-44 md:h-44 lg:w-64 lg:h-64 hover:drop-shadow-xl">
                    
                      <div className="">
                        <img
                          src={subCategories?.img}
                          alt=""
                          className="rounded-full w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 mx-auto shadow-md cursor-pointer"
                        />
                        <p className="lg:text-xl font-semibold text-center mt-3 uppercase">
                          {subCategories?.name}
                        </p>
                      </div>
                   
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SubCategories;

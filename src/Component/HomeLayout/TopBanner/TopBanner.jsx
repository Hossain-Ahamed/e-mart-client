import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../Pages/Home/Banner/Swip.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const TopBanner = ({images}) => {
    return (
        <>
        <div className='lg:w-[900px] h-[200px] md:h-[250px] lg:h-[400px] mx-auto'>
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
        {
            images?.slice(-3).map((img, index) => (
            <SwiperSlide key={index}><img src={img} alt="" className='lg:w-[900px] h-[200px] md:h-[250px] lg:h-[400px]' /></SwiperSlide>
            ))
        }
      </Swiper>
        </div>
    </>
    );
};

export default TopBanner;
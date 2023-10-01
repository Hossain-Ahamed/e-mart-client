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
        <div className=' w-full h-[200px] md:h-[250px] lg:h-[400px]'>
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
            images?.map((img, index) => (
            <SwiperSlide key={index}><img src={img} alt="" className='w-full h-[200px] md:h-[250px] lg:h-[500px]' /></SwiperSlide>
            ))
        }
      </Swiper>
        </div>
    </>
    );
};

export default TopBanner;
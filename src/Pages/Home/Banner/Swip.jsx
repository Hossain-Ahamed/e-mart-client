import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/Swip.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Swip = () => {
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
        <SwiperSlide><img src="https://gcp-img.slatic.net/lazada/3a898653-9ece-4e0c-95e5-19a1d49fb874_BD-1188-320.jpg" alt="" className='w-full h-[200px] md:h-[250px] lg:h-[400px]' /></SwiperSlide>
        <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/a21e1493-0b92-4917-a33d-746b951d9fa3.jpg" alt="" className='w-full h-[200px] md:h-[250px] lg:h-[400px]' /></SwiperSlide>
        <SwiperSlide><img src="https://gcp-img.slatic.net/lazada/cb115603-66b4-4f66-8f52-646caf8d728c_BD-1188-344.jpg" alt="" className='w-full h-[200px] md:h-[250px] lg:h-[400px]' /></SwiperSlide>
        <SwiperSlide><img src="https://icms-image.slatic.net/images/ims-web/5817cac5-d05d-4ff2-9fd4-02969e41e5e3.jpg" alt="" className='w-full h-[200px] md:h-[250px] lg:h-[400px]' /></SwiperSlide>
        
      </Swiper>
        </div>
    </>
    );
};

export default Swip;
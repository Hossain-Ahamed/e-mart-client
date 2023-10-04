import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/Swip.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Swip = () => {
  const slug = "home";
 const { axiosSecure } = useAxiosSecure();
  const { data: banners = [] } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/home-top-banners/${slug}/top-banner`);
      return res?.data;
    },
  });
    return (
        <>
        <div className=' w-full h-[200px] md:h-[250px] lg:h-[400px] mb-20'>
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
            banners?.map((img, index) => (
            <SwiperSlide key={index}><img src={img} alt="" className='w-full h-[200px] md:h-[250px] lg:h-[500px]' /></SwiperSlide>
            ))
        }
      </Swiper>
        </div>
    </>
    );
};

export default Swip;
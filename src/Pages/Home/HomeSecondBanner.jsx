import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Home/Banner/Swip.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const HomeSecondBanner = () => {
  const slug = "home";
  const { axiosSecure } = useAxiosSecure();
const { refetch, data: banners = [] } = useQuery({
  queryKey: ["secondBanners", slug],
  queryFn: async () => {
    const res = await axiosSecure.get(`/home-second-banners/${slug}/second-banner`);
    console.log(res.data);
    return res?.data;
  },
});
    return (
      <>
      <div className='w-[1200px] h-[200px] md:h-[250px] lg:h-[450px] mx-auto rounded-lg'>
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
          <SwiperSlide key={index}><img src={img} alt="" className='w-[1200px] h-[200px] md:h-[250px] lg:h-[450px] mx-auto rounded-lg' /></SwiperSlide>
          ))
      }
    </Swiper>
      </div>
  </>
    );
};

export default HomeSecondBanner;
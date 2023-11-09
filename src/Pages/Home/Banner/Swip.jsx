import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Banner/Swip.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

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
      <div>
        {banners?.slice(-1).map((img, index) => (
          <div
            key={index}
            className="bg-fixed bg-no-repeat"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="bg-neutral-900 bg-opacity-70 p-20">
              <img className="" src={img} alt="" />
            </div>
          </div>
        ))}
      </div>

      {/* <div className='w-[1000px] h-[200px] md:h-[250px] lg:h-[400px] mx-auto'>
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
            banners?.slice(-3).map((img, index) => (
            <SwiperSlide key={index}><img src={img} alt="" className='w-[1000px] h-[200px] md:h-[250px] lg:h-[400px]' /></SwiperSlide>
            ))
        }
      </Swiper>
        </div> */}
    </>
  );
};

export default Swip;

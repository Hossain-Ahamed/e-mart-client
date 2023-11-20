import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TopLeftBanner = ({ images }) => {
  return (
    <div>
      <div className="w-[300px] h-40 md:w-[620px] md:h-60 lg:w-[700px] lg:h-[400px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-md"
        >
          {images?.slice(-3).map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img src={img} alt="" className="rounded-md w-[300px] h-40 md:w-[620px] md:h-60 lg:w-[700px] lg:h-[420px]" />
                {/* <div className="absolute right-20 bottom-10">
                  <h1 className="text-white text-2xl font-bold">New Arrivals</h1>
                  <p className="text-white text-3xl font-bold my-1">Shoe</p>
                  <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">
                    Save 20%
                  </button>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopLeftBanner;

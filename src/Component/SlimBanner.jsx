import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Pages/Men'sFashion/HomeForMen/Banner.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SlimBanner = ({slimBannerInfo}) => {
    const {img, title, description} = slimBannerInfo;
    
    return (
        <>
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
            <img src={img} alt="" className="border-r-2 " />
            <div>
            <h3 className=" text-red-500">{title}</h3>
              <p className="lg:text-xl font-bold my-1">{description}</p>
              <p className="text-sm text-green-500">Up to 20% Off</p>
            </div>
          </div>
          </SwiperSlide>
          </Swiper>
        </>
    );
};

export default SlimBanner;
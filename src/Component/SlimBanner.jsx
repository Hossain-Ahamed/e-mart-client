import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Pages/Men'sFashion/HomeForMen/Banner.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SlimBanner = ({ slimBanners }) => {
   
    return (
        <>
        <Swiper
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      rewind={true}
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
          slidesPerView: 3,
          spaceBetween: 5,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      modules={[Autoplay]} 
      className="mySwiper">
        {
              slimBanners?.map((slimBanner, index) => (
                <SwiperSlide key={index}>
                <div className="flex gap-16 lg:gap-28 h-[110px] bg-white p-4">
                 <div className=" border-r-2 w-24 h-20">
                 <img src={slimBanner?.slimBannerImage} alt="" className="w-20 h-20" />
                  
                 </div>
                 <div>
                  <h3 className=" text-red-500">{slimBanner?.titleSlim}</h3>
                  <p className="lg:text-xl font-bold my-1">{slimBanner?.headingsSlim}</p>
                  <p className="text-sm text-green-500">{slimBanner?.offerSlim}</p>
                  </div>
                  </div>
                  </SwiperSlide>
              ))
            }
        
          </Swiper>
        </>
    );
};

export default SlimBanner;

{/* <div className="flex gap-16 lg:gap-28 h-[110px] bg-white p-4">
{
  images.map((img, index) => (
    <div key={index}
    >
      <img src={img} alt="" className="border-r-2 " />
    </div>
  ))
}
<div>
{
  titles.map((title, index) => (
    <div key={index}>
      <h3 className=" text-red-500">{title}</h3>
    </div>
  ))
}
  {
    headings.map((heading, index) => (
      <div key={index}>
        <p className="lg:text-xl font-bold my-1">{heading}</p>
      </div>
    ))
  }
 {
  offers.map((offer, index) =>(
    <div key={index}>
       <p className="text-sm text-green-500">{slimBanner?.offer}</p>
    </div>
  ))
 }
</div>
</div> */}
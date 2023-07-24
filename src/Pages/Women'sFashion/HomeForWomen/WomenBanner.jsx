import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../Men'sFashion/HomeForMen/Banner.css"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { BsArrowRight } from "react-icons/bs";

const WomenBanner = () => {
    return (
        <>
            <div className="w-[300px] h-[230px] md:w-[700px] md:h-[350px] lg:w-[1200px] lg:h-[550px] mx-auto mt-12">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
          <div className="relative w-[300px] h-[210px] md:w-[700px] md:h-[350px] lg:w-[1100px] lg:h-[600px] mx-auto">
            <img src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg?size=626&ext=jpg&ga=GA1.1.1461934439.1649021458&semt=ais" alt="" className="w-[300px] h-[180px] md:w-[600px] md:h-[280px] lg:w-[900px] lg:h-[450px] mx-auto" />
            <div className="absolute w-32 h-20 md:w-[300px] md:h-[180px] lg:w-[350px] lg:h-[250px] left-0 bottom-0 lg:bottom-16 bg-zinc-900 p-2 lg:p-8">
            <h1 className="text-white text-sm md:text-2xl md:font-bold">Summer Discount 30%</h1>
          <p className="text-white font-thin my-2 lg:my-4 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet libero debitis quasi illo ratione.</p>
          <button className="text-white text-[9px] md:text-base md:font-bold bg-amber-800 w-20 h-5 md:w-28 md:h-8 lg:w-32 lg:h-12 flex justify-center items-center gap-2">Shop Now <BsArrowRight></BsArrowRight></button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative w-[300px] h-[210px] md:w-[700px] md:h-[350px] lg:w-[1100px] lg:h-[600px] mx-auto">
            <img src="https://img.freepik.com/free-photo/ecstatic-white-girl-beret-posing-with-amazement-elegant-caucasian-female-model-t-shirt-standing-red-wall_197531-11462.jpg?size=626&ext=jpg&ga=GA1.1.1461934439.1649021458&semt=ais" alt="" className="w-[300px] h-[180px] md:w-[600px] md:h-[280px] lg:w-[900px] lg:h-[450px] mx-auto" />
            <div className="absolute w-32 h-20 md:w-[300px] md:h-[180px] lg:w-[350px] lg:h-[250px] left-0 bottom-0 lg:bottom-16 bg-zinc-900 p-2 lg:p-8">
            <h1 className="text-white text-sm md:text-2xl md:font-bold">Summer Discount 30%</h1>
          <p className="text-white font-thin my-2 lg:my-4 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet libero debitis quasi illo ratione.</p>
          <button className="text-white text-[9px] md:text-base md:font-bold bg-amber-800 w-20 h-5 md:w-28 md:h-8 lg:w-32 lg:h-12 flex justify-center items-center gap-2">Shop Now <BsArrowRight></BsArrowRight></button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative w-[300px] h-[210px] md:w-[700px] md:h-[350px] lg:w-[1100px] lg:h-[600px] mx-auto">
            <img src="https://img.freepik.com/free-photo/high-fashion-portrait-young-elegant-blonde-woman-black-wool-hat-wearing-oversize-white-fringe-poncho-with-long-grey-dress_273443-3799.jpg?size=626&ext=jpg&ga=GA1.1.1461934439.1649021458&semt=ais" alt="" className="w-[300px] h-[180px] md:w-[600px] md:h-[280px] lg:w-[900px] lg:h-[450px] mx-auto" />
            <div className="absolute w-32 h-20 md:w-[300px] md:h-[180px] lg:w-[350px] lg:h-[250px] left-0 bottom-0 lg:bottom-16 bg-zinc-900 p-2 lg:p-8">
            <h1 className="text-white text-sm md:text-2xl md:font-bold">Summer Discount 30%</h1>
          <p className="text-white font-thin my-2 lg:my-4 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet libero debitis quasi illo ratione.</p>
          <button className="text-white text-[9px] md:text-base md:font-bold bg-amber-800 w-20 h-5 md:w-28 md:h-8 lg:w-32 lg:h-12 flex justify-center items-center gap-2">Shop Now <BsArrowRight></BsArrowRight></button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative w-[300px] h-[210px] md:w-[700px] md:h-[350px] lg:w-[1100px] lg:h-[600px] mx-auto">
            <img src="https://img.freepik.com/free-photo/full-length-portrait-positive-stylish-lady-jumping-red-wall-woman-plaid-shirt-white-skirt-is-dancing-great-mood_197531-14352.jpg?size=626&ext=jpg&ga=GA1.1.1461934439.1649021458&semt=ais" alt="" className="w-[300px] h-[180px] md:w-[600px] md:h-[280px] lg:w-[900px] lg:h-[450px] mx-auto" />
            <div className="absolute w-32 h-20 md:w-[300px] md:h-[180px] lg:w-[350px] lg:h-[250px] left-0 bottom-0 lg:bottom-16 bg-zinc-900 p-2 lg:p-8">
            <h1 className="text-white text-sm md:text-2xl md:font-bold">Summer Discount 30%</h1>
          <p className="text-white font-thin my-2 lg:my-4 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet libero debitis quasi illo ratione.</p>
          <button className="text-white text-[9px] md:text-base md:font-bold bg-amber-900 w-20 h-5 md:w-28 md:h-8 lg:w-32 lg:h-12 flex justify-center items-center gap-2">Shop Now <BsArrowRight></BsArrowRight></button>
            </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative w-[300px] h-[210px] md:w-[700px] md:h-[350px] lg:w-[1100px] lg:h-[600px] mx-auto">
            <img src="https://img.freepik.com/free-photo/young-woman-beautiful-dress-hat_1303-17517.jpg?size=626&ext=jpg&ga=GA1.1.1461934439.1649021458&semt=ais" alt="" className="w-[300px] h-[180px] md:w-[600px] md:h-[280px] lg:w-[900px] lg:h-[450px] mx-auto" />
            <div className="absolute w-32 h-20 md:w-[300px] md:h-[180px] lg:w-[350px] lg:h-[250px] left-0 bottom-0 lg:bottom-16 bg-zinc-900 p-2 lg:p-8">
            <h1 className="text-white text-sm md:text-2xl md:font-bold">Summer Discount 30%</h1>
          <p className="text-white font-thin my-2 lg:my-4 hidden md:block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet libero debitis quasi illo ratione.</p>
          <button className="text-white text-[9px] md:text-base md:font-bold bg-amber-800 w-20 h-5 md:w-28 md:h-8 lg:w-32 lg:h-12 flex justify-center items-center gap-2">Shop Now <BsArrowRight></BsArrowRight></button>
            </div>
        </div>
          </SwiperSlide>
        </Swiper>
        </div>
        </>
    );
};

export default WomenBanner;
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from 'react-router-dom';

  
const WomenCategory = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/womenCategory')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <>
        <div className=' md:my-12 p-3 pt-6 md:mt-20'>
            
            <h3 className='text-lg md:text-2xl lg:text-4xl font-bold text-center'>Shop Categories</h3>
            
        <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-3 md:mt-10'>
        <Swiper
        slidesPerView={2}
        spaceBetween={5}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
        
        
      >
        
          {
            category.map(categories => ( <SwiperSlide
                key={categories._id}>
            <div className="w-36 h-36 md:w-44 md:h-44 lg:w-[280px] lg:h-[370px] hover:bg-amber-800 hover:text-white">
            <Link>
        <div className=''>
            <img src={categories.img} alt="" className='w-32 h-28 md:w-40 md:h-36 lg:w-[270px] lg:h-80 mx-auto shadow-md' />
            <p className='lg:text-xl font-semibold text-center lg:mt-3'>{categories.name}</p>
        </div>
        </Link>
      </div>
            </SwiperSlide>)
          )}
          
        </Swiper>
        </div>
        </div>
        </>
    );
};

export default WomenCategory;
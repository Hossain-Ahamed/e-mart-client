import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from 'react-router-dom';

const GroceryCategory = () => {
    
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/groceryCategory')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <>
        <div className=' md:my-12 p-3'>
            
        <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
            <h3 className='text-lg md:text-2xl font-bold'>Grocery Category</h3>
            <hr className='border'/>
            <hr className='border'/>
            </div>
            
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
            slidesPerView: 3,
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
            <div className="relative w-36 h-36 md:w-52 md:h-48 lg:w-[270px] lg:h-72 border">
            <Link>
        <div className=''>
            <img src={categories.img} alt="" className='absolute bottom-0 right-0 ' />
            <p className='lg:text-lg font-semibold text-center lg:mt-3 absolute top-6 left-4'>{categories.name}</p>
            
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

export default GroceryCategory;
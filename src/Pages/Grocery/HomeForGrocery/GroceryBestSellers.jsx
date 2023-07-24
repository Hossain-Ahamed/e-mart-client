import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { Link } from 'react-router-dom';

const GroceryBestSellers = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/groceryCategory')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <>
        <div className=' md:py-12 p-3'>
            
        <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
            <h3 className='text-lg md:text-2xl font-bold'>Best Sellers</h3>
            <hr className='border'/>
            <hr className='border'/>
            </div>
            
        <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-3 md:mt-10'>
        <Swiper
        slidesPerView={2}
        spaceBetween={5}
        pagination={{
            clickable: true,
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        
        
      >
        
          {
            category.map(categories => ( <SwiperSlide
                key={categories._id}>
            <div className="w-36 h-36 md:w-52 md:h-48 lg:w-[370px] lg:h-96 border bg-white shadow-md">
            <Link>
        <div className='flex gap-5'>
            <div className=''>
            <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-[150px]"
      >
        <SwiperSlide><img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/305x395/products/86/495/11-02__78491.1606378003.jpg?c=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/305x395/products/86/496/11-03__25246.1606378003.jpg?c=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/305x395/products/86/497/11-04__42447.1606378004.jpg?c=1" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://cdn11.bigcommerce.com/s-vptmq0v2zd/images/stencil/305x395/products/86/498/11__18274.1606378004.jpg?c=1" alt="" /></SwiperSlide>
      </Swiper>
            {/* <img src={categories.img} alt="" className='absolute bottom-0 right-0 ' /> */}
            </div>
            <div className='w-36 mt-5'>
            <p className=''>{categories.name}</p>
            <p className='lg:text-lg font-semibold my-3'>Garlic</p>
            <p className='text-sm text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, autem!</p>
            <p className='my-3 text-gray-600'>250</p>
            <button className='bg-green-700 text-white font-bold w-36 h-10'>+ Add to Cart</button>
            </div>
            
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


export default GroceryBestSellers;
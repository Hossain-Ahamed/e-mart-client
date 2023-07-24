import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";
import { TbCurrencyTaka } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const GroceryFeaturedProducts = () => {

    const [featuredProducts, setFeaturedProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/groceryFeaturedProducts')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data))
  }, [])

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

    return (
       <>
       <div className=' py-20'>
       <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
            <h3 className='text-lg md:text-2xl font-bold'>Featured Products</h3>
            <hr className='border'/>
            <hr className='border'/>
            </div>
       <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-8'>
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
                    slidesPerView: 5,
                    spaceBetween: 10,
                  },
                }}
                modules={[Autoplay]}
                className="mySwiper"
              >
                {featuredProducts.map(featuredProduct => (
                  <SwiperSlide key={featuredProduct._id}>
                    <div className="w-32 md:w-52 border">
                      <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(featuredProduct)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <figure>
                          <img
                            className=""
                            src={featuredProduct.img}
                            alt={featuredProduct.name}
                          />
                        </figure>
                        {hoveredProduct === featuredProduct && (
                          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 bg-green-700 text-white mx-auto">
                          <AiOutlineShoppingCart></AiOutlineShoppingCart>
                          <span className="">Add to Cart</span>
                        </button>
                        )}
                      </div>
                      <hr className='mb-1'/>
                      <div className="border-t-2">
                        <div className="my-1 text-center">
                          <p className="text-gray-700">
                            {featuredProduct.name}
                          </p>
                          <p className="flex text-green-700 font-bold lg:text-xl justify-center my-1">
                            <TbCurrencyTaka></TbCurrencyTaka>
                            {featuredProduct?.price}
                            {(featuredProduct?.mainPrice !== featuredProduct?.price) && (
                              <s className="flex text-sm text-gray-600">
                                <TbCurrencyTaka></TbCurrencyTaka>
                                {featuredProduct.mainPrice}
                              </s>
                            )}
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            </div>
       </>
    );
};

export default GroceryFeaturedProducts;
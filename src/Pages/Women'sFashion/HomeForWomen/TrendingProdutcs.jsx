import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";
import { TbCurrencyTaka } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TrendingProducts = () => {
  const [activeContent, setActiveContent] = useState('content1');
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/womenNewProducts')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:5000/womenFeaturedProducts')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data))
  }, [])

  const handleContentSwitch = (contentId) => {
    setActiveContent(contentId);
  };

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <>
      <h1 className='text-center font-bold lg:text-4xl my-8'>Trending Products</h1>
      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 text-lg ${activeContent === 'content1' ? 'bg-black text-white' : 'text-gray-700'}`}
            onClick={() => handleContentSwitch('content1')}
          >
            Featured Products
          </button>
          <button
            className={`px-4 py-2 text-lg ${activeContent === 'content2' ? 'bg-black text-white' : 'text-gray-700'}`}
            onClick={() => handleContentSwitch('content2')}
          >
            New Products
          </button>
        </div>

        <div className="p-4">
          {activeContent === 'content1' && (
            <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10'>
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
                {featuredProducts.map(featuredProduct => (
                  <SwiperSlide key={featuredProduct._id}>
                    <div className="w-[130px] h-[350px] md:w-[280px] md:h-[450px] border">
                      <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(featuredProduct)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <figure>
                          <img
                            className="w-[130px] h-[200px] md:w-[280px] md:h-[320px]"
                            src={featuredProduct.img}
                            alt={featuredProduct.name}
                          />
                        </figure>
                        {hoveredProduct === featuredProduct && (
                          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-[280px] md:h-10 rounded-md hover:bg-amber-800 hover:text-white mx-auto">
                          <AiOutlineShoppingCart></AiOutlineShoppingCart>
                          <span className="">Add to Cart</span>
                        </button>
                        )}
                      </div>
                      <div className="">
                        <div className="my-3 text-center">
                          <p className="text-gray-700">
                            {featuredProduct.name}
                          </p>
                          <p className="flex text-amber-800 font-bold lg:text-xl justify-center my-3">
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
          )}

          {activeContent === 'content2' && (
            <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10'>
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
                {products.map(product => (
                  <SwiperSlide key={product._id}>
                    <div className="w-[130px] h-[350px] md:w-[280px] md:h-[450px] border">
                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(product)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <figure>
                          <img
                            className="w-[130px] h-[200px] md:w-[280px] md:h-[320px]"
                            src={product.img}
                            alt={product.name}
                          />
                        </figure>
                        {hoveredProduct === product && (
                          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-[280px] md:h-10 rounded-md hover:bg-amber-800 hover:text-white mx-auto">
                          <AiOutlineShoppingCart></AiOutlineShoppingCart>
                          <span className="">Add to Cart</span>
                        </button>
                        )}
                        </div>
                      <div className="">
                        <div className="my-3 text-center">
                          <p className="text-gray-700">
                            {product.name}
                          </p>
                          <p className="flex text-amber-800 font-bold lg:text-xl justify-center my-3">
                            <TbCurrencyTaka></TbCurrencyTaka>
                            {product.price}
                            {(product.mainPrice !== product.price) && (
                              <s className="flex text-sm text-gray-600">
                                <TbCurrencyTaka></TbCurrencyTaka>
                                {product.mainPrice}
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
          )}
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;

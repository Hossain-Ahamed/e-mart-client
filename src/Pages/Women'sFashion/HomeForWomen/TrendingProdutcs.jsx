import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper";
import { TbCurrencyTaka } from 'react-icons/tb';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../../../Hooks/useCart';
import useProduct from '../../../Hooks/useProduct';
import useAddToCart from '../../../Hooks/useAddToCart';

const TrendingProducts = () => {
  const [activeContent, setActiveContent] = useState('content1');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleContentSwitch = (contentId) => {
    setActiveContent(contentId);
  };

  const handleMouseEnter = (product) => {
    setHoveredProduct(product);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const  [ product ]  = useProduct();

    const products = product.filter(
      showProduct => showProduct.category === 'women' && showProduct['sub-category'] === 'featuredProducts'
            );

    const newProducts = product.filter(
      showProduct => showProduct.category === 'women' && showProduct['sub-category'] === 'newProducts'
                    );

    const handleAddToCart = useAddToCart();


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
                {products.map(showProduct => (
                  <SwiperSlide key={showProduct._id}>
                    <div className="w-[130px] h-[350px] md:w-[280px] md:h-[450px] border">
                      <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(showProduct)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <figure>
                          <img
                            className="w-[130px] h-[200px] md:w-[280px] md:h-[320px]"
                            src={showProduct.img}
                            alt={showProduct.name}
                          />
                        </figure>
                        {hoveredProduct === showProduct && (
                          <button onClick={() => handleAddToCart(showProduct)} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-[280px] md:h-10 rounded-md hover:bg-amber-800 hover:text-white mx-auto">
                          <AiOutlineShoppingCart></AiOutlineShoppingCart>
                          <span className="">Add to Cart</span>
                        </button>
                        )}
                      </div>
                      <div className="">
                        <div className="my-3 text-center">
                          <p className="text-gray-700">
                            {showProduct.name}
                          </p>
                          <p className="flex text-amber-800 font-bold lg:text-xl justify-center my-3">
                            <TbCurrencyTaka></TbCurrencyTaka>
                            {showProduct?.price}
                            {(showProduct?.mainPrice !== showProduct?.price) && (
                              <s className="flex text-sm text-gray-600">
                                <TbCurrencyTaka></TbCurrencyTaka>
                                {showProduct.mainPrice}
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
                {newProducts.map(showProduct => (
                  <SwiperSlide key={showProduct._id}>
                    <div className="w-[130px] h-[350px] md:w-[280px] md:h-[450px] border">
                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(showProduct)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <figure>
                          <img
                            className="w-[130px] h-[200px] md:w-[280px] md:h-[320px]"
                            src={showProduct.img}
                            alt={showProduct.name}
                          />
                        </figure>
                        {hoveredProduct === showProduct && (
                          <button onClick={() => handleAddToCart(showProduct)} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-[280px] md:h-10 rounded-md hover:bg-amber-800 hover:text-white mx-auto">
                          <AiOutlineShoppingCart></AiOutlineShoppingCart>
                          <span className="">Add to Cart</span>
                        </button>
                        )}
                        </div>
                      <div className="">
                        <div className="my-3 text-center">
                          <p className="text-gray-700">
                            {showProduct.name}
                          </p>
                          <p className="flex text-amber-800 font-bold lg:text-xl justify-center my-3">
                            <TbCurrencyTaka></TbCurrencyTaka>
                            {showProduct.price}
                            {(showProduct.mainPrice !== showProduct.price) && (
                              <s className="flex text-sm text-gray-600">
                                <TbCurrencyTaka></TbCurrencyTaka>
                                {showProduct.mainPrice}
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

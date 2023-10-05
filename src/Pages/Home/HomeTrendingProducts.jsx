import React, { useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import ProductCard from '../Shared/ProductCard';

const HomeTrendingProducts = () => {
    const [activeContent, setActiveContent] = useState('content1');

  const handleContentSwitch = (contentId) => {
    setActiveContent(contentId);
  };

  const  [ product ]  = useProduct();

    const products = product.filter(
      showProduct => showProduct['bestDeal'] === true
            );

    const newProducts = product

    return (
       <>
       <h1 className='text-center font-bold md:text-2xl lg:text-4xl my-4 mt-10 md:my-8 md:mt-20'>Trending Products</h1>
      <div className="flex flex-col items-center mt-4">
        <div className="flex gap-4 mb-4">
          <button
            className={`p-2 md:px-4 md:py-2 md:text-lg rounded-md ${activeContent === 'content1' ? 'bg-accent text-white' : 'text-gray-700'}`}
            onClick={() => handleContentSwitch('content1')}
          >
            Featured Products
          </button>
          <button
            className={`p-2 md:px-4 md:py-2 md:text-lg rounded-md ${activeContent === 'content2' ? 'bg-accent text-white' : 'text-gray-700'}`}
            onClick={() => handleContentSwitch('content2')}
          >
            New Products
          </button>
        </div>

        <div className="p-4">
          {activeContent === 'content1' && (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:mt-10'>
              
                {products.slice(0, 5).map(showProduct => 
                  <ProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></ProductCard>
                )}
            </div>
          )}

          {activeContent === 'content2' && (
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:mt-10'>
              
            {newProducts.slice(-5).map(showProduct => 
                  <ProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></ProductCard>)}
        </div>
          )}
        </div>
      </div>
       </>
    );
};

export default HomeTrendingProducts;
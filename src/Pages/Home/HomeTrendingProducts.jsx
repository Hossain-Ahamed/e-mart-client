import React, { useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import ProductCard from '../Shared/ProductCard';

const HomeTrendingProducts = () => {
    const [activeContent, setActiveContent] = useState('content1');

  const handleContentSwitch = (contentId) => {
    setActiveContent(contentId);
  };

  const  [ products, isLoading ]  = useProduct();
  // Function to shuffle an array randomly using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

// Shuffle the product array randomly
const shuffledProducts = shuffleArray(products);

    const bestDealProducts = shuffledProducts.filter(
      showProduct => showProduct['bestDeal'] === true
            );

    const newProducts = products

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
              
                {bestDealProducts.slice(0, 5).map(showProduct => 
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
import React, { useEffect, useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import ProductCard from '../Shared/ProductCard';
import { Link } from 'react-router-dom';

const ShowAllProducts = () => {
    const  [ product ]  = useProduct();

    const [visibleProducts, setVisibleProducts] = useState(15); // Number of products initially visible
    const [additionalProducts, setAdditionalProducts] = useState(15); // Number of products to load on each "Load More" click

    // Function to handle the "Load More" button click
    const handleLoadMore = () => {
        setVisibleProducts(visibleProducts + additionalProducts);
    };    

     // Function to shuffle an array randomly using Fisher-Yates algorithm
     const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    // Shuffle the product array randomly
    const shuffledProducts = shuffleArray(product);

    return (
        <>
            <div className=' py-12'>
        <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
            <h3 className='text-lg md:text-2xl font-bold'>All Products</h3>
            <hr className='border'/>
            <hr className='border'/>
            </div>
        <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10 relative'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-8'>
              
                {shuffledProducts.slice(0, visibleProducts).map(showProduct => 
                  <ProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></ProductCard>
                )}
            </div>
        </div>
        {visibleProducts < product.length && (
                    <div className='absolute right-6 bottom-[-4]'>
                        <button
                            onClick={handleLoadMore}
                            className='btn p-2 px-10 mt-8 m-1 bg-white text-accent hover:bg-accent hover:text-white hover:border-none border-2 border-accent font-semibold text-lg rounded-md'
                        >
                            Load More
                        </button>
                    </div>
                )}
        </div>
        </>
    );
};

export default ShowAllProducts;
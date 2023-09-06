import React, { useEffect, useState } from 'react';
import useProduct from '../../Hooks/useProduct';
import ProductCard from '../Shared/ProductCard';
import { Link } from 'react-router-dom';

const ShowAllProducts = () => {
    const  [ product ]  = useProduct();

    return (
        <>
            <div className=' py-12'>
        <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
            <h3 className='text-lg md:text-2xl font-bold'>All Products</h3>
            <hr className='border'/>
            <hr className='border'/>
            </div>
        <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10 relative'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10 gap-8'>
              
                {product.slice(0,5).map(showProduct => 
                  <ProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></ProductCard>
                )}
            </div>
        </div>
        <div className=' absolute right-6 bottom-[-4]'>
        <Link to='/allproducts' className='btn p-2 px-5 m-1 bg-slate-100 text-black hover:bg-accent hover:text-white font-semibold text-lg rounded-md border-none'>view all</Link>
        </div>
        </div>
        </>
    );
};

export default ShowAllProducts;
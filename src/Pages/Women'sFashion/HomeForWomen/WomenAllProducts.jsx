import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import ProductCard from '../../Shared/ProductCard';

const WomenAllProducts = () => {
    const  [ product ]  = useProduct();

    const products = product.filter(
      showProduct => showProduct.category === 'women' 
      );

    return (
        <>
        <div className=' lg:p-12 p-3 pt-6 lg:pt-20'>
            <div className='grid grid-cols-3 items-center gap-0'>
            <h3 className='text-lg md:text-2xl font-bold'>All Products</h3>
            <hr className='border'/>
            <hr className='border'/>
            </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10 gap-8'>
              
              {products.slice(0, 5).map(showProduct => 
                <ProductCard 
                  key={showProduct._id}
                  showProduct={showProduct}
              ></ProductCard>)}
          </div>
        </div>  
        </>
    );
};

export default WomenAllProducts;
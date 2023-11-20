import React, { useState } from 'react';
import ProductCard from '../Shared/ProductCard';

const SubCategoryAllProducts = ({products}) => {


    return (
       <>
       <h1 className='text-center font-bold lg:text-4xl my-8'>All Products</h1>

        <div className="p-4">
          
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center px-2 lg:px-40'>
              
                {products.map(showProduct => 
                  <ProductCard 
                    key={showProduct._id}
                    showProduct={showProduct}
                ></ProductCard>
                )}
            </div>
            
        </div>
     
       </>
    );
};

export default SubCategoryAllProducts;
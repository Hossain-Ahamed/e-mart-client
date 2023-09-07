import React from "react";
import useProduct from "../../Hooks/useProduct";
import ProductCard from "../Shared/ProductCard";

const AllProducts = () => {
  const [product] = useProduct();

  return (
    <>
      <div className=' py-12'>
        <div className='grid grid-cols-3 items-center gap-0 mx-6 lg:ml-12'>
          <h3 className='text-lg md:text-2xl font-bold'>All Products</h3>
          <hr className='border' />
          <hr className='border' />
        </div>
        <div className='w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10 gap-8'>

            {product.map(showProduct =>
              <ProductCard
                key={showProduct._id}
                showProduct={showProduct}
              ></ProductCard>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default AllProducts;

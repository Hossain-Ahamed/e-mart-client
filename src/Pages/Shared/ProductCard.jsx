import React, { useState } from 'react';
import useAddToCart from '../../Hooks/useAddToCart';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ProductCard = ({showProduct}) => {
    const {_id, img, name, price, mainPrice} = showProduct;

    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleMouseEnter = (product) => {
        setHoveredProduct(product);
      };
    
      const handleMouseLeave = () => {
        setHoveredProduct(null);
      };

      const handleAddToCart = useAddToCart();
    return (
        <>
            <Link to={`/overView/${_id}`}>
            <div className="w-32 h-96 md:w-52 border">
                      <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter(showProduct)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <figure>
                          <img
                            className="w-32 h-40 md:h-64 md:w-52"
                            src={img}
                            alt={name}
                          />
                        </figure>
                        {hoveredProduct === showProduct && (
                          <button onClick={() => handleAddToCart(showProduct)} className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-0 flex justify-center items-center gap-2 lg:text-xl w-32 h-8 md:w-52 md:h-10 bg-green-700 text-white mx-auto">
                          <AiOutlineShoppingCart></AiOutlineShoppingCart>
                          <span className="">Add to Cart</span>
                        </button>
                        )}
                      </div>
                      <hr className='mb-1'/>
                      <div className="border-t-2">
                        <div className="my-1 text-center">
                          <p className="text-gray-700 text-sm truncate text-ellipsis overflow-hidden px-3">
                            {name}
                          </p>
                          <p className="flex text-green-700 font-bold lg:text-xl justify-center my-1">
                            <TbCurrencyTaka></TbCurrencyTaka>
                            {price}
                            {(mainPrice !== price) && (
                              <s className="flex text-sm text-gray-600">
                                <TbCurrencyTaka></TbCurrencyTaka>
                                {mainPrice}
                              </s>
                            )}
                          </p>
                        </div>
                        
                      </div>
                    </div>
            </Link>
        </>
    );
};

export default ProductCard;
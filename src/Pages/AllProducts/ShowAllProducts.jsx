import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts';

const ShowAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/mensProduct')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-20'>
            {
                products.map(product => <AllProducts
                key={product._id}
                product={product}
                ></AllProducts>)
            }
        </div>
        </>
    );
};

export default ShowAllProducts;
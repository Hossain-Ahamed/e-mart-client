import React, { useEffect, useState } from 'react';
import Categories from './Categories';

const ShowCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center mx-5 md:mx-auto my-10 gap-5 md:gap-3 md:w-[600px] lg:w-[900px] 2xl:w-[1500px]'>
        {
            categories.map(category =><Categories
                key={category._id}
                category={category}
                ></Categories>)
        }
        </div>
        </>
    );
};

export default ShowCategories;
import React from 'react';
import { Link } from 'react-router-dom';

const MenCategories = ({categories}) => {
    const {name, img} = categories;
    return (
        <>
        <Link>
        <div className='rounded-full w-60 h-60'>
            <img src={img} alt="" className='rounded-full w-44 h-44 mx-auto shadow-md' />
            <p className='text-xl font-semibold text-center mt-3'>{name}</p>
        </div>
        </Link>
        </>
    );
};

export default MenCategories;
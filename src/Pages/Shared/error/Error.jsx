import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const {error} = useRouteError();
    console.log(error);
    return (
        <div className='text-red-700'>
            <p className='text-2xl text-center mt-5'>{error?.code}</p>
            <p className='text-xl text-center mt-3'>{error?.message}</p>
            <img src="https://i.ibb.co/GWh83s8/error-404-concept-landing-page-52683-21190-1.png" alt="" className='w-96' />
            
        </div>
    );
};

export default Error;
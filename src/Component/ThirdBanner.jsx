import React from 'react';

const ThirdBanner = ({ images }) => {
    console.log(images)
    return (
        <>
        <div className="grid grid-cols-1 md:flex gap-10 justify-center py-10 my-20">
        {
            images?.slice(-2).map((img, index) => (
                <div key={index} className=''>
                <img src={img} alt="" className="w-72 mx-auto md:w-80 md:h-72 lg:w-[600px] lg:h-[400px] rounded-md" />
                </div>
                ))
            }
      
      </div>
        </>
    );
};

export default ThirdBanner;
import React from 'react';

const ThirdBanner = ({ images }) => {
    console.log(images)
    return (
        <>
        <div className="grid grid-cols-1 md:flex gap-10 justify-center py-20">
        {
            images?.slice(-2).map((img, index) => (
                <div key={index} className=''>
                <img src={img} alt="" className="w-[600px] h-[400px] rounded-md" />
                </div>
                ))
            }
      
      </div>
        </>
    );
};

export default ThirdBanner;
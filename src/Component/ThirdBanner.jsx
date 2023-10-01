import React from 'react';

const ThirdBanner = ({ images }) => {
    console.log(images)
    return (
        <>
        <div className="grid grid-cols-1 md:flex gap-8 justify-center p-20 my-10">
        {
            images?.map((img, index) => (
                <div key={index} className=''>
                <img src={img} alt="" className="w-[700px] h-[350px]" />
                </div>
                ))
            }
      
      </div>
        </>
    );
};

export default ThirdBanner;
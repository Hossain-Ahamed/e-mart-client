import React from 'react';

const ThirdBanner = ({thirdBannerInfo}) => {
    const {img, title, description} = thirdBannerInfo;
    return (
        <>
        
        <div className="relative">
            
            <div className=''>
            <img src={img} alt="" className="w-[700px] h-[250px]" />
            </div>
            <div>
            <div className='absolute left-12 bottom-12 text-white'>
            <h1 className="text-base lg:text-xl">{title}</h1>
          <p className="text-lg lg:text-2xl font-bold my-2">{description}</p>
          <button className="text-black font-bold bg-slate-100 hover:bg-red-300 hover:text-white w-28 h-8 lg:w-32 lg:h-10">Shop Now</button>
            </div>
            </div>
            
        </div>
        
        </>
    );
};

export default ThirdBanner;
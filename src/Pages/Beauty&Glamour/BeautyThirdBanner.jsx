import React from 'react';

const BeautyThirdBanner = () => {
    return (
        <>
         <div className="grid grid-cols-1 md:flex gap-8 justify-center pt-10 px-16">
        <div className="relative">
            
            <div className=''>
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/bottom-banner-01.jpg" alt="" className="" />
            </div>
            <div>
            <div className='absolute left-12 top-12 lg:bottom-5 text-white'>
            <h1 className="text-base lg:text-xl">Essence Oil</h1>
          <p className="text-lg lg:text-2xl font-bold my-2">Ginseng Renewing Water</p>
          <button className="text-black font-bold bg-slate-100 hover:bg-red-300 hover:text-white w-28 h-8 lg:w-32 lg:h-10">Shop Now</button>
            </div>
            </div>
            
        </div>
        <div className="relative">
            
            <div>
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/bottom-banner-02.jpg" alt="" className="" />
            </div>
            <div>
            <div className='absolute left-12 top-12 lg:bottom-5 text-white'>
            <h1 className="text-base lg:text-xl">New Arrivals</h1>
          <p className="text-lg lg:text-2xl font-bold my-2">Facial Makeup Kit Box</p>
          <button className="text-black font-bold bg-slate-100 hover:bg-red-300 hover:text-white w-28 h-8 lg:w-32 lg:h-10">Shop Now</button>
            </div>
            </div>
           
        </div>

        
        </div>
        </>
    );
};

export default BeautyThirdBanner;
import React from 'react';

const BeautySecondBanner = () => {
    return (
        <>
        <div className="grid grid-cols-1 md:flex gap-7 justify-center p-16">
        <div className="relative">
            
            <div className=''>
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/sub-banner-01.jpg" alt="" className="rounded-lg" />
            </div>
            <div>
            <div className='absolute left-4 top-4 lg:bottom-5 text-white'>
            <h1 className="text-base lg:text-xl">Hair Masks</h1>
          <p className="text-lg lg:text-2xl font-bold my-2">Shiny & Nourished</p>
          <button className="text-black font-bold bg-slate-100 hover:bg-red-900 hover:text-white w-28 h-8 lg:w-32 lg:h-10">Shop Now</button>
            </div>
            </div>
            
        </div>
        <div className="relative">
            
            <div>
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/sub-banner-02.jpg" alt="" className="rounded-lg" />
            </div>
            <div>
            <div className='absolute left-4 top-4 lg:bottom-5 text-white'>
            <h1 className="text-base lg:text-xl">Big Deals</h1>
          <p className="text-lg lg:text-2xl font-bold my-2">Makeup Brush</p>
          <button className="text-black font-bold bg-slate-100 hover:bg-red-900 hover:text-white w-28 h-8 lg:w-32 lg:h-10">Save 20%</button>
            </div>
            </div>
           
        </div>
        <div className="relative">
            
            <div>
            <img src="https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/sub-banner-03.jpg" alt="" className="rounded-lg" />
            </div>
            <div>
            <div className='absolute left-4 top-4 lg:bottom-5 text-white'>
            <h1 className="text-base lg:text-xl">Save 30% Off</h1>
          <p className="text-lg lg:text-2xl font-bold my-2">Natural Skin Glow</p>
          <button className="text-black font-bold bg-slate-100 hover:bg-red-900 hover:text-white w-28 h-8 lg:w-32 lg:h-10">Shop Now</button>
            </div>
            </div>
           
        </div>

        
        </div>
        </>
    );
};

export default BeautySecondBanner;
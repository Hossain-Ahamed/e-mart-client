import React from 'react';

const ThirdBanner = () => {
    return (
        <>
        <div className="grid grid-cols-1 md:flex gap-5 justify-center pt-10 px-5">
        <div className="relative w-full h-[120px] md:w-[530px] md:h-[170px] bg-orange-500 rounded-lg">
            <div className="flex">
            <div className='absolute left-4 bottom-0'>
            <img src="https://i.ibb.co/XDWTFmD/mockup-black-hoodie-pack-front-back-125540-3044.png" alt="" className="w-[180px] h-[120px] md:w-[300px] md:h-[170px]" />
            </div>
            <div>
            <div className='absolute right-12 bottom-2 lg:bottom-5'>
            <h1 className="text-white text-base lg:text-xl">New Arrivals</h1>
          <p className="text-white text-lg lg:text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 hover:bg-orange-400 hover:text-white w-28 h-8 lg:w-32 lg:h-10 rounded-[20px]">Save 20%</button>
            </div>
            </div>
            </div>
        </div>
        <div className="relative w-full h-[120px] md:w-[530px] md:h-[170px] bg-orange-500 rounded-lg">
            <div className="flex">
            <div className='absolute left-4 bottom-0'>
            <img src="https://i.ibb.co/XDWTFmD/mockup-black-hoodie-pack-front-back-125540-3044.png" alt="" className="w-[180px] h-[120px] md:w-[300px] md:h-[170px]" />
            </div>
            <div>
            <div className='absolute right-12 bottom-2 lg:bottom-5'>
            <h1 className="text-white text-base lg:text-xl">New Arrivals</h1>
          <p className="text-white text-lg lg:text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 hover:bg-orange-400 hover:text-white w-28 h-8 lg:w-32 lg:h-10 rounded-[20px]">Save 20%</button>
            </div>
            </div>
            </div>
        </div>

        
        </div>
        </>
    );
};

export default ThirdBanner;
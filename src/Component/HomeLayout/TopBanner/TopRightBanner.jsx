import React from 'react';

const TopRightBanner = ({images}) => {
    return (
        <>
        <div className="grid md:flex lg:grid gap-5 justify-center">
        { images?.map((img, index) => (
            <div key={index} className="relative w-[300px] lg:w-[250px] lg:h-[200px]">
            <img src={img} alt="" className="rounded-md w-[300px] h-[200px]" />
            <div className="absolute right-20 bottom-10">
            <h1 className="text-white text-xl">New Arrivals</h1>
          <p className="text-white text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 w-32 h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
        ))}
        </div>
        </>
    );
};

export default TopRightBanner;
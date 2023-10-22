import React from 'react';

const TopRightBanner = ({ images }) => {
  const isSingleColumn = images.length === 2;

  return (
    <>
      <div className={`grid ${isSingleColumn ? 'grid-cols-1' : 'grid-cols-2'} md:flex lg:grid gap-5 justify-center`}>
        {images?.slice(-4).map((img, index) => (
          <div key={index} className="relative w-[300px] lg:w-[250px] lg:h-[200px]">
            <img src={img} alt="" className="rounded-md w-[300px] h-[200px]" />
            {/* <div className="absolute right-5 bottom-5">
              <h1 className="text-white text-xl"></h1>
              <p className="text-white text-2xl font-bold"></p>
              <button className="text-black font-bold bg-slate-200 w-24 h-8 rounded-2xl"></button>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default TopRightBanner;

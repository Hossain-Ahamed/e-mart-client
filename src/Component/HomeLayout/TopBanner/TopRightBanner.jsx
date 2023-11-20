import React from 'react';

const TopRightBanner = ({ images }) => {
  const isSingleColumn = images.length === 2;

  return (
    <>
      <div className={`mt-5 md:mt-0 grid ${isSingleColumn ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} md:grid-cols-2 lg:grid gap-5 justify-center`}>
        {images?.slice(-4).map((img, index) => (
          <div key={index} className="relative w-[300px] h-40 lg:w-[200px] lg:h-[200px]">
            <img src={img} alt="" className="rounded-md w-[300px] h-40 lg:h-[200px]" />
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

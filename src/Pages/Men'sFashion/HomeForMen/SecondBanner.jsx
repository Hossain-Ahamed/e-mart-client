import React from 'react';

const SecondBanner = () => {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center pt-10 px-12">
        <div className="relative w-[230px] h-[120px] lg:w-[380px] lg:h-[180px]">
            <img src="https://images.unsplash.com/photo-1619225379807-e9002c44c462?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVucyUyMHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&w=380&h=180" alt="" className="w-[230px] h-[120px] lg:w-[380px] lg:h-[180px] rounded-md" />
            <div className="absolute right-4 bottom-2 lg:right-8 lg:bottom-5">
            <h1 className="text-white text-base lg:text-xl">New Arrivals</h1>
          <p className="text-white text-lg lg:text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 hover:bg-orange-400 hover:text-white w-28 h-8 lg:w-32 lg:h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>

        <div className="relative w-[230px] h-[120px] lg:w-[380px] lg:h-[180px]">
            <img src="https://images.unsplash.com/photo-1617689563472-c66428e83d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=380&h=180" alt="" className="w-[230px] h-[120px] lg:w-[380px] lg:h-[180px] rounded-md" />
            <div className="absolute right-4 bottom-2 lg:right-8 lg:bottom-5">
            <h1 className="text-white text-base lg:text-xl">New Arrivals</h1>
          <p className="text-white text-lg lg:text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 hover:bg-orange-400 hover:text-white w-28 h-8 lg:w-32 lg:h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>

        <div className="relative w-[230px] h-[120px] lg:w-[380px] lg:h-[180px]">
            <img src="https://images.unsplash.com/photo-1617689563472-c66428e83d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVucyUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=380&h=180" alt="" className="w-[230px] h-[120px] lg:w-[380px] lg:h-[180px] rounded-md" />
            <div className="absolute right-4 bottom-2 lg:right-8 lg:bottom-5">
            <h1 className="text-white text-base lg:text-xl">New Arrivals</h1>
          <p className="text-white text-lg lg:text-2xl font-bold my-1">Shoe</p>
          <button className="text-black font-bold bg-slate-200 hover:bg-orange-400 hover:text-white w-28 h-8 lg:w-32 lg:h-10 rounded-[20px]">Save 20%</button>
            </div>
        </div>
        </div>
        </>
    );
};

export default SecondBanner;
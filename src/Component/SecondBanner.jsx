import React from 'react';

const SecondBanner = ({img}) => {
    //const {img, title, description} = secondBannerInfo;
    return (
        <>
        <div className="grid justify-center p-16">
        <div className="relative">
          <div>
            <img
              src={img}
              alt=""
              className="rounded-lg"
            />
          </div>
          {/* <div>
            <div className="absolute left-16 bottom-16 text-white">
              <h1 className="text-base lg:text-3xl">{title}</h1>
              <p className="text-lg lg:text-4xl font-bold my-4">{description}</p>
              <button className="text-black font-bold text-xl bg-slate-100 hover:bg-red-900 hover:text-white w-28 h-8 lg:w-36 lg:h-14">
                Save 20%
              </button>
            </div>
          </div> */}
        </div>
      </div>
        </>
    );
};

export default SecondBanner;
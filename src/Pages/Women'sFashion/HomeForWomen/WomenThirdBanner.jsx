import React from 'react';
import ThirdBanner from '../../../Component/ThirdBanner';

const WomenThirdBanner = () => {const data = [
    {
    "_id": 1,
    "img": "https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/bottom-banner-01.jpg",
    "title": "Essence Oil",
    "description": "Ginseng Renewing Water"
  },
  {
    "_id": 2,
    "img": "https://cdn11.bigcommerce.com/s-5y3552fo3h/product_images/uploaded_images/bottom-banner-02.jpg",
    "title": "New Arrivals",
    "description": "Facial Makeup"
  }
]
    return (
        <>
         <div className="grid grid-cols-1 md:flex gap-8 justify-center p-20">
         {
          data.map(thirdBannerInfo => <ThirdBanner
          key={thirdBannerInfo._id}
          thirdBannerInfo={thirdBannerInfo}
          ></ThirdBanner>)
        }
        
        
        </div>
        </>
    );
};

export default WomenThirdBanner;
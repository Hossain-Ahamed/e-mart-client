import React from 'react';
import ThirdBanner from '../../Component/ThirdBanner';

const HomeThirdBanner = () => {
    const data = [
        {
        "_id": 1,
        "img": "https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/sub-banner-02.jpg",
        "title": "Essence Oil",
        "description": "Ginseng Renewing Water"
      },
      {
        "_id": 2,
        "img": "https://cdn11.bigcommerce.com/s-vptmq0v2zd/product_images/uploaded_images/sub-banner-03.jpg",
        "title": "New Arrivals",
        "description": "Facial Makeup"
      }
    ]
        return (
            <>
             {/* <div className="grid grid-cols-1 md:flex gap-8 justify-center p-20">
             {
              data.map(thirdBannerInfo => <ThirdBanner
              key={thirdBannerInfo?._id}
              thirdBannerInfo={thirdBannerInfo}
              ></ThirdBanner>)
            }
            
            
            </div> */}
            </>
    );
};

export default HomeThirdBanner;
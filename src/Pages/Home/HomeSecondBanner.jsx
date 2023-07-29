import React from 'react';
import SecondBanner from '../../Component/SecondBanner';

const HomeSecondBanner = () => {
    const data = [{
        "_id": 1,
        "img": "https://images.unsplash.com/photo-1560607162-26b0344e6943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9yYW5nZSUyMGZydWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&h=400",
        "title": "Big Deals",
        "description": "Gucci Bag"
      }]
    return (
        <>
        <div>
        {
          data.map(secondBannerInfo => <SecondBanner
          key={secondBannerInfo._id}
          secondBannerInfo={secondBannerInfo}
          ></SecondBanner>)
        }
      </div>
        </>
    );
};

export default HomeSecondBanner;
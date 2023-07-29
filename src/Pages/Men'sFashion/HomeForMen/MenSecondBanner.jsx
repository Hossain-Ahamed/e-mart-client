import React from 'react';
import SecondBanner from '../../../Component/SecondBanner';

const MenSecondBanner = () => {
  const data = [{
    "_id": 1,
    "img": "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzJTIwYmFubmVyJTIwZm9yJTIwd2Vic2l0d3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1200&h=400",
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

export default MenSecondBanner;
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import SecondBanner from '../../../Component/SecondBanner';

const WomenSecondBanner = () => {
    const data = [{
        "_id": 1,
        "img": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFnfGVufDB8fDB8fHww&auto=format&fit=crop&w=1200&h=400",
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

export default WomenSecondBanner;
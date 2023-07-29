import React from "react";
import SecondBanner from "../../Component/SecondBanner";

const BeautySecondBanner = () => {
  const data = [{
    "_id": 1,
    "img": "https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFrZXVwJTIwdG9vbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1200&h=400",
    "title": "Big Deals",
    "description": "Makeup Brush"
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

export default BeautySecondBanner;

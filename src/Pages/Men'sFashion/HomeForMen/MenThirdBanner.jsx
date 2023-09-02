import React from 'react';
import ThirdBanner from '../../../Component/ThirdBanner';

const MenThirdBanner = () => {const data = [
  {
  "_id": 1,
  "img": "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=700&h=250",
  "title": "Essence Oil",
  "description": "Ginseng Renewing Water"
},
{
  "_id": 2,
  "img": "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&h=250",
  "title": "New Arrivals",
  "description": "Facial Makeup"
}
]
  return (
      <>
       <div className="grid grid-cols-1 md:flex gap-8 justify-center p-20 my-10">
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

export default MenThirdBanner;
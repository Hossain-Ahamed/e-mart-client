import React from "react";
import ShowBeautyProducts from "../Beauty&Glamour/ShowBeautyProducts";
import HomeForBeauty from "../Beauty&Glamour/HomeForBeauty";
import { useLoaderData } from "react-router-dom";
import SecondBanner from "../../Component/SecondBanner";
import TopLeftBanner from "../../Component/HomeLayout/TopBanner/TopLeftBanner";
import TopRightBanner from "../../Component/HomeLayout/TopBanner/TopRightBanner";
import TopBanner from "../../Component/HomeLayout/TopBanner/TopBanner";
import SlimBanner from "../../Component/SlimBanner";
import UserTitle from "../../Component/UserTitle";
import ThirdBanner from "../../Component/ThirdBanner";
import SubCategories from "../../Component/SubCategory/SubCategories";

const PagesForCategory = () => {
  const {category, subcategory} = useLoaderData();
  const { _id, name, slug, layout } = category;
  //console.log(subcategory);
  return (
    <>
    
      {layout === 1 && (
        <>
        {category?.topBannerImage && <TopBanner images={category.topBannerImage}></TopBanner>}
        <UserTitle heading="Category"></UserTitle>

        </>
      )}
      {layout === 2 && (
        <>
        <div className="bg-white">
        <div className="grid lg:flex justify-center md:gap-5 py-6">
          { category?.topLeftBannerLayout2 && <TopLeftBanner images={category?.topLeftBannerLayout2} />}
          {category?.topRightBannerLayout2 && <TopRightBanner images={category?.topRightBannerLayout2} />}
        </div>
        <div className="px-4 py-3">
            <SlimBanner slimBanners={category?.slimBanners} ></SlimBanner>
            </div>
            </div>
            <SubCategories subcategory={subcategory}></SubCategories>
        </>
      )}
      {layout === 3 && <p>Layout 3</p>}
      <SecondBanner img={category.secondBannerImage}></SecondBanner>
      <ThirdBanner images={category.bottomBannerImage} />
    </>
  );
};

export default PagesForCategory;

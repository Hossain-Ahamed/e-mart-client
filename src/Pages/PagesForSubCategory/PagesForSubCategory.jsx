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
import TrendingProducts from "../Shared/TrendingProducts";
import SubCategoryAllProducts from "./SubCategoryAllProducts";


const PagesForSubCategory = () => {
  const {subCategory, products} = useLoaderData();
  const { _id, name, slug, layout } = subCategory;
  console.log(products);
  return (
    <>
    
      {layout === 1 && (
        <>
        {subCategory?.topBannerImage && <TopBanner images={subCategory?.topBannerImage}></TopBanner>}
        

        </>
      )}
      {layout === 2 && (
        <>
        <div className="bg-white">
        <div className="grid lg:flex justify-center md:gap-5 py-6">
          { subCategory?.topLeftBannerLayout2 && <TopLeftBanner images={subCategory?.topLeftBannerLayout2} />}
          {subCategory?.topRightBannerLayout2 && <TopRightBanner images={subCategory?.topRightBannerLayout2} />}
        </div>
        <div className="px-4 py-3">
            <SlimBanner slimBanners={subCategory?.slimBanners} ></SlimBanner>
            </div>
            </div>
            
        </>
      )}
      {layout === 3 && <p>Layout 3</p>}

     <div className="bg-white">
     <TrendingProducts products={products} />
     </div>

      
      <ThirdBanner images={subCategory.bottomBannerImage} /> 
      <SubCategoryAllProducts products={products} />
      {/* <SecondBanner images={subCategory.secondBannerImage}></SecondBanner> */}
      {/* <SubCategories subcategory={subcategory}></SubCategories>
      <SecondBanner img={category.secondBannerImage}></SecondBanner>
      */}
    </>
  );
};

export default PagesForSubCategory;

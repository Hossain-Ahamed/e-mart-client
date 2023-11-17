import React from "react";
import { useLoaderData } from "react-router-dom";
import SecondBanner from "../../Component/SecondBanner";
import TopLeftBanner from "../../Component/HomeLayout/TopBanner/TopLeftBanner";
import TopRightBanner from "../../Component/HomeLayout/TopBanner/TopRightBanner";
import TopBanner from "../../Component/HomeLayout/TopBanner/TopBanner";
import SlimBanner from "../../Component/SlimBanner";
import ThirdBanner from "../../Component/ThirdBanner";
import SubCategories from "../../Component/SubCategory/SubCategories";
import TrendingProducts from "../Shared/TrendingProducts";
import SubCategoryAllProducts from "../PagesForSubCategory/SubCategoryAllProducts";



const PagesForCategory = () => {
  const {category, subcategory, products} = useLoaderData();
  const { _id, name, slug, layout } = category;
  //console.log(products);
  return (
    <>
    
      {layout === 1 && (
        <>
        {category?.topBannerImage && <TopBanner images={category.topBannerImage}></TopBanner>}

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
            
        </>
      )}
      {layout === 3 && (
        <div>
          <div className="grid lg:flex justify-center md:gap-5 py-6">
          { category?.topLeftBannerLayout2 && <TopLeftBanner images={category?.topLeftBannerLayout2} />}
          {category?.topRightBannerLayout2 && <TopRightBanner images={category?.topRightBannerLayout2} />}
        </div>
        </div>
      )}
      <SubCategories subcategory={subcategory}></SubCategories>
      <SecondBanner images={category.secondBannerImage}></SecondBanner>
      <div className="bg-white">
     <TrendingProducts products={products} />
     </div>
      <ThirdBanner images={category.bottomBannerImage} />
      <SubCategoryAllProducts products={products} />
    </>
  );
};

export default PagesForCategory;

import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useCategory from "../../../../../Hooks/useCategory";

const HomePageLayout = () => {
  const {category_slug} = useParams();
  
  console.log(category_slug);
  return (
    <>
      <div className="h-full w-full">
        <h1>LayOut</h1>
      <div className="border-2 w-96 m-3">
      <div className="bg-gray-200 w-96 h-20">
        <Link to={`/dashboard/upload-category/${category_slug}/upload-top-banner`}><button className="text-center w-96">For Top Banner Click Here</button></Link>
      </div>

        <h3 className="m-3">Category</h3>
      <div className="flex gap-3 my-5 mx-2">
        <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
        <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
        <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
        <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
        <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
      </div>

      <div className="bg-gray-200 w-80 h-16 mx-auto">
      <Link to={`/dashboard/upload-category/${category_slug}/upload-second-banner`}><button className="text-center w-96">For Second Banner Click Here</button></Link>
      </div>

      <h3 className="text-center my-3">Trending Products</h3>
      <div className="flex gap-3 my-5 mx-2">
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
      </div>

      <div className="flex gap-5 px-5">
      <div className="bg-gray-200 w-40 h-16 mx-auto">
      <Link to={`/dashboard/upload-category/${category_slug}/upload-bottom-banner`}><button className="text-center w-96">For Bottom Banner Click Here</button></Link>
      </div>
      <div className="bg-gray-200 w-40 h-16 mx-auto">
      </div>
      </div>

      <h3 className="m-3">All Products</h3>
      <div className="flex gap-3 my-5 mx-2">
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
        <div className="border bg-gray-200 w-16 h-20"></div>
      </div>
      </div>
      </div>
    </>
  );
};

export default HomePageLayout;

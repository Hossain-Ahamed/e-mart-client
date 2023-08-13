import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Layout3 = () => {
    const { category_slug } = useParams();
    return (
        <>
        <div className='h-full border-2'>
              <div className="flex gap-5 justify-center my-3">
                <div className=" bg-gray-200 w-36 h-24">
                  <div>
                    {/* <Link
                to={`/dashboard/upload-category/${category_slug}/upload-top-banner`}
              >
                <button className="text-center w-96">
                  For Top Banner Click Here
                </button>
              </Link> */}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className=" bg-gray-200 w-16 h-10"></div>
                  <div className=" bg-gray-200 w-16 h-10"></div>
                  <div className=" bg-gray-200 w-16 h-10"></div>
                  <div className=" bg-gray-200 w-16 h-10"></div>
                </div>
              </div>
              <div className=" bg-gray-200 w-96 h-14 mb-4">
                <div>
                  {/* <Link
                to={`/dashboard/upload-category/${category_slug}/upload-top-banner`}
              >
                <button className="text-center w-96">
                  For Top Banner Click Here
                </button>
              </Link> */}
                </div>
              </div>
              <h3 className="m-3">Category</h3>
              <div className="flex gap-3 my-5 mx-2">
                <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
                <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
                <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
                <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
                <div className="border bg-gray-200 rounded-full w-16 h-16"></div>
              </div>
              <div className="w-80 h-16 bg-gray-200 mx-auto">
                <Link
                  to={`/dashboard/upload-category/${category_slug}/upload-second-banner`}
                >
                  <button className="text-center w-96">
                    For Second Banner Click Here
                  </button>
                </Link>
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
                  <Link
                    to={`/dashboard/upload-category/${category_slug}/upload-bottom-banner`}
                  >
                    <button className="text-center w-40">Click Here</button>
                  </Link>
                </div>
                <div className="bg-gray-200 w-40 h-16 mx-auto">
                  <Link
                    to={`/dashboard/upload-category/${category_slug}/upload-bottom-second-banner`}
                  >
                    <button className="text-center w-40">Click Here</button>
                  </Link>
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
        </>
    );
};

export default Layout3;
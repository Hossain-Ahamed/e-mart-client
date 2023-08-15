import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Layout1 = () => {
    const { slug, type } = useParams();
    console.log(type);
    return (
        <>
        <div className='h-full border-2'>
        
              <div className=" bg-gray-200 w-96 h-20">
                <div className=" relative">
                  
                  <Link
                    to={`/dashboard/upload/${type}/${slug}/upload-top-banner`}
                  >
                    <button className="grid text-gray-700 font-semibold text-center w-96 absolute top-3">
                      Upload Top Banner <span> Click Here</span>
                    </button>
                  </Link>
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
              <div className="w-80 h-16 bg-gray-200 mx-auto relative">
                
                <Link
                  to={`/dashboard/upload/${type}/${slug}/upload-second-banner`}
                >
                  <button className="grid text-gray-700 font-semibold text-center w-80 absolute top-3">
                    Upload Second Banner <span> Click Here</span>
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
                <div className="bg-gray-200 w-40 h-16 mx-auto relative">
                  
                  <Link
                    to={`/dashboard/upload/${type}/${slug}/upload-bottom-banner`}
                  >
                    <button className="text-gray-700 font-semibold text-center w-40 absolute top-3">
                      Click Here
                    </button>
                  </Link>
                </div>
                <div className="bg-gray-200 w-40 h-16 mx-auto relative">
                 
                  <Link
                    to={`/dashboard/upload/${type}/${slug}/upload-bottom-banner`}
                  >
                    <button className="text-gray-900 font-semibold text-center w-40 absolute top-3">
                      Click Here
                    </button>
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

export default Layout1;
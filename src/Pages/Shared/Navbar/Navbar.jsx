import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <div className="lg:py-2 bg-white">
        <div className="navbar flex">
          <div className="flex items-center border-2 rounded-md mx-auto bg-white">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-96 rounded-none border-none"
            />
            <button className="p-2 px-5 m-1 bg-slate-100 hover:bg-accent hover:text-white font-semibold text-lg rounded-md">
              <div className="flex justify-items-center items-center gap-2">
                <BsSearch />
                <span className="hidden lg:block">Search</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

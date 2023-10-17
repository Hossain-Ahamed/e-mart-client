import React from "react";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineHeart,
} from "react-icons/ai";
import {  BiCategory, BiDuplicate } from "react-icons/bi";
import { MdAddCard } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
// import { MdAddCard } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductManagerNav = () => {
    return (
        <><li>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="flex items-center gap-3"><MdAddCard />Banners</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
            <Link to="/dashboard/home-top-banner">
          
          Top Banner
        </Link>
            </li>
            <li>
              <Link to="/dashboard/home-second-banner">Second Banner</Link>
            </li>
            <li>
              <Link to="/dashboard/home-bottom-banner">Bottom Banner</Link>
            </li>
          </ul>
        </div>
      </li>
              
                <li>
                  <Link to="/dashboard/upload/upload-category">
                    <BiDuplicate />
                    Add Category
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/all-categories">
                    <BiCategory />
                    Categories
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/upload/upload-sub-category">
                    <BiDuplicate />
                    Add Sub Category
                  </Link>
                </li>
                <li>
        <Link to="/dashboard/manage-sub-categories">
          <BiDuplicate />
          Sub-Categories
        </Link>
      </li>
                <li>
                  <Link to="/dashboard/addProduct">
                    <MdAddCard />
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProduct">
                    <AiOutlineCreditCard />
                    Manage Product
                  </Link>
                </li>
              </>
    );
};

export default ProductManagerNav;
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
        <>
                <li>
                  <Link to="/dashboard/admin-home">
                    <AiOutlineUser></AiOutlineUser>Admin Home
                  </Link>
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
                    Manage Categories
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/upload/upload-sub-category">
                    <BiDuplicate />
                    Add Sub Category
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
import React from "react";
import { BsCart3 } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineHeart,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiCalendar, BiCategory, BiDuplicate } from "react-icons/bi";
import { IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { MdAddCard, MdOutlineReviews } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
// import { MdAddCard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import AdminRoleNav from "./RoleWiseNav/AdminRoleNav";
import SelectNav from "./RoleWiseNav/SelectNav";

const Dashboard = () => {
  // const isAdmin = true;
  const {role} = useRole();
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" relative drawer-content flex flex-col items-center justify-center bg-white">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className=" absolute top-3 left-3 drawer-button lg:hidden"
          >
            <AiOutlineMenu />
            
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
           <SelectNav />
            {/* Sidebar content here */}

            <div className="divider"></div>
            <li>
              <Link to="/">
                <AiOutlineHome />
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

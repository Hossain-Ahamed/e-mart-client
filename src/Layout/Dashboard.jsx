import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineHome, AiOutlineCreditCard } from 'react-icons/ai';
import { BiCalendar, BiCategory, BiDuplicate } from 'react-icons/bi';
import { IoWalletOutline, IoSettingsOutline } from 'react-icons/io5';
import { MdAddCard, MdOutlineReviews } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
// import { MdAddCard } from "react-icons/md";
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
  // const isAdmin = true;

  const [isAdmin] = useAdmin();
    return (
        <>
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 h-full bg-base-200 text-base-content">
      {
        isAdmin ? 
        <>
         <li><Link to="/dashboard/admin-home"><AiOutlineUser></AiOutlineUser>Admin Home</Link></li>
      <li><Link to="/dashboard/upload/upload-category"><BiDuplicate />Add Category</Link></li>
      <li><Link to="/dashboard/all-categories"><BiCategory />Manage Categories</Link></li>
      <li><Link to="/dashboard/upload/upload-sub-category"><BiDuplicate />Add Sub Category</Link></li>
      <li><Link to="/dashboard/addProduct"><MdAddCard />Add Product</Link></li>
      <li><Link to="/dashboard/manageProduct"><AiOutlineCreditCard />Manage Product</Link></li>
      <li><Link to="/dashboard/add-coupon"><MdAddCard />Add Coupon</Link></li>
      <li><Link to="/dashboard/allUsers"><HiOutlineUserGroup />All Users</Link></li>
      
        </> 
        : 
        <>
         <li><Link to="/dashboard/user-home"><AiOutlineUser></AiOutlineUser>User</Link></li>
         <li><Link to="/dashboard/user-profile"><ImProfile />User Profile</Link></li>
      <li><Link><BiCalendar />Reservation</Link></li>
      <li><Link><IoWalletOutline />Payment History</Link></li>
      <li><Link to="/dashboard/myCart"><BsCart3 />My Cart</Link></li>
      <li><Link to="/dashboard/add-review"><MdOutlineReviews />Add Review</Link></li>
        </>
      }
      {/* Sidebar content here */}
     
      <div className='divider'></div>
      <li><Link to="/"><AiOutlineHome />Home</Link></li>
    </ul>
  
  </div>
</div>
        </>
    );
};

export default Dashboard;
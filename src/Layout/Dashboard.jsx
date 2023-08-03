import React from 'react';
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { BiCalendar } from 'react-icons/bi';
import { IoWalletOutline } from 'react-icons/io5';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  const isAdmin = true;
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
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {
        isAdmin ? 
        <>
         <li><Link><AiOutlineUser></AiOutlineUser>Admin Home</Link></li>
      <li><Link><BiCalendar />Reservation</Link></li>
      <li><Link><IoWalletOutline />Payment History</Link></li>
      <li><Link to="/dashboard/allUsers"><BsCart3 />All Users</Link></li>
        </> 
        : 
        <>
         <li><Link><AiOutlineUser></AiOutlineUser>User</Link></li>
      <li><Link><BiCalendar />Reservation</Link></li>
      <li><Link><IoWalletOutline />Payment History</Link></li>
      <li><Link to="/dashboard/myCart"><BsCart3 />My Cart</Link></li>
        </>
      }
      {/* Sidebar content here */}
     
      <div className='divider'></div>
      <li><Link><AiOutlineHome />Home</Link></li>
    </ul>
  
  </div>
</div>
        </>
    );
};

export default Dashboard;
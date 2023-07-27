import React, { useContext } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { MdShoppingCart } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import useCart from '../../../Hooks/useCart';

const SubNav = () => {
  const {user, logOut} = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(err => console.log(err));
  }
    const subMenuItem = <>
    <li><Link to="/profile">Profile<span className="badge">New</span></Link></li>
    {user?.uid ?
      <li><button onClick={handleLogOut}>LogOut</button></li>
      :
      <li><Link to="/login">Login</Link></li>
    }
    </>
    const menuItem = <>
    <li className='text-semibold'><Link to="/">Home</Link></li>
    <li className='text-semibold'><Link to="/about">About</Link></li>
    <li className='text-semibold'><Link to="/reviews">Reviews</Link></li>
    {user?.uid ?
      <li className='text-semibold'><button onClick={handleLogOut}>LogOut</button></li>
      :
      <li className='text-semibold'><Link to="/login">Login</Link></li>
    }
    </>
    return (
        <>
       <div className=''>
       <div className="navbar bg-slate-100 p-5">
  <div className="navbar-start ml-5">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <LuMenu className=' text-2xl'></LuMenu>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
        {menuItem}
      </ul>
    </div>
    <Link to="/" className='flex items-center text-2xl font-bold '><p><span className='text-yellow-600 text-xl font-extrabold'>E</span>Mart</p><GiShoppingCart className='text-5xl text-yellow-600' /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menuItem}
    </ul>
  </div>

  
  <div className="navbar-end mr-5">
  <div className="flex justify-items-center gap-2">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <MdShoppingCart className='text-3xl'></MdShoppingCart>
          <span className="badge badge-sm indicator-item bg-white text-black">{cart?.length || 0}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">{cart?.length || 0} Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="" />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52 hover:rounded-none">
        {subMenuItem}
      </ul>
    </div>
  </div>
  </div>
</div>
       </div>
        </>
    );
};

export default SubNav;
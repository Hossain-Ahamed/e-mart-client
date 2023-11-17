import React, { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { MdShoppingCart } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import useCart from "../../../Hooks/useCart";
import useProfile from "../../../Hooks/useProfile";
import useRole from "../../../Hooks/useRole";
import img from "../../../assets/emart.png"

const SubNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const { role, name } = useRole();
  const [profile] = useProfile();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const subMenuItem = (
    <>
      {role==="admin" ? (
        <li>
          <Link className="block text-left hover:text-white text-sm text-gray-700 hover:bg-accent font-semibold uppercase" to="/dashboard/admin-home">Dashboard</Link>
        </li>
      ) :
      role==="Product Manager" ? (
        <li>
          <Link to="/dashboard/upload/upload-category">
          Dashboard
        </Link>
        </li>
      ) :
      role==="Order Manager" ? (
        <li>
          <Link to="/dashboard/add-coupon">
          Dashboard
        </Link>
        </li>
      ) :
      role==="Delivery Partner" ? (
        <li>
          <Link to="/dashboard/orders/current">
          Dashboard
        </Link>
        </li>
      ) :
       (
        <li>
          <Link className="block text-left hover:text-white text-sm text-gray-700 hover:bg-accent font-semibold uppercase" to="/dashboard/user-profile">Dashboard</Link>
        </li>
      )}
      
      {user?.uid ? (
        <li>
          <button className="block text-left hover:text-white text-sm text-gray-700 hover:bg-accent font-semibold uppercase" onClick={handleLogOut}>LogOut</button>
        </li>
      ) : (
        <li>
          <Link className="block px-4 py-2 hover:text-white text-sm text-gray-700 hover:bg-accent font-semibold uppercase" to="/login">Login</Link>
        </li>
      )}
    </>
  );
  const menuItem = (
    <>
      <li>
        <Link className="text-accent hover:text-accent font-semibold text-xs hover:bg-white uppercase" aria-current="page" to="/">Home</Link>
      </li>
      <li>
        <Link className="text-accent hover:text-accent font-semibold text-xs hover:bg-white uppercase" to="/about-us">About</Link>
      </li>
      {/* <li>
        <Link className="text-accent hover:text-accent font-semibold text-lg hover:bg-white uppercase" to="/reviews">Reviews</Link>
      </li> */}
      {user?.uid ? (
        <li>
          {/* <button className="text-accent hover:text-accent font-semibold text-lg hover:bg-white uppercase" onClick={handleLogOut}>LogOut</button> */}
        </li>
      ) : (
        <li>
          <Link className="text-accent hover:text-accent font-semibold text-xs hover:bg-white uppercase" to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <>

      <div className="">
        <div className="navbar bg-white lg:px-10">
          <div className="navbar-start ml-5">
            {/* <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <LuMenu className=" text-2xl"></LuMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 px-2 shadow rounded-box w-32 bg-white"
              >
                {menuItem}
              </ul>
            </div> */}
            <Link to="/" className="">
              {/* <p>
                <span className="text-white text-5xl font-extrabold">E</span>
                <span className="text-2xl">Mart</span>
              </p> */}
              <div className="w-20">
              <img src={img} alt="" />
              </div>
              {/* <GiShoppingCart className="text-6xl text-white" /> */}
            </Link>
          </div>
          
          <div className="navbar-end mr-5">
          <div className="hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{menuItem}</ul>
          </div>
            <div className="flex justify-items-center gap-3">
              {role === "user" && (
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <Link to="/dashboard/myCart">
                    <div className="indicator">
                      <MdShoppingCart className="text-3xl"></MdShoppingCart>
                      <span className="badge badge-sm indicator-item bg-white text-black">
                        {cart?.length || 0}
                      </span>
                    </div>
                  </Link>
                </label>
              )}
              {user && (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      {profile?.img ? (
                        <img
                          className="w-10 h-10 rounded-full"
                          src={profile?.img}
                          alt={name}
                        />
                      ) : (
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-accent rounded-full ">
                          <span className="font-medium text-white text-xl ">
                            {name &&
                              name
                                .split(" ")
                                .map((i) => i.charAt(0).toUpperCase())
                                .join("")}
                          </span>
                        </div>
                      )}
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-100 w-40 rounded-lg hover:rounded-none"
                  >
                    {subMenuItem}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubNav;

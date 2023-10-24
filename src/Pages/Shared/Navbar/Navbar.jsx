import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useCart from "../../../Hooks/useCart";
import useProfile from "../../../Hooks/useProfile";
import { MdShoppingCart } from "react-icons/md";
import useRole from "../../../Hooks/useRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [profile] = useProfile();
  const { role, name } = useRole();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const subMenuItem = (
    <>
      <li>
        <Link to="/profile">
          Profile<span className="badge">New</span>
        </Link>
      </li>
      {user?.uid ? (
        <li>
          <button onClick={handleLogOut}>LogOut</button>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past a certain threshold (e.g., 100px)
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const searchRef = useRef(null);

  // Add a click event listener to the document to close search results
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        // Click occurred outside of the search navbar, close search results
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/search", {
        query: searchQuery,
      });
      setSearchResults(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error searching for products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    } else {
      // Clear search results when the input field is empty
      setSearchResults([]);
    }
  }, [searchQuery]);
  return (
    <>
      <div
        className={`${
          isSticky ? "fixed top-0 w-full bg-slate-100" : "relative bg-white lg:py-2 "
        } z-10`}
      >
        <div className="flex items-center">
          <div className="container mx-auto px-4" ref={searchRef}>
            <div className="navbar flex">
              <div className="flex items-center border-2 rounded-md mx-auto bg-white">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-96 lg:w-[600px] rounded-md border-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="p-2 m-1 bg-slate-100 hover:bg-accent hover:text-white font-semibold text-lg rounded-md"
                  onClick={handleSearch}
                >
                  <div className="flex justify-items-center items-center">
                    <BsSearch />
                  </div>
                </button>
              </div>
            </div>
            {/* Display search results */}
            <div>
              {loading && <p>Loading...</p>}
              {!loading && searchResults.length > 0 && (
                <ul className="fixed right-0 left-0 bg-white md:w-[520px] mx-auto rounded-md p-5 font-bold">
                  {searchResults.slice(0, 8).map((product) => (
                    <li key={product._id} className="my-1">
                      {/* Link to the product overview route */}
                      <Link to={`/overview/${product._id}`}>
                        {product.productTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {!loading && searchResults.length === 0 && <></>}
            </div>
          </div>
          <div className={`${isSticky ? "block" : "hidden"} mx-5`}>
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
                        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-yellow-600 rounded-full ">
                          <span className="font-medium text-gray-100 ">
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
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow w-52 hover:rounded-none"
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

export default Navbar;

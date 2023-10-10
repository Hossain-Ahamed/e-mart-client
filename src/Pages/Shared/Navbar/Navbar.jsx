import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
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
          isSticky ? "fixed top-0 w-full" : "relative"
        } bg-white z-10`}
      >
        <div className="lg:py-2 bg-white">
          <div className="container mx-auto px-4" ref={searchRef}>
            <div className="navbar flex">
              <div className="flex items-center border-2 rounded-md mx-auto bg-white">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full md:w-96 rounded-none border-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="p-2 px-5 m-1 bg-slate-100 hover:bg-accent hover:text-white font-semibold text-lg rounded-md"
                  onClick={handleSearch}
                >
                  <div className="flex justify-items-center items-center gap-2">
                    <BsSearch />
                    <span className="hidden lg:block">Search</span>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;

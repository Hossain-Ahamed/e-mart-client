import React, { useEffect, useState } from "react";
import ProductCard from "../Shared/ProductCard";
import axios from "axios";
import ProductCardLoading from "../Shared/ProductCardLoading";

const ShowAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [NotReachedToTheEnd, setNotReachedToTheEnd] = useState(true);

  useEffect(() => {
    fetchProducts();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchNextPageProducts();
    }
  }, [page]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/products?page=${page}`
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setIsLoading(false);
    }
  };

  const fetchNextPageProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/products?page=${page}`
      );
      const newProducts = response.data;
      setProducts((prevProducts) => [...prevProducts, ...response.data]);
      if (newProducts.length > 0) {
        setNotReachedToTheEnd(true);
      } else {
        setNotReachedToTheEnd(false);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching next page products:", error);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <div className="py-12">
        {/* Your existing code here */}
        <div className="w-[300px] md:w-[700px] lg:w-[1200px] mx-auto mt-10 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} showProduct={product} />
            ))}
          </div>
        </div>
        {isLoading && (
          <>
            <ProductCardLoading />
          </>
        )}
      </div>
    </>
  );
};

export default ShowAllProducts;

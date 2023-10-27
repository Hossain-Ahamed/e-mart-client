import React, { useState } from "react";
import useProduct from "../../Hooks/useProduct";
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
  const [products] = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;
  const [searchQuery, setSearchQuery] = useState("");

  // Filter products with reviews
  const productsWithReviews = products.filter(
    (product) => product.reviews && product.reviews.length > 0
  );
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset the current page when the search query changes
  };

  const filteredProducts = productsWithReviews.filter((product) =>
    product.productTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastProduct = currentPage * productsPerPage;
  console.log(indexOfLastProduct)
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  console.log(indexOfFirstProduct)
  const productsToDisplay = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);


  // Determine the size of the star rating based on screen width
  const screenSize = window.innerWidth;

  // Calculate the desired size for the star rating component
  const starRatingSize = screenSize < 768 ? 16 : 24; // Adjust the size as needed

  return (
    <>
      <div className="px-20">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search for a product"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

        {productsWithReviews.map((product) => (
          // Render the products with reviews here
          <div key={product._id} className="flex bg-gray-100 m-10 rounded-md border shadow-lg">
            <div className=" relative w-48">
              <img src={product?.image} alt="" />
              <p className=" absolute bottom-4 text-accent tracking-tighter text-sm font-semibold italic bg-white">
                {product?.productTitle}
              </p>
            </div>
            <div className="p-10 w-full h-64 overflow-y-scroll">
              {product?.reviews?.map((review) => (
                <div key={review?._id}>
                  <p>
                    Posted By <span className="text-accent italic">{review?.name}{" "}</span>
                    <span className="text-sm text-gray-600">
                      on{" "}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }).format(new Date(review?.createdAt))}
                    </span>
                  </p>
                  <p>"{review?.comment}"</p>
                  <ReactStars
                    count={5}
                    value={review?.rating}
                    edit={false}
                    isHalf={true}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    size={starRatingSize}
                    activeColor="#ffd700"
                  />
                  <div className="divider"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p>ghgjghj</p>

      <div className="pagination-controls">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage}>Previous</button>
        )}
        {filteredProducts.length > indexOfLastProduct && (
          <button onClick={handleNextPage}>Next</button>
        )}
      </div>
    </>
  );
};

export default Reviews;

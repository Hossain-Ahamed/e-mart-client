import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import AdminTitle from "../../../../../Component/AdminTitle";
import Swal from "sweetalert2";
import slugify from "slugify";

const EditProduct = () => {
  const { axiosSecure } = useAxiosSecure();
  const [selectedImage, setSelectedImage] = useState(null);
  const productDetail = useLoaderData();
  const {
    _id,
    image,
    productTitle,
    price,
    mainPrice,
    des,
    weight,
    size,
    quantity,
    reviews,
    category,
    subCategory,
    bestDeal,
  } = productDetail;

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    // Initialize form fields with the product details
    setValue("productTitle", productTitle);
    setValue("des", des);
    setValue("price", price);
    setValue("mainPrice", mainPrice);
    setValue("weight", weight);
    setValue("size", size);
    setValue("quantity", quantity);
    setValue("category", category);
    setValue("subCategory", subCategory);
    setValue("bestDeal", bestDeal);
    if (image) {
      setSelectedImage(image);
    }
  }, [
    setValue,
    productTitle,
    des,
    image,
    price,
    mainPrice,
    weight,
    size,
    quantity,
    category,
    subCategory,
    bestDeal,
  ]);

  const img_hosting_token = `${import.meta.env.VITE_IMAGE_TOKEN}`;

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(formData, "formData");
    // Check if a new image has been selected
    const isNewImageSelected = data.image[0] && data.image[0] !== image;

    if (isNewImageSelected) {
      // Append the new image to formData
      formData.append("image", data.image[0]);
      fetch(img_hosting_url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgResponse) => {
          if (imgResponse.success) {
            const imgURL = imgResponse?.data?.display_url;
            const {
              productTitle,
              des,
              image,
              mainPrice,
              price,
              weight,
              size,
              bestDeal,
              category,
              subCategory,
              quantity,
            } = data;

            const updatedProduct = {
              productTitle,
              des,
              image: imgURL,
              mainPrice: parseFloat(mainPrice),
              price: parseFloat(price),
              weight: parseFloat(weight),
              size,
              bestDeal,
              category,
              subCategory,
              quantity: parseInt(quantity),
              productSlug: slugify(productTitle),
            };
            console.log(updatedProduct);
            axiosSecure
              .put(`/products/${_id}`, updatedProduct)
              .then((response) => {
                if (response.status === 200) {
                  // Product updated successfully
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product updated successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          }
        });
    } else {
      const {
        productTitle,
        des,
        image,
        mainPrice,
        price,
        weight,
        size,
        bestDeal,
        category,
        subCategory,
        quantity,
      } = data;

      const updatedProduct = {
        productTitle,
        des,
        image: productDetail?.image,
        mainPrice: parseFloat(mainPrice),
        price: parseFloat(price),
        weight,
        size,
        bestDeal,
        category,
        subCategory,
        quantity: parseInt(quantity),
        productSlug: slugify(productTitle),
      };
      console.log(updatedProduct);
      axiosSecure.put(`/products/${_id}`, updatedProduct).then((response) => {
        if (response.status === 200) {
          // Product updated successfully
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0])); // Set selectedImage state with the URL
    }
  };
  return (
    <>
      <div className="w-full h-full p-10 xl:px-36">
        <AdminTitle heading="Update Product Details"></AdminTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-5">
            <div className="md:border-2 md:w-2/3 md:px-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered rounded-md"
                  defaultValue={productTitle}
                  {...register("productTitle")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered rounded-md h-24"
                  defaultValue={des}
                  {...register("des")}
                ></textarea>
              </div>
              <br />
              <div
                className={`h-64 w-52 rounded-2xl bg-[#EFEFEF] border-2 border-gray-300 flex items-center justify-center relative mx-auto`}
              >
                {!selectedImage && (
                  <>
                    <div className="icon absolute top-3 right-3">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.8466 13.3963C13.5582 13.3963 14.9457 12.0088 14.9457 10.2973C14.9457 8.58573 13.5582 7.19824 11.8466 7.19824C10.135 7.19824 8.74756 8.58573 8.74756 10.2973C8.74756 12.0088 10.135 13.3963 11.8466 13.3963Z"
                          stroke="#434343"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.0448 1H11.8467C4.09905 1 1 4.09905 1 11.8467V21.1438C1 28.8914 4.09905 31.9905 11.8467 31.9905H21.1438C28.8914 31.9905 31.9905 28.8914 31.9905 21.1438V13.3962"
                          stroke="#434343"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.5586 1.91414L21.9338 7.5389C21.7169 7.75584 21.5 8.17421 21.469 8.48411L21.1591 10.638C21.0506 11.4127 21.5929 11.955 22.3677 11.8466L24.5215 11.5367C24.8159 11.4902 25.2498 11.2888 25.4667 11.0718L31.0915 5.44705C32.0677 4.47085 32.5171 3.35519 31.0915 1.92963C29.6505 0.473079 28.5348 0.937936 27.5586 1.91414Z"
                          stroke="#434343"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.7533 2.71973C27.2336 4.4242 28.5662 5.75679 30.2707 6.23714"
                          stroke="#434343"
                          strokeWidth="2"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.03809 27.2643L9.67724 22.1353C10.9014 21.3141 12.6678 21.4071 13.7679 22.3523L14.2793 22.8016C15.4879 23.8398 17.4403 23.8398 18.6489 22.8016L25.095 17.2698C26.3036 16.2317 28.256 16.2317 29.4646 17.2698L31.9903 19.4392"
                          stroke="#434343"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <p className="text-gray-500">200 x 200</p>
                      <p className="text-gray-500">place an .png image</p>
                    </div>
                  </>
                )}
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt="Uploaded"
                    className="h-64 w-52 rounded-2xl object-contain"
                  />
                )}

                <input
                  type="file"
                  className="opacity-0 w-full h-full absolute top-0 left-0 cursor-pointer"
                  {...register("image")}
                  onChange={handleImageChange}
                />
              </div>
            </div>

            <div className="md:border-2 md:w-1/3 p-5">
              <div className="flex gap-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Main Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-md w-full max-w-xs"
                    defaultValue={mainPrice}
                    {...register("mainPrice")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Selling Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-md w-full max-w-xs"
                    defaultValue={price}
                    {...register("price")}
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Weight</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-md w-full max-w-xs"
                    defaultValue={weight}
                    {...register("weight")}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Size</span>
                  </label>
                  <select
                    defaultValue={size}
                    {...register("size")}
                    className="select select-bordered rounded-md w-full max-w-xs"
                  >
                    <option defaultValue="Null">No Size</option>
                    <option defaultValue="XS">XS</option>
                    <option defaultValue="S">S</option>
                    <option defaultValue="M">M</option>
                    <option defaultValue="L">L</option>
                    <option defaultValue="XL">XL</option>
                    <option defaultValue="XXL">XXL</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered rounded-md w-full max-w-xs"
                  defaultValue={category}
                  {...register("category")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-Category</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered rounded-md w-full max-w-xs"
                  defaultValue={subCategory}
                  {...register("subCategory")}
                />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Best Deal</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    defaultValue={bestDeal}
                    {...register("bestDeal")}
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered rounded-md"
                  defaultValue={quantity}
                  {...register("quantity")}
                />
              </div>
              <input
                type="submit"
                className="w-full h-10 bg-primary text-white font-bold rounded-md mt-5 cursor-pointer"
                value="Update Product"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProduct;

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useCategory from "../../../../Hooks/useCategory";
import slugify from "slugify";

const AddProduct = () => {
  const [category] = useCategory();
  console.log(category)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const img_hosting_token = "2f18d2acff1da26cc85eee5c8407a95f"

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = data => {
    const formData = new FormData();
    formData.append('image', data.image[0])
    fetch(img_hosting_url,{
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {productTitle, des, image, buyingPrice, sellingPrice, weight, size, bestDeal, category, subCategory, quantity} = data;

        const newProduct = {productTitle, des, image: imgURL, buyingPrice: parseFloat(buyingPrice), sellingPrice: parseFloat(sellingPrice), weight: parseFloat(weight), size, bestDeal, category, subCategory, quantity: parseFloat(quantity), productSlug: slugify(productTitle)}
        console.log(newProduct);
        axios.post('http://localhost:5000/products', newProduct, { withCredentials: true })
        .then(data => {
          console.log('new', data.data);
          if(data.data.insertedId){
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'One new product added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  };
  return (
    <>
      <div className="w-full h-full p-10">
        <p>Add A Product</p>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-5">
            <div className="border-2 w-2/3 p-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Product Title"
                  className="input input-bordered rounded-md"
                  {...register("productTitle", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea 
                className="textarea textarea-bordered rounded-md h-24"
                {...register("des", { required: true })}
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered rounded-md"
                  {...register("image", { required: true })}
                />
              </div>
            </div>

            <div className="border-2 w-1/3 p-5">
              <div className="flex gap-3">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Buying Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-md w-full max-w-xs"
                    {...register("buyingPrice", { required: true })}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Selling Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-md w-full max-w-xs"
                    {...register("sellingPrice", { required: true })}
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
                    {...register("weight", { required: true })}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Size</span>
                  </label>
                  <select
                    {...register("size", { required: true })}
                    className="select select-bordered rounded-md w-full max-w-xs"
                  >
                    <option value="XS">
                      XS
                    </option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  {...register("category", { required: true })}
                  className="select select-bordered rounded-md"
                >
                  {
                    category.map(categories => (
                      <option key={categories._id}
                       value={categories.name}>
                    {categories.name}
                  </option>
                    ))
                  }
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-Category</span>
                </label>
                <select
                  {...register("subCategory", { required: true })}
                  className="select select-bordered rounded-md"
                >
                  <option value="XS">
                    XS
                  </option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Best Deal</span>
                  <input
                    type="checkbox"
                    className="checkbox"
                    {...register("bestDeal", { required: true })}
                    defaultChecked={true}
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
                  {...register("quantity", { required: true })}
                />
              </div>
              <input type="submit" className="w-full h-10 bg-blue-500 text-white font-bold rounded-md mt-5" value="Add New Product"/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;

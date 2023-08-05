import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
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
                  {...register("Product Title", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <textarea 
                className="textarea textarea-bordered rounded-md h-24"
                {...register("Description", { required: true })}
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered rounded-md"
                  {...register("Product Image", { required: true })}
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
                    {...register("Buying Price", { required: true })}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Selling Price</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered rounded-md w-full max-w-xs"
                    {...register("Selling Price", { required: true })}
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
                    {...register("Weight", { required: true })}
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Size</span>
                  </label>
                  <select
                    {...register("Size", { required: true })}
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
                  {...register("Category", { required: true })}
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
                <label className="label">
                  <span className="label-text">Sub-Category</span>
                </label>
                <select
                  {...register("SubCategory", { required: true })}
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
                    {...register("BestDeal", { required: true })}
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
                  {...register("Quantity", { required: true })}
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

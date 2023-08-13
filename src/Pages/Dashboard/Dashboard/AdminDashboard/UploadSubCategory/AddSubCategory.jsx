import React from 'react';
import { useForm } from 'react-hook-form';
import useCategory from '../../../../../Hooks/useCategory';

const AddSubCategory = () => {
    const [category] = useCategory();
    
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
      } = useForm();
    return (
        <>
         <div className="w-full p-5">
        <h3>Add New Category</h3>
        <div className="divider"></div>
        <form>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category Tittle"
              className="input input-bordered rounded-md"
              {...register("name", { required: true })}
            />
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
              <span className="label-text">Color</span>
            </label>
            <input
              type="text"
              className="input input-bordered rounded-md"
              {...register("color", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Image</span>
            </label>
            <input
              type="file"
              className="input input-bordered rounded-md"
              {...register("image", { required: true })}
            />
          </div>
          <input
            type="submit"
            className="w-full h-10 bg-blue-500 text-white font-bold rounded-md mt-5"
            value="Add New Category"
          />
        </form>
      </div>
        </>
    );
};

export default AddSubCategory;
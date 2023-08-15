import React from 'react';
import { useForm } from 'react-hook-form';
import useCategory from '../../../../../Hooks/useCategory';
import Swal from 'sweetalert2';
import axios from 'axios';
import slugify from 'slugify';
import { useNavigate } from 'react-router-dom';

const AddSubCategory = () => {
  
    const [category] = useCategory();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
      } = useForm();
      const img_hosting_token = "2f18d2acff1da26cc85eee5c8407a95f";

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data)
    const formData = new FormData();
    formData.append("image", data.image[0]);
    axios.post(img_hosting_url, formData).then((imgResponse) => {
      console.log(imgResponse);
      if (imgResponse.data.success) {
        const imgURL = imgResponse.data.display_url;
        const { name, category, color, image } = data;
        setValue("img", image);
        const newSubCategory = {
          name,
          category,
          color,
          img: imgURL,
          slug: slugify(name),
        };
        console.log(newSubCategory);

        axios
          .post("http://localhost:5000/upload-sub-category", newSubCategory, {
            withCredentials: true,
          })
          .then((data) => {
            console.log("new", data.data);
            if (data.data.insertedId) {
              //setSubmitted(true);
              reset();

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "One new product added",
                showConfirmButton: false,
                timer: 1500,
              });

              navigate(
                `/dashboard/upload/upload-sub-category/${newSubCategory.slug}/home-page-layout`
              );
            }
          })
          .catch((e) => {
            console.log(e);
            if (e?.response?.status === 409) {
            }
          });
      }
    });
  };
    return (
        <>
         <div className="h-full p-5">
        <h3>Add New Category</h3>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            className="btn w-full h-10 bg-blue-600 text-white font-bold rounded-md mt-5"
            value="Add New Sub Category"
          />
        </form>
      </div>
        </>
    );
};

export default AddSubCategory;
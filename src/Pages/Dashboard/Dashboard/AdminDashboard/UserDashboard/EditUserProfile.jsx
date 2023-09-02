import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../../Contexts/AuthProvider';
import axios from 'axios';
import slugify from 'slugify';
import Swal from 'sweetalert2';

const EditUserProfile = () => {
    const { user } = useContext(AuthContext);
  const email = user.email;
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
  } = useForm();
  const img_hosting_token = "2f18d2acff1da26cc85eee5c8407a95f";

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const onSubmit = data => {
    //console.log(data)
    const formData = new FormData();
    formData.append("image", data.image[0]);
    axios.post(img_hosting_url, formData).then((imgResponse) => {
      console.log(imgResponse);
      if (imgResponse.data.success) {
        const imgURL = imgResponse.data.data.display_url;
        console.log(imgURL)
        const { name, email, image, address, phone } = data;
        setValue("img", image);
        const newProfile = {
          name,
          email,
          img: imgURL,
          address,
          phone,
          slug: slugify(name),
        };
        console.log(newProfile);

        axios
          .post("http://localhost:5000/upload-profile", newProfile, {
            withCredentials: true,
          })
          .then((data) => {
            console.log("new", data.data);
            if (data.data.insertedId) {
              //setSubmitted(true);
              reset();
              //setSelectedImage(null);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "One new product added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((e) => {
            console.log(e);
            if (e?.response?.status === 409) {
            }
          });
      }
    });
  }
    return (
        <>
         <div>
      <h1>My Profile</h1>
      <div className="flex">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* ------image---- */}
            <div className="form-control w-full max-w-xs">
              <input
                type="file"
                placeholder="Product Image"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.image?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            {/* ------Name------ */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="name"
                readOnly
                value={user.displayName}
                className="input input-bordered w-full max-w-xs"
                {...register("name", {})}
              />
            </div>

            {/* ------Email------ */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                readOnly
                value={user.email}
                className="input input-bordered w-full max-w-xs"
                {...register("email", {})}
              />
            </div>

            {/* -----Address----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Address</span>
              </label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full max-w-xs"
                {...register("address", {
                  required: {
                    value: true,
                    message: "address is Required",
                  },
                })}
              />
              <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
            </div>

            {/* -------phone----- */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text font-semibold">Contact Number</span>
              </label>
              <input
                type="tel"
                placeholder="Contact Number"
                className="input input-bordered w-full max-w-xs"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "phone is Required",
                  },
                })}
              />
            </div>

            <br />
            <input
              className="btn w-full max-w-xs text-white"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
        </>
    );
};

export default EditUserProfile;
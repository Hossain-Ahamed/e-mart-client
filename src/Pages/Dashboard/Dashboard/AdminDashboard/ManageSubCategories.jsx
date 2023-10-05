import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useSubCategory from "../../../../Hooks/useSubCategory";
import AdminTitle from "../../../../Component/AdminTitle";


const ManageSubCategories = () => {
  const {axiosSecure} = useAxiosSecure();
  const navigate = useNavigate();
  const [subCategory, refetch] = useSubCategory();

  const handleDelete = (subCategory) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/sub-categories/${subCategory._id}`)
          .then((data) => {
            if (data?.data?.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div className="h-full py-10 w-[300px]">
        <div className="">
        <AdminTitle heading={`Manage Categories (${subCategory.length})`} />
          <table className="table">
            <tbody>
              {subCategory.map((subCategory) => (
                <tr key={subCategory._id} >
                  {/* row 1 */}

                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={subCategory.img}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm truncate text-ellipsis overflow-hidden">
                          {subCategory.name}
                        </p>
                      </div>
                    </div>
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                  <th>
                    <div className="dropdown dropdown-left">
                      <label tabIndex={0} className="btn btn-ghost btn-xs m-1">
                        Action
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-26"
                      >
                        <li>
                          <Link to={`/dashboard/upload/upload-sub-category/${subCategory.slug}/home-page-layout`}>
                            <BiEdit /> Edit
                          </Link>
                        </li>
                        <li>
                          <button onClick={() => handleDelete(subCategory)}>
                            <AiOutlineDelete />
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageSubCategories;

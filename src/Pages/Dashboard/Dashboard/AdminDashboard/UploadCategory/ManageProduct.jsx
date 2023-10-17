import React from "react";
import useProduct from "../../../../../Hooks/useProduct";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";
import AdminTitle from "../../../../../Component/AdminTitle";
import { TbCurrencyTaka } from "react-icons/tb";

const ManageProduct = () => {
  const {axiosSecure} = useAxiosSecure();
  const [product, refetch] = useProduct();

  const handleDelete = (product) => {
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
        axiosSecure.delete(`/products/${product?._id}`)
          .then((data) => {
            //console.log(data)
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
      <div className="h-full p-10 w-full">
        <AdminTitle heading={`All Products(${product.length})`} />
      <section className="px-4 bg-white max-w-5xl mx-auto">
        {/* table  */}

        <div className="relative shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                
                <th scope="col" className="px-6 py-3 text-center">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Sub-Category
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
                
              </tr>
            </thead>
            <tbody>
              {product.map((product) => (
                <tr key={product?._id} className={`bg-white border-b  hover:bg-gray-50 `}>
                  {/* row 1 */}

                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={product?.image}
                            alt={product?.productTitle}
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-700 text-sm line-clamp-1">
                          {product?.productTitle}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{product?.category}</td>
                  <td className="px-6 py-4 text-center">{product?.subCategory}</td>
                  <td className="px-6 py-4 text-center"><p className="flex"><TbCurrencyTaka />{product?.price}</p></td>

                  <td className="px-6 py-4 text-lg text-blue-600 text-center">
                    
                          <a>
                            <BiEdit />
                          </a>
                        
                                 
                  </td>
                  <td className="px-6 py-4 text-lg text-red-600 text-center">
                  <button onClick={() => handleDelete(product)}>
                            <AiOutlineDelete />
                           
                          </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
      </div>
    </>
  );
};

export default ManageProduct;

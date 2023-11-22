import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useRole from '../../../../Hooks/useRole';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const AllUsers_Row = ({user, index, img}) => {
  const {axiosSecure} = useAxiosSecure();
   const [role, setRole] = useState(user?.role);

   const { refetch, data: profile = [] } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/get-profile`)
        console.log(res.data)
        return res.data;
    },
      });

   useEffect(() => {
    setRole(user?.role)
   }, [user])

    const { register, formState: { errors }, handleSubmit, setValue } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {

        setRole(data?.role);
        data._id = user?._id; //admin id also in data
        
       console.log(data, user?._id);
        axiosSecure.patch(`/admin/admin-list/${user?._id}/edit-role`, data)
            .then(result => {
              console.log(result.data)
                setRole(data?.role);
                Swal.fire(
                  'Successful!',
                  `${user?.name}'s Role set to ${data?.role}!`,
                  'success'
              )
            }).catch(e => {
                // console.log(e);
                setRole(user?.role);
                Swal.fire({
                  icon: 'error',
                  title: 'ERROR OCCURRED',
                  text: 'Error: role set unsuccessful',
                })
            })


    };
    return (
       <>
       <tr className='bg-white'>
                <th>{index}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    {/* <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        {
                          profile.map((i, index)=>(
                            <div key={index}>
                              <img src={i.img} alt={user.name} />
                            </div>
                          ))
                        }
                      </div>
                    </div> */}
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                {/* <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)}>user</button>
                  )}
                </td> */}

                <td>
                  <form onChange={handleSubmit(onSubmit)}>
                    <select
                      value={role ? role : "user"}
                      {...register("role", {
                        required: "*role required",
                      })}
                      className="block w-full py-2 px-1 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none  "
                    >
                        
                      <option disabled>Select an option</option>
                      <option value="admin">Admin</option>
                      <option value="Order Manager">Order Manager</option>
                      <option value="Product Manager">Prodcut Manager</option>
                      <option value="Delivery Partner">Delivery Partner</option>
                      <option value="user">User</option>
                    </select>
                    {errors.role && (
                      <p className="p-1 text-xs text-red-600">*</p>
                    )}
                  </form>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
       </>
    );
};

export default AllUsers_Row;
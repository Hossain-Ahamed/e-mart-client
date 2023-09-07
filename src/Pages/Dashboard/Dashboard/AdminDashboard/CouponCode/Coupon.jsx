import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const Coupon = () => {
    const { data: coupons = [], refetch } = useQuery(["coupon"], async () => {
        const res = await axios.get("http://localhost:5000/get-coupon", {
          withCredentials: true,
        });
        console.log(res.data);
        return res.data;
      });

      const handleDelete = (coupon) => {
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
            axios.delete(`http://localhost:5000/delete-coupon/${coupon?._id}`, {
            withCredentials: true})
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
       <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Coupon Code</th>
              <th>Percentage</th>
              <th>Minimum Order Amount</th>
              <th>Maximum Discount Limit</th>
              <th>Number Of Use</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {coupons.map((coupon, index) => (
              <tr key={coupon?._id}>
                <th>{index + 1}</th>
                <td> 
                    <div className="font-bold">{coupon?.couponCode}</div>
                </td>
                <td>{coupon?.percentage}</td>
                <td>{coupon?.minimumOrderAmount}</td>
                <td>{coupon?.maximumDiscountLimit}</td>
                <td>{coupon?.numberOfUse}</td>
                <th>
                <button onClick={() => handleDelete(coupon)}>
                            <AiOutlineDelete />
                            
                          </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       </>
    );
};

export default Coupon;
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";
import AdminOrderDetailStatusChange from "./AdminOrderDetailStatusChange";
import AdminOrderDetailRow from "./AdminOrderDetailRow";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useRole from "../../../../../../Hooks/useRole";
import toast from "react-hot-toast";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../../../../../../Hooks/useAxiosSecure";

const AdminOrderDetail = () => {
  const { orderId } = useParams();

  const { axiosSecure } = useAxiosSecure();
  const { register, formState: { errors }, handleSubmit, setValue } = useForm({ mode: "onChange" });

  const { role, email } = useRole();

  // editable state 
  const [editable, setEditable] = useState(false);

  const {
    isLoading,
    isError,
    data: orderedData,
    error,
    refetch
  } = useQuery({
    queryKey: ["details", orderId, role, email],
    queryFn: async () => {
      const res = await axiosSecure(`/for-admin/order-detail-view/${orderId}?role=${role}&email=${email}`,);
      //console.log(res.data.details);
      return res?.data?.details;
    },
  });

  if (isLoading) {
    return <span>Loading... detailview</span>;
  }

  if (isError) {
    return <span>Error: {error?.response?.data?.message}</span>;
  }


  const onSubmit = (data) => {

    if (!['admin', 'Order Manager'].includes(role)) {
      Swal.fire(
        {
          icon: "error",
          title: `Unauthorized`,
          text: `You shouldn't have that access---- hakar man`
        }
      )
      return;
    }


    if (orderedData?.status === "Delivered" || orderedData?.status === "Cancelled") {
      Swal.fire(
        {
          icon: "error",
          title: `Unauthorized`,
          text: `You can't change delviered product data`
        }
      )
      return;
    }
    setValue('id', orderedData?._id);

    const subtotal = orderedData?.subTotalAmount;
    const courierCharge = orderedData?.courirerCharge;

    const UpdatedDiscount = parseFloat(data?.discountedAmount);
    const UpdatedfinalAmount = parseFloat(data?.finalAmount);




    if (subtotal + courierCharge - UpdatedDiscount !== UpdatedfinalAmount) {
      Swal.fire({
        title: "Are you sure?",
        text: `Total ammount should be ${subtotal + courierCharge - UpdatedDiscount} , but you provided ${UpdatedfinalAmount}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Proceeed",
      }).then((result) => {
        if (result.isConfirmed) {
          uploadData(data);
        }
      });
    } else {
      uploadData(data)
    }



  }




  //change order ammount 
  const uploadData = (data) => {
    const reqdata = {
      id: orderId,
      discountedAmount: parseFloat(data?.discountedAmount),
      finalAmount: parseFloat(data?.finalAmount)
    }


    axiosSecure.patch(`/change-order-total-ammount`, reqdata)
      .then(data => {
        Swal.fire({
          icon: "success",
          title: "Changed",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
        setEditable(false)
      })
      .catch(e => {
        Swal.fire(
          {
            icon: "error",
            title: `${e?.code}`,
            text: `${e?.response?.data?.message}`
          })
      })

  }

  // cancel order 
  const handleCancelOrder = () => {

    if (orderedData?.status === "Delivered" || orderedData?.status === "Cancelled" || !(['admin', 'Order Manager'].includes(role))) {
      Swal.fire(
        {
          icon: "error",
          title: `You can't change`,
          text: `Its not available for change`
        })
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: `You want to cancel the order. You can't revert`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceeed",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cacnel-order/${orderId}`)
          .then(data => {
            refetch();

            Swal.fire({
              icon: "success",
              title: "Deleted Successfully",

            });

          }).catch(e => {
            console.log(e)
            Swal.fire(
              {
                icon: "error",
                title: `${e?.code}`,
                text: `${e?.response?.data?.message}`
              })
          })
      }
    });


  }
  return (
    <>

      <div className="w-[900px] h-full p-20  ">
        <div className="bg-white p-5 rounded-md shadow-lg text-md grid gap-1">
          <p>
            Order Id:{" "}
            <span className="font-semibold text-accent">
              #{orderId.slice(-6)}
            </span>
          </p>
          <p>
            Receiver:{" "}
            <span className="font-semibold uppercase">{orderedData?.name}</span>
          </p>
          <Link to={`tel:${orderedData?.userPhone}`} >

            Phone: <span className="font-semibold pl-2 hover:underline cursor-pointer" title="click to call">{orderedData?.userPhone} </span>
          </Link>
          <p>
            <span className="font-semibold text-slate-600">
              Address : {orderedData?.userAddress}, {orderedData?.userCity}
            </span>
          </p>
          {orderedData?.deliveryPartner?.name &&
            <p>
              Delivery Partner:{" "}
              <span title={`Email: ${orderedData?.deliveryPartner?.email}`} className="font-semibold text-accent">
                {orderedData?.deliveryPartner?.name}
              </span>
            </p>
          }

          {/* delete button to cancel a order  */}
          {
            ['admin', 'Order Manager'].includes(role) && (orderedData?.status !== "Delivered" && orderedData?.status !== "Cancelled") &&
            <div className="w-full flex justify-end">
              <button onClick={handleCancelOrder} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">Cancel order</button>

            </div>
          }

        </div>



        <div className="bg-white p-10 rounded-md shadow-lg text-md grid gap-1 mt-5">
          <ol className="relative border-l border-gray-200 ">
            {orderedData.orderStatus.map((i, index) => (
              <li key={index} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="flex items-center gap-1 mb-1 text-sm font-normal leading-none text-gray-400 ">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 2V5"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V5"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 9.08997H20.5"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6947 13.7H15.7037"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.6947 16.7H15.7037"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13.7H12.0045"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 16.7H12.0045"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 13.7H8.30329"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 16.7H8.30329"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date(i?.time))}{" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {new Date(i?.time).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 ">
                  {i?.name}
                </h3>

                <p className="mb-4 text-base font-normal text-gray-500 ">
                  {i?.message}
                </p>

              </li>
            ))}
          </ol>
          {
            orderedData?.orderStatus && Array.isArray(orderedData?.orderStatus) &&
            <AdminOrderDetailStatusChange OrdersState={orderedData?.status} refetchOrderDetail={refetch} id={orderedData?._id} status={orderedData?.orderStatus[orderedData?.orderStatus.length - 1]?.name}></AdminOrderDetailStatusChange>
          }

        </div>

        <div className="bg-white p-5 rounded-md shadow-lg text-md mt-5">
          <AdminOrderDetailRow products={orderedData?.orderedItems}></AdminOrderDetailRow>
        </div>



        <form onSubmit={handleSubmit(onSubmit)} className="w-full" >
          {/* price section  */}
          <div className="bg-white px-2 py-5 rounded-md shadow-lg text-md  mt-5 pb-20 flex justify-end ">

            <div className=" w-screen  max-w-[400px] pr-5">

              <div className="flex justify-between items-center h-10">
                <p className="col-span-4">Subtotal:</p>
                <p className="col-span-2 flex items-center"><TbCurrencyTaka />{orderedData.subTotalAmount}</p>
              </div>
              <div className="flex justify-between items-center h-10">
                <p className="col-span-4">Delivery Charge</p>
                <p className="col-span-2 flex items-center"><TbCurrencyTaka />{orderedData.courirerCharge}</p>
              </div>


              {/* shipping charge  */}
              <div className='mt-3 flex justify-between items-center  relative'>

                <p>Discounted:</p>
                <div className=''>

                  <input
                    autoComplete='off'
                    type='text'
                    id="discount"
                    placeholder="Discounted ammount"
                    defaultValue={orderedData?.discountedAmount}
                    readOnly={!editable}
                    className={`block ${editable ? " border border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "select-none cursor-not-allowed focus:ring-red-500 focus:border-red-500"} block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs  `}
                    {...register("discountedAmount", {
                      required: "* Discounted Ammount  is required",
                      validate: (value) => !isNaN(Number(value)) || "Please enter a number",
                    })}
                  />
                  {

                    orderedData?.status !== "Delivered" && orderedData?.status !== "Cancelled" && ['admin', 'Order Manager'].includes(role) && < div className='absolute top-1 right-2 bg-slate-300 px-2 rounded-xl cursor-pointer' onClick={() => setEditable(!editable)}>Edit</div>
                  }
                </div>
              </div>
              {errors.discountedAmount && (<p className='block text-right p-1 text-xs text-red-600'>{errors.discountedAmount.message}</p>)}



              {/* total charge  */}
              <div className='mt-3 flex justify-between items-center  relative'>

                <p>Total </p>
                <div className=''>
                  <div>

                    <input
                      autoComplete='off'
                      type='text'
                      id="finalPrice"
                      placeholder="Total Ammount"
                      defaultValue={orderedData?.finalAmount}
                      readOnly={!editable}
                      className={`block ${editable ? " border border-gray-300 focus:ring-blue-500 focus:border-blue-500" : "select-none cursor-not-allowed focus:ring-red-500 focus:border-red-500"} block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 `}
                      {...register("finalAmount", {
                        required: "* total Ammount  is required",
                        validate: (value) => !isNaN(Number(value)) || "Please enter a number",
                      })}
                    />
                    {
                      editable &&
                      orderedData?.orderStatus[orderedData?.orderStatus.length - 1]?.name !== "Delivered" && ['admin', 'Order Manager'].includes(role) &&
                      <input type="submit" value="Save" className='absolute top-1 right-2 text-white bg-green-500 px-2 rounded-xl cursor-pointer' />
                    }
                  </ div>
                </div>
              </div>
              {errors.finalAmount && (<p className='block text-right p-1 text-xs text-red-600'>{errors.finalAmount.message}</p>)}





            </div>
          </div>
        </form >




      </div >
    </>
  );
};

export default AdminOrderDetail;

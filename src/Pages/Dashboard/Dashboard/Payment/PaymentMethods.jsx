import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import UserTitle from '../../../../Component/UserTitle';
import { BsCashCoin, BsCreditCard } from 'react-icons/bs';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PaymentMethods = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { _OrderID } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoading, isError, data : orderedData, error } = useQuery({
    queryKey: ['orderData', _OrderID],
    queryFn: async () => {

      const res = await axios.get(`${import.meta.env.VITE_SERVERADDRESS}/payment-methods?email=${user?.email}&_orderID=${_OrderID}`, { withCredentials: true })
   
      return res?.data;
    },
  })

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }





  // const onSubmit = (data) => {
  //   console.log(data)
  //   const {typeOfPayment} = data;
  //   const orderType = typeOfPayment;
  //   axios.put(`${import.meta.env.VITE_SERVERADDRESS}/updateOrder/${_OrderID}`, {orderType}, {withCredentials: true})
  //     .then((res) => {
  //       console.log(res.data)
  //       if (res.data.insertedId) {
  //         navigate(
  //           `/dashboard/order-details`
  //         );
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       if (e?.response?.status === 409) {
  //         //
  //       }
  //     });
  // }

  const onSubmit = async (data) => {
    try {
      // Add the orderType field to the data object with the value "COD".
      data.orderType = "COD";
      
      // Make a POST request to your server's /checkout endpoint with the data.
      const response = await axios.post(`${import.meta.env.VITE_SERVERADDRESS}/checkout?email=${user?.email}`, data, { withCredentials: true });
      
      // Check the response and handle it as needed.
      if (response.status === 200) {
        // Success: Order placed, you can navigate to a confirmation page or do further actions.
        console.log('Order placed successfully.');
      } else {
        // Handle other status codes or errors.
        console.error('Error placing the order:', response.data.message);
      }
    } catch (error) {
      console.error('Error placing the order:', error);
    }
  };
  


  const handleCardPayment = () => {
    navigate(`/dashboard/payment/${_OrderID}`);
  }

  return (
    <>
      <div className='w-full p-10'>
        <UserTitle heading="Select Payment Method"></UserTitle>
        <div className='grid grid-cols-2 gap-10'>
          <div className=''>
            <div className='grid grid-cols-2 gap-5 px-5'>
              <label

                htmlFor="booking-modal"
                className='grid justify-items-center text-lg p-5 shadow-lg rounded-lg font-bold bg-white'><BsCashCoin className='text-2xl' />Cash On Delivery</label>

              <button className='grid justify-items-center text-lg p-5 shadow-lg rounded-lg font-bold bg-white' onClick={handleCardPayment}><BsCreditCard className='text-2xl' />Card Payment</button>
            </div>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-5'>
            <p className='text-lg font-bold'>Order Summary</p>
            <div className='grid grid-cols-4 gap-5 my-5'>
              <div className=' col-span-3'>
                <p>Subtotal ({orderedData?.productLength} items and shipping fee included)</p>
                <p className='mt-2 text-2xl'>Total Amount</p>
              </div>
              <div>
                <p className='flex items-center'><TbCurrencyTaka />{orderedData?.totalAmount}</p>
                <p className='mt-2 flex items-center text-2xl text-accent font-bold'><TbCurrencyTaka />{orderedData?.totalAmount}</p>
              </div>
            </div>
          </div>
        </div>


        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold"></h3>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
              <div className="form-control">
                <input
                  type="text"
                  className="input input-bordered rounded-md"
                  value={orderedData?.totalAmount}
                  {...register("quantity", { required: true })}
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  className="input input-bordered rounded-md"
                  value="Cash On Delivery (COD)"
                  {...register("typeOfPayment", { required: true })}
                />
              </div>
              <input
                type="submit"
                className="w-full h-12 cursor-pointer bg-accent text-white hover:bg-slate-200 hover:text-primary font-bold rounded-md mt-5"
                value="Confirm Order"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserTitle from '../../../../Component/UserTitle';
import { BsCashCoin, BsCreditCard } from 'react-icons/bs';
import { TbCurrencyTaka } from 'react-icons/tb';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const PaymentMethods = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const totalPayment = location.state?.totalPayment || 0;
  const products = location.state?.products || 0;

  const price =  totalPayment;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    const {quantity, cashOnDelivery} = data;
    const payment = {
        email: user?.email,
        cashOnDelivery,
        price,
        quantity,
        cartItems: products?.map(item => item._id),
        cartItemsName: products?.map(item => item.productTitle),
        cartItemsQuantity: products?.map(item => item.quantity),
        payItems: products?.map(item => item.productId),
        date: new Date()
      }
      axios.post('http://localhost:5000/payments', payment )
      .then((res)=>{
        console.log(res.data)
        if (res.data.insertedId) {
            navigate(
              `/dashboard/order-details`
            );
          }
      })
          .catch((e) => {
            console.log(e);
            if (e?.response?.status === 409) {
            }
          });
      }


  const handleCardPayment = () => {
    navigate('/dashboard/payment', { state: { totalPayment, products } });
  }

//   const handleCashOnDelivery = () => {

//   }
    return (
        <>
        <div className='w-full p-10'>
        <UserTitle heading="Select Payment Method"></UserTitle>
        <div className='grid grid-cols-2 gap-10'>
        <div className=''>
        <div className='grid grid-cols-2 gap-5 px-5'>
        <label
                        
                        htmlFor="booking-modal"
                        className='grid justify-items-center text-lg p-5 shadow-lg rounded-lg font-bold bg-white'><BsCashCoin className='text-2xl'/>Cash On Delivery</label>
        
        <button className='grid justify-items-center text-lg p-5 shadow-lg rounded-lg font-bold bg-white' onClick={handleCardPayment}><BsCreditCard className='text-2xl' />Card Payment</button>
        </div>
        </div>
        <div className='bg-white shadow-lg rounded-lg p-5'>
            <p className='text-lg font-bold'>Order Summary</p>
        <div className='grid grid-cols-4 gap-5 my-5'>
        <div className=' col-span-3'>
            <p>Subtotal ({products.length} items and shipping fee included)</p>
        <p className='mt-2 text-2xl'>Total Amount</p>
        </div>
        <div>
            <p className='flex items-center'><TbCurrencyTaka />{totalPayment}</p>
            <p className='mt-2 flex items-center text-2xl text-accent font-bold'><TbCurrencyTaka />{totalPayment}</p>
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
            value={products.length}
              {...register("quantity", { required: true })}
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              className="input input-bordered rounded-md"
            value="Cash On"
              {...register("cashOnDelivery", { required: true })}
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
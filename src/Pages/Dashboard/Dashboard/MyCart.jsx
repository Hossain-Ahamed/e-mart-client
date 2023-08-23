import { useContext, useEffect, useState } from 'react';
import useCart from '../../../Hooks/useCart';
import { AiOutlineDelete } from "react-icons/ai";
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyCart = () => {
  const [cart, refetch] = useCart();
  const { user } = useContext(AuthContext);


  const [total, setTotal] = useState(0.00);

  useEffect(() => {

    setTotal(cart.reduce((sum, product) => (product.price * product.quantity) + sum, 0));
  }, [cart]);

  const handleDelete = product => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/remove-from-cart/${user?.email}/${product?._id}`, {
          withCredentials: true,
        }).then(data => {
          refetch();
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

        })
      }
    })
  }
  return (
    <>
      <>
        <div className='w-[900px] h-full'>
          <div className='flex gap-8 items-center my-10'>
            <h3 className='text-2xl font-bold'>Your Cart ({cart.length} Products)</h3>
            <div className='divider w-3/5'></div>
          </div>
          <div className='grid grid-cols-4 text-lg font-bold'>
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className='divider'></div>
          <div className='grid gap-4'>
            {
              cart.map(product => <div
                key={product._id}
                className='grid grid-cols-4 items-center'
              >
                <div className='flex items-center gap-3'>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={product.img} />
                    </div>
                  </div>
                  <p className='truncate text-clip overflow-hidden w-20 font-bold'>{product.name}</p>
                </div>
                <p className=''>{product?.price}</p>
                <p>{product?.quantity}</p>
                <div className='flex gap-5'>
                  <p>{parseFloat((product?.quantity * product?.price).toFixed(2))}</p>
                  <button onClick={() => handleDelete(product)} className=' text-red-600 hover:shadow-lg '><AiOutlineDelete className='text-lg hover:text-2xl' /></button>
                </div>
              </div>)
            }

          </div>
          <div className='divider'></div>
          <div className=' w-96 mb-10'>
            <div className='flex gap-60'>
              <p className='font-bold'>Total Price:</p>
              <p className=''>{total}</p>
            </div>
            <hr />
            <div className='flex'>
              <p className='font-bold'>Shipping Price:</p>
              <p>{total}</p>
            </div>
            <hr />
            <div className='flex'>
              <p className='font-bold'>Coupon Code:</p>
              <p>{total}</p>
            </div>
            <hr />
            <div className='flex'>
              <p className='font-bold'>Grand Total:</p>
              <p>{total}</p>
            </div>
          </div>
          <button className='w-36 h-12 border bg-slate-400 hover:bg-yellow-600 hover:text-white text-lg font-bold'>Check Out</button>
        </div>
      </>
    </>
  );
};

export default MyCart;
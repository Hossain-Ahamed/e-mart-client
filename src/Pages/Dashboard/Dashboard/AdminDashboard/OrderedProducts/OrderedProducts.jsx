import React, { useState } from 'react';
import useOrderedProducts from '../../../../../Hooks/useOrderedProducts';
import useProfile from '../../../../../Hooks/useProfile';
import useAllUserProfile from '../../../../../Hooks/useAllUserProfile';

const OrderedProducts = () => {
    const [orderedProducts] = useOrderedProducts();
    console.log(orderedProducts)
    const [userProfiles] = useAllUserProfile();
    //console.log(userProfiles)
    const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (email) => {
    // Find the user profile that matches the email
    const userProfile = userProfiles.find((profile) => profile.email === email);
    console.log('Selected User Profile:', userProfile);
    setSelectedUser(userProfile);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };
    
    return (
        <>
            <div className="h-full w-full p-10">
        <div className="">
          <p>{orderedProducts.length}</p>
          <table className="table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
            <tbody>
            {orderedProducts.map((product, index) => (
  <tr key={product._id}>
    <td>
      <p>Order {index + 1}</p>
    <p>Coupon: {product.coupon}</p>
    <p>Courier Charge: {product.courirerCharge}</p>
    <p>Discounted Amount: {product.discountedAmount}</p>
    <p>Final Amount: {product.finalAmount}</p>
    <p>Order Type: {product.orderType || "N/A"}</p>
    <p>Subtotal Amount: {product.subTotalAmount}</p>
    <p>User Address: {product.userAddress}</p>
    <p>User City: {product.userCity}</p>
    <p>User Phone: {product.userPhone}</p>
    <p>User ID: {product.userId}</p>
    <p>Transaction ID: {product.transactionId || "N/A"}</p>
    </td>
    
    <td>Order Status:</td>
    <td>
      {product.orderStatus.map((status, statusIndex) => (
        <p key={statusIndex}>
          Name: {status.name}, Message: {status.message}, Time: {status.time}
        </p>
      ))}
    </td>
    <td>Ordered Items:</td>
    <td>
      {product.orderedItems.map((item, itemIndex) => (
        <p key={itemIndex}>
          Product ID: {item.productId}, Product Name: {item.productName}, Product Price: {item.productPrice}, Product Quantity: {item.productQuantity}
        </p>
      ))}
    </td>
  </tr>
))}

            </tbody>
          </table>
        </div>
      </div>

      <div>
      <input type="checkbox" id="customer-info" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            <label htmlFor="customer-info" className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
            <h3 className="text-lg font-bold"></h3>
            {/* <p>{userProfiles.length}</p>
            <div>
              {orderedProducts.map((product) => (
                <div key={product._id} onClick={() => openModal(product.email)}>
                  <p>{product.email}</p>
                 
                </div>
              ))}
            </div>
            {selectedUser && (
              <div key={selectedUser._id} info={selectedUser}>
                <p>{selectedUser.name}</p>
                
              </div>
            )} */}
            
                    <p>ydhththrt</p>
                    {/* <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
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
                    </form> */}
                </div>
            </div>
      </div>
        </>
    );
};

export default OrderedProducts;
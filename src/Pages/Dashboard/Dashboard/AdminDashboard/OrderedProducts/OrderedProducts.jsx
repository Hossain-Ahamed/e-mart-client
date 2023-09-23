import React, { useState } from 'react';
import useOrderedProducts from '../../../../../Hooks/useOrderedProducts';
import useProfile from '../../../../../Hooks/useProfile';
import useAllUserProfile from '../../../../../Hooks/useAllUserProfile';

const OrderedProducts = () => {
    const [orderedProducts] = useOrderedProducts();
    const [userProfiles] = useAllUserProfile();
    console.log(userProfiles)
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
              {orderedProducts?.map((product) => (
                <tr key={product?._id} product={product}>
                  {/* row 1 */}

                  <td>
                    {product.email}
                  </td>
                  
                  <td>
                  {product.cartItemsName.map((itemName, index) => (
                    <div key={index}>{itemName}</div>
                  ))}
                  </td>
                  <td>
                  {product.cartItemsQuantity?.map((itemQuantity, index) => (
                    <div key={index}>{itemQuantity}</div>
                  ))}
                  </td>
                  

                  <td>{product.price}</td>
                  <td>{product.transactionId || product.cashOnDelivery}</td>
                  <td><label
                        
                        htmlFor="customer-info"
                        className='btn'>
                            Customer Info</label></td>  
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
            <p>{userProfiles.length}</p>
            <div>
              {orderedProducts.map((product) => (
                <div key={product._id} onClick={() => openModal(product.email)}>
                  <p>{product.email}</p>
                  {/* Render other product data here */}
                </div>
              ))}
            </div>
            {selectedUser && (
              <div key={selectedUser._id} info={selectedUser}>
                <p>{selectedUser.name}</p>
                {/* Render other user data here */}
              </div>
            )}
            
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
import React from 'react';
import useOrderedProducts from '../../../../../Hooks/useOrderedProducts';
import useProfile from '../../../../../Hooks/useProfile';
import useAllUserProfile from '../../../../../Hooks/useAllUserProfile';

const OrderedProducts = () => {
    const [orderedProducts] = useOrderedProducts();
    const [userProfiles] = useAllUserProfile();
    console.log(userProfiles)
    
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
                  <td><button>Customer Info</button></td>  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p></p>
      </div>
        </>
    );
};

export default OrderedProducts;
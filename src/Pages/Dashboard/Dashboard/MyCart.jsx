import { useContext, useEffect, useState } from "react";
import useCart from "../../../Hooks/useCart";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../Contexts/AuthProvider";
import CartComponent from "../../../Component/CartComponent/CartComponent";
import { Link, useNavigate, useParams } from "react-router-dom";
import Error from "../../Shared/error/Error";
import { set } from "react-hook-form";
import { cartDataContext } from "../../../Contexts/CartDataProvider";

const MyCart = () => {
  const {setSelectedOrderItems} = useContext(cartDataContext);
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  //const {quantityArray} = useParams();
  const [total, setTotal] = useState(0.0);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-cart?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((data) => {
        //console.log(data.data);
        setCart(data.data.cart);
      })
      .catch((e) => {
        <Error />;
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);
  const [selectedOrders, setSelectedOrders] = useState([]);
  useEffect(() => {
    setTotal(
      selectedOrders.reduce((sum, product) => product.price * product.quantity + sum, 0)
    );
    
  }, [selectedOrders]);
  console.log(total)

  
  const handleRemoveFromSelectedOrders = (product) => {
    setSelectedOrders(selectedOrders.filter((item) => item._id !== product?._id))
  };

  const handleAddToSelectedOrders = (product) => {
    setSelectedOrders([...selectedOrders, product])
  };

  // const updateQuantity = ({ _id, Updatedquantity }) => {
  //   setCart((prevCart) => {
  //     const updatedCart = prevCart.map((product) => {
  //       if (product._id === _id) {
  //         return { ...product, quantity: Updatedquantity };
  //       }
  //       return product;
  //     });

  //     return updatedCart;
  //   });
  //   setSelectedOrders((prevCart) => {
  //     const updatedCart = prevCart.map((product) => {
  //       if (product._id === _id) {
  //         return { ...product, quantity: Updatedquantity };
  //       }
  //       return product;
  //     });

  //     return updatedCart;
  //   });
  //   updateInDB(_id, Updatedquantity);
  // };

  const updateQuantityAndChecked = (_id, Updatedquantity, isChecked) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product._id === _id) {
          return { ...product, quantity: Updatedquantity, checked: isChecked };
        }
        return product;
      });
  
      return updatedCart;
    });
  
    setSelectedOrders((prevCart) => {
      const updatedCart = prevCart.map((product) => {
        if (product._id === _id) {
          return { ...product, quantity: Updatedquantity, checked: isChecked };
        }
        return product;
      });
  
      return updatedCart;
    });
  
    // Call a function to update this change in the database (you need to implement this).
    updateInDB(_id, Updatedquantity, isChecked);
  };
  

  const updateInDB = (_id, Updatedquantity, isChecked) => {
    console.log(_id, Updatedquantity, isChecked);
    const updatedCart = { email: user?.email, productId: _id, quantity: Updatedquantity, checked: isChecked }
    console.log(updatedCart)
    axios
    .put(`http://localhost:5000/update-cart-product/${user?.email}`, updatedCart, { withCredentials: true })
    .then((response) => {
      // Handle success
      console.log('Cart updated in the database', response.data);
      // Optionally, you can also update the local cart state if needed
      refetch();
    })
    .catch((error) => {
      // Handle error
      console.error('Error updating cart in the database', error);
    });
  
    
  };

  // function to delete an item of cart
  const handleDeleteCartItem = (_id) => {
    setCart(cart.filter((item) => item._id !== _id));
    setSelectedOrders(selectedOrders.filter((item) => item._id !== _id));

    const data = {
       _id
    };
    console.log(data)
    axios
      .delete(`http://localhost:5000/remove-from-cart/${user.email}/${_id}`, {
        data,
        withCredentials: true,
      })
      .then(() => {
       refetch();
      })
      .catch((e) => {
         console.error('error', e)
        navigate("/not-found");
      });
  };

  const handleCheckOut = () => {
    setSelectedOrderItems(selectedOrders, total);
    if(selectedOrders.length >= 0){
      navigate('/dashboard/check-out')
    }
    
  }

  return (
    <>
      <>
        {loading ? (
          <p>loading....</p>
        ) : (
          <div className="w-full h-full md:p-10 user-select-none">
            <div className="flex gap-8 items-center my-10">
              <h3 className="text-2xl font-bold">
                Your Cart ({cart.length} Products)
              </h3>
              <div className="divider w-3/5"></div>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="bg-white col-span-2 p-5">
                <div className="grid grid-cols-4 md:grid-cols-5 lg:text-lg font-bold items-center justify-items-center">
                  <p className="md:col-span-2">Item</p>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total</p>
                </div>
                {cart.map((product, _idx) => (
                  <CartComponent
                    key={product._id}
                    product={product}
                    handleAddToSelectedOrders={handleAddToSelectedOrders}
                    handleRemoveFromSelectedOrders={
                      handleRemoveFromSelectedOrders
                    }
                    updateQuantityAndChecked={updateQuantityAndChecked}
                    handleDeleteCartItem={handleDeleteCartItem}
                  ></CartComponent>
                ))}
              </div>
              <div className=" bg-white p-5 h-64">
                <div className="grid grid-cols-4">
                  <div className="col-span-3">
                    <p className="font-bold">Total Price:</p>
                    <p className="font-bold">Shipping Price:</p>
                    <p className="font-bold">Coupon Code:</p>
                    <p className="font-bold">Grand Total:</p>
                  </div>
                  <div>
                    <p className="">{total}</p>
                    <p>{total}</p>
                    <p>{total}</p>
                    <p>{total}</p>
                  </div>
                </div>
               
               
                  <button onClick={handleCheckOut} disabled={selectedOrders.length <= 0} className="w-full h-10 focus:ring focus:ring-3 ring-yellow-300  bg-accent text-white text-lg font-bold rounded-sm mt-5 disabled:cursor-not-allowed">
                    Check Out
                  </button>
                  {
                    selectedOrders.length <= 0 && <p className="text-sm text-red-600 text-center">"You must select an item"</p>
                  }
                
                
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default MyCart;

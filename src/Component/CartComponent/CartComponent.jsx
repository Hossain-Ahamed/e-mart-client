import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthProvider";
import useCart from "../../Hooks/useCart";
import {
  AiOutlineDelete,
  AiOutlineMinus,
  AiOutlineMinusSquare,
  AiOutlinePlus,
} from "react-icons/ai";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import toast from "react-hot-toast";

const CartComponent = ({
  product,
  handleAddToSelectedOrders,
  handleRemoveFromSelectedOrders,
  //updateQuantity,
  updateQuantityAndChecked,
  handleDeleteCartItem,
}) => {
  const { _id, productTitle, image, price, mainPrice, quantity, stock, checked } =
    product;

  const [isChecked, setIsChecked] = useState(checked);

  const toggleProductChecked = (value) => {
    // console.log(value);
    setIsChecked(!isChecked);
    if (value) {
      handleAddToSelectedOrders(product);
    } else {
      handleRemoveFromSelectedOrders(product);
    }
  };

  const [Updatedquantity, setUpdatedquantity] = useState(quantity);
  // console.log(quantity)



  const handleIncrease = () => {
    // 20 will be replaced by "available product ammount"
    if (parseInt(Updatedquantity) >= 20) {
      toast.error("Maximum product Added");
      return;
    }
    if (parseInt(Updatedquantity) >= stock) {
      toast.error("Not Enough stock avaialable");
      return;
    }

    updateQuantityAndChecked(_id, Updatedquantity + 1, isChecked);
    setUpdatedquantity(parseInt(Updatedquantity) + 1);
  };

  const handleDecrease = () => {

    if (parseInt(Updatedquantity) <= 1) {
      toast.error("Product less than 1");
      return;
    }


    updateQuantityAndChecked(_id, Updatedquantity - 1, isChecked);
    setUpdatedquantity(parseInt(Updatedquantity) - 1);
  };

  return (
    <>
      <div className="divider"></div>
      <div className="grid gap-4">
        <div className="grid grid-cols-4 md:grid-cols-5 items-center justify-items-center">
          <div className="flex items-center gap-3 md:col-span-2">
            <div onClick={() => { updateQuantityAndChecked(_id, Updatedquantity , !isChecked); toggleProductChecked(!isChecked)}}>
              {isChecked ? (
                <GrCheckboxSelected></GrCheckboxSelected>
              ) : (
                <GrCheckbox></GrCheckbox>
              )}
            </div>

            <div className="avatar">
              <div className="w-16 lg:w-24 rounded">
                <img src={image} />
              </div>
            </div>
            <p
              title={productTitle}
              className="hidden md:block w-20 font-bold line-clamp-1"
            >
              {productTitle}
            </p>
          </div>
          <p className="">{price}</p>
          <div className="flex gap-3">
            <button
              onClick={handleDecrease}
              className="md:p-1 bg-gray-200 shadow-md rounded-sm"
             
            >
              <AiOutlineMinus />
            </button>
            <p>{stock === 0 ? 0 : quantity}</p>
            <button
              onClick={handleIncrease}
              className="md:p-1 bg-gray-300 shadow-md rounded-sm"
             
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className="flex md:gap-5">
            <p>{parseFloat((quantity * price).toFixed(2))}</p>
            <button
              onClick={() => handleDeleteCartItem(_id)}
              className=" text-red-600 hover:shadow-lg "
            >
              <AiOutlineDelete className="text-lg hover:text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;

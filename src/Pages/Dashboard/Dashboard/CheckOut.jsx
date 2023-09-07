import React, { useContext } from "react";
import { cartDataContext } from "../../../Contexts/CartDataProvider";
import useProfile from "../../../Hooks/useProfile";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { selectedOrderItems, total } = useContext(cartDataContext);
  console.log(selectedOrderItems, total);
  const [profile] = useProfile();
  const { name, email, phone, address } = profile;
 // const [total] = useParams();

  const { data: deliveryCharges = [] } = useQuery(
    ["deliveryCharge"],
    async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/get-delivery-charge`
        );
        //console.log(res.data);
        return res.data;
      } catch (error) {
        throw new Error(error.response?.data?.message || "An error occurred");
      }
    }
  );

  // Find the delivery charge that matches the user's address or use the default charge
  let deliveryChargeToShow = "Default Charge"; // Initialize with the default charge
  const userDeliveryCharge = deliveryCharges.find(
    (charge) => charge.address === address
  );

  // If a user-specific charge is found, use it
  if (userDeliveryCharge) {
    deliveryChargeToShow = userDeliveryCharge.deliveryCharge;
  } else if (deliveryCharges.length > 0) {
    // If no user-specific charge is found and there are entries in the `deliveryCharges` data, use the default charge from the first entry
    deliveryChargeToShow = deliveryCharges[0].defaultCharge;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-5 m-10">
        <div className="col-span-2">
        <div className="border rounded-md shadow-lg bg-white mb-5 p-5">
          <p>Deliver to: {name}</p>
          <p>{phone}</p>
          <div className="flex gap-3">
          <p>{address}</p>
          <button className="text-blue-600">Edit</button>
          </div>
        </div>
        <div className="border rounded-md shadow-lg bg-white mb-5 p-5">
          {selectedOrderItems.map((item, index) => (
            <div className="grid grid-cols-4" key={index}>
              <p className="col-span-2">Product Name: {item.productTitle}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Product Price: {item.price}</p>
              {/* Add more properties as needed */}
            </div>
          ))}
        </div>
        </div>
        <div className="border rounded-md shadow-lg bg-white p-5 h-60">
        <div>
            <p>Total Product Price: </p>
          <p>Delivery Charge: {deliveryChargeToShow}</p>
          <p>Total Payment: </p>
        </div>
        <button className="w-full h-10 focus:ring focus:ring-3 ring-yellow-300  bg-accent text-white text-lg font-bold rounded-sm mt-10">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default CheckOut;

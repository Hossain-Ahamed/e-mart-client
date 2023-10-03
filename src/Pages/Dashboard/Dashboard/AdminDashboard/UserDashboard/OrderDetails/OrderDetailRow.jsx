import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const OrderDetailRow = ({ products }) => {
  return (
    <>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
            <th scope="col" className="px-6 py-3">
              Unit Price
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            Array.isArray(products) &&
            products.map((i, count) => (
              <tr key={count} className="bg-white border-b  hover:bg-gray-50 ">
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={i?.productImage} alt={i?.productName} />
                     
                </th>
                <td className="px-6 py-4">
                  {i?.productName}
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm">
                    {i?.productQuantity}
                  </p>
                </td>
                <td className="px-6 py-4 flex items-center"><TbCurrencyTaka />{i?.productPrice}</td>
                <td className="px-6 py-4">
                  {(i?.productQuantity * i?.productPrice).toFixed(2)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default OrderDetailRow;

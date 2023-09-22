import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import UserTitle from '../../../../Component/UserTitle';
import { TbCurrencyTaka } from 'react-icons/tb';
import usePaymentHistory from '../../../../Hooks/usePaymentHistory';

const PaymentHistory = () => {

  const [payments] = usePaymentHistory();
    return (
        <>
        <UserTitle heading="Your Payment History" />

        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Cash On Delivery</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((info, index) => (
              <tr key={info._id}>
                <th>{index + 1}</th>
                <td>
                {info.email}
                </td>
                <td>{info.transactionId}</td>
                <td>{info.cashOnDelivery}</td>
                <td className='flex items-center'><TbCurrencyTaka />{info.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    );
};

export default PaymentHistory;
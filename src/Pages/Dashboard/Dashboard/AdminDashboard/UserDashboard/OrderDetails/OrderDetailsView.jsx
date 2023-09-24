import React from 'react';
import { useParams } from 'react-router-dom';
import useProfile from '../../../../../../Hooks/useProfile';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const OrderDetailsView = () => {
    const {orderId} = useParams();
    const [profile, profileLoading] = useProfile();
  const {
    isLoading,
    isError,
    data: orderedData,
    error,
  } = useQuery({
    queryKey: ["details", profile, orderId],
    enabled: !profileLoading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVERADDRESS}/order-detail-view/${orderId}?email=${
          profile?.email}`,
        { withCredentials: true }
      );
      //console.log(res.data.details);
      return res?.data?.details;
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.response?.data?.message}</span>;
  }
    return (
        <div>
            
        </div>
    );
};

export default OrderDetailsView;
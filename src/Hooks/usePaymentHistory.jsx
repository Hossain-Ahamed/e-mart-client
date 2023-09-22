import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const usePaymentHistory = () => {
    const { user, loading } = useContext(AuthContext);
    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
          
            const res = await axios.get(`http://localhost:5000/get-payments?email=${user?.email}`, { withCredentials: true })
            console.log(res?.data);
            return res?.data;
        },
    });

    return [payments, refetch]
};

export default usePaymentHistory;
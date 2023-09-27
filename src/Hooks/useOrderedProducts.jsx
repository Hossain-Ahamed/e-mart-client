import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useOrderedProducts = (query) => {

    const {axiosSecure} = useAxiosSecure();
    const { refetch, data: orderedProducts = [] } = useQuery({
        queryKey: ['orderedProducts'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-all-ordered-products?q=${query}`)
            // console.log(res.data)
            return res.data;
        },
          });
    

    return [orderedProducts, refetch]
};

export default useOrderedProducts;
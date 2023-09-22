import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useOrderedProducts = () => {
    const { refetch, data: orderedProducts = [] } = useQuery({
        queryKey: ['orderedProducts'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/get-all-ordered-products`, {withCredentials: true})
            // console.log(res.data)
            return res.data;
        },
          });
    

    return [orderedProducts, refetch]
};

export default useOrderedProducts;
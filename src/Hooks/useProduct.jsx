import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = () => {
  
    const { refetch, data: product = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/products`, {withCredentials: true})
            // console.log(res.data)
            return res.data;
        },
          });
    

    return [product, refetch]
};

export default useProduct;
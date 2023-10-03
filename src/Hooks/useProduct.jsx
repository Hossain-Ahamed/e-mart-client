import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useProduct = () => {
    const {axiosSecure} = useAxiosSecure();
    const { refetch, data: product = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products`)
            // console.log(res.data)
            return res.data;
        },
          });
    

    return [product, refetch]
};

export default useProduct;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const useCategory = () => {

  const { refetch, data: category = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const res = await axios.get(`http://localhost:5000/categories`, {withCredentials: true})
        //console.log(res.data)
        return res.data;
    },
      });


return [category, refetch]
};

export default useCategory;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

const useCategory = () => {
  const {axiosSecure} = useAxiosSecure();
  const { refetch, data: category = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/categories`)
        //console.log(res.data)
        return res.data;
    },
      });


return [category, refetch]
};

export default useCategory;
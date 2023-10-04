import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const useSubCategory = () => {
    const {axiosSecure} = useAxiosSecure();
    const { refetch, data: subCategory = [] } = useQuery({
        queryKey: ['subCategory'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/sub-category`)
            console.log(res.data)
            return res.data;
        },
          });
    
    
    return [subCategory, refetch]
    };


export default useSubCategory;
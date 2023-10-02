import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useSubCategory = () => {
    const { refetch, data: subCategory = [] } = useQuery({
        queryKey: ['subCategory'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/sub-category`, {withCredentials: true})
            console.log(res.data)
            return res.data;
        },
          });
    
    
    return [subCategory, refetch]
    };


export default useSubCategory;
import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import axios from 'axios';
// import useAxiosSecure from './useAxiosSecure';
// import axios from 'axios';
const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
          
            const res = await axios.get(`http://localhost:5000/get-cart?email=${user?.email}`, { withCredentials: true })
            // console.log(res.data?.cart);
            return res.data?.cart;
        },
    });


    return [cart, refetch]
};

export default useCart;
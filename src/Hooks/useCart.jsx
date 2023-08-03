import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
// import useAxiosSecure from './useAxiosSecure';
// import axios from 'axios';
const useCart = () => {
    const { user } = useContext(AuthContext);
    // const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
        // const { refetch, data: cart = [] } = useQuery(['carts', user?.email], async () => {
        //     try {
        //       const response = await axiosSecure.get(`/carts?email=${user?.email}`);
        //       return response.data;
        //     } catch (error) {
        //       console.log('Error fetching cart data:', error);
        //       return [];
        //     }
          });
    

    return [cart, refetch]
};

export default useCart;
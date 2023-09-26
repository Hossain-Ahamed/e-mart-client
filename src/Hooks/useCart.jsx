import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";
import useRole from "./useRole";
// import useAxiosSecure from './useAxiosSecure';
// import axios from 'axios';
const useCart = () => {
  const { axiosSecure } = useAxiosSecure();
  const { role, userRoleDataLoading } = useRole();
  const { user, loading } = useContext(AuthContext);
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email, axiosSecure],
    enabled: (!loading && role === "user" && !userRoleDataLoading),
    queryFn: async () => {
      const res = await axiosSecure.get(`/get-cart?email=${user?.email}`);
      // console.log(res.data?.cart);
      return res?.data?.cart;
    },
  });

  return [cart, refetch];
};

export default useCart;

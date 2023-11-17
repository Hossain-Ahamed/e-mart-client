import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const {data: isAdmin, isLoading: isAdminLoading, refetch} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: (!loading && !!user),
        queryFn: async () => {
            const res = await axios.get(`https://e-mart-server-one.vercel.app/users/admin/${user?.email}`, {withCredentials: true})
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading, refetch]
}

export default useAdmin;
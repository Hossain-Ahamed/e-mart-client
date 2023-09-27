import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';
import { UserDataContext } from '../Contexts/UserDataProvider';

const useRole = () => {
   // console.log("user role")
    // const {user, loading} = useContext(AuthContext);
    // const {axiosSecure} = useAxiosSecure();
    // const { data: userRoleData, isLoading: userRoleDataLoading } = useQuery({
    //     queryKey: ['userRoleData', user],
    //     enabled: !loading,
    //     queryFn: async () => {
            
    //            // console.log(user?.email)
    //         const res = await axiosSecure.get(
    //             `/get-user-role/${user?.email}`,
    //             { withCredentials: true }
    //           );
    //           console.log("role axios",user?.email,res.data?.user)
    //           return res.data?.user;
            
    //     },
    //       });

    //       return {userRoleData, userRoleDataLoading};
    

    const userRoleData = useContext(UserDataContext);
    return userRoleData;
};

export default useRole;
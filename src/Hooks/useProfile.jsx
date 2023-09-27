import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from './useRole';
import useAxiosSecure from './useAxiosSecure';
import axios from 'axios';

const useProfile = () => {
    const {user, loading} = useContext(AuthContext);
    const {userRoleData, userRoleDataLoading} = useRole();
    const {axiosSecure} = useAxiosSecure();
    const { refetch, data: profile = {} , isLoading: profileLoading} = useQuery({
        queryKey: ['profile', user],
        enabled: (!loading && !userRoleDataLoading && userRoleData?.role !== "admin"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-profile/${user?.email}`);
            console.log("profile axios",user?.email,res.data)
            return res?.data;
        },
        });
    
    
    return [profile, profileLoading, refetch]
    };

export default useProfile;
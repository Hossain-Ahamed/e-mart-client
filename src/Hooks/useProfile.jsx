import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import useRole from './useRole';
import useAxiosSecure from './useAxiosSecure';

const useProfile = () => {
    const {user, loading} = useContext(AuthContext);
    const {userRoleData, userRoleDataLoading} = useRole();
    const {axiosSecure} = useAxiosSecure();
    const { refetch, data: profile = {} , isLoading: profileLoading} = useQuery({
        queryKey: ['profile'],
        enabled: (!loading && !userRoleDataLoading && userRoleData?.role === "user"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-profile/${user?.email}`, { withCredentials: true });
            console.log("profile axios",user?.email,res.data)
            return res?.data;
        },
        });
    
    
    return [profile, profileLoading, refetch]
    };

export default useProfile;
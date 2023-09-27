import React, { createContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';

export const UserDataContext = createContext();

const UserDataProvider = ({children}) => {
    const {loading, user} = useAuth();
    const {axiosSecure} = useAxiosSecure();
    
    const { data: userRoleData, isLoading: userRoleDataLoading, refetch: userAllDataRefetch } = useQuery({
        queryKey: ['userRoleData', user],
        enabled: (!loading && !!user),
        queryFn: async () => {
            
            // console.log(user?.email)
            const res = await axiosSecure.get(
                `/get-user-role/${user?.email}`,
                { withCredentials: true }
              );
              console.log("role axios",user?.email,res.data?.user)
              return res.data?.user;
            
        },
          });
         // console.log(userRoleDataLoading)
    const data = { userRoleData, userAllDataRefetch, userRoleDataLoading, name: userRoleData?.name, email: userRoleData?.email, role: userRoleData?.role}
    // if(userRoleDataLoading){
    //     return <><p>Loading... userDataLoading</p></>
    // }
    return (
        
            <UserDataContext.Provider value={data}>
            {children}
           </UserDataContext.Provider>
       
    );
};

export default UserDataProvider;
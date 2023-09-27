import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useRole from '../../Hooks/useRole';
import useAuth from '../../Hooks/useAuth';

const AllowAdmin = ({children, allowedRoles}) => {
    // console.log(allowedRoles)
    const {loading} = useAuth();
    const {role, userRoleDataLoading} = useRole();
    if(loading || userRoleDataLoading){
        return <><p>Loading.... AllowAdmin</p></>
    }
    if(allowedRoles.includes(role)){
        return (
            <>{children}</>
        );
    }

    return <Navigate to="/" replace />
};

export default AllowAdmin;
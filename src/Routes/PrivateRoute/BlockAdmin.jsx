import React from 'react';
import useRole from '../../Hooks/useRole';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const BlockAdmin = ({children}) => {
    const {loading} = useAuth();
    const {role, userRoleDataLoading} = useRole();
    if(loading || userRoleDataLoading){
        return <><p>Loading.... AllowAdmin</p></>
    }
    if(role === "user"){
        return (
            <>{children}</>
        );
    }
    return <Navigate to="/" replace />
};

export default BlockAdmin;
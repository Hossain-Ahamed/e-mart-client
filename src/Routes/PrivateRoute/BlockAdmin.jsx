import React from 'react';
import useRole from '../../Hooks/useRole';
import { Navigate } from 'react-router-dom';

const BlockAdmin = ({children}) => {

    const {role} = useRole();
    if(role === "user"){
        return (
            <>{children}</>
        );
    }
    return <Navigate to="/" replace />
};

export default BlockAdmin;
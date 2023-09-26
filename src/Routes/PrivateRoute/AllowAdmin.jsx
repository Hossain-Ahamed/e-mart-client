import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRole from '../../Hooks/useRole';

const AllowAdmin = ({children}) => {
    const navigate = useNavigate()
    const {role} = useRole();
    if("admin" !== role){
        navigate("/")
        return;
    }

    return (
        <>{children}</>
    );
};

export default AllowAdmin;
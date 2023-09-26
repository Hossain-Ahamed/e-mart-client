import React from 'react';
import useRole from '../../Hooks/useRole';
import { useNavigate } from 'react-router-dom';

const BlockAdmin = ({children}) => {
    const navigate = useNavigate()
    const {role} = useRole();
    if(["admin", "Order Manager", "Product Manager", "Delivery Partner"].includes(role)){
        navigate("/")
    }

    return (
        <>{children}</>
    );
};

export default BlockAdmin;
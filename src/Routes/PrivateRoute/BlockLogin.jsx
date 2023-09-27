import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const BlockLogin = ({children}) => {
    const navigate = useNavigate();
    const {user, loading} = useAuth();
    if(loading){
        return <><p>Block Login Loading</p></>
    }
    if(user){
        navigate("/")
        return;
    }
    return (
        <>{children}</>
    );
};

export default BlockLogin;
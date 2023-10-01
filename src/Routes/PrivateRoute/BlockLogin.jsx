import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const BlockLogin = ({children}) => {
   
    const {user, loading} = useAuth();
    if(loading){
        return <><p>Block Login Loading</p></>
    }
    if(user){
       
        return  <Navigate to="/" replace/>;
    }
    return (
        <>{children}</>
    );
};

export default BlockLogin;
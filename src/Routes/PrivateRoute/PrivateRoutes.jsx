import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({childern}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    
    if(user) {
        return childern;
    }
    return <Navigate to="/login" state={{from: location}} replace />
};

export default PrivateRoutes;
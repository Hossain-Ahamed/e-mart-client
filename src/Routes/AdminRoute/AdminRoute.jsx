import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    
    if(user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace />
};

export default AdminRoute;
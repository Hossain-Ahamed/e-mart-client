import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useRole from '../../Hooks/useRole';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const {role, userRoleDataLoading} = useRole();
    const location = useLocation();

    if(loading || userRoleDataLoading){
        return <span className="loading loading-spinner text-primary"></span>
    }
    
    if(user && role==="admin") {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace />
};

export default AdminRoute;
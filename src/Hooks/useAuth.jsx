import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const useAuth = () => {
    const Auth = useContext(AuthContext);
    return Auth 
};

export default useAuth;
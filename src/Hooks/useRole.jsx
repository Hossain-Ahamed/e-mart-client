import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';
import { UserDataContext } from '../Contexts/UserDataProvider';

const useRole = () => {
    const userRoleData = useContext(UserDataContext);
    return userRoleData;
};

export default useRole;
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const useProfile = () => {
    const {user, loading} = useContext(AuthContext);
    const { refetch, data: profile = {} } = useQuery({
        queryKey: ['profile'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(
                `http://localhost:5000/get-profile/${user?.email}`,
                { withCredentials: true }
              );
              //console.log(res.data);
              return res.data;
        },
          });
    
    
    return [profile, refetch]
    };

export default useProfile;
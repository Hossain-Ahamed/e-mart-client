import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import { useState } from 'react';
import { ProfileContext } from '../Contexts/ProfileProvider';

const useProfile = () => {
    const {user, loading} = useContext(AuthContext);
    const [profileLoading,setProfileLoading] = useState(true);
    const { refetch, data: profile = {} } = useQuery({
        queryKey: ['profile'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(
                `http://localhost:5000/get-profile/${user?.email}`,
                { withCredentials: true }
              );
              setProfileLoading(false);
              //console.log(res.data);
              return res?.data;
        },
          });
    
    
    return [profile, profileLoading, refetch]

    // const {profile, profileLoading} = useContext(ProfileContext)
    // return [profile, profileLoading]
    };

export default useProfile;
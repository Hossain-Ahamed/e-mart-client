import React from 'react';
import useProfile from '../../Hooks/useProfile';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const NoProfileWarning = ({children}) => {
    const [profile, profileLoading] = useProfile();
    
    if(profileLoading){
        return <><p>Loading</p></>
    }
    if(!profile?.city || !profile?.address || !profile?.phone){
        Swal.fire(
            'Incomplete profile!',
            'Your must upload necessary Data.',
            'warning'
          )
        
    return <Navigate to='/dashboard/edit-user-profile' replace></Navigate>
    }
    return (
        <>
        {children}
        </>
    );
};

export default NoProfileWarning;
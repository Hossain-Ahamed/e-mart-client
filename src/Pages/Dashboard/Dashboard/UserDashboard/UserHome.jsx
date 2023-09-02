import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const UserHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <p>{user.name}</p>
        </div>
    );
};

export default UserHome;
import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name 
        });
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser);

            if(currenUser){
                axios.post('http://localhost:5000/jwt', {email: currenUser.email})
                .then(data => {
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])
    const authInfo = {
        createUser,
        logIn,
        logOut,
        updateUserProfile,
        user,
        loading,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
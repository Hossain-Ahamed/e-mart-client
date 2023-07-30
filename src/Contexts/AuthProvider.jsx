import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

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
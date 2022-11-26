import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth=getAuth(app)
 export const authContext=createContext()
const Authprovider = ({children}) => {
    const [user,setUser]=useState(' ')
    const [loader,setLoader]=useState(true)

    const logout=()=>{
        setLoader(true)
        return signOut(auth)
    }

    const updateUser=(userInfo)=>{
        return updateProfile(auth.currentUser,userInfo)
    }
    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin=(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=(provider)=>{
        setLoader(true)
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoader(false)
        })
        return ()=>unsubscribe;
    },[])

    const authInfo={
         user,
         createuser,
         handleLogin,
         googleLogin,
         updateUser,
         logout,
         loader
    }
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default Authprovider;
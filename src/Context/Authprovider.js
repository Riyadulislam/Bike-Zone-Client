import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';



const auth=getAuth(app)
 export const authContext=createContext()
const Authprovider = ({children}) => {
    const [user,setUser]=useState(' ')
    const createuser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=>unsubscribe;
    },[])
    const authInfo={
         user,
         createuser,
         handleLogin,
         googleLogin
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
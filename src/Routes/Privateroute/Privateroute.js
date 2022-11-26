
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../Context/Authprovider';
import Loader from '../../Pages/Loader/Loader';

const Privateroute = ({ children }) => {
    const { user,loader} = useContext(authContext)
    const location = useLocation();
    if(loader)
    {
        return <Loader></Loader>
    }
    if (user) { 
    return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
}



export default Privateroute;
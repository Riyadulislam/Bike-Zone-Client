import React, { useContext } from 'react';
import { Link, useRouteError } from "react-router-dom";
import { authContext } from '../../../Context/Authprovider';

const DisplayError = () => {
    const { logout}=useContext(authContext)
    const error = useRouteError();
    const handleLogout=()=>{
        logout()
        .then(() => { })
        .catch((error) => {
          });
          
    }
    return (
        <div>
              <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handleLogout}><Link to='/login'>Logout</Link></button>
    </div>
        </div>
    );
};


export default DisplayError;
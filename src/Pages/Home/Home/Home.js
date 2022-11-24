import React, { useContext } from 'react';
import { authContext } from '../../../Context/Authprovider';

const Home = () => {
    const {user}=useContext(authContext)
    console.log(user)
    return (
        <div>
            <h1>this is{user.name}</h1>
        </div>
    );
};

export default Home;
import React, { useContext } from 'react';
import { authContext } from '../../../../Context/Authprovider';
import useSeller from '../../../../Hook/useSeller';
import Advertise from '../../../Advertise/Advertise';
import Aboutus from '../../Aboutus/Aboutus';
import Category from '../../Category/Category';

import Banner from '../Banner/Banner';

const Home = () => {
    const {user}=useContext(authContext)
    const [isSeller]=useSeller(user?.email)
   
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Advertise></Advertise>
            <Aboutus></Aboutus>
          
          
        </div>
    );
};

export default Home;
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import Loader from '../../Loader/Loader';

const Allsellers = () => {

    const {data:allusers=[],isLoading,refetch} = useQuery({
        queryKey: ['allusers'], 
        queryFn: async ()=>{
        const res = await fetch('http://localhost:5000/allusers')
        const data=await res.json()
        return data
       }} )

       if(isLoading)
     {
           return <Loader></Loader>
        }
        console.log(allusers)

    return (
        <div>
            <h1>all sellers</h1>
           
        </div>
    );
};

export default Allsellers;
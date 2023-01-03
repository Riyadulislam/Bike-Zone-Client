import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { authContext } from '../../Context/Authprovider';
import Modalproduct from '../Home/Category/Modalproduct/Modalproduct';
import Loader from '../Loader/Loader';


const Advertise = () => {
    const {user}=useContext(authContext)
    const { data: advertizement = [], isLoading,} = useQuery({
        queryKey: ['advertizement'],
        queryFn: async () => {
            const res = await fetch(`https://usedproduct-resel-server-side.vercel.app/advertize`)
            const data = await res.json()
            return data
        }
    })
   
    console.log('user',user?.email)
    useEffect(() => {
            fetch(`https://usedproduct-resel-server-side.vercel.app/verify/${user?.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log('data',data);
                })
        
    }, [user?.email])
 
      
    if (isLoading) {
        return <Loader></Loader>
    }
    console.log('advertiz',advertizement)
   
    return (
        <div >
            {  advertizement.length==0 ? <></>
            :
     <h1 className='text-center font-bold text-4xl text-primary mt-10'>ADVERTIZE</h1>}
     <div className='grid grid-cols-1  md:grid-cols-3'>
        {
            advertizement.map(add=> <div className=" card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={add.image} alt="Shoes" className=" h-48 w-48 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">Seller Status{add.sellername}</h2>
                <h2 className="card-title">Product Name:{add.name}</h2>
                <p>OrginalPrice:{add.orginalPrice}</p>
                <p>ReselPrice:{add.reselPrice}</p>
                <p>Use:{add.use}</p>
                <p>Location:{add.Location}</p>
                <div className="card-actions">
                    <label
                     htmlFor="my-modal-3"
                      className="btn btn-info">Book Now</label>
                </div>
            </div>
        </div>)
        }
       </div>

       </div>
       
    );
};

export default Advertise;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../Loader/Loader';


const Advertise = () => {
    const { data: advertizement = [], isLoading,} = useQuery({
        queryKey: ['advertizement'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertize`)
            const data = await res.json()
            return data
        }
    })
    

    if (isLoading) {
        return <Loader></Loader>
    }
    console.log('advertize',advertizement)
   
    return (
        <div >
            {  advertizement.length &&
     <h1 className='text-center font-bold text-4xl text-primary mt-10'>ADVERTIZE</h1>}
     <div className='grid grid-cols-1  md:grid-cols-3'>
        {
            advertizement.map(add=> <div className=" card w-96 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={add.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{add.name}</h2>
                <p>orginalPrice:{add.orginalPrice}</p>
                <p>reselPrice:{add.reselPrice}</p>
                <p>Use:{add.use}</p>
                <p>Location:{add.Location}</p>
                <div className="card-actions">
                 
                    <label
                     htmlFor="my-modal-3"
                      className="btn btn-primary">Book Now</label>
                </div>
            </div>
        </div>)
        }
       </div>
       </div>
        // <div>
        //     {
        //     <h1 className='text-center font-bold text-4xl text-primary'> advertize</h1>
        //         advertizement.map(add=><div className="card w-96 bg-base-100 shadow-xl">
        //         <figure className="px-10 pt-10">
        //           <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
        //         </figure>
        //         <div className="card-body items-center text-center">
        //           <h2 className="card-title">{add.Category}</h2>
        //           <p>{add.name}</p>
        //           <div className="card-actions">
        //             <button className="btn btn-primary">Buy Now</button>
        //           </div>
        //         </div>
        //       </div>)
        //     }
        // </div>
    );
};

export default Advertise;
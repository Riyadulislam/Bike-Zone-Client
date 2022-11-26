import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modalproduct from '../Modalproduct/Modalproduct';
import Individualproduct from './Individualproduct';

const Singleproduct = () => {
    const [bookingproduct,setBookingproduct]=useState(null)


    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            <h1> afaff{product.length}</h1>
            <div className='grid grid-cols-2'>
            
            {
                product.map((p,i) =><Individualproduct
                setBookingproduct={setBookingproduct}
                p={p}
                key={i}
                >

                </Individualproduct>)}
                </div>


                {
                    bookingproduct && 
                    <Modalproduct
                bookingproduct={bookingproduct}
                setBookingproduct={setBookingproduct}
                >

                </Modalproduct>
                }
                
           
        </div>
    );
};

export default Singleproduct;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Modalproduct from '../Modalproduct/Modalproduct';
import Individualproduct from './Individualproduct';

const Singleproduct = () => {
    const [bookingproduct,setBookingproduct]=useState(null)


    const product = useLoaderData()
    
    return (
        <div>
          
            <div className='grid grid-cols-2 gap-6'>
            
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
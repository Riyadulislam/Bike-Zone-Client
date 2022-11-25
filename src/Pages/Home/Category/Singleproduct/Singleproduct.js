import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Individualproduct from './Individualproduct';

const Singleproduct = () => {


    const product = useLoaderData()
    console.log(product)
    return (
        <div>
            <h1> afaff{product.length}</h1>
            <div className='grid grid-cols-2'>
            
            {
                product.map((p,i) =><Individualproduct
                p={p}
                key={p.i}
                >

                </Individualproduct>)}
                </div>
           
        </div>
    );
};

export default Singleproduct;
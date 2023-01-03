import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../../Loader/Loader';
import Singleproduct from '../Singleproduct/Singleproduct';

const Categorycard = ({category,isLoading}) => {
   
    const {title,image,service_id}=category
    if(isLoading)
    {
        return <Loader></Loader>
    }
   
    return (
        <div>
        
            <div className=" p-15 card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className=" h-60 w-60 rounded-xl file:rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
   
    <div className="card-actions">
      
        <Link className='btn btn-info text-white'  to={`/category/${service_id}`}>See more</Link>
       
    </div>
  </div>
</div>



        </div>
    );
};

export default Categorycard;
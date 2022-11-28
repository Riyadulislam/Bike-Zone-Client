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
        
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
   
    <div className="card-actions">
      <button className="btn btn-primary">
        <Link to={`/category/${service_id}`}>Category</Link>
   
       
        </button>
    </div>
  </div>
</div>



        </div>
    );
};

export default Categorycard;
import React from 'react';


const Individualproduct = ({p,setBookingproduct}) => {
    const {name,image,orginalPrice,reselPrice,use,Location}=p
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl ">
                    <figure className="px-10 pt-10">
                        <img src={image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>orginalPrice:{orginalPrice}</p>
                        <p>reselPrice:{reselPrice}</p>
                        <p>Use:{use}</p>
                        <p>Location:{Location}</p>
                        <div className="card-actions">
                         
                            <label onClick={()=>setBookingproduct(p)}
                             htmlFor="my-modal-3"
                              className="btn btn-primary">Book Now</label>
                        </div>
                    </div>
                </div>
             
        </div>
    );
};

export default Individualproduct;
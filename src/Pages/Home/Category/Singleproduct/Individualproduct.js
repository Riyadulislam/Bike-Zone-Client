import React from 'react';

const Individualproduct = ({p}) => {
    const {name,image,orginalPrice,reselPrice,use}=p
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
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Individualproduct;
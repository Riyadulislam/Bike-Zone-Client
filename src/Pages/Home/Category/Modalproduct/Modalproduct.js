import React, { useContext } from 'react';
import { authContext } from '../../../../Context/Authprovider';
import toast, { Toaster } from 'react-hot-toast';

const Modalproduct = ({bookingproduct,setBookingproduct}) => {
    const {name,reselPrice,image,_id}=bookingproduct
    const {user}=useContext(authContext)
    const handleForm=(event)=>{
        event.preventDefault();
        const form=event.target      
        const phone=form.phone.value;
        const location =form.location.value
        const booking={
            name:user.displayName,
            email:user.email,
            BikeName:name,
            price:reselPrice,
            number:phone,
            location:location,
            image:image,
            productId:_id
        }
        
        console.log(booking)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
           body: JSON.stringify(booking) 
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.acknowledged)
            {
                toast.success('bokking successfull')
            }
         
           
            console.log(data)
          })
       
          setBookingproduct(null)
        

        
  

    }
    

    return (
        <div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className=" text-center text-lg font-bold">{name}</h3>
   <form onSubmit={handleForm} className='grid grid-cols-1 gap-3 mt-10'>
   <input type="text" defaultValue={user.displayName} disabled className="input w-full" />
   <input type="text"  defaultValue={user.email} disabled className="input w-full" />
   <input type="text"  defaultValue={name} disabled className="input w-full" />
   <input type="text" defaultValue={reselPrice} disabled className="input w-full" />
   <input name="phone" type="text" placeholder="Type Your phone" className="input w-full input-bordered" />
   <input type="text" name="location" placeholder="Location" className="input w-full" />
   <br></br>
   <input type="submit" className='btn btn-accent w-full' value="Submit" />
   </form>
  </div>
</div>
        </div>
    );
};

export default Modalproduct;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/Authprovider';
import Loader from '../../Loader/Loader';

const Myorders = () => {
    const {user}=useContext(authContext)
    console.log(user.email)
    
    const {data:booking=[],isLoading,refetch} = useQuery({
        queryKey: ['booking',user?.email],
        queryFn: () =>
          fetch(`http://localhost:5000/booking?email=${user?.email}`)
          .then(res =>res.json()
          )
      })
      if(isLoading)
      {
        return <Loader></Loader>
      }
      
      const handledelete=(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/allbookings/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
              },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('orders Successfully Deleted')
            }
            refetch();
            console.log(data)
        })
     } 
    console.log(booking)
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
       
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                booking.map(book=>  <tr>
                    <th>1</th>
                    <th>
  
<div className="avatar">
  <div className="w-24 rounded-full">
    <img src={book.image} />
  </div>
</div></th>
                    <td>{book.BikeName}</td>
                    <td>${book.price}</td>
                    <td><button className='btn btn-accent btn-xs'>Pay</button></td>
                    <td><button onClick={()=>handledelete(book._id)} className='btn btn-accent btn-xs'>Delete</button></td>
                  </tr>)
            }
         
          
          </tbody>
        </table>
      </div>
    );
};

export default Myorders;
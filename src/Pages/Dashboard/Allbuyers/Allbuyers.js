import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/Authprovider';
import Loader from '../../Loader/Loader';

const Allbuyers = () => {
   
    
    const {data:allbuyers=[],isLoading,refetch} = useQuery({
         queryKey: ['allbuyers'], 
         queryFn: async ()=>{
         const res = await fetch('http://localhost:5000/allbookings')
         const data=await res.json()
         return data
        }} )

        if(isLoading)
      {
            return <Loader></Loader>
         }
         console.log(allbuyers)
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
        //  const handleadmin=(id)=>{
        //     fetch(`http://localhost:5000/users/admin/${id}`,{
        //         method: 'PUT',
        //     })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data)
        //     })
        //  }
    return (
        <div>
             <div className="overflow-x-auto">
        <table className="table w-full">
       
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Email</th>
              <th>Payment</th>
              <th>Delete</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {
                allbuyers.map((book,i)=>  <tr key={i}>
                    <th>{i+1}</th>
                    <td>{book.BikeName}</td>
                    <td>${book.price}</td>
                    <td>{book.email}</td>
                    <td><button className='btn btn-accent btn-xs'>Pay</button></td>
                    <td><button onClick={()=>handledelete(book._id)} className='btn btn-accent btn-xs'>Delete</button></td>
                
                   
                  </tr>)
            }
         
          
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Allbuyers;
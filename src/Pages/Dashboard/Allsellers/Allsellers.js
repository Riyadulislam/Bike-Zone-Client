import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

import Loader from '../../Loader/Loader';

const Allsellers = () => {

    const {data:allusers=[],isLoading,refetch} = useQuery({
        queryKey: ['allusers'], 
        queryFn: async ()=>{
        const res = await fetch('http://localhost:5000/allusers')
        const data=await res.json()
        return data
       }} )

       if(isLoading)
     {
           return <Loader></Loader>
        }
      const handleDelete=(id)=>{
        fetch(`http://localhost:5000/allseller/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
              },
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('sellers Successfully Deleted')
                refetch();
            }
            
            console.log(data)
        })
      }
      
        

    return (
        <div>
            <h1>all sellers</h1>
          
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
                allusers.map((book,i)=>  <tr key={i}>
                    <th>{i+1}</th>
                    <td>{book.name}</td>
                    <td>${book.price}</td>
                    <td>{book.email}</td>
                    <td><button className='btn btn-accent btn-xs'>Pay</button></td>
                    <td><button onClick={()=>handleDelete(book._id)}  className='btn btn-accent btn-xs'>Delete</button></td>
                
                   
                  </tr>)
            }
         
          
          </tbody>
        </table>
      </div>
        </div>
           
        </div>
    );
};

export default Allsellers;
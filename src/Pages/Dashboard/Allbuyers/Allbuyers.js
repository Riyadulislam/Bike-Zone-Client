import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/Authprovider';
import Loader from '../../Loader/Loader';

const Allbuyers = () => {
   
    
    const {data:allbuyers=[],isLoading,refetch} = useQuery({
         queryKey: ['allbuyers'], 
         queryFn: async ()=>{
         const res = await fetch('https://usedproduct-resel-server-side.vercel.app/Buyer')
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
            fetch(`https://usedproduct-resel-server-side.vercel.app/usersbuyer/${id}`,{
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
        //     fetch(`https://usedproduct-resel-server-side.vercel.app/users/admin/${id}`,{
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
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
         
            </tr>
          </thead>
          <tbody>
            {
                allbuyers.map((book,i)=>  <tr key={i}>
                    <th>{i+1}</th>
                    <td>{book.name}</td>
                    <td>{book.email}</td>
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
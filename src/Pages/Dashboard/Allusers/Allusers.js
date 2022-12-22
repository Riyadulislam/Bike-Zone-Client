import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Loader/Loader';

const Allusers = () => {

    const {data:all=[],isLoading,refetch} = useQuery({
        queryKey: ['all'], 
        queryFn: async ()=>{
        const res = await fetch('https://usedproduct-resel-server-side.vercel.app/all')
        const data=await res.json()
        return data
       }} )
console.log(all)
       if(isLoading)
     {
           return <Loader></Loader>
        }
        console.log(all)
        const handleadmin=(id)=>{
            fetch(`https://usedproduct-resel-server-side.vercel.app/users/admin/${id}`,{
                method: 'PUT',
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.acknowledged){
                    refetch()
                }
                console.log(data)
            })
         }
    return (
        <div>
        <div className="overflow-x-auto">
   <table className="table w-full">
  
     <thead>
       <tr>
         <th></th>
         <th>Name</th>
         <th>Email</th>
         <th>Admin</th>
        
       </tr>
     </thead>
     <tbody>
       {
           all.map((book,i)=> <tr key={i}>
               <th>{i+1}</th>
               <td>{book.name}</td>
               <td>{book.email}</td>
               <td>{book.role!=='admin'&&
                <button onClick={()=>handleadmin(book._id)} className='btn btn-accent btn-xs'>Make Admin</button>}
                </td>
           
             </tr>)
       }
    
     
     </tbody>
   </table>
 </div>
   </div>
    );
};

export default Allusers;
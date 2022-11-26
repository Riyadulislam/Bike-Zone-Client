import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Loader/Loader';

const Allusers = () => {

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
        console.log(allusers)
        const handleadmin=(id)=>{
            fetch(`http://localhost:5000/users/admin/${id}`,{
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
           allusers.map((book,i)=> <tr key={i}>
               <th>{i+1}</th>
               <td>{book.name}</td>
               <td>{book.email}</td>
               <td>{book.role!=='admin'&&
                <button onClick={()=>handleadmin(book._id)} className='btn btn-accent btn-xs'>Make Admin</button>}</td>
           
             </tr>)
       }
    
     
     </tbody>
   </table>
 </div>
   </div>
    );
};

export default Allusers;
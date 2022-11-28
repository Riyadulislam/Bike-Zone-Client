import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../Context/Authprovider';
import Loader from '../../Loader/Loader';

const Myproduct = () => {
    const { user } = useContext(authContext)

    const { data: myproduct = [], isLoading, refetch } = useQuery({
        queryKey: ['myproduct'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproduct/${user?.email}`)
            const data = await res.json()
            return data
        }
    })

    if (isLoading) {
        return <Loader></Loader>
    }
    console.log(myproduct)
    const  handleAdvertize =(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/advertize/${id}`, {
            method: 'PUT',
           
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.acknowledged){
                toast.success('Advertizement Successfully Added')
            }
            console.log(data)
          })
    }
    const handledelete=(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/myproduct/${id}`,{
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
   


    return (


        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>status</th>
                        <th>advertise</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myproduct.map((product,i) => <tr key={i}>
                            <th>{i+1}</th>
                            <th>

                                <div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} />
                                    </div>
                                </div></th>
                            <td>{product.name}</td>
                            <td>${product.reselPrice}</td>
                            <td><button className='btn btn-accent btn-xs'>available</button></td>
                            <td><button onClick={()=>handleAdvertize(product._id)} className='btn btn-accent btn-xs'>advertise</button></td>
                            <td><button  onClick={()=>handledelete(product._id)} className='btn btn-accent btn-xs'>Delete</button></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default Myproduct;
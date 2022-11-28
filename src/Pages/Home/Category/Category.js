import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loader from '../../Loader/Loader';
import Categorycard from './Categorycard/Categorycard';


const Category = () => {
    const [products,setProducts]=useState([])
  
   const { data:categorys=[],isLoading} = useQuery({
    queryKey: ['categorys'],
    queryFn: async () => {
        const res = await fetch('http://localhost:5000/category')
           
        const data = await res.json()
        return data;
    }
})
//   const handleSubmit=(data)=>{
  
//     const id=data.service_id
//     console.log(id)
//     fetch(`http://localhost:5000/category/${id}`)
//     .then(res=>res.json())
//     .then(datas=>
//         {setProducts(datas)
//             console.log(datas)
//         })
//   }
if(isLoading)
{
    return <Loader></Loader>
}

  
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-4'>CATEGORIES</h1>
            <div className='grid  grid-cols-1 md:grid-cols-3'>
            {
                categorys.map(category=><Categorycard
                key={category._id}
                category={category}
            
                products={products}
                isLoading={isLoading}

                ></Categorycard>)
            }
            </div>
            
        </div>
    );
};

export default Category;
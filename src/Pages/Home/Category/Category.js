// import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Loader from '../../Loader/Loader';
import Categorycard from './Categorycard/Categorycard';


const Category = () => {
    const [products,setProducts]=useState([])
    const [categorys,setCategorys]=useState([])
  
//    const { data:categorys=[],isLoading} = useQuery({
//     queryKey: ['categorys'],
//     queryFn: async () => {
//         const res = await fetch('https://usedproduct-resel-server-side.vercel.app/category')
           
//         const data = await res.json()
//         return data;
//     }
// })
//   const handleSubmit=(data)=>{
  
//     const id=data.service_id
//     console.log(id)
//     fetch(`https://usedproduct-resel-server-side.vercel.app/category/${id}`)
//     .then(res=>res.json())
//     .then(datas=>
//         {setProducts(datas)
//             console.log(datas)
//         })
//   }
// if(isLoading)
// {
//     return <Loader></Loader>
// }

useEffect(()=>{
    axios.get('https://usedproduct-resel-server-side.vercel.app/category')
    .then(data=>setCategorys(data.data))
},[])
  console.log(' categorys', categorys.data)
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-4'>CATEGORIES</h1>
            <div className='grid  grid-cols-1 md:grid-cols-3'>
            {
                categorys.map(category=><Categorycard
                key={category._id}
                category={category}
            
                products={products}
                // isLoading={isLoading}

                ></Categorycard>)
            }
            </div>
            
        </div>
    );
};

export default Category;
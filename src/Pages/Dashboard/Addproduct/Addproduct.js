import React, { useContext } from 'react';
import { useController, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Context/Authprovider';

const Addproduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useContext(authContext)
    const email=user?.email
    const imageHostKey='8b974585124ca52ff5421b3289cbfad1';
    const navigate=useNavigate()
    
    const onSubmit = data =>{ 
        let advertise=false
         const modify=data
        
         let service_id
         if(data.Category==='YAMAHA'){
            service_id=1
         }
         if(data.Category==='Suzoki'){
            service_id=2
         }
         if(data.Category==='Gixxer'){
            service_id=3
         }
       

       const product={...modify,service_id,email,advertise}
       console.log(product)
      
         const image=product.image[0]
         const formData = new FormData();
         formData.append('image',image);
         fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
            method: 'POST',
            body: formData
          })
          .then(res=>res.json())
          .then(imagedata=>{
            console.log(imagedata.data.url)
            fetch('https://usedproduct-resel-server-side.vercel.app/product', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({...product,image:imagedata.data.url}),
              })
              .then((response) => response.json())
              .then((data) => {
                console.log('Success:', data);
                if(data.acknowledged){
                  toast ('product added successfully')
                  navigate('/dashboard/myproduct')
                  
                }
                else{
                  toast.error(data.message)
                }
              })
              .catch((error) => {
                console.error('Error:', error);
              });
                
          })
         
  
    }
       
    return (
        <div className='w-80 mx-auto'>

    <h3 className=" text-center text-lg font-bold"></h3>
   <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 mt-10'>
   <input type="name" placeholder="Product Name"className="input w-full input-bordered"
   {...register("name")} />
   <input type="price" placeholder="reselPrice"  className="input w-full input-bordered"
   {...register("reselPrice")} />
   <input type="condition" placeholder="Condition type"  className="input w-full input-bordered"
   {...register("conditon")} />
   <input type="phone" placeholder="phone"  className="input w-full input-bordered"
   {...register("phone")} />
   <select name="Category"   {...register("Category")} className="select select-bordered w-full max-w-xs">
   <option defaultValue disabled selected>Select Your category</option>
  <option>YAMAHA</option>
  <option>Suzoki</option>
  <option>Gixxer</option>
   </select>
   <input name="Description" type="text" placeholder="Description" className="input w-full input-bordered"
   {...register("Description")} />
   <input name="orginalPrice" type="text" placeholder="orginalPrice" className="input w-full input-bordered"
   {...register("orginalPrice")} />
   <input name="use" type="text" placeholder="Year of Purchase" className="input w-full input-bordered"
   {...register("use")} />
   <input type="text" name="Location" placeholder="Location" className="input w-full input-bordered"
   {...register("Location")} />
   <input type="file"  placeholder="Location" className="input w-full input-bordered"
   {...register("image")} />
   
   <input type="submit" className='btn btn-accent w-full' value="Submit" />
   </form>
  </div>

        
    );
};

export default Addproduct;
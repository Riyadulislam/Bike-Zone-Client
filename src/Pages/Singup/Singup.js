import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/Authprovider';

const Singup = () => {
    const [error,setError]=useState(' ')
    const {createuser,updateUser}=useContext(authContext)
    const { register, handleSubmit,formState: { errors }  } = useForm();
    const onSubmit = (data) => {
        createuser(data.email,data.password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            const userInfo = {
                displayName:data.name
            }
            console.log(userInfo)
            updateUser(userInfo)
            .then(()=>{
                const userinfo ={
                    name:data.name,
                    email:data.email
                }
                saveUser(userinfo)
             
            })
            .catch(error=>{
                console.log(error)
            })

        })
        .catch(error=>{
            setError(error.message)
            console.error(error.message)
        })
    
        
        
    }
    
    const saveUser = (user) => {
        fetch('https://usedproduct-resel-server-side.vercel.app/users', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                toast('User data successfully')
                console.log('Success-user:', data);  
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
 
    return (
        <div>

<div className="dropdown mt-20 h-[5px] flex justify-center items-center">
  <label tabIndex={0} className="btn btn-accent">Choice Account</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40">
    <li><Link to='/singup'>Buyer Account</Link></li>
    <li><Link to='/sellersingup'>Seller Account</Link></li>
  </ul>
</div>
           <div className=' h-[600px] flex justify-center items-center'>
            <div className="form-control w-96">
            <h1 className='text-center text-3xl font-bold'>Singup</h1>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <label className="label">
                    <span className="label-text">Name</span>
                   
                </label>
                <input type="name" name="name" placeholder="Type here" className="input input-bordered w-full "
                {...register("name")} />
                <div>
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full "
                {...register("email", { required: " please valid email" })} />
                  {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}
                </div>
                <div>
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Type here" className="input input-bordered w-full "
                {...register("password",{required: " please give a password"})} />
                  {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                </div>
             
                <button className='btn btn-accent w-full mt-4' type="submit">Singup</button>
                <p className='text-center'>Already Have An Account.Please <Link to="/login" className='text-secondary'>Login</Link></p>
          </form>
          <div>
          { error &&
          <p className='text-center text-red-500'>{error}</p>
}</div>
            </div>
        </div>
            
        </div>
    );
};

export default Singup;
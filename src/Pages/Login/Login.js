import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/Authprovider';
const provider=new GoogleAuthProvider()
const Login = () => {
    const [error,setError]=useState(' ')
    const {handleLogin,googleLogin}=useContext(authContext)
    const { register, handleSubmit,formState: { errors }  } = useForm();
    const location=useLocation();
    const navigate=useNavigate()
    
    const from = location.state?.from?.pathname || "/";
  
    const onSubmit = data =>{ 
        handleLogin(data.email,data.password)
        .then(result=>{
            const user=result.user;
            navigate(from, { replace: true });
            console.log(user)
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })
        console.log(data);}
        const handleGoogleLogin=()=>{
            googleLogin(provider)
            .then(result=>{
                navigate(from, { replace: true });
                const user=result.user;
                console.log(user)
            })
            .catch(error=>{
                console.log(error)
            })

        }
    return (
        <div className=' h-[600px] flex justify-center items-center'>
        <div className='w-96'>
        <h1 className='text-center text-2xl font-bold'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>   
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Email</span>    </label>
                    <input name="email" type="text" placeholder="Type here"  className="input input-bordered w-full "
                     {...register("email",{required:true})} />
                </div>
                {errors.email?.type === 'required' && <p className='text-red-600'>Email is required</p>}
                <div className="form-control w-full ">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input name="password" type="password" placeholder="password"  className="input input-bordered w-full "
                     {...register("password",{required:"password is required",
                      minLength:{value: 6, message: "you should atleast 6 character "}})} />
                    <label className="label"><span className="label-text">Forget password</span></label>
                </div>
                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                <input className=' mt-3 btn btn-accent w-full'  value="Login" type="submit" />
                
            </form>
            <div>{error && <p className='text-red-500'>{error}</p>}</div>
            <p className='text-center'>New to Bike sell? <Link to="/singup" className='text-secondary'>Create a New Account</Link></p>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className=' w-full btn btn-outline btn-accent'>CONTINUE WITH GOOGLE</button>
            </div>
 
    </div>
    );
};

export default Login;
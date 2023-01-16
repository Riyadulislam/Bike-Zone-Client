import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { authContext } from '../../../Context/Authprovider';

const Navbar = () => {
const {user,logout}=useContext(authContext)

const handleLogout=()=>{
    logout()
    .then(() => { })
    .catch((error) => {
      });
      
}

    const menuItems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/dashboard'>Dashboard</Link></li>
    {
        user?.uid ?<li> <button onClick={handleLogout}><Link to='/login'>Logout</Link></button></li>
        :<li><Link to='/login'>Login</Link></li>
    }
</React.Fragment>
    return (
        <div>
                <div className="navbar bg-white shadow-md flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                     {menuItems}
                    </ul>
                </div>
                <div className='flex justify-between items-center'>
                <svg className='h-10 w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M400 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm27.2 64l-61.8-48.8c-17.3-13.6-41.7-13.8-59.1-.3l-83.1 64.2c-30.7 23.8-28.5 70.8 4.3 91.6L288 305.1V416c0 17.7 14.3 32 32 32s32-14.3 32-32V288c0-10.7-5.3-20.7-14.2-26.6L295 232.9l60.3-48.5L396 217c5.7 4.5 12.7 7 20 7h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H427.2zM200 384c0 39.8-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72zm56 0c0-70.7-57.3-128-128-128S0 313.3 0 384s57.3 128 128 128s128-57.3 128-128zm328 0c0 39.8-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72s72 32.2 72 72zm56 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"/></svg>
                <Link className=" ml-4 font-semibold normal-case text-xl">Bike Zone</Link>
               
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
         
          
        </div>
        </div>
    );
};

export default Navbar;
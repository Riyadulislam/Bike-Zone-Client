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
    <li><Link to='/blog'>Blog</Link></li>
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
                <Link className=" font-semibold normal-case text-xl">Bike Zone</Link>
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
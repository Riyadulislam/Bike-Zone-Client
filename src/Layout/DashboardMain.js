import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../Context/Authprovider';
import useAdmin from '../Hook/useAdmin';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardMain = () => {
    const {user}=useContext(authContext)
    const [isAdmin]=useAdmin(user?.email)
    console.log(user?.email)
    console.log('Addddddddddd',isAdmin)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  <Outlet></Outlet>
  
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
    
        </label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
   
      <li><Link to='/dashboard'>My Orders</Link></li>
        { isAdmin &&  <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>}
      {
        isAdmin &&  <li><Link to='/dashboard/allusers'>All Users</Link></li>
      }
     
     
    </ul>
  
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default DashboardMain;
import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../../Layout/DashboardMain";
import Main from "../../Layout/Main";

import Blog from "../../Pages/Blog/Blog";
import Addproduct from "../../Pages/Dashboard/Addproduct/Addproduct";
import Allbuyers from "../../Pages/Dashboard/Allbuyers/Allbuyers";
import Allsellers from "../../Pages/Dashboard/Allsellers/Allsellers";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";
import Myproduct from "../../Pages/Dashboard/Myproduct/Myproduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";

import Errorpage from "../../Pages/Errorpage/Errorpage";
import Singleproduct from "../../Pages/Home/Category/Singleproduct/Singleproduct";
import Home from "../../Pages/Home/Home/Home/Home";

import Login from "../../Pages/Login/Login";
import SellerSingup from "../../Pages/SellerSingup/SellerSingup";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Singup from "../../Pages/Singup/Singup";
import Privateroute from "../Privateroute/Privateroute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'/sellersingup',
                element:<SellerSingup></SellerSingup>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/category/:id',
                element:<Singleproduct></Singleproduct>,
                loader:({params})=>fetch(`https://usedproduct-resel-server-side.vercel.app/category/${params.id}`)
            }
          
        ]
       
    },
    {
        path:'*',
        element:<Errorpage></Errorpage>
    },
    {
        path:'/dashboard',
        element:<Privateroute><DashboardMain></DashboardMain></Privateroute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/dashboard',
                element:<Myorders></Myorders>
            },
            {
                path:'/dashboard/allbuyers',
                element:<Privateroute><Allbuyers></Allbuyers></Privateroute>
            },
            {
                path:'/dashboard/allusers',
                element:<Privateroute><Allusers></Allusers></Privateroute>
            },
            {
                path:'/dashboard/allsellers',
                element:<Privateroute><Allsellers></Allsellers></Privateroute>
            },
            {
                path:'/dashboard/addproduct',
                element:<Privateroute><Addproduct></Addproduct></Privateroute>
            },
            {
                path:'/dashboard/myproduct',
                element:<Privateroute><Myproduct></Myproduct></Privateroute>
               
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://usedproduct-resel-server-side.vercel.app/myBookingProduct/${params.id}`)
               
            }
            

        ]
    }
])
export default router;
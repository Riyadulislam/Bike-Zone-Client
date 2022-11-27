import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../../Layout/DashboardMain";
import Main from "../../Layout/Main";

import Blog from "../../Pages/Blog/Blog";
import Allbuyers from "../../Pages/Dashboard/Allbuyers/Allbuyers";
import Allsellers from "../../Pages/Dashboard/Allsellers/Allsellers";
import Allusers from "../../Pages/Dashboard/Allusers/Allusers";
import Myorders from "../../Pages/Dashboard/Myorders/Myorders";

import Errorpage from "../../Pages/Errorpage/Errorpage";
import Singleproduct from "../../Pages/Home/Category/Singleproduct/Singleproduct";
import Home from "../../Pages/Home/Home/Home/Home";

import Login from "../../Pages/Login/Login";
import SellerSingup from "../../Pages/SellerSingup/SellerSingup";
import Singup from "../../Pages/Singup/Singup";
import Privateroute from "../Privateroute/Privateroute";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
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
                loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
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
        children:[
            {
                path:'/dashboard',
                element:<Myorders></Myorders>
            },
            {
                path:'/dashboard/allbuyers',
                element:<Allbuyers></Allbuyers>
            },
            {
                path:'/dashboard/allusers',
                element:<Allusers></Allusers>
            },
            {
                path:'/dashboard/allsellers',
                element:<Allsellers></Allsellers>
            }

        ]
    }
])
export default router;
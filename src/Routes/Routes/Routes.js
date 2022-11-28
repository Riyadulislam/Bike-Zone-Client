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
            },
            {
                path:'/dashboard/addproduct',
                element:<Addproduct></Addproduct>
            },
            {
                path:'/dashboard/myproduct',
                element:<Myproduct></Myproduct>
               
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`http://localhost:5000/myproductb/${params.id}`)
               
            }
            

        ]
    }
])
export default router;
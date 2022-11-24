import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Errorpage from "../../Pages/Errorpage/Errorpage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Singup from "../../Pages/Singup/Singup";

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
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
       
    },
    {
        path:'*',
        element:<Errorpage></Errorpage>
    }
])
export default router;
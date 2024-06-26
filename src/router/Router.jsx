import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Service from "../pages/Service/Service";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import RecentDetails from "../pages/RecentDetails/RecentDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import BookNowDetails from "../pages/BookNowDetails/BookNowDetails";

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/recent.json')
            },
            {
                path:'/service',
                element:<Service></Service>,
            },
            {
                path:'/recent/:id',
                element:<PrivateRoute><RecentDetails></RecentDetails></PrivateRoute>,
                loader:()=>fetch('/recent.json')
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/service/book-now',
                element:<PrivateRoute><BookNowDetails></BookNowDetails></PrivateRoute>,
            },
        ]
    },
    
]);

export default Router;
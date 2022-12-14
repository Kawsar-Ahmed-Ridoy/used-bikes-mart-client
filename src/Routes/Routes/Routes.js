import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import Register from "../../Pages/Register/Register";
import ReportedItems from "../../Pages/ReportedItems/ReportedItems";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:"/blog",
                element: <Blog></Blog>
            },
            {
                path:'/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({params})=> fetch(`${process.env.REACT_APP_API_URL}/usedBikeData/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/reporteditems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>,
                
            }
            
        ]
    }
])

export default router;
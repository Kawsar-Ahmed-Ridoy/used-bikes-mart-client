import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

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
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;
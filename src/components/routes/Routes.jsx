import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../auth/Login";

const router = createBrowserRouter([
    {
        path:'/',
        Component : Root,
        children : [
            {
                index : true,
                Component : Home
            },
            {
                path : 'products',
                Component : Products
            },
            {
                path : 'blogs',
                Component : Blogs
            },
            {
                path : 'contact',
                Component : Contact
            },
            {
                path : 'about',
                Component : About
            },
            {
                path : 'login',
                Component : Login
            },


        ]
    }
])

export default router;
import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Contact from "../pages/Contact.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element:<App/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/projects',
                element:<Projects/>
            },
            {
                path:'/contact',
                element:<Contact/>
            }
        ]
    }
])
export default router
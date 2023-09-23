import Content from "./components/Content";
import Layout from "./layouts/layout";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>, 
        children: [
            {   
                index: true,
                element: <Content/> 
            }
        ]        
    }

])

export default router;


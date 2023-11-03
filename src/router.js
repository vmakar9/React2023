import {createBrowserRouter, Navigate} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {Todos} from "./components/Todos/Todos";
import {Albums} from "./components/Album/Albums";
import {Comments} from "./components/Comments/Comments";
import {HomePage} from "./components/HomePage/HomePage";
import {Posts} from "./components/Posts/Posts";


export const router=createBrowserRouter([{
    path:'',element:<Layout/>,children:[
        {index:true, element: <Navigate to={'/home'}/>},
        {path:'home',element:<HomePage/>},
        {path:'todos',element: <Todos/>},
        {path:'albums',element:<Albums/>},
        {
            path: 'comments', element: <Comments/>, children: [
                {path:'post',element:<Posts/>}
            ],
        }

    ]
}])


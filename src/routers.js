import {createBrowserRouter, Navigate} from "react-router-dom";
import {Layout} from "./components/Layout/Layout";
import {Users} from "./components/UserContainer/Users";
import {usersService} from "./services/users.service";
import {UserDetailsPage} from "./components/UserContainer/UserDetailsPage";
import {Posts} from "./components/Posts/Posts";
import {PostsDetailsPage} from "./components/Posts/PostsDetailsPage";
import {postsService} from "./services/posts.service";

const routers=createBrowserRouter([{
     path:'',element:<Layout/>,children:[
        {index:true,element:<Navigate to={'users'}/>},
        {path:'users',element:<Users/>,loader:()=> usersService.getAll()},
        {
            path:'users/:userId',element:<UserDetailsPage/>,children:[{
                path:'posts',element:<Posts/>
            }]
        },
        {path:'users/:userId/posts/:postId',element:<PostsDetailsPage/>,loader:({postId})=> postsService.getById(postId)}
    ]
}])
export {routers}
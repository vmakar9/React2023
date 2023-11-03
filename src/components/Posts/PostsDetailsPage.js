import {useLoaderData} from "react-router-dom";
import {PostDetail} from "./PostDetail";

export const PostsDetailsPage=()=>{
   const {data} = useLoaderData();
   return(<div>
       <PostDetail post={data}/>
   </div>)
}
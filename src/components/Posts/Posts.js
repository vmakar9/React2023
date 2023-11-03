import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {postService} from "../../services/post.service";
import {Post} from "./Post";

export const Posts=()=>{
    const {state:{postId}}= useLocation()
    const [post,setPosts] = useState(null)

    useEffect(() => {
        postService.getById(postId).then(({data})=>setPosts(data))
    }, [postId]);

    return(<div>
        <div>
            {post && <Post post={post}/> }
        </div>
    </div>)
}
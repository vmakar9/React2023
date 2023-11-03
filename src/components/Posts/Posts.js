import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsService} from "../../services/posts.service";
import {Post} from "./Post";

export const Posts=()=>{
    const {userId} = useParams()
    const [posts,setPosts] = useState([])

    useEffect(() => {
        postsService.getByUserId(userId).then(({data})=>setPosts(data))
    }, [userId]);

    return(<div>
        {posts.map(post=><Post key={post.id} post={post}/>)}
    </div>)
}
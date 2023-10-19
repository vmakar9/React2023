import {useEffect, useState} from "react";
import {postsService} from "../../../services/posts.service";
import {Post} from "../Post/Post";
import css from "./Posts.module.css"
import {PostDetails} from "../PostDetails/PostDetails";


export function Posts(){
    const [posts,setPosts] = useState([])
    const [postDetails,setPostDetails] = useState(null)

    useEffect(() => {
        postsService.getAll().then(({data})=>setPosts(data))
    }, []);

    const click = async (postId)=>{
      const {data} =  await postsService.getById(postId)
        console.log(data)
      setPostDetails(data)
    }

    return(<div className={css.PostsBlock}>
        <div className={css.Posts}>
            {posts.map(post=><Post key={post.id} post={post} click={click}/>)}
        </div>
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    </div>)
}


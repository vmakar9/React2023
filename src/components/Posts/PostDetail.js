
import {Comments} from "../Comments/Comments";
export const PostDetail=({post})=>{
    const {id, userId, title, body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        <Comments postId={id}/>
        </div>
    )}

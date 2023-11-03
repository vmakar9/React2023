import {useNavigate} from "react-router-dom";

export const Comment=({commment})=>{
    const {postId,id,name,email,body} = commment
    const navigate = useNavigate()
    return(<div>
        <h3>{id}</h3>
        <p>{name}</p>
        <p>{email}</p>
        <p>{body}</p>
        <button onClick={()=> navigate('post',{state:{postId}})} >GetPosts</button>
    </div>)
}
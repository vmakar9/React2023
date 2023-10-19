import css from "./PostDetails.module.css"
export function PostDetails({postDetails}){
    const {userId,id,title,body}= postDetails
    return(<div className={css.PostDetails}>
        <h3>{userId}</h3>
        <h3>{id}</h3>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>)
}
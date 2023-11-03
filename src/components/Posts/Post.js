export const Post=({post})=>{
    const {id,title,body} = post
    return(<div>
        <h3>{id}</h3>
        <h3>{title}</h3>
        <h3>{body}</h3>
    </div>)
}
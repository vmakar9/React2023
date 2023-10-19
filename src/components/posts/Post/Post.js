import css from "./Post.module.css"
export function Post({post,click}){
    const {id,title} = post
    return(<div className={css.Post}>
        <h3>{id}</h3>
        <h4>{title}</h4>
        <button onClick={()=>click(id)}>Get More</button>
    </div>)
}
export const Todo=({todo})=>{
    const {id,title,completed}= todo
    return(<div>
       <h3>{id}</h3>
       <h3>{title}</h3>
       <p>{completed}</p>
    </div>)
}
export const Album=({album})=>{
    const {id,title}=album
    return(<div>
        <h3>{id}</h3>
        <h3>{title}</h3>
    </div>)
}
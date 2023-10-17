export function Character({character}){
    const {id,name,status,species,gender,image} = character
    return(<div>
        <div>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <h3>{status}</h3>
            <h3>{species}</h3>
            <h3>{gender}</h3>
            <img src={image} alt={`${name} photo`}/>
        </div>
    </div>)
}
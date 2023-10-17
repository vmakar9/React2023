export function Simpson({simpson}){
    const {name,surname,age,info,photo} = simpson
    return(<div>
        <div>
            <h3>{name}</h3>
            <h3>{surname}</h3>
            <h4>{age}</h4>
            <p>{info}</p>
            <img src={photo} alt={`${name} photo`}/>
        </div>
    </div>)
}
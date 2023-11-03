import {useNavigate} from "react-router-dom";

export const User=({user})=>{
    const {id,name}=user
    const navigate = useNavigate();
    return(<div>
        <h3>{id}</h3>
        <p>{name}</p>
        <button onClick={()=>navigate(`${id}`,{state:{user}})}>Get Details</button>
    </div>)
}
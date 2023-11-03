import {useNavigate} from "react-router-dom";

export const UserDetails=({user})=>{
    const {id, name, username, email, phone,website} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website:{website}</div>
            <button onClick={()=>navigate('posts')}> Get Pots</button>
        </div>)

}
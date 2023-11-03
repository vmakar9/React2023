
import {User} from "./User";
import {useLoaderData} from "react-router-dom";

export const Users=()=>{
    const {data:users}=useLoaderData();
    return(<div>
        {users.map(user=><User key={user.id} user={user}/>)}
    </div>)
}
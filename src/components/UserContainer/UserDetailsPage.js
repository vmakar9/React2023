import {Outlet, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../../services/users.service";
import {UserDetails} from "./UserDetails";

export const UserDetailsPage=()=>{
    const {userId}= useParams()
    const [user,setUser] = useState(null)
    const {state} = useLocation()

    useEffect(() => {
        if(state){
            setUser(state.user)
        }else {
            usersService.getById(userId).then(({data})=> setUser(data))
        }
    }, [userId]);


    return(<div>
        <div>
            {user && <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    </div>)
}
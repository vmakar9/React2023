import {useEffect, useState} from "react";
import {spaceXService} from "../../../services/SpaceX.service";
import {Launch} from "../Launch/Launch";

export function SpaceX(){
    const [launches,setLaunch] = useState([])
    useEffect(()=>{
        spaceXService.getAll().then(({data})=>setLaunch(data))
    },[])

    return(<div>
        {launches.filter(value => value.launch_year !==2020).map((launch,index)=><Launch launch={launch} key={index}/>)}
    </div>)
}
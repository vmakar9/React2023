export function Launch({launch}){
    const {mission_name,launch_year} = launch
    return(<div>
       <h3>{mission_name}</h3>
       <h3>{launch_year}</h3>
       <img src={launch.links.mission_patch_small} alt={'mission patch small'}/>
    </div>)
}
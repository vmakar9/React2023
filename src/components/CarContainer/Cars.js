import {Car} from "./Car";

export const Cars=({cars,setCarForUpdate,setCars})=>{
    return(<div>
        {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setCars={setCars}/>)}
    </div>)
}
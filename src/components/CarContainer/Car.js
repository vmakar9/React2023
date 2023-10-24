import {carService} from "../../services/car.service";

export const Car=({car,setCarForUpdate,setCars})=>{
   const {id,brand,price,year} = car
    const deleteCar = async ()=>{
       await carService.deleteById(id);
       setCars(cars=>{
           const index = cars.findIndex(value => value.id === id);
           cars.splice(index,1)
           return [...cars]
       })
    }


    return(<div>
        <div>id: {id}</div>
        <div>brand: {brand}</div>
        <div>price: {price}</div>
        <div>year: {year}</div>
        <button onClick={()=>setCarForUpdate(car)}>update</button>
        <button onClick={()=>deleteCar()}>delete</button>
    </div>)
}
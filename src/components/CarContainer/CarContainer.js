import {useEffect, useState} from "react";
import {carService} from "../../services/car.service";
import {Cars} from "./Cars";
import {CarsForm} from "./CarsForm";

export const CarContainer=()=>{
    const [cars,setCars] = useState([])
    const [carForUpdate,setCarForUpdate] = useState(null)

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, []);

    return(<div>
        <div>
            <CarsForm setCars={setCars} carForUpdate={carForUpdate}/>
        </div>
        <div>
            <Cars setCars={setCars} cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    </div>)
}
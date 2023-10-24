import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {carService} from "../../services/car.service";

export const CarsForm=({carForUpdate,setCars})=>{
    const {register,reset,handleSubmit,setValue} = useForm()

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand )
            setValue('price', carForUpdate.price )
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate,setValue]);

    const submit=async (car)=>{
        if(carForUpdate){
            const {data} = await carService.update(carForUpdate.id,car)
            setCars((cars)=>{
                const findCar = cars.find(value => value.id === carForUpdate.id);
                Object.assign(findCar,data)
                return [...cars]
            })
        }else {
            const {data} = await carService.create(car)
            setCars(cars => [...cars,data])
        }
        reset()
    }

    return(<div>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={"brand"} {...register('brand')}/>
            <input type="text" placeholder={"price"}{...register('price')}/>
            <input type="text" placeholder={"year"}{...register('year')}/>
            <button>{carForUpdate ? "Update" : "Create"}</button>
        </form>
    </div>)
}
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";
import {useEffect} from "react";
import {carService} from "../../services/car.service";
import {Car} from "./Car";

export const Cars = () => {
    const {cars, trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carActions.setCars(data)))
    }, [trigger, dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};
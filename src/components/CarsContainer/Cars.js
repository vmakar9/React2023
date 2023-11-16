import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices/carSlice";
import {useEffect} from "react";
import {Car} from "./Car";

export const Cars = () => {
    const {cars, trigger,isLoading} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger, dispatch])

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};
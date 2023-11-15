import {useDispatch} from "react-redux";
import {carService} from "../../services/car.service";
import {carActions} from "../../redux/slices/carSlice";

export const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const deleteCar = async () => {
        await carService.deleteById(id)
        dispatch(carActions.trigger())
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};
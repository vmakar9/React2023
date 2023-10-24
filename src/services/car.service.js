import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const carService={
    getAll:()=>axiosService.get(urls.cars.base),
    create:(data)=>axiosService.post(urls.cars.base,data),
    update:(id,data)=>axiosService.patch(urls.cars.byId(id),data),
    deleteById:(id)=>axiosService.delete(urls.cars.byId(id))
}
export {carService}
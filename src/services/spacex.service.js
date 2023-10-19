import {urls} from "../urls/urls";
import {axiosService} from "./axios.service";


const spacexService={
    getAll:()=>axiosService.get(urls.spaceX.base)
}

export {spacexService}
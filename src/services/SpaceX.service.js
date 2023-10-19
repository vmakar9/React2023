import {urls} from "../urls/Urls";
import {axiosService} from "./Axios.service";


const spaceXService={
    getAll:()=>axiosService.get(urls.spaceX.base)
}

export {spaceXService}
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const albumsService={
    getAll:()=>axiosService.get(urls.albums.base)
}

export {albumsService}
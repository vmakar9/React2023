import {urls} from "../urls/urls";
import {axiosService} from "./axios.service";

const characterService = {
    getByIds: (ids) => axiosService.get(urls.characters.byIds(ids))
}

export {
    characterService
}
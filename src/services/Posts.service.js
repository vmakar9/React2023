import {axiosService} from "./Axios.service";
import {urls} from "../urls/Urls";


const postsService={
    getAll:()=>axiosService.get(urls.posts.base),
    getById:(id)=>axiosService.get(urls.posts.byId(id))
}

export {postsService}
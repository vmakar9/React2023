import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";


const postsService={
    getAll:()=>axiosService.get(urls.posts.base),
    getById:(id)=>axiosService.get(urls.posts.byId(id))
}

export {postsService}
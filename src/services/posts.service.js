import {axiosServices} from "./axios.services";
import {urls} from "../url/urls";

const postsService={
    getByUserId:(userId)=>axiosServices.get(urls.posts.base,{params:{userId}}),
    getById:(id)=> axiosServices.get(urls.posts.byId(id))
}

export {postsService}
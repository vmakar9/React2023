import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const postService={
    getById:(id)=> axiosService.get(urls.posts.byId(id))
}

export {postService}
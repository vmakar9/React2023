import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const commentsService ={
    getAll:()=> axiosService.get(urls.comments.base)
}

export {commentsService}
import {axiosServices} from "./axios.services";
import {urls} from "../url/urls";

const commentsService={
    getByPostId: (postId) => axiosServices.get(urls.comments, {params: {postId}})
}

export {commentsService}
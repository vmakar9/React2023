import {axiosServices} from "./axios.services";
import {urls} from "../url/urls";

const usersService={
    getAll:()=> axiosServices.get(urls.users.base),
    getById:(id)=> axiosServices.get(urls.users.byId(id))
}

export {usersService}
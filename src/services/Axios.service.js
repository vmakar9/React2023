import axios from "axios";
import {baseURL} from "../urls/Urls";

const axiosService = axios.create({baseURL})

export {axiosService}
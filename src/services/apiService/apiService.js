import axios from "axios";
import {baseURL} from "../../constants/urls/urls";

const apiService = axios.create({baseURL});

export {apiService}
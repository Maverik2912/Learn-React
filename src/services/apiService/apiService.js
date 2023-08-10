import axios from "axios";
import {baseURL} from "../../constants";

const apiService = axios.create({baseURL, headers: {'Content-Type': 'application/json'}});

export {apiService}
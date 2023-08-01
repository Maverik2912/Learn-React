import axios from "axios";
import {baseUrlCars, baseUrlPlaceholder} from "../../constants/urls";

const apiPlaceholderService = axios.create({baseURL: baseUrlPlaceholder});
const apiCarsService = axios.create({baseURL: baseUrlCars});

export {apiCarsService, apiPlaceholderService}
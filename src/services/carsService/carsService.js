import {apiCarsService} from "../apiServices/apiServices";
import {urls} from "../../constants/urls";

export const carsService = {
    getAll: () => apiCarsService.get(urls.cars.cars)
}
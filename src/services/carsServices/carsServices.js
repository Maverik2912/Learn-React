import {apiService} from "../apiService/apiService";
import {urls} from "../../constants";

const carsServices = {
    getAll: () => apiService.get(urls.cars.base),
    create: (car) => apiService.post(urls.cars.base, JSON.stringify(car)),
    put: (id, car) => apiService.put(urls.cars.byId(id), JSON.stringify(car)),
    patch: (id, field) => apiService.patch(urls.cars.byId(id, JSON.stringify(field))),
    delete: (id) => apiService.delete(urls.cars.byId(id))
}

export {
    carsServices
}
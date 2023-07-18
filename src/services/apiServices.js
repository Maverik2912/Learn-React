import axios from "axios";

const instance = axios.create({
    headers: {'Content-Type': 'application/json; charset=UTF-8'}
});

const EndPoints = {
    CARS: 'http://owu.linkpc.net/carsAPI/v1/cars'
}
export const apiServices = {
    getAllCars: () => {
        return axios.get(EndPoints.CARS).then(response => response.data);
    },
    postCar: car => {
       return instance.post(EndPoints.CARS, car);
    },
    deleteCar: id => {
        return axios.delete(`${EndPoints.CARS}/${id}`)
    },
    updateCar: (car, id) => {
        return instance.put(`${EndPoints.CARS}/${id}`, car);
    }
}
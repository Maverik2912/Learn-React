import React, {useEffect, useState} from 'react';
import {apiServices} from "../../../services/apiServices";
import Car from "../Car/Car";

const Cars = ({onSave, setOnSave, setUpdatedCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect( () => {
        apiServices.getAllCars().then(data => setCars(data));
    }, [onSave]);

    useEffect(() => {
        if(deletedCarId !== null) {
            apiServices.deleteCar(deletedCarId).then(() => setOnSave(prev => !prev));
        }
    }, [deletedCarId])

    return (
        <div>
            {cars.map(car => <Car
                key={car.id}
                car={car}
                setDeletedCarId={setDeletedCarId}
                setUpdatedCar={setUpdatedCar}
            />)}
        </div>
    );
};

export default Cars;
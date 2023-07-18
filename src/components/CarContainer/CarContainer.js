import React, {useState} from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";

const CarContainer = () => {
    const [onSave, setOnSave] = useState(false);
    const [updatedCar, setUpdatedCar] = useState(null);

    return (
        <div>
            <CarForm setOnSave={setOnSave} updatedCar={updatedCar} setUpdatedCar={setUpdatedCar} />
            <Cars setOnSave={setOnSave} onSave={onSave} setUpdatedCar={setUpdatedCar} />
        </div>
    );
};

export default CarContainer;
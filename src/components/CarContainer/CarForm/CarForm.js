import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carFormValidator} from "../../../validators/carFormValidator";

import styles from './CarForm.module.css';
import {apiServices} from "../../../services/apiServices";

const CarForm = ({setOnSave, updatedCar, setUpdatedCar}) => {
    const {reset, register, handleSubmit, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carFormValidator)
    });

    const save = (data) => {
        try{
            if(updatedCar) {
               apiServices.updateCar(data, updatedCar.id).then(() => {
                   setOnSave(prev => !prev);
                   reset();
                   setUpdatedCar(null);
               })
            } else {
                apiServices.postCar(data).then(() => {
                    setOnSave(prev => !prev);
                    reset();
                });
            }
        } catch (e) {
            console.log(e.message)
        }
    };

    useEffect(() => {
        if(updatedCar !== null) {
            setValue('brand', updatedCar.brand, {shouldValidate: true});
            setValue('price', updatedCar.price, {shouldValidate: true});
            setValue('year', updatedCar.year, {shouldValidate: true});
        }
    }, [updatedCar])

    return (
        <form className={styles.form} onSubmit={handleSubmit(save)}>

            <div>
                <label htmlFor="brand">Brand:</label>
                <input id='brand' type="text" {...register('brand')} />
                {errors.brand && <span>{errors.brand.message}</span>}
            </div>

            <div>
                <label htmlFor="price">Price:</label>
                <input id='price' type="number" {...register('price', {valueAsNumber: true})} />
                {errors.price && <span>{errors.price.message}</span>}
            </div>

            <div>
                <label htmlFor="">Year:</label>
                <input id='year' type="number" {...register('year', {valueAsNumber: true})} />
                {errors.year && <span>{errors.year.message}</span>}
            </div>

            <button>{updatedCar ? 'Update' : 'Save'}</button>

        </form>
    );
};

export default CarForm;
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {useDispatch, useSelector} from "react-redux";

import {validator} from "./validator/validator";
import styles from './CarsForm.module.css';
import {carsThunks} from "../../../redux";
import {useEffect} from "react";

const CarsForm = () => {
    const dispatch = useDispatch();
    const {isUpdate, carForUpdate} = useSelector(store => store.cars);

    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: {errors}
    } = useForm(
        {
            resolver: joiResolver(validator)
        }
    );

    useEffect(() => {
        if (isUpdate) {
            setValue('brand', carForUpdate.brand);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        } else if(!isUpdate) {
            reset({
                brand: '',
                price: '',
                year: ''
            })
        }
    }, [isUpdate, reset]);

    const save = (data) => {
        dispatch(carsThunks.create(data));
        reset();
    }

    const updateCar = (data) => {
        data = {...data, id: carForUpdate.id}
        dispatch(carsThunks.put(carForUpdate.id, data)).then(() => reset())
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(isUpdate ? updateCar : save)}>
            <div className={styles.inputs}>
                <div>
                    <label htmlFor="brand">Brand:</label>
                    <input
                        type="text"
                        id="brand"
                        name='brand'
                        placeholder='Brand'
                        {...register('brand')}
                    />
                    {errors.brand && <span>{errors.brand.message}</span>}
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        name='price'
                        placeholder='Price'
                        {...register('price', {valueAsNumber: true})}
                    />
                    {errors.price && <span>{errors.price.message}</span>}
                </div>

                <div>
                    <label htmlFor="year">Year:</label>
                    <input
                        type="number"
                        id="year"
                        name='year'
                        placeholder='Year'
                        {...register('year', {valueAsNumber: true})}
                    />
                    {errors.year && <span>{errors.year.message}</span>}
                </div>
            </div>
            <div>
                <button>{isUpdate ? 'Save' : 'Create'}</button>
            </div>
        </form>
    );
};

export {CarsForm};
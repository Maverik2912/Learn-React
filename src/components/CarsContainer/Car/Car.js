import {carsActions, carsThunks} from "../../../redux";
import {useDispatch} from "react-redux";

import styles from './Car.module.css';

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const deleteCar = id => {
       try{
           dispatch(carsThunks.delete(id));
       } catch(e) {
           console.log(e.message);
       }
    }

    const updateCar = car => {
        try{
            dispatch(carsActions.setIsUpdate(true, car));
        } catch(e) {
            console.log(e.message);
        }
    }

    return (
        <div>
            <div><b>brand:</b> {brand}</div>
            <div><b>price:</b> {price}</div>
            <div><b>year:</b> {year}</div>
            <button className={styles.button} onClick={() => updateCar(car)}>Update car</button>
            <button className={styles.button} onClick={() => deleteCar(id)}>Delete car</button>
        </div>
    );
};

export {Car};
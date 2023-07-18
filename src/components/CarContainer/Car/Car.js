import React from 'react';
import styles from './Car.module.css';
const Car = ({car, setDeletedCarId, setUpdatedCar}) => {
    const {id, brand, price, year} = car;

    return (
        <div className={styles.car}>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button className={styles.button} onClick={() => setUpdatedCar(car)}>Update</button>
            <button className={styles.button} onClick={() => setDeletedCarId(id)}>Delete</button>
        </div>
    );
};

export default Car;
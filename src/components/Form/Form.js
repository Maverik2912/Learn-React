import React, {useEffect, useRef, useState} from 'react';
import styles from './Form.module.css';
import {set} from "react-hook-form";
const Form = () => {
    const idRef = useRef(null);
    const brandRef = useRef(null);
    const priceRef = useRef(null);
    const yearRef = useRef(null);

    const getCars = () => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(response => response.json())
            .then(cars => console.log(cars))
    }

    const deleteCar = () => {
        const id = idRef.current.value;
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                response.ok ? console.log(`Car with id ${id} has been deleted`)
                : console.log(`Car with id ${id} has not been found`);
            })
            .then(() => idRef.current.value = '')
    }

    const putCar = () => {
        const id = idRef.current.value;
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                price: priceRef.current.value,
                brand: brandRef.current.value,
                year: yearRef.current.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => {
                response.ok ? console.log(`Car with id ${id} has been updated`) :
                console.log(`Car with id ${id} has not been found`);
                brandRef.current.value = '';
                priceRef.current.value = '';
                idRef.current.value = '';
                yearRef.current.value = '';
            })
    }

    const postCar = (e) => {
        e.preventDefault();
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`, {
            method: 'POST',
            body: JSON.stringify({
                brand: brandRef.current.value,
                price: priceRef.current.value,
                year: yearRef.current.value
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                brandRef.current.value = '';
                priceRef.current.value = '';
                idRef.current.value = '';
                yearRef.current.value = '';
            })
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={postCar} className={styles.form}>
                <h1>Cars</h1>

                <p>
                    <label htmlFor='id'>Id:</label>
                    <input ref={idRef} id='id' type="number" />
                </p>

                <p>
                    <label htmlFor='price'>Price:</label>
                    <input ref={priceRef} id='price' type="number"/>
                </p>

                <p>
                    <label htmlFor='brand'>Brand:</label>
                    <input ref={brandRef} id='brand' type="text"/>
                </p>

                <p>
                    <label htmlFor='year'>Year:</label>
                    <input ref={yearRef} id='year' type="number"/>
                </p>

                <p className={styles.buttons}>
                    <button type='button' className={styles.green} onClick={getCars}>Get cars</button>
                    <button type='submit'>Post car</button>
                    <button type='button' onClick={putCar} className={styles.blue}>Put car</button>
                    <button type='button' onClick={deleteCar} className={styles.red}>Delete car</button>
                </p>
            </form>
        </div>
    );
};

export default Form;
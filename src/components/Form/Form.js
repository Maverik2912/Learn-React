import React, {useEffect} from 'react';
import styles from './Form.module.css';
import { useForm } from "react-hook-form"
const Form = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(user => console.log(user));
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h1>Create user</h1>
                <p>
                    <label htmlFor='name'>Name:</label>
                    <input {...register('name')} id='name' type="text"/>
                </p>

                <p>
                    <label htmlFor='username'>Username:</label>
                    <input {...register('username')} id='username' type="text"/>
                </p>

                <p>
                    <label htmlFor='email'>Email:</label>
                    <input {...register('email')} id='email' type="email"/>
                </p>

                <p>
                    <label htmlFor='city'>City:</label>
                    <input {...register('address.city')} id='city' type="text"/>
                </p>

                <p>
                    <label htmlFor='suite'>Suite:</label>
                    <input {...register('address.suite')} id='suite' type="text"/>
                </p>

                <p>
                    <label htmlFor='street'>Street:</label>
                    <input {...register('address.street')} id='street' type="text"/>
                </p>

                <p>
                    <label htmlFor='zip'>Zipcode:</label>
                    <input {...register('address.zipcode')} id='zip' type="number"/>
                </p>

                <p>
                    <label htmlFor='lat'>Lat:</label>
                    <input {...register('address.geo.lat')} id='lat' type="number"/>
                </p>

                <p>
                    <label htmlFor='lng'>Lng:</label>
                    <input {...register('address.geo.lng')} id='lng' type="number"/>
                </p>

                <p>
                    <label htmlFor='phone'>Phone:</label>
                    <input {...register('phone')} id='phone' type="phone"/>
                </p>

                <p>
                    <label htmlFor='website'>Website:</label>
                    <input {...register('website')} id='website' type="text"/>
                </p>

                <p>
                    <label htmlFor='companyName'>Company Name:</label>
                    <input {...register('company.name')} id='companyName' type="text"/>
                </p>

                <p>
                    <label htmlFor='phrase'>Catch Phrase:</label>
                    <input {...register('company.catchPhrase')} id='phrase' type="text"/>
                </p>

                <p>
                    <label htmlFor='bs'>Bs:</label>
                    <input {...register('company.bs')} id='bs' type="text"/>
                </p>

                <p>
                    <button type='submit'>Send form</button>
                </p>
            </form>
        </div>
    );
};

export default Form;
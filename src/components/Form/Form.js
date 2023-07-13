import React from 'react';
import styles from './Form.module.css';
import { useForm } from "react-hook-form"
const Form = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(comment => console.log(comment));
    }

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h1>Add comment</h1>
                <p>
                    <label htmlFor='postId'>PostId:</label>
                    <input {...register('postId')} id='postId' type="number"/>
                </p>
                <p>
                    <label htmlFor='name'>Name:</label>
                    <input {...register('name')} id='name' type="text"/>
                </p>

                <p>
                    <label htmlFor='email'>Email:</label>
                    <input {...register('email')} id='email' type="email"/>
                </p>

                <p>
                    <label htmlFor='body'>Body:</label>
                    <input {...register('body')} id='body' type="text"/>
                </p>

                <p>
                    <button type='submit'>Send form</button>
                </p>

            </form>
        </div>
    );
};

export default Form;
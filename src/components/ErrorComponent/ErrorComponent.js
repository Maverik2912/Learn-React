import React from 'react';
import styles from './ErrorComponent.module.css';

const ErrorComponent = ({error}) => {
    return (
        <div className={styles.errContainer}>
            <h1>Ooooooups... Somethig went wrong</h1>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorComponent;
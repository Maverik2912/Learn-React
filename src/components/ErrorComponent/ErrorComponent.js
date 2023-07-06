import React from 'react';
import styles from './ErrorComponent.module.css';
const ErrorComponent = ({error}) => {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.title}>Oooooups... Something went wrong</h1>
            <p className={styles.errorText}>{error}</p>
        </div>
    );
};

export default ErrorComponent;
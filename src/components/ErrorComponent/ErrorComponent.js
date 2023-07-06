import React from 'react';
import styles from './ErrorComponent.module.css';

const ErrorComponent = ({error}) => {
    return (
        <>
            <h1 className={styles.errTitle}>Ooooupps... Something went wrong</h1>
            <p className={styles.errText}>{error.message}</p>
        </>
    );
};

export default ErrorComponent;
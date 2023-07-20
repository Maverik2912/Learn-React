import React from 'react';
import styles from './ErrorPage.module.css';
import Navbar from "../../components/Navbar/Navbar";
const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1>Error 404. Page has not been found</h1>
            </div>
        </>
    );
};

export default ErrorPage;
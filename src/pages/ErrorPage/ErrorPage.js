import {useRouteError} from "react-router-dom";

import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className={styles.container}>
            <h1>{error.status} {error.statusText}</h1>
        </div>
    );
};

export {ErrorPage};
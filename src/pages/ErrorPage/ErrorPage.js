import {useRouteError} from "react-router-dom";

import {Header} from "../../components";
import styles from './ErrorPage.module.css';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <Header />
            <main>
                <div className={styles.container}>
                    <h1>{error.status} {error.statusText}</h1>
                </div>
            </main>
        </div>
    );
};

export {ErrorPage};
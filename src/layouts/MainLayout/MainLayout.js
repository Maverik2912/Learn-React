import {Outlet} from "react-router-dom";

import {Header} from "../../components";
import styles from './MainLayout.module.css';
const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
        </div>
    );
};

export {MainLayout};
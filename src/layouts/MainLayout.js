import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import styles from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <Header />
            <div className={styles.outlet}>
            <Outlet />
            </div>
        </div>
    );
};

export {MainLayout};
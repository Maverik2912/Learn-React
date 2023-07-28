import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

import {Header, SideBar} from "../components";
import styles from './MainLayout.module.css';

export const MovieAppContext = createContext(null);
const MainLayout = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [isDark, setIsDark] = useState(true);

    return (
        <MovieAppContext.Provider value={{selectedValue, setSelectedValue, isDark, setIsDark}}>
            <div className={`${styles.container} ${isDark ? styles.dark : styles.light}`}>
                <SideBar />
                <div>
                    <Header />
                    <Outlet context={{setSelectedValue, selectedValue}} />
                </div>
            </div>
        </MovieAppContext.Provider>
    );
};

export {MainLayout};
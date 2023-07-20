import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {Outlet, useLocation} from "react-router-dom";
import styles from './AppLayout.module.css';
import {navbarLinks} from "../../constants/links/navbarLinks";

const AppLayout = () => {
    const location = useLocation();

    for (const link of navbarLinks) {
        link.isActive = link.path === location.pathname;
    }

    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AppLayout;
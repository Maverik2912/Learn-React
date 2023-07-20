import React from 'react';
import {navbarLinks} from "../../constants/links/navbarLinks";
import {Link} from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            {navbarLinks.map(link => {
               return <Link
                   className={`${styles.link} ${link.isActive && styles.active}`}
                   key={link.label}
                   to={link.path}>
                   {link.label}</Link>
            })}

        </nav>
    );
};

export default Navbar;
import React from "react";
import {NavLink} from "react-router-dom";

import {navLinks} from "../../constants/links";
import styles from './NavBar.module.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className={styles.navbar}>
                {navLinks.map(link => <NavLink key={link.label} to={link.path}>{link.label}</NavLink>)}
            </nav>
        )
    }
}

export {NavBar}
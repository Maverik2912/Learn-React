import styles from './Header.module.css';
import {navLinks} from "../../constants/navLinks";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            {navLinks.map(link => <NavLink key={link.label} to={link.path}>{link.label}</NavLink>)}
        </header>
    );
};

export {Header};
import styles from './Header.module.css';
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
const Header = () => {
    const {episodes, episodeTitle} = useSelector(store => store.episodes);

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{episodeTitle ? episodeTitle : 'Rick and Morty'}</h1>
        </header>
    );
};

export {Header};
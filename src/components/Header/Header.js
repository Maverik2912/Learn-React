import styles from './Header.module.css';
const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Cars</h1>
        </header>
    );
};

export {Header};
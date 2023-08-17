import styles from './Character.module.css';
const Character = ({character}) => {
    const {name, status, species, image} = character;
    return (
        <div className={styles.character}>
            <div className={styles.dscr}>
                <div><b>Name:</b> {name}</div>
                <div><b>Status:</b> {status}</div>
                <div><b>Species:</b> {species}</div>
            </div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};
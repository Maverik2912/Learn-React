import React from 'react';
import styles from './modules/RickAndMortyCharacter.module.css';

const RickAndMortyCharacter = ({id, name, status, gender, species, image}) => {
    return (
        <div className={styles.character}>
            <div className={styles.imgContainer}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.dscrContainer}>
                <h3 className={styles.characterName}>{name}</h3>
                <ul className={styles.dscr}>
                    <li>Id: {id}</li>
                    <li>Gender: {gender}</li>
                    <li>{status} - {species}</li>
                </ul>
            </div>
        </div>
    );
};

export default RickAndMortyCharacter;
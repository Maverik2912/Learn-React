import React from 'react';
import styles from './modules/simpson.module.css'

const Simpson = ({name, surname, age, gender, src}) => {
    return (
        <div className={styles.simpsonContainer}>
            <div>
                <ul>
                    <li><b>Name:</b> {name}</li>
                    <li><b>Surname:</b> {surname}</li>
                    <li><b>Age:</b> {age}</li>
                    <li><b>Gender:</b> {gender}</li>
                </ul>
            </div>
            <div>
                <img src={src} alt={name}/>
            </div>
        </div>
    );
};

export default Simpson;



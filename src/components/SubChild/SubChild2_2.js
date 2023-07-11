import React from 'react';
import styles from './SubChild.module.css';
const SubChild2_2 = ({subtitle, author}) => {
    const {name, surname} = author


    return (
        <div className={styles.container}>
            <h3>{subtitle}</h3>
            <p>Author: {name} {surname}</p>
        </div>
    );
};

export default SubChild2_2;
import React from 'react';
import styles from './SubChild.module.css';
const SubChild1_2 = ({subtitle}) => {

    return (
        <div className={styles.container}>
            <h3>{subtitle}</h3>
        </div>
    );
};

export default SubChild1_2;
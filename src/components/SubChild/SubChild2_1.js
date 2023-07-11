import React from 'react';
import styles from './SubChild.module.css';
const SubChild2_1 = ({subtitle}) => {

    return (
        <div className={styles.container}>
            <h3>{subtitle}</h3>
        </div>
    );
};

export default SubChild2_1;
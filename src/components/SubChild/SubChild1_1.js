import React, {useContext} from 'react';
import styles from './SubChild.module.css';
import {AuthorContext} from "../../App";
const SubChild1_1 = ({subtitle}) => {
    const {name, surname} = useContext(AuthorContext);

    return (
        <div className={styles.container}>
            <h3>{subtitle}</h3>
            <p>Author: {name} {surname}</p>
        </div>
    );
};

export default SubChild1_1;
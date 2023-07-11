import React from 'react';
import SubChild1_1 from "../SubChild/SubChild1_1";
import styles from './Child.module.css';
import SubChild1_2 from "../SubChild/SubChild1_2";

const Child1 = ({title, author}) => {
    return (
        <div className={styles.child}>
            <h2 className={styles.title}>{title}</h2>
            <SubChild1_1 author={author} subtitle='SubChild1_1' />
            <SubChild1_2 subtitle='SubChild1_2' />
        </div>
    );
};

export default Child1;
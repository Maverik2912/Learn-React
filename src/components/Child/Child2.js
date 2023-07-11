import React from 'react';
import styles from './Child.module.css';
import SubChild2_2 from "../SubChild/SubChild2_2";
import SubChild2_1 from "../SubChild/SubChild2_1";

const Child2 = ({title, setAuthor}) => {
    return (
        <div className={styles.child}>
            <h2 className={styles.title}>{title}</h2>
            <SubChild2_1 subtitle='SubChild2_1' />
            <SubChild2_2 setAuthor={setAuthor} subtitle='SubChild2_2' />
        </div>
    );
};

export default Child2;
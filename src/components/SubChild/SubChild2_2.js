import React, {useContext, useState} from 'react';
import styles from './SubChild.module.css';
import {AuthorContext} from "../../App";
const SubChild2_2 = ({subtitle}) => {

    const [author, setAuthor] = useState({
            name: 'Mykyta', surname: 'Kraskovskyi'
    });

    return (
        <div className={styles.container}>
            <h3>{subtitle}</h3>
            <p>Author: {author.name} {author.surname}</p>
        </div>
    );
};

export default SubChild2_2;
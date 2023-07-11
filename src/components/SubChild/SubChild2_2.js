import React, {useEffect} from 'react';
import styles from './SubChild.module.css';
const SubChild2_2 = ({subtitle, setAuthor}) => {
    const author = {
        name: 'Mykyta', surname: 'Kraskovskyi'
    }

    useEffect(() => {
        setAuthor(author)
    }, []);

    return (
        <div className={styles.container}>
            <h3>{subtitle}</h3>
            <p>Author: {author.name} {author.surname}</p>
        </div>
    );
};

export default SubChild2_2;
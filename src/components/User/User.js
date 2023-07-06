import React from 'react';
import styles from './User.module.css';

const User = ({user, showCurrentUserPosts}) => {
    const {id, name, username} = user;
    return (
        <div className={styles.userContainer}>
            <h3 className={styles.title}>{name} "{username}"</h3>
            <button
                onClick={() => showCurrentUserPosts(id, name)}
                className={styles.myBtn}
            >Show posts</button>
        </div>
    );
};

export default User;
import React, {useState} from 'react';
import ErrorPage from "../ErrorPage/ErrorPage";
import Posts from "../Posts/Posts";
import styles from './User.module.css';

const User = ({user, posts, error, isActive, onShow}) => {
    const {name, username} = user;

    return (
        <>
            {error ? <ErrorPage error={error.message}/>
            :
                <div className={styles.user}>
                    <h2>{name} "{username}"</h2>
                    <button onClick={onShow}>{isActive ? 'Hide Posts' : 'Show Posts'}</button>
                    {isActive && <Posts posts={posts}/>}
                </div>
            }
        </>
    );
};

export default User;
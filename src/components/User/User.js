import React, {useState} from 'react';
import ErrorPage from "../ErrorPage/ErrorPage";
import Posts from "../Posts/Posts";
import styles from './User.module.css';

const User = ({user, posts, error, activeUser, setActiveUser}) => {
    const {name, username} = user;

    const clickHandler = (id) => {
        if(activeUser === user.id) {
            setActiveUser(null);
        } else {
          setActiveUser(id);
        }

    }

    return (
        <>
            {error ? <ErrorPage error={error.message}/>
            :
                <div className={styles.user}>
                    <h2>{name} "{username}"</h2>
                    <button onClick={() => clickHandler(user.id)}>{user.id === activeUser ? 'Hide Posts' : 'Show Posts'}</button>
                    {user.id === activeUser && <Posts posts={posts}/>}
                </div>
            }
        </>
    );
};

export default User;
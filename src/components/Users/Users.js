import React, {useEffect, useState} from 'react';
import User from "../User/User";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import styles from './Users.module.css';
import {fetchData} from "../../requests/fetchData";
import Posts from "../Posts/Posts";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [postsCurrentUser, setPostsCurrentUser] = useState(null);
    const [currentUserName, setCurrentUserName] = useState('');

    useEffect(() => {
        fetchData('https://jsonplaceholder.typicode.com/users')
            .then(data => setUsers(data))
            .catch(e => setError(e));
    }, []);

    const showCurrentUserPosts = (id, name) => {
        fetchData(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
            .then(posts => {
                setPostsCurrentUser(posts)
                setCurrentUserName(name);
            })
            .catch(e => setError(e));
    }

    const allUsers = users.map(user => <User
        key={user.id}
        user={user}
        showCurrentUserPosts={showCurrentUserPosts}
    />)

    return (
        <>
            {error ? <ErrorComponent error={error} />
            :
            <div className={styles.usersContainer}>
                <h1 className={styles.mainTitle}>Users List</h1>
                <div className={styles.users}>{allUsers}</div>
                {postsCurrentUser && <Posts
                    className='allPosts'
                    posts={postsCurrentUser}
                    name={currentUserName} />}
            </div>
            }
        </>
    );
};

export default Users;
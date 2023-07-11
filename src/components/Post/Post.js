import React from 'react';
import styles from './Post.module.css';
const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <ul className={styles.post}>
            <li>UserId: {userId}</li>
            <li>Id: {id}</li>
            <li>Title: {title}</li>
            <li>Body: {body}</li>
        </ul>
    );
};

export default Post;
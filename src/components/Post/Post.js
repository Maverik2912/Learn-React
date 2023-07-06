import React from 'react';
import styles from './Post.module.css';

const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div className={styles.postContainer}>
            <h4 className={styles.postTitle}>{id}. {title}</h4>
            <p className={styles.postText}>{body}</p>
        </div>
    );
};

export default Post;
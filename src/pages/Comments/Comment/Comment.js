import React from 'react';
import styles from './Comment.module.css';

const Comment = ({comment, moveToPost}) => {
    const {postId, id, name, email, body} = comment;

    return (
        <div className={styles.comment} onClick={() => moveToPost(id)}>
            <p><b>PostId:</b> {postId}</p>
            <p><b>Id:</b> {id}</p>
            <p><b>Name:</b> {name}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export default Comment;
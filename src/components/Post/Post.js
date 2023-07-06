import React from 'react';
import styles from './Posts.module.css';
const Post = ({post, clickHandler, closeDetailInfo, isActive}) => {
    const {id, title, body, userId} = post;

    return (
        <>
        {isActive !== id ?
            <div className={styles.postContainer}>
                <h4 className={styles.postTitle}>{id}. {title}</h4>
                <button className={styles.myBtn} onClick={() => clickHandler(id)}>More</button>
            </div>
            :
            <div className={styles.postContainer}>
                <h4 className={styles.postTitle}>{id}. {title}</h4>
                <ul className={styles.details}>
                    <li><b>User id: </b>{userId}</li>
                    <li><b>Post text:</b> {body}</li>
                </ul>
                <button className={styles.myBtn} onClick={() => closeDetailInfo()}>Hide</button>
            </div>

        }

        </>
    );
};

export default Post;
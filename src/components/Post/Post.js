import React from 'react';
import styles from './Posts.module.css';
const Post = ({id, title, clickHandler, closeDetailInfo, body, isActive}) => {

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
                <p><b>Post text:</b> {body}</p>
                <button className={styles.myBtn} onClick={() => closeDetailInfo()}>Hide</button>
            </div>

        }

        </>
    );
};

export default Post;
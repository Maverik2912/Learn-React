import React from 'react';
import Post from "../Post/Post";
import styles from './Posts.module.css';

const Posts = ({posts, name}) => {
    const allPosts = posts.map(post => <Post key={post.id} post={post}/>)
    return (
        <div>
            <h3 className={styles.author}>Posts of {name}</h3>
            {allPosts}
        </div>
    );
};

export default Posts;
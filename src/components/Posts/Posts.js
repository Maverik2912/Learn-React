import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../requests/fetchPosts";
import Post from "../Post/Post";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import styles from './Posts.module.css';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isActive, setIsActive] = useState(null);

    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
            .catch(error => setError(error));
    }, []);

    const clickHandler = id => {
        console.log('Click')
        setIsActive(id);
    }

    const closeDetailInfo = () => {
        setIsActive(null);
    }

    const allPosts = posts.map(post => {
        return <Post
            key={post.id}
            id={post.id}
            title={post.title}
            isActive={isActive}
            clickHandler={clickHandler}
            closeDetailInfo={closeDetailInfo}
            body={post.body}
        />
    });



    return (
        <>
            {
                error ?
                    <ErrorComponent error={error.message}/> :
                    <div className={styles.postsWrapper}>
                        <h1 className={styles.postsTitle}>Posts's List</h1>
                        <div className={styles.postsContainer}>{allPosts}</div>
                    </div>
            }
        </>
    );
};

export default Posts;
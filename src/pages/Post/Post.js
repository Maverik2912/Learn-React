import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/postsService/postsService";
import {useParams} from "react-router-dom";
import styles from './Post.module.css';

const Post = () => {
    const postId = useParams().postId;
    const [post, setPost] = useState({});

    useEffect(() => {
        postsService.getById(postId).then(({data}) => setPost(data));
    }, [])

    const {userId, id, title, body} = post;
    return (
        <>
            <h1 className={styles.title}>Post "{title}"</h1>
            <div className={styles.post}>
                <p><b>UserId:</b> {userId}</p>
                <p><b>Id:</b> {id}</p>
                <p><b>Title:</b> {title}</p>
                <p><b>Body:</b> {body}</p>
            </div>
        </>
    );
};

export default Post;
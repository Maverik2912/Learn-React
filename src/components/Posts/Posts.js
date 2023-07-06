import React, {useEffect, useState} from 'react';
import {getAllPosts} from "../../requests/fetchPosts";
import Post from "../Post/Post";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        getAllPosts()
            .then(data => setPosts(data))
            .catch(error => setError(error));
    }, []);

    const allPosts = posts.map(post => {
        return <Post key={post.id} id={post.id} title={post.title} />
    })

    return (
        <div>
            {error ? <ErrorComponent error={error.message} /> : allPosts
            }
        </div>
    );
};

export default Posts;
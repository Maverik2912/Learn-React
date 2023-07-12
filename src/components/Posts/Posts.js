import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";

const Posts = ({currentUser: {name, userId}}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(data => setPosts(data));
    }, [userId]);

    return (
        <>
            <h1>{name}</h1>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </>
    );
};

export default Posts;
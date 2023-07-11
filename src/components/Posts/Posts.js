import React from 'react';
import Post from "../Post/Post";

const Posts = ({posts}) => {
    const allPosts = posts.map(post => <Post key={post.id} post={post} />)
    return (
        <>
            {allPosts}
        </>
    );
};

export default Posts;
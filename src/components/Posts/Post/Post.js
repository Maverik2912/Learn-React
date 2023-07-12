import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <p>UserId: {userId}</p>
            <p>id: {id}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Post;
import React from 'react';

const Post = ({id, title}) => {
    return (
        <div>
            <h3>{id}. {title}</h3>
        </div>
    );
};

export default Post;
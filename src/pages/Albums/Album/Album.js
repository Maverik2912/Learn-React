import React from 'react';

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
        </div>
    );
};

export default Album;
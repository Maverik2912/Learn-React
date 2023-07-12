import React from 'react';

const User = ({user, setUserId, isActive}) => {
    const {id, name, username} = user;
    return (
        <>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Username: {username}</li>
            </ul>
            <button onClick={() => setUserId(id)}>{isActive ? 'Hide posts' : 'ShowPosts'}</button>
        </>

    );
};

export default User;
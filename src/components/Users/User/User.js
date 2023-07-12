import React from 'react';

const User = ({user, currentUser, setCurrentUser}) => {
    const {id, name, username} = user;
    return (
        <>
            <ul>
                <li>Id: {id}</li>
                <li>Name: {name}</li>
                <li>Username: {username}</li>
            </ul>
            <button onClick={() => setCurrentUser({name, userId: id})}>{currentUser?.userId === user.id ? 'Hide posts' : 'ShowPosts'}</button>
        </>

    );
};

export default User;
import React from 'react';

const ToDo = ({todo}) => {
    const {userId, id, title, completed} = todo;

    return (
        <div>
            <p>UserId: {userId}</p>
            <p>Id: {id}</p>
            <p>Title: {title}</p>
            <p>Completed: {JSON.stringify(completed)}</p>
        </div>
    );
};

export default ToDo;
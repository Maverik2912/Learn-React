import React, {useEffect, useState} from 'react';
import User from "../User/User";
import ErrorPage from "../ErrorPage/ErrorPage";

const UsersComponent = () => {
    const [users, setUsers] = useState(null);
    const [posts, setPosts] = useState(null);
    const [activeUser, setActiveUser] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(e => setError(e));
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${activeUser}/posts`)
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(e => setError(e));
    }, [activeUser])

    const allUsers = users?.map(user => <User
        key={user.id}
        user={user}
        posts={posts}
        error={error}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
    />)
    return (
        <div>
            {error ? <ErrorPage error={error.message} />
                : allUsers
            }
        </div>
    );
};

export default UsersComponent;
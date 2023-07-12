import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = ({setCurrentUser, currentUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => <User
                key={user.id}
                user={user}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                 />)}
        </div>
    );
};

export default Users;
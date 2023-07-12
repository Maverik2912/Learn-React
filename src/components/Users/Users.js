import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = ({setUserId, userId}) => {
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
                setUserId={setUserId}
                isActive={userId === user.id}
                 />)}
        </div>
    );
};

export default Users;
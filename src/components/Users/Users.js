import React, {useEffect, useState} from 'react';
import {fetchUsers} from "../../requests/fetchUsers";
import User from "../User/User";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers()
            .then(data => setUsers(data))
            .catch(e => setError(e));
    }, []);

    const allUsers = users.map(user => <User key={user.id} user={user}/>)

    return (
        <>
            {error ? <ErrorComponent error={error} />}
        </>
    );
};

export default Users;
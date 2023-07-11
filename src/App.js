import React, {useEffect, useState} from 'react';
import './App.css';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import UsersComponent from "./components/UsersComponent/UsersComponent";

const App = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(e => setError(e));
    }, [])
    return (
        <>
            {error ? <ErrorPage error={error.message} />
            : <UsersComponent users={users} />
            }
        </>
    );
};

export default App;
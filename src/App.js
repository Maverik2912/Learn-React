import React, {useEffect, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import ErrorPage from "./components/ErrorPage/ErrorPage";


const App = () => {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
            })
            .catch(e => setError(e));
    }, [])
    return (
        <>
            {error ? <ErrorPage error={error.message}/>
            : <Users users={users} />
            }
        </>
    );
};

export default App;
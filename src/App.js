import React, {useState} from 'react';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);


    return (
        <>
            <Users setCurrentUser={setCurrentUser} currentUser={currentUser} />
            {currentUser && <Posts currentUser={currentUser} />}
        </>
    );
};

export default App;
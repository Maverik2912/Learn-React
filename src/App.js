import React, {useState} from 'react';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <>
            <Users setUserId={setUserId} userId={userId} />
            {userId && <Posts userId={userId} />}
        </>
    );
};

export default App;
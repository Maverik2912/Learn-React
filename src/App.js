import React, {createContext, useState} from 'react';
import './App.css';
import Child1 from "./components/Child/Child1";
import Child2 from "./components/Child/Child2";

export const AuthorContext = createContext(null);
const App = () => {
    const [author, setAuthor] = useState(null);

    return (
        <>
            <AuthorContext.Provider value={{author, setAuthor}}>
                <Child1 title='Child 1'/>
                <Child2 title='Child 2'/>
            </AuthorContext.Provider>
        </>
    );
};

export default App;
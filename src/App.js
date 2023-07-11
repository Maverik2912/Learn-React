import React, {createContext} from 'react';
import './App.css';
import Child1 from "./components/Child/Child1";
import Child2 from "./components/Child/Child2";

export const AuthorContext = createContext(null);
const App = () => {
    const author = {
        name: 'Mykyta', surname: 'Kraskovskyi'
    }

    return (
        <>
            <AuthorContext.Provider value={author}>
                <Child1 title='Child 1'/>
                <Child2 title='Child 2'/>
            </AuthorContext.Provider>
        </>
    );
};

export default App;
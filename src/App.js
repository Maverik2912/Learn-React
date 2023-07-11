import React from 'react';
import './App.css';
import Child1 from "./components/Child/Child1";
import Child2 from "./components/Child/Child2";

const App = () => {
    const author = {
        name: 'Mykyta', surname: 'Kraskovskyi'
    }

    return (
        <>
            <Child1 author={author} title='Child 1'/>
            <Child2 author={author} title='Child 2'/>
        </>
    );
};

export default App;
import React from "react";
import './App.css';
import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";
import {Cars} from "./components/Cars/Cars";
class App extends React.Component {
    render() {
        return (
            <>
             <Posts />
             <Comments />
             <Cars />
            </>
        );
    }

}

export default App;
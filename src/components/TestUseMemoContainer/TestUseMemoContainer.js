import {TestUseMemo} from "./TestUseMemo/TestUseMemo";
import {useState} from "react";

const TestUseMemoContainer = () => {
    const [data, setData] = useState(0);
    const [todos, addTodos] = useState(['Init todo']);

    const clickHandler = () => {
        addTodos(prev => [...prev, 'New todo']);
    }

    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '30px'}}>Use Memo</h1>
            <button onClick={clickHandler}>Add todo</button>
            {todos.map((todo, index) => <p key={index}>{todo}</p>)}
            <br/>
            <hr/>
            <br/>
            <br/>
            <hr/>
            <br/>
            <TestUseMemo data={data} setData={setData} />
        </div>
    );
};

export {TestUseMemoContainer};
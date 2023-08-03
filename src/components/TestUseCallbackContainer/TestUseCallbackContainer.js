import {TestUseCallback} from "./TestUseCallback/TestUseCallback";
import {useCallback, useState} from "react";

const TestUseCallbackContainer = (callback, deps) => {
    const [data, setData] = useState(0);
    const [todos, setTodos] = useState(['init Todo']);
    const addTodo = () => {
        setTodos(prev => [...prev, 'new Todo']);
    }

    const calc = (data) => {
        for (let i = 0; i < 10e8; i++) {
            data++
        }
        return data;
    }

    const calculatedValue = useCallback(() => {
        return calc(data)
    }, [data]);

    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '30px'}}>Use Callback</h1>
            <button onClick={addTodo}>Add todo</button>
            {todos.map((todo, index) => <p key={index}>{todo}</p>)}
            <br/>
            <hr/>
            <br/>
            <TestUseCallback calculatedValue={calculatedValue} setData={setData} />
        </div>
    );
};

export {TestUseCallbackContainer};
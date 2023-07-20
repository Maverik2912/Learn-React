import React, {useEffect, useState} from 'react';
import {todosService} from "../../services/todosService/todosService";
import ToDo from "./ToDo";
import styles from './ToDos.module.css';

const ToDos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(({data}) => setTodos(data));

    }, []);

    return (
        <>
            <h1 className={styles.title}>Todos List</h1>
            <div className={styles.container}>
                {todos.map(todo => <ToDo key={todo.id} todo={todo}/>)}
            </div>
        </>
    );
};

export default ToDos;
import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const add = todoObj => {
        setTodos(todos => [...todos, todoObj]);
    };

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoComponents = todos.map(todo => (
        <Todo 
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handleRemove={remove}
        />
    ));

    return (
        <div>
            <NewTodoForm createTodo={add} />
            <ul>{todoComponents}</ul>
        </div>
    );
}

export default TodoList
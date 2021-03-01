import React from "react"
import Todo from "./Todo"

const TodoList = props => {

    const { todos } = props;

    return (
        <div className="todo-list">
            {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList

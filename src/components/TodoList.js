import React from "react"
import Todo from "./Todo"

const TodoList = props => {

    const { todos, toggleTodo } = props;

    return (
        <div className="todo-list">
            {todos.map(todo => (
            <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    //? Here we map through todos to get the individual objects. We also render Todo here and pass it the appropriate props.
            ))}
        </div>
    )
}

export default TodoList

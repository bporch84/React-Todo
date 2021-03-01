import React from "react"

const Todo = (props) => {
    console.log(props)
    return (
        <div
            onClick={() => props.toggleTodo(props.todo.id)}
    //? Here we add an onClick using the toggle function so that we can change the completed boolean upon clicking on the todo item.
            style={props.todo.completed ? {textDecoration: "line-through"} : {} }>
    {//?Here we add a ternary to the style so that we can add a line-through when the completed key has a value of true.
    }
           <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo
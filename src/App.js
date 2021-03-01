import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const todos = [
  {
    id: 1,
    task: "Buy groceries",
    completed: false
  },
  {
    id: 2,
    task: "Do laundry",
    completed: false
  }
]
// ? Extends uses inheritance to receive properties/functions/methods from React.Component. React class components always extend from React.Component. This allows us to set up state and run life cycle methods.

class App extends React.Component {
  constructor() {
    super();
    //? Below would look like this in a function state
    //? const [todos, setTodos] =useState(todos)
    this.state = {
      todos: todos
    }
  }

  //? Class state is always an object with class properties.
  //? Function state: each state property is its own variable

  // * you will need a place to store your state in this component.
  // * design `App` to be the parent component of your application.
  // ! this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = todoName => {
    const newTodo = {
      id: new Date(),
      task: todoName,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    //? Here is where you would deconstruct state (right under render)
    //? const { todos } = this.state
    //? Then, you can simply pass todos underneath.
    return (
      <div>
        <h1>Todo List:</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
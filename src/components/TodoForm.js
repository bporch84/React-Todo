import React from "react"

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {item: ""};
    }

        handleChanges = (e) => {
            this.setState({
                item: e.target.value
            });
        };

        handleSubmit = (e) => {
            e.preventDefault();
            this.props.addTodo(this.state.item)
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    placeholder="Add todo here"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button type="submit">Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
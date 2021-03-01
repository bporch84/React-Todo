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

    //? Here we set the state so that item becomes whatever is typed into the input field.

        handleSubmit = (e) => {
            e.preventDefault();
            this.setState({
                item: ""
            })
            this.props.addTodo(this.state.item)
        }

    //? Here we stop the page from refreshing during the submit. We also set the state of item to be blank so that whatever we input isn't left in the field. Then, we use the addTodo function to add the new item to the todos array.

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button type="button" onClick={this.props.removeTodo}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm
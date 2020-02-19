import React from "react";

import TodoItem from "./TodoItem";

class TodoHolder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: props.todos
        }
    }

    render() {
        return (
            <div id="todoHolder" className="tabularHolder">
                { this.props.todos.map((todo, index) => {
                    return (
                        <TodoItem onCheck={this.props.onCheck} onDelete={this.props.onDelete} key={todo.id} position={index + 1} todo={todo} />
                    )
                }) }
            </div>
        )
    }
}

export default TodoHolder;
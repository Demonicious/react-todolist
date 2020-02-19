import React from "react";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: '',
        }

        this.updateText = this.updateText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    updateText(e) {
        this.setState({
            todoTitle: e.target.value
        });
    }

    handleClick(e) {
        e.preventDefault();
        if(this.state.todoTitle) {
            this.props.onAddTodo(this.state.todoTitle);
            this.state.todoTitle = '';
        }
    }

    render() {
        return (
            <div id="addTodo">
                <div className="col-9">
                    <input type="text" onChange={this.updateText} value={this.state.todoTitle} placeholder="Add Item..." className="formControl" name="todoTitle" />
                </div>
                <div className="col-3">
                    <button onClick={this.handleClick} className="addTodoBtn">Add Todo</button>
                </div>
            </div>
        )
    }
}

export default AddTodo;
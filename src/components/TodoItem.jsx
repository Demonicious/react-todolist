import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todo: props.todo,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleClick(e) {
        this.props.onDelete(this.props.todo.id);
    }

    handleCheck(e) {
        this.props.onCheck(this.props.todo.id);
    }

    render() {
        return (
            <div className="todoItem">
                <div><span><input defaultChecked={(this.props.todo.completed ? true : false)} type="checkbox" onChange={this.handleCheck} /></span><span className="bold ml">{ this.props.position }. </span><span className={"todoTitle " + (this.props.todo.completed ? 'complete' : 'incomplete') }>{ this.props.todo.title }</span> <button onClick={this.handleClick} className="deleteBtn">X</button></div>
            </div>
        )
    }
}

export default TodoItem;
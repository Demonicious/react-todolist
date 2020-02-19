// System
import React from "react";
import uuid from "uuid/v4";

// Components
import AddTodo from "./AddTodo";
import TodoHolder from "./TodoHolder";

// Assets
import "./../assets/style/main.css";

class Todolist extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out the trash.',
                completed: false,
            },
            {
                id: 2,
                title: 'Fight for the greater good.',
                completed: false,
            },
            {
                id: 3,
                title: 'Fight for my neighborhood.',
                completed: false,
            },
            {
                id: 4,
                title: 'Fight for my just reward.',
                completed: false,
            },
            {
                id: 5,
                title: 'Know what im fighting for.',
                completed: false,
            },
            {
                id: 6,
                title: 'You\'re done',
                completed: false,
            },
        ]
    }

    /* fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    todos: data
                });
            });
    }

    componentDidMount() {
        this.fetchTodos();
        return;
    } */

    constructor(props) {
        super(props);

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleAddTodo(todoTitle) {
        let todo = {};
        todo.id = uuid();
        todo.title = todoTitle;
        todo.completed = false;
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => { return todo.id != id });
        this.setState({
            todos: todos
        });
    }

    handleCheck(id) {
        let todos = this.state.todos.map(todo => { if(todo.id == id) todo.completed = !todo.completed; return todo } );
        this.setState({
            todos: todos,
        })
    }

    render() {
        return (
            <div id="todoList">
                <div className="header">
                    <span>Todolist In React</span>
                </div>
                <AddTodo onAddTodo={this.handleAddTodo} />
                <TodoHolder onCheck={this.handleCheck} onDelete={this.handleDelete} todos={this.state.todos} />
            </div>
        )
    }
}

export default Todolist;
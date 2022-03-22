import React, { Component } from 'react';
import './Todolist.css'
import AddTodolist from './AddTodolist';

class Todolist extends Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Nấu cơm' },
            { id: 'todo2', title: 'Quét nhà' },
            { id: 'todo3', title: 'Rửa bát' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))
            listTodosCopy[objIndex].title = editTodo.title
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            return
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = e.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        //lấy listtodo ra với destructuring
        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0
        // console.log(isEmptyObj);
        return (
            <div className='list-todo-container'>
                <AddTodolist
                    addNewTodo={this.addNewTodo}
                />
                <div className='list-todo-content'>
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    {isEmptyObj === true ?
                                        <span> {index + 1} - {item.title}</span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1} - <input
                                                        onChange={(e) => this.handleOnChangeEditTodo(e)}
                                                        value={editTodo.title} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button className='edit'
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    <button className='delete'
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Todolist;
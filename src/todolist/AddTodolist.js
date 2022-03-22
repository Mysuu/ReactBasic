import React, { Component } from 'react';

class AddTodolist extends Component {

    state = {
        title: ''
    }

    handleOnChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            alert('chưa điền gì')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }

    render() {
        return (

            <div className='add-todo'>
                <input type='text'
                    onChange={(e) => this.handleOnChangeTitle(e)}
                />
                <button type='button' className='add'
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>

        );
    }
}

export default AddTodolist;
import React, { Component } from 'react';
import './AddTodo.css';
import './script';
import showAlert from './script';


class AddTodo extends Component {
    state = {
        create_todo: ''
    }

    handleInput = (eventobj) => {
        this.setState({create_todo: eventobj.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.create_todo !== ''){
            this.props.createTodo(this.state.create_todo);
            // clear input form after submit
            setTimeout(() => { this.setState({create_todo: ''}); }, 1000);
        }else{
            showAlert("Please fill in all fields", 'danger', 5000);
        }
    }

    render() { 
        return ( 
            <form className='' style={formStyles} onSubmit={(e) => { this.handleSubmit(e) }}>
                <input type="text" className='add-todo' name='create_todo' value={this.state.create_todo} onChange={(e) => { this.handleInput(e) }} placeholder='Add a Todo'/>
            </form>
        );
    }
}

let formStyles = {
    background: '#495152',
    padding: '5px',
}

 
export default AddTodo;
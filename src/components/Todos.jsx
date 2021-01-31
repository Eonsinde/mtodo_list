import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './Todos.css';

class Todos extends Component{
    renderTodos = () => {
        if (this.props.todos.length !== 0){
            return this.props.todos.map(todo => <TodoItem todo={todo} key={todo.id} id={todo.id} setActive={this.props.setActive} removeTodo={this.props.removeTodo} />)
        }else{
            return <h5 className='text-center text-white text-capitalize text-white-50'>----- no todos have been added -----</h5>
        }
    }
    render() { 
        return ( 
            <div className="todo-container bg-dark">
                <main className='py-3'>
                    {this.renderTodos()}
                </main>
            </div>
         );
    }
}
 
export default Todos;
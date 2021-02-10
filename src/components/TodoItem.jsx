import React, { Component } from 'react';
import './TodoItem.css';
import LazyLoad from 'react-lazyload';


const Spinner = () => (
    <div className='bg-dark p-3 text-center text-white'>
        <h5>Loading Todo...</h5>
    </div>
)


class TodoItem extends Component {
    setStyle = (todo) => {
        if (todo.active === false){
            return {textDecoration: 'line-through'};
        }else{
            return;
        }
    }

    render() { 
        let { todo } = this.props; // destructing used here
        return (
            <LazyLoad
                height={500}
                once={true}
                offset={100}
                placeholder={<Spinner />}
            >
            <section className='todo-item text-white d-flex align-items-center justify-content-between'>
                <span className="left" style={this.setStyle(todo)}>
                    <input type="checkbox" className='mr-2' onClick={() => { this.props.setActive(todo.id) }}/>
                    <span className='text-capitalize'>{ todo.content }</span>
                </span>
                <button className='remove-todo bg-info text-white' onClick={() => { this.props.removeTodo(todo.id) }}>&times;</button>
            </section>
            </LazyLoad>
        );
    }
}

 
export default TodoItem;
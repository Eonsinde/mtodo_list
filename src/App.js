import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      
    ]
  }

  componentDidMount = () => {
    if (localStorage.getItem('todos') !== null){
      let _todos = JSON.parse(localStorage.getItem('todos'));
      this.setState({todos: _todos});
    }else{
      localStorage.setItem('todos', JSON.stringify([]));
      this.setState({todos: []});
    }
  }

  createTodo = (value) => {
    if (localStorage.getItem('todos') !== null){
      let todos = JSON.parse(localStorage.getItem('todos'));

      let new_index =   this.state.todos.length !== 0 ? todos[todos.length-1].id + 1 : 1;
      let new_todo = {
        id: new_index, content: value, active: true, date_created: new Date().toDateString()
      }
      todos = [...todos, new_todo];

      localStorage.setItem('todos', JSON.stringify(todos));
      this.setState({todos: todos});
    }
    
  }

  setActive = (id) => {
    if (localStorage.getItem('todos') !== null){
      let todos = JSON.parse(localStorage.getItem('todos'));

      let _todos = todos.filter(todo => {
        if (todo.id === id){
          todo.active = (todo.active === true) ? false : true;
        }
        return todo;
      });
  
      localStorage.setItem('todos', JSON.stringify(_todos));
      this.setState({todos: _todos});
    }
    
  }

  deleteTodo = (id) => {
    if (localStorage.getItem('todos') !== null){
    let todos = JSON.parse(localStorage.getItem('todos'));

    let _todos = todos.filter(todo =>  {
      if (todo.id !== id)   
        return todo; 
      });
    
      localStorage.setItem('todos', JSON.stringify(_todos));
      this.setState({todos: _todos});
    }
  }

  render() {
    return (
      <div className="App">
        <main style={mainContainer}>
          <Header />
          <AddTodo createTodo={this.createTodo} />
          <Todos todos={this.state.todos} setActive={this.setActive} removeTodo={this.deleteTodo} />
        </main>
        <footer className='text-center py-3 text-uppercase text-secondary'>
            developed by fun
          </footer>
      </div>
    );
  }
}

let mainContainer = {
  margin: 'auto',
  width: '50%',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}

export default App;

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      
    ]
  }

  componentDidMount = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.data)
      .then(TODOS => this.setState({todos: TODOS}))
      .catch(e => {console.log(e.message);});
  }

  createTodo = (value) => {
    let todos = this.state.todos;
    let new_index =   this.state.todos.length !== 0 ? todos[todos.length-1].id + 1 : 1;
    let new_todo = {
      id: new_index, content: value, active: true, date_created: new Date().toDateString()
    }
    todos = [...todos, new_todo];
    this.setState({todos});
  }

  setActive = (id) => {
    let todos = this.state.todos;
    let new_todos = todos.filter(todo => {
      if (todo.id === id){
        todo.active = todo.active === true ? false : true;
      }
      return todo;
    });
    this.setState({todos: new_todos});
  }

  deleteTodo = (id) => {
    let todos = this.state.todos;
    let new_todos = todos.filter(todo => {  
      if (!(todo.id === id)) {}   
        return todo; 
      });
    this.setState({todos: new_todos});
  }

  render() {
    return (
      <div className="App">
        <main style={mainContainer}>
          <Header />
          <AddTodo createTodo={this.createTodo} />
          <Todos todos={this.state.todos} setActive={this.setActive} removeTodo={this.deleteTodo} />
        </main>
      </div>
    );
  }
}

let mainContainer = {
  margin: 'auto',
  width: '50%',
  boxShadow: '0 0 20px #000000bc'
}

export default App;

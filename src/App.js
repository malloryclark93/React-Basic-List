import React, { Component } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';



class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    // pass in state object - todos
    // copy everything existing using the spread operator '...'
    // filter each todo - return every todo where the ID is not equal to the ID thats passed in / filter out the one we are deleting
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] });
  }


  render() {
    // console.log(this.state.todos)
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddTodo />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
    );
  }
}

export default App;


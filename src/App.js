import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';
import axios from 'axios';

// import uuid from 'uuid';



class App extends Component {
  state = {
    todos: []
    // todos: [
    //   {
    //     id: 65747,
    //     title: 'Take out the trash',
    //     completed: false
    //   },
    //   {
    //     id: 46363,
    //     title: 'Dinner with wife',
    //     completed: false
    //   },
    //   {
    //     id: 45346,
    //     title: 'Meeting with boss',
    //     completed: false
    //   }
    // ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({ todos: res.data }))
  }

  // Toggle Complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  // Delete request
  delTodo = (id) => {
    // pass in state object - todos
    // copy everything existing using the spread operator '...'
    // filter each todo - return every todo where the ID is not equal to the ID thats passed in / filter out the one we are deleting

    // Delete on server, update UI
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => 
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)] }));

  }


  //Add Todo 
  // Post request when you're adding something
  // Gives a response, mimicks real B.E. server
  addTodo = (title) => {
    // const newTodo = {
    //   id: 23435,
    //   title: title, // title is equal to title passed in or we can use 'title,' for syntax as well 
    //   completed: false
    // }
   // spread operator copies what we have currently

   axios.post('https://jsonplaceholder.typicode.com/todos', { 
    title,
    completed: false
  })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    // ^^ made request to json placeholder, sent response back with todo info, (id), added to UI

  }

  render() {
    // console.log(this.state.todos)
  return (
    <Router>
    <div className="App">
          <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
           )} />
           <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
    );
  }
}

export default App;


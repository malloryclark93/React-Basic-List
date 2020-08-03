import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: true
      }
    ]
  }
  render() {
    // console.log(this.state.todos)
  return (
    <div className="App">
      <Todos todos={this.state.todos}/>
    </div>
    );
  }
}

export default App;


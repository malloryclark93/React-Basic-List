import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: '' // Component State -- only exists in the AddTodo component
    // Todos are App level State bc you are sharing todos between components
  }
  
  onSubmit = (e) => {
    // prevent onSubmit from submitting to the actual file 
    e.preventDefault();
    // call props method bc we need to pass this up like 'delete' and 'markComplete'
    this.props.addTodo(this.state.title); // pass the title up bc we are adding a title 
    // Clear fields
    this.setState ({ title: '' }); // Set title to empty once submitted 
  }

  onChange = (e) => this.setState({title: e.target.value }); // the state is being changed as the onChange fires. So 'title' in dev tools will update in real time what you are typing in as the value 


  render() {
    return (
      <form onSubmit={this.onSubmit} style ={{ display: 'flex' }}>
          <input
          type="text"
          name="title" // [e.target.name]
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit"
          className="btn"
          style={{flex: '1'}}
          />
      </form>
    )
  }
}

export default AddTodo

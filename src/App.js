import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(data => this.setState({
        todos: data
      }))
      .catch(err => console.log(err));
  }

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  // Delete Todo
  delTodo = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, options)
      .then(this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      }))
      .catch(err => console.log(err));
  }

  // Add Todo
  addTodo = (title) => {
    const todo = {
      title,
      completed: false
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json',
      }
    }

    fetch('https://jsonplaceholder.typicode.com/todos', options)
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          todos: [...this.state.todos, data]
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact path="/react-todo"
              render={ () => (
                <React.Fragment>
                  <AddTodo
                    addTodo={ this.addTodo }
                  />
                  <Todos 
                    todos={ this.state.todos }
                    markComplete={ this.markComplete }
                    delTodo={ this.delTodo }
                  />
                </React.Fragment>
              ) }
            />
            <Route
              path="/about"
              component={ About }
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

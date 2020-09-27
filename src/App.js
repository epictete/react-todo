import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  }, [])

  // Toggle complete
  const markComplete = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }))
  }

  // Delete Todo
  const delTodo = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    }

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, options)
      .then(setTodos(
        [...todos.filter(todo => todo.id !== id)]
      ))
      .catch(err => console.log(err));
  }

  // Add Todo
  const addTodo = (title) => {
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
        data.id = uuidv4();
        setTodos([...todos, data])
      })
      .catch(err => console.log(err));
  }

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
                  addTodo={ addTodo }
                />
                <Todos 
                  todos={ todos }
                  markComplete={ markComplete }
                  delTodo={ delTodo }
                />
              </React.Fragment>
            ) }
          />
          <Route
            path="/react-todo/about"
            component={ About }
          />
        </div>
      </div>
    </Router>
  );
}

export default App;

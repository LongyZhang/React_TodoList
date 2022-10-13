import logo from './logo.svg';
// if you import the jsx and js file into App.js, you dont have to add file type
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import './App.css';
import React, { Component } from 'react';
// const { Component } = Reac

// create component and then export 
// in the APP.Js we dont write anything here, the code and component are written into seperate hello.js
export default class App extends Component {
  // intiailize the state
  state = {
    todos: [
      { id: 1, name: 'eating', done: true },
      { id: 2, name: 'sleeping', done: false },
      { id: 3, name: 'coding', done: true },
      { id: 4, name: 'sex', done: false }
    ]
  }

  addTodo = (obj) => {
    const { todos } = this.state
    const newTodos = [...todos, obj]
    this.setState({ todos: newTodos })

  }
  updateTick = (id, tick) => {
    console.log('app', id, tick);
    const { todos } = this.state

    const newTodo = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: tick }
      else return todo
    })

    this.setState({ todos: newTodo })
  }

  delTodo = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      if (todo.id !== id) return todo
    })
    this.setState({ todos: newTodos })

  }

  // here, we are mapping the data from object
  updateAll = (tick) => {
    const { todos } = this.state
    const newTodo = todos.map((todo) => {
      return { ...todo, done: tick }
    })
    this.setState({ todos: newTodo })
  }
  render() {
    return (
      <div className='bigbox'>
        <Header todos={this.state.todos} passValue={this.addTodo} />
        <List todos={this.state.todos} passTick={this.updateTick} passDel={this.delTodo} />
        <Footer todos={this.state.todos} passBack={this.updateAll} />
      </div>

    );
  }

}

// export default App;

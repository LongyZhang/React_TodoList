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

  // create a function to pass value from child component to parent component
  // it will share value straightly away


  // addTodo is meant to add todo, received value is todo object
  addTodo = (obj) => {
    // console.log('app', obj);
    const { todos } = this.state
    const newTodos = [...todos, obj]
    // different way to construct new array
    // const newTodos = [obj, ...todos] 

    this.setState({ todos: newTodos })
  }
  // delTodo = (id) => {
  //   const { todos } = this.state
  //   const newTodos = todos.filter(item => item.id != id)
  //   console.log(newTodos);
  // }
  render() {
    return (
      <div>
        <div className="bigbox">
          {/* in there the app.jsx, it can pass all different values into different component */}
          <Header passBack={this.addTodo} todos={this.state.todos} />
          <List todos={this.state.todos} />
          <Footer />
        </div>
      </div>
    );
  }
}

// export default App;

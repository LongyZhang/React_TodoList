import logo from './logo.svg';
// if you import the jsx and js file into App.js, you dont have to add file type
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import './App.css';
import React, { Component } from 'react';
// const { Component } = Reac

// create component and then export 
// in the APP.Js we dont write anything here, the code and component are written into seperate hello.js
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}

// export default App;

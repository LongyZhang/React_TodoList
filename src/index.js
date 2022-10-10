import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(<App />, document.querySelector("#root"))
root.render(
  // React.StrictMode can give you some heads up to check
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from "./Example";
import Example2 from "./Example2";
import ExampleWithClass from "./ExampleWithClass";
import Example2WithClass from "./Example2WithClass";

function App() {
  return (
    <div className="App">
      <Example />
      <Example2/>
      <hr/>
      <h1>Example with class</h1>
      <ExampleWithClass/>
      <Example2WithClass/>
    </div>
  );
}

export default App;

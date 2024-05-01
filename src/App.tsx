import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet'
import GreetClass from './GreetClass'
import TextChange from './TextChange'
import Home from './Components/Home';

const clickHandler1 = () =>{
  alert("Handler1 clicked");
}
const clickHandler2 = () => {
  alert("Handler2 called")
}

function App() {
  return (
    <div className="App">
      {/* <Greet myClick ={clickHandler1} value='code' data={10}></Greet>
      <Greet myClick = {clickHandler2} value='Quotient'></Greet>
      <GreetClass /> */}
      {/*<Greet /> */}

      {/* <TextChange /> */}
      <Home />

    </div>
  );
}

export default App;

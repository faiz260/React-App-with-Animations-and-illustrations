import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Screen2} from './Components/Screen2';
import {Screen3} from './Components/Screen3';
import {Screen4} from './Components/Screen4'
import { Screen1 } from './Components/Screen1';
import { Bottom } from './Components/Bottom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Screen1/>
      <Screen2/>
      <Screen3/>
      <Screen4/>
      <Bottom/>
    </div>
  );
}

export default App;

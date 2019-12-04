import React from 'react';
import './App.css';
import User from './components/User';
import axios from 'axios';

export default class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        Hello world
        <User />
      </div>
    );
  }
  
}



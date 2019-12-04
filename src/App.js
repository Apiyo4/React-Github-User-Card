import React from 'react';
import './App.css';
import User from './components/User';
import Axios from 'axios';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user : [],
    }
  }
  componentDidMount(){
    Axios.get('https://api.github.com/users/apiyo4?access_token=ca8a7abbd7a3d7b6c089d22b78056fd9e335919b')
    .then(res=>{
     
      this.setState({
        user: res.data,
      })
      console.log(this.state.user);
    })
  }
  render(){
    return (
      <div className="App container">
        Hello world
        <User  user= {this.state.user}/>
      </div>
    );
  }
  
}



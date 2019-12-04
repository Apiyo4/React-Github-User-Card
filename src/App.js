import React from 'react';
import './App.css';
import User from './components/User';
import Axios from 'axios';
import Followers from './components/Followers';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      user : [],
      followersArray: []
    }
  }
  componentDidMount(){
    Axios.get('https://api.github.com/users/apiyo4?access_token=ca8a7abbd7a3d7b6c089d22b78056fd9e335919b')
    .then(res=>{
     
      this.setState({
        user: res.data,
      })

    })
    .catch(err=>console.log(err));
    Axios.get('https://api.github.com/users/Apiyo4/followers')
    .then(res=>{
      
      this.setState({
        followersArray: res.data.map(re=>{
          return re;
        })
      })
      
    })
    .catch(err=>console.log(err));
    
  }
  render(){
    return (
      <div className="App container">
        <h1>React Github User Card</h1>
        <User  user= {this.state.user}/>
    {this.state.followersArray.map(user=>{
      return <Followers  key={user.login} user={user}    />
    })}
        
      </div>
    );
  }
  
}



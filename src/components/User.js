import React from 'react';

export default class User extends React.Component{
   
    
    render(){
        return(
            <div className='card'>
               <img src={this.props.user.avatar_url} alt={this.props.user.login} /> 
               <div className='card-info'>
                <h3 className='name'>{this.props.user.name} </h3>
                <p className='username'>Username: {this.props.user.login}</p>
                <p className='location'>{this.props.user.location}</p>
                <p className='profile'><a className='link'>{this.props.user.html_url}</a></p>
                <p className='followers'>Followers: {this.props.user.followers}</p>
                <p className='following'>Following: {this.props.user.following}</p>
                <p className='bio'>Bio: {this.props.user.bio}</p>
               </div>
            </div>
        )
    }
}
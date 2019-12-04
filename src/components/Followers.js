import React from 'react';
import User from './User';
export default class Followers extends React.Component{
    render(){
        return(
            <div>
                <User user={this.props.user}/>
            </div>
        )
    }
}
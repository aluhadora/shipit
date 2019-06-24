import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class User extends Component {
    render() { 
        const { user } = this.props;

        return (
            <div style={{color: "black", height: 300}}>
                <img src={logo} width="100" height="100" style={{animation: "App-logo-spin infinite 20s linear"}} alt="logo" />
                <div style={{}}>{user && user.alias}</div>
                <div style={{color: "lightgrey", fontSize: "smaller"}}>{user && user.department}</div>
            </div>
        );
    }
}
 
export default User;
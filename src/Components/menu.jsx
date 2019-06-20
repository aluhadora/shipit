import React, { Component } from 'react';
import User from './user';

class Menu extends Component {
    state = {  }
    render() { 
        return (<div style={{position: "fixed",
            top: 0,
            bottom: 0,
            width: 300,
            left: 0,
            backgroundColor: "#EFF1F5"
            }}>
            <User />
            
        </div>);
    }
}
 
export default Menu;
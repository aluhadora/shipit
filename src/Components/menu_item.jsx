import React, { Component } from 'react';

class MenuItem extends Component {
    render() { 
        const { text, active } = this.props
        return ( <li style={{color: active ? "black" : "lightgrey"}}>
            {text}
        </li> );
    }
}
 
export default MenuItem;
import React, { Component } from 'react';
import User from './user';
import MenuItem from './menu_item';

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
            
            <ul>
                <MenuItem text="Challenges" active={true} />
                <MenuItem text="Leaderboards" active={false} />
                <MenuItem text="History" active={false} />
            </ul>
        </div>);
    }
}
 
export default Menu;
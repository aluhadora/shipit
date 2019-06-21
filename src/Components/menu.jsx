import React, { Component } from 'react';
import User from './user';
import MenuItem from './menu_item';


class Menu extends Component {
    state = {  }
    render() { 
        return (
        <div>
        <div style={{position: "fixed",
            top: 0,
            bottom: 0,
            width: 300,
            left: 0,
            backgroundColor: "#EFF1F5"
            }}>
            <User />
            
            <ul>
                <MenuItem text="Challenges" active={false} />
                <MenuItem text="Leaderboards" active={true} />
                <MenuItem text="History" active={false} />
            </ul>
        </div>
        <div>
        <header style={{marginTop: 0}}>
          <h1 style={{marginTop: 0}} class='header_box'>listen.</h1>
        </header>
        </div>
        </div>
        
        );
    }
}
 
export default Menu;
import React, { Component } from 'react';
import Menu from './menu';
import ActivityBar from './activity_bar';
import Leaderboards from './Leaderboards/leaderboards';
import * as Actions from '../Actions/api_actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Listen extends Component {
    state = { user: null }
    
    componentDidMount() {
        Actions.ApiPromise(Actions.Users, 1)
            .then(obj => {
                this.setState({
                    user: obj
                });
            });
    }

    render() { 
        const { user } = this.state;

        return <div>
            <Menu user={user} />
            <Router>
                <Route exact path="/" render={() => <Leaderboards user={user} />}/>
            </Router>
            
            {/* <Leaderboards user={user} /> */}
            <ActivityBar user={user} />
        </div>;
    }
}
 
export default Listen;
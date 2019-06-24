import React, { Component } from 'react';
import Menu from './menu';
import ActivityBar from './activity_bar';
import Leaderboards from './Leaderboards/leaderboards';
import * as Actions from '../Actions/api_actions';

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
            <Leaderboards user={user} />
            <ActivityBar user={user} />
        </div>;
    }
}
 
export default Listen;
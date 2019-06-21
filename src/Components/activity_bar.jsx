import React, { Component } from 'react';
import User from './user';
import Track from './track';
import * as Actions from '../Actions.js';

class ActivityBar extends Component {
    state = { tracks: [] }

    componentDidMount() {
        Actions.pullTracks(obj => {
            this.setState(function () {
              return {
                tracks: obj.error ? obj : obj.recenttracks.track
              };
            });
            this.forceUpdate();
          }, 'aluhadora');
    }


    render() { 

        const { tracks } = this.state; 

        var trackControls = [];

        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            trackControls.push(<Track key={i} track={track} />);
          }

        return (<div style={{position: "fixed",
            right: 0, 
            bottom: 0,
            width: 400,
            top: 0,
            backgroundColor: "#EFF1F5"
            }}>


            <div>
                <h2>My Activity</h2>
            </div>
            
            {trackControls}

        </div>);
    }
}
 
export default ActivityBar;
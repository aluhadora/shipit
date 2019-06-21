import React, { Component } from 'react';
import * as Actions from '../Actions.js';
import RepeatedSong from './repeated_song.jsx';

class LeaderBoard extends Component {
    state = { tracks: [] }

    componentDidMount() {
        Actions.mostRepeatedTracks(obj => {
            this.setState(function () {
              return {
                tracks: obj.error ? obj : obj
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
            trackControls.push(<RepeatedSong key={i} track={track} />);
          }


        return (<div style={{marginTop: 50}}>
                <b>Songs most played by a user </b>
                {trackControls}
        </div>);
    }
}
 
export default LeaderBoard;
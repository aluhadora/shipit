import React, { Component } from 'react';

class RepeatedSong extends Component {
    render() { 
        const { name, songCount, songName } = this.props.track;

        var str = songName + " was listened to " + songCount + " time" + (songCount == 1 ? "" : "s") + " by " + name;
        return <div>
            {str}
        </div>;
    }
}
 
export default RepeatedSong;
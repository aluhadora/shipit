import React, { Component } from 'react';
import Track from '../track';

//https://shipitback20190620080140.azurewebsites.net/api/mostpopularsong
class PopularSongs extends Component {
    state = { popularSongs: [] }

    componentDidMount() {
        fetch("https://shipitback20190620080140.azurewebsites.net/api/mostpopularsong")
            .then(res => res.json())
            .then(obj => {
                this.setState(function () {
                return {
                    popularSongs: obj
                };
                });
                this.forceUpdate();
            }, 'aluhadora');
    }

    render() { 
        const { popularSongs } = this.state;

        var trackControls = [];

        for (let index = 0; index < popularSongs.length; index++) {
            var popularSong = popularSongs[index];
            trackControls.push(<Track key={index} track={{name: popularSong.songName, 
                img: popularSong.image, 
                info: "Has been played " + popularSong.songCount + " times",
                }}/>)
            
        }

        return (
            <div style={{marginTop: 50}}>
                <b>Most popular songs</b>

                <div style={{marginLeft: 300, marginTop: 10}}>
                    {trackControls}
                </div>
                

        </div> );
    }
}
 
export default PopularSongs;
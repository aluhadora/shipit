import React, { Component } from 'react';
import Track from '../track';

//https://shipitback20190620080140.azurewebsites.net/api/mostpopularsong
class Leaderboards extends Component {
    state = { popularSong: {} }

    componentDidMount() {
        fetch("https://shipitback20190620080140.azurewebsites.net/api/mostpopularsong")
            .then(res => res.json())
            .then(obj => {
                this.setState(function () {
                return {
                    popularSong: obj[0]
                };
                });
                this.forceUpdate();
            }, 'aluhadora');
    }

    render() { 
        const { popularSong } = this.state;

        return (
            <div style={{marginTop: 50}}>
                <b>Leaderboards</b>

                <div style={{marginLeft: 300, marginTop: 10}}>
                    <Track track={{name: popularSong.songName, 
                        img: popularSong.image, 
                        info: "Has been played " + popularSong.songCount + " times " }}/>
                </div>
                

        </div> );
    }
}
 
export default Leaderboards;
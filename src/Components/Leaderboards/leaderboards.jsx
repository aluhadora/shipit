import React, { Component } from 'react';
import Track from '../track';
import PopularSongs from './popular_songs';

//https://shipitback20190620080140.azurewebsites.net/api/mostpopularsong
class Leaderboards extends Component {
    state = { popularSong: {}, page: null }

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

    pageToPopular()
    {
        this.setState({
            page: <PopularSongs />
        })
    }


    render() { 
        const { popularSong, page } = this.state;

        return ( page || 
            <div style={{marginTop: 50}}>
                <b>Leaderboards</b>

                <div style={{marginLeft: 300, marginTop: 10}}>
                    <Track track={{name: popularSong.songName, 
                        img: popularSong.image, 
                        info: "Has been played " + popularSong.songCount + " times",
                        link: {text: "More popular songs...", onClick: this.pageToPopular.bind(this)}}}/>
                </div>
                

        </div> );
    }
}
 
export default Leaderboards;